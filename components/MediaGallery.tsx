"use client";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { Box, Dialog, IconButton, Tab, Tabs, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────
// Replace src / thumbnail / videoSrc with your real asset paths.
// height is only used for Kitchen Photos (masonry). Videos are always 16:9.

const kitchenPhotos = [
  { id: "kp1", title: "Prep Station",      category: "Kitchen", src: "/images/kitchen/prep-station.jpg",  height: 420 },
  { id: "kp2", title: "Live Flame Grills", category: "Kitchen", src: "/images/kitchen/grills.jpg",        height: 340 },
  { id: "kp3", title: "Cold Storage Wall", category: "Kitchen", src: "/images/kitchen/cold-storage.jpg",  height: 380 },
  { id: "kp4", title: "Plating Counter",   category: "Kitchen", src: "/images/kitchen/plating.jpg",       height: 300 },
  { id: "kp5", title: "Spice Library",     category: "Kitchen", src: "/images/kitchen/spices.jpg",        height: 460 },
  { id: "kp6", title: "Packing Zone",      category: "Kitchen", src: "/images/kitchen/packing.jpg",       height: 360 },
];

const clientVideos = [
  { id: "cv1", title: "Priya's Birthday Feast",      category: "Client Story", thumbnail: "/images/clients/priya-thumb.jpg",   videoSrc: "https://www.youtube.com/embed/REPLACE_ID_1" },
  { id: "cv2", title: "Raj & Ananya's Wedding",       category: "Client Story", thumbnail: "/images/clients/wedding-thumb.jpg", videoSrc: "https://www.youtube.com/embed/REPLACE_ID_2" },
  { id: "cv3", title: "Tech Summit Catering",         category: "Client Story", thumbnail: "/images/clients/summit-thumb.jpg",  videoSrc: "https://www.youtube.com/embed/REPLACE_ID_3" },
  { id: "cv4", title: "Meena's Home Delivery Review", category: "Client Story", thumbnail: "/images/clients/meena-thumb.jpg",   videoSrc: "https://www.youtube.com/embed/REPLACE_ID_4" },
];

const prepVideos = [
  { id: "pv1", title: "Biryani Dum Process",   category: "Behind the Scenes", thumbnail: "/images/prep/biryani-thumb.jpg",   videoSrc: "https://www.youtube.com/embed/REPLACE_ID_5" },
  { id: "pv2", title: "Corporate Lunch Prep",  category: "Behind the Scenes", thumbnail: "/images/prep/corporate-thumb.jpg", videoSrc: "https://www.youtube.com/embed/REPLACE_ID_6" },
  { id: "pv3", title: "Wedding Banquet Setup", category: "Behind the Scenes", thumbnail: "/images/prep/banquet-thumb.jpg",   videoSrc: "https://www.youtube.com/embed/REPLACE_ID_7" },
  { id: "pv4", title: "Dessert Station Magic", category: "Behind the Scenes", thumbnail: "/images/prep/dessert-thumb.jpg",   videoSrc: "https://www.youtube.com/embed/REPLACE_ID_8" },
];

// ─── Types ────────────────────────────────────────────────────────────────────
type PhotoItem = (typeof kitchenPhotos)[number];
type VideoItem = (typeof clientVideos)[number];

// ─── Shared: Card label ───────────────────────────────────────────────────────
function CardLabel({ category, title }: { category: string; title: string }) {
  return (
    <Box sx={{ bottom: 18, left: 18, position: "absolute", right: 18, zIndex: 2 }}>
      <Typography
        sx={{
          color: "warning.main",
          fontSize: 10,
          fontWeight: 900,
          letterSpacing: 1.8,
          mb: 0.3,
          textTransform: "uppercase",
        }}
      >
        {category}
      </Typography>
      <Typography
        sx={{ color: "#fff", fontSize: { xs: 15, md: 17 }, fontWeight: 700, lineHeight: 1.25 }}
      >
        {title}
      </Typography>
    </Box>
  );
}

// ─── Shared: gradient overlay ─────────────────────────────────────────────────
function DarkGradient({ light = false }: { light?: boolean }) {
  return (
    <Box
      sx={{
        background: light
          ? "linear-gradient(180deg, transparent 42%, rgba(32,14,10,0.75))"
          : "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(28,12,8,0.84) 100%)",
        inset: 0,
        position: "absolute",
        zIndex: 1,
      }}
    />
  );
}

// ─── Shared: close button ─────────────────────────────────────────────────────
function CloseBtn({ onClick }: { onClick: () => void }) {
  return (
    <IconButton
      aria-label="Close"
      onClick={onClick}
      sx={{
        bgcolor: "rgba(255,248,237,0.93)",
        color: "primary.main",
        position: "absolute",
        right: 14,
        top: 14,
        zIndex: 10,
        "&:hover": { bgcolor: "warning.main", color: "#fff" },
      }}
    >
      <CloseRoundedIcon />
    </IconButton>
  );
}

// ─── Kitchen Photo Card (masonry, variable height) ────────────────────────────
function PhotoCard({ item, index, onClick }: { item: PhotoItem; index: number; onClick: () => void }) {
  return (
    <Box
      component={motion.button}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.48, delay: Math.min(index * 0.06, 0.26) }}
      onClick={onClick}
      sx={{
        appearance: "none",
        bgcolor: "transparent",
        border: 0,
        breakInside: "avoid",
        cursor: "pointer",
        display: "block",
        mb: "20px",
        p: 0,
        textAlign: "left",
        width: "100%",
        "&:hover .card-img": { transform: "scale(1.06)" },
      }}
    >
      <Box
        sx={{
          borderRadius: "12px",
          boxShadow: "0 6px 36px rgba(62,39,35,0.13)",
          height: item.height,
          maxHeight: { xs: 360, md: item.height },
          minHeight: 240,
          overflow: "hidden",
          position: "relative",
          // Fallback bg when image is missing
          bgcolor: "rgba(62,39,35,0.08)",
        }}
      >
        <Image
          className="card-img"
          alt={item.title}
          fill
          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
          src={item.src}
          style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
        />
        <DarkGradient light />
        <CardLabel category={item.category} title={item.title} />
      </Box>
    </Box>
  );
}

// ─── Video Card (strict 16:9, uniform CSS grid) ───────────────────────────────
function VideoCard({ item, index, onClick }: { item: VideoItem; index: number; onClick: () => void }) {
  return (
    <Box
      component={motion.button}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.48, delay: Math.min(index * 0.07, 0.26) }}
      onClick={onClick}
      sx={{
        appearance: "none",
        bgcolor: "transparent",
        border: 0,
        cursor: "pointer",
        p: 0,
        textAlign: "left",
        width: "100%",
        "&:hover .card-img":   { transform: "scale(1.05)" },
        "&:hover .play-ring":  { transform: "scale(1.12)", bgcolor: "rgba(255,255,255,0.22)" },
      }}
    >
      {/* aspectRatio enforces uniform 16:9 — no gaps, no uneven heights */}
      <Box
        sx={{
          aspectRatio: "16 / 9",
          bgcolor: "rgba(62,39,35,0.10)", // fallback when thumbnail missing
          borderRadius: "12px",
          boxShadow: "0 6px 36px rgba(62,39,35,0.14)",
          overflow: "hidden",
          position: "relative",
          width: "100%",
        }}
      >
        <Image
          className="card-img"
          alt={item.title}
          fill
          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
          src={item.thumbnail}
          style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
        />

        <DarkGradient />

        {/* Play button — centred, glassmorphism ring */}
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            inset: 0,
            justifyContent: "center",
            position: "absolute",
            zIndex: 2,
          }}
        >
          <Box
            className="play-ring"
            sx={{
              alignItems: "center",
              backdropFilter: "blur(6px)",
              bgcolor: "rgba(255,255,255,0.14)",
              border: "2px solid rgba(255,255,255,0.52)",
              borderRadius: "50%",
              display: "flex",
              height: 58,
              justifyContent: "center",
              transition: "transform 0.26s ease, background-color 0.26s ease",
              width: 58,
            }}
          >
            <PlayArrowRoundedIcon
              sx={{ color: "#fff", fontSize: 32, ml: "3px" }}
            />
          </Box>
        </Box>

        <CardLabel category={item.category} title={item.title} />
      </Box>
    </Box>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export function MediaGallery({ preview = false }: { preview?: boolean }) {
  const [tab, setTab] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const photos  = preview ? kitchenPhotos.slice(0, 4) : kitchenPhotos;
  const clients = preview ? clientVideos.slice(0, 4)  : clientVideos;
  const prep    = preview ? prepVideos.slice(0, 4)    : prepVideos;

  return (
    <Box>
      {/* ── Tabs ── */}
      <Tabs
        value={tab}
        onChange={(_, v) => setTab(v)}
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          mb: { xs: 3, md: 4 },
          "& .MuiTabs-indicator": { borderRadius: 2, height: 3 },
          "& .MuiTab-root": {
            fontSize: { xs: 13, sm: 15 },
            fontWeight: 700,
            letterSpacing: 0.3,
            minHeight: 48,
            px: { xs: 2, sm: 3 },
            textTransform: "none",
          },
        }}
      >
        <Tab label="📸  Kitchen Photos" />
        <Tab label="🎥  Client Stories" />
        <Tab label="🍳  Prep Videos"    />
      </Tabs>

      <AnimatePresence mode="wait">

        {/* ── Tab 0: Kitchen Photos — masonry ── */}
        {tab === 0 && (
          <motion.div
            key="photos"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
          >
            <Box sx={{ columnCount: { xs: 1, sm: 2, lg: 3 }, columnGap: "20px" }}>
              {photos.map((item, i) => (
                <PhotoCard key={item.id} item={item} index={i} onClick={() => setSelectedPhoto(item)} />
              ))}
            </Box>
          </motion.div>
        )}

        {/* ── Tab 1: Client Stories — uniform CSS grid, no gaps ── */}
        {tab === 1 && (
          <motion.div
            key="clients"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
          >
            <Box
              sx={{
                display: "grid",
                gap: "20px",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "1fr 1fr 1fr" },
              }}
            >
              {clients.map((item, i) => (
                <VideoCard key={item.id} item={item} index={i} onClick={() => setSelectedVideo(item)} />
              ))}
            </Box>
          </motion.div>
        )}

        {/* ── Tab 2: Prep Videos — same uniform CSS grid ── */}
        {tab === 2 && (
          <motion.div
            key="prep"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
          >
            <Box
              sx={{
                display: "grid",
                gap: "20px",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "1fr 1fr 1fr" },
              }}
            >
              {prep.map((item, i) => (
                <VideoCard key={item.id} item={item} index={i} onClick={() => setSelectedVideo(item)} />
              ))}
            </Box>
          </motion.div>
        )}

      </AnimatePresence>

      {/* ── Lightbox: Photo ── */}
      <Dialog
        fullWidth
        maxWidth="lg"
        open={Boolean(selectedPhoto)}
        onClose={() => setSelectedPhoto(null)}
        slotProps={{ paper: { sx: { bgcolor: "transparent", boxShadow: "none", overflow: "visible" } } }}
      >
        {selectedPhoto && (
          <Box sx={{ borderRadius: "12px", height: { xs: "70vh", md: "84vh" }, overflow: "hidden", position: "relative" }}>
            <CloseBtn onClick={() => setSelectedPhoto(null)} />
            <Image
              alt={selectedPhoto.title}
              fill
              priority
              sizes="90vw"
              src={selectedPhoto.src}
              style={{ objectFit: "cover" }}
            />
            <Box sx={{ background: "linear-gradient(180deg, transparent 52%, rgba(20,8,4,0.9))", inset: 0, position: "absolute" }} />
            <Box sx={{ bottom: 28, color: "#fff", left: 28, position: "absolute", zIndex: 2 }}>
              <Typography sx={{ color: "warning.main", fontSize: 10, fontWeight: 900, letterSpacing: 2, mb: 0.5, textTransform: "uppercase" }}>
                {selectedPhoto.category}
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>{selectedPhoto.title}</Typography>
            </Box>
          </Box>
        )}
      </Dialog>

      {/* ── Lightbox: Video ── */}
      <Dialog
        fullWidth
        maxWidth="lg"
        open={Boolean(selectedVideo)}
        onClose={() => setSelectedVideo(null)}
        slotProps={{ paper: { sx: { bgcolor: "transparent", boxShadow: "none", overflow: "visible" } } }}
      >
        {selectedVideo && (
          <Box sx={{ borderRadius: "12px", overflow: "hidden", position: "relative" }}>
            <CloseBtn onClick={() => setSelectedVideo(null)} />
            <Box sx={{ aspectRatio: "16 / 9", width: "100%" }}>
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                src={selectedVideo.videoSrc}
                style={{ border: 0, display: "block", height: "100%", width: "100%" }}
                title={selectedVideo.title}
              />
            </Box>
            <Box sx={{ bgcolor: "rgba(22,10,6,0.97)", color: "#fff", px: 3, py: 2 }}>
              <Typography sx={{ color: "warning.main", fontSize: 10, fontWeight: 900, letterSpacing: 2, mb: 0.3, textTransform: "uppercase" }}>
                {selectedVideo.category}
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 700 }}>{selectedVideo.title}</Typography>
            </Box>
          </Box>
        )}
      </Dialog>
    </Box>
  );
}
