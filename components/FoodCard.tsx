"use client";

import LocalDiningRoundedIcon from "@mui/icons-material/LocalDiningRounded";
import { Box, Card, CardContent, Chip, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import type { MenuItem } from "@/lib";
import { FloatingCoverImage } from "./FloatingCoverImage";

export function FoodCard({ item, compact = false }: { item: MenuItem; compact?: boolean }) {
  const isVeg = item.kind === "Veg";
  const hasImage = Boolean(item.image);

  return (
    <Card
      component={motion.article}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      sx={{
        display: "flex",
        flexDirection: { xs: compact ? "row" : "column", sm: "column" },
        bgcolor: "rgba(255,252,245,0.9)",
        border: "1px solid rgba(62,39,35,0.1)",
        boxShadow: "0 12px 34px rgba(62,39,35,0.06)",
        height: "100%",
        overflow: "hidden",
        position: "relative",
        "&:hover .food-image": {
          transform: "scale(1.05)",
        },
        "&:hover": {
          boxShadow: "0 24px 60px rgba(122,31,31,0.12)",
        },
      }}
    >
      <Box
        sx={{
          width: { xs: compact ? 110 : "100%", sm: "100%" },
          height: { xs: compact ? "auto" : "auto", sm: "auto" },
          aspectRatio: { xs: compact ? "1" : "1.12", sm: compact ? "1.35" : "1.12" },
          flexShrink: 0,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box className="food-image" sx={{ inset: 0, position: "absolute", transition: "transform 520ms ease" }}>
          {hasImage ? (
            <FloatingCoverImage
              alt={item.name}
              sizes="(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 33vw"
              src={item.image}
            />
          ) : (
            <Box
              sx={{
                width: "100%",
                height: "100%",
                background: "linear-gradient(135deg, rgba(212,160,23,0.15) 0%, rgba(122,31,31,0.08) 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <LocalDiningRoundedIcon sx={{ color: "rgba(122,31,31,0.2)", fontSize: 40 }} />
            </Box>
          )}
        </Box>
        
        {/* Overlay gradient only when stacked or has image */}
        <Box
          sx={{
            background: "linear-gradient(180deg, transparent 50%, rgba(42,23,20,0.6))",
            inset: 0,
            position: "absolute",
            display: { xs: compact ? "none" : "block", sm: "block" },
          }}
        />

        {/* Category Chip over image (hidden on compact mobile) */}
        <Chip
          icon={<LocalDiningRoundedIcon />}
          label={item.category}
          size="small"
          sx={{
            display: { xs: compact ? "none" : "flex", sm: "flex" },
            bgcolor: "rgba(255,248,237,0.92)",
            color: "primary.main",
            fontWeight: 800,
            left: 12,
            position: "absolute",
            top: 12,
            backdropFilter: "blur(4px)",
          }}
        />
      </Box>

      <CardContent
        sx={{
          p: { xs: compact ? 2 : 2.5, md: 3 },
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Stack direction="row" sx={{ alignItems: "flex-start", justifyContent: "space-between", gap: 1 }}>
          <Typography
            variant="h5"
            component="h3"
            sx={{
              color: "primary.main",
              fontSize: { xs: compact ? "1.15rem" : "1.35rem", sm: "1.35rem" },
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            {item.name}
          </Typography>
          {item.price ? (
            <Typography sx={{ color: "secondary.main", fontWeight: 900 }}>{item.price}</Typography>
          ) : null}
        </Stack>

        <Typography
          sx={{
            color: "text.secondary",
            lineHeight: 1.5,
            fontSize: { xs: compact ? "0.85rem" : "1rem", sm: "1rem" },
            mt: 1,
            display: "-webkit-box",
            WebkitLineClamp: compact ? 2 : "none",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            minHeight: { sm: compact ? 0 : 56 },
          }}
        >
          {item.description}
        </Typography>

        <Stack direction="row" alignItems="center" gap={1} sx={{ mt: compact ? 1.5 : 2 }}>
          <Chip
            label={item.kind}
            size="small"
            sx={{
              height: { xs: compact ? 22 : 24, sm: 24 },
              fontSize: { xs: compact ? "0.7rem" : "0.75rem", sm: "0.75rem" },
              bgcolor: isVeg ? "rgba(79,119,45,0.12)" : "rgba(122,31,31,0.1)",
              border: `1px solid ${isVeg ? "rgba(79,119,45,0.28)" : "rgba(122,31,31,0.2)"}`,
              color: isVeg ? "secondary.main" : "primary.main",
              fontWeight: 800,
            }}
          />
          {compact && (
             <Typography sx={{ display: { xs: "block", sm: "none" }, fontSize: "0.7rem", color: "text.secondary", fontWeight: 600 }}>
               • {item.category}
             </Typography>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}
