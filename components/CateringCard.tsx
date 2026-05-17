"use client";

import CelebrationRoundedIcon from "@mui/icons-material/CelebrationRounded";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { cateringServices } from "@/lib";
import { FloatingCoverImage } from "./FloatingCoverImage";

export function CateringCard({
  service,
  index,
}: {
  service: (typeof cateringServices)[number];
  index: number;
}) {
  return (
    <Card
      component={motion.article}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.06, 0.24) }}
      sx={{
        bgcolor: "rgba(255,252,245,0.92)",
        border: "1px solid rgba(62,39,35,0.1)",
        boxShadow: "0 24px 70px rgba(62,39,35,0.08)",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <Box sx={{ aspectRatio: "1.35", overflow: "hidden", position: "relative" }}>
        <FloatingCoverImage
          alt={service.title}
          sizes="(max-width: 800px) 100vw, 33vw"
          src={service.image}
          delay={index * 0.16}
        />
      </Box>
      <CardContent sx={{ p: 3 }}>
        <CelebrationRoundedIcon sx={{ color: "warning.main", mb: 1 }} />
        <Typography variant="h5" component="h3" sx={{ color: "primary.main" }}>
          {service.title}
        </Typography>
        <Typography sx={{ color: "text.secondary", lineHeight: 1.75, mt: 1 }}>
          {service.copy}
        </Typography>
      </CardContent>
    </Card>
  );
}
