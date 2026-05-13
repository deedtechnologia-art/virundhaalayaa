"use client";

import { Box } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

type FloatingCoverImageProps = {
  alt: string;
  delay?: number;
  duration?: number;
  priority?: boolean;
  sizes: string;
  src: string;
};

export function FloatingCoverImage({
  alt,
  delay = 0,
  duration = 7.5,
  priority = false,
  sizes,
  src,
}: FloatingCoverImageProps) {
  return (
    <Box
      animate={{
        scale: [1.035, 1.055, 1.035],
        y: [0, -9, 0],
      }}
      component={motion.div}
      initial={false}
      transition={{
        delay,
        duration,
        ease: "easeInOut",
        repeat: Infinity,
      }}
      sx={{
        inset: "-3%",
        position: "absolute",
      }}
    >
      <Image
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        src={src}
        style={{ objectFit: "cover" }}
      />
    </Box>
  );
}
