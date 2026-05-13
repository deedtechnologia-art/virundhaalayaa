"use client";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Box, Dialog, IconButton, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { galleryImages } from "@/lib";
import { FloatingCoverImage } from "./FloatingCoverImage";

type GalleryItem = (typeof galleryImages)[number];

export function GalleryGrid({ preview = false }: { preview?: boolean }) {
  const items = preview ? galleryImages.slice(0, 6) : galleryImages;
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  return (
    <>
      <Box
        sx={{
          columnCount: { xs: 1, sm: 2, lg: 3 },
          columnGap: 24,
        }}
      >
        {items.map((item, index) => (
          <Box
            key={item.title}
            component={motion.button}
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.55, delay: Math.min(index * 0.04, 0.22) }}
            onClick={() => setSelected(item)}
            sx={{
              appearance: "none",
              bgcolor: "transparent",
              border: 0,
              breakInside: "avoid",
              cursor: "pointer",
              mb: 3,
              p: 0,
              textAlign: "left",
              width: "100%",
            }}
          >
            <Box
              sx={{
                borderRadius: 2,
                boxShadow: "0 24px 70px rgba(62,39,35,0.12)",
                height: item.height,
                maxHeight: { xs: 460, md: item.height },
                minHeight: 320,
                overflow: "hidden",
                position: "relative",
                "&:hover img": {
                  transform: "scale(1.08)",
                },
              }}
            >
              <FloatingCoverImage
                alt={item.title}
                sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                src={item.image}
                delay={index * 0.12}
              />
              <Box
                sx={{
                  background: "linear-gradient(180deg, transparent 45%, rgba(42,23,20,0.82))",
                  inset: 0,
                  position: "absolute",
                }}
              />
              <Box sx={{ bottom: 22, color: "background.default", left: 22, position: "absolute", right: 22 }}>
                <Typography sx={{ color: "warning.main", fontSize: 12, fontWeight: 900, letterSpacing: 0, textTransform: "uppercase" }}>
                  {item.category}
                </Typography>
                <Typography variant="h5">{item.title}</Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      <Dialog
        fullWidth
        maxWidth="lg"
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
        slotProps={{
          paper: {
            sx: {
              bgcolor: "transparent",
              boxShadow: "none",
              overflow: "visible",
            },
          },
        }}
      >
        {selected ? (
          <Box sx={{ borderRadius: 2, height: { xs: "70vh", md: "82vh" }, overflow: "hidden", position: "relative" }}>
            <IconButton
              aria-label="Close gallery image"
              onClick={() => setSelected(null)}
              sx={{
                bgcolor: "rgba(255,248,237,0.92)",
                color: "primary.main",
                position: "absolute",
                right: 14,
                top: 14,
                zIndex: 2,
                "&:hover": { bgcolor: "warning.main" },
              }}
            >
              <CloseRoundedIcon />
            </IconButton>
            <Image
              alt={selected.title}
              fill
              priority
              sizes="90vw"
              src={selected.image}
              style={{ objectFit: "cover" }}
            />
          </Box>
        ) : null}
      </Dialog>
    </>
  );
}
