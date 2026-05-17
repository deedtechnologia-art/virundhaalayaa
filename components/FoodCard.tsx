"use client";

import LocalDiningRoundedIcon from "@mui/icons-material/LocalDiningRounded";
import { Box, Card, CardContent, Chip, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import type { MenuItem } from "@/lib";
import { FloatingCoverImage } from "./FloatingCoverImage";

export function FoodCard({ item, compact = false }: { item: MenuItem; compact?: boolean }) {
  const isVeg = item.kind === "Veg";

  return (
    <Card
      component={motion.article}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      sx={{
        bgcolor: "rgba(255,252,245,0.9)",
        border: "1px solid rgba(62,39,35,0.1)",
        boxShadow: "0 24px 70px rgba(62,39,35,0.08)",
        height: "100%",
        overflow: "hidden",
        position: "relative",
        "&:hover .food-image": {
          transform: "scale(1.04)",
        },
        "&:hover": {
          boxShadow: "0 34px 90px rgba(122,31,31,0.16)",
        },
      }}
    >
      <Box sx={{ aspectRatio: compact ? "1.25" : "1.12", overflow: "hidden", position: "relative" }}>
        <Box className="food-image" sx={{ inset: 0, position: "absolute", transition: "transform 520ms ease" }}>
          <FloatingCoverImage
          alt={item.name}
          sizes="(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 33vw"
          src={item.image}
          />
        </Box>
        <Box
          sx={{
            background: "linear-gradient(180deg, transparent 40%, rgba(42,23,20,0.72))",
            inset: 0,
            position: "absolute",
          }}
        />
        <Chip
          icon={<LocalDiningRoundedIcon />}
          label={item.category}
          size="small"
          sx={{
            bgcolor: "rgba(255,248,237,0.92)",
            color: "primary.main",
            fontWeight: 800,
            left: 14,
            position: "absolute",
            top: 14,
          }}
        />
      </Box>
      <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
        <Stack direction="row" sx={{ alignItems: "flex-start", justifyContent: "space-between", gap: 2 }}>
          <Typography variant="h5" component="h3" sx={{ color: "primary.main", fontSize: "1.35rem" }}>
            {item.name}
          </Typography>
          {item.price ? (
            <Typography sx={{ color: "secondary.main", fontWeight: 900 }}>{item.price}</Typography>
          ) : null}
        </Stack>
        <Typography sx={{ color: "text.secondary", lineHeight: 1.7, minHeight: compact ? 0 : 56, mt: 1 }}>
          {item.description}
        </Typography>
        <Chip
          label={item.kind}
          size="small"
          sx={{
            bgcolor: isVeg ? "rgba(79,119,45,0.12)" : "rgba(122,31,31,0.1)",
            border: `1px solid ${isVeg ? "rgba(79,119,45,0.28)" : "rgba(122,31,31,0.2)"}`,
            color: isVeg ? "secondary.main" : "primary.main",
            fontWeight: 800,
            mt: 2,
          }}
        />
      </CardContent>
    </Card>
  );
}
