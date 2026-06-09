"use client";

import { Box } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

type FloatingCoverImageProps = {
  alt: string;
  delay?: number;
  duration?: number;
  mobileObjectPosition?: string | Record<string, string>;
  mobileSrc?: string;
  objectPosition?: string | Record<string, string>;
  priority?: boolean;
  sizes: string;
  src: string;
};

type ImageLayerProps = {
  alt: string;
  delay: number;
  duration: number;
  objectPosition: string | Record<string, string>;
  priority: boolean;
  sizes: string;
  src: string;
  sx?: SxProps<Theme>;
};

function ImageLayer({
  alt,
  delay,
  duration,
  objectPosition,
  priority,
  sizes,
  src,
  sx,
}: ImageLayerProps) {
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
        "& img": {
          objectPosition,
        },
        ...sx,
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

export function FloatingCoverImage({
  alt,
  delay = 0,
  duration = 7.5,
  mobileObjectPosition = "center center",
  mobileSrc,
  objectPosition = "center",
  priority = false,
  sizes,
  src,
}: FloatingCoverImageProps) {
  if (!mobileSrc) {
    return (
      <ImageLayer
        alt={alt}
        delay={delay}
        duration={duration}
        objectPosition={objectPosition}
        priority={priority}
        sizes={sizes}
        src={src}
      />
    );
  }

  return (
    <>
      <ImageLayer
        alt={alt}
        delay={delay}
        duration={duration}
        objectPosition={mobileObjectPosition}
        priority={priority}
        sizes={sizes}
        src={mobileSrc}
        sx={{ display: { xs: "block", md: "none" } }}
      />
      <ImageLayer
        alt={alt}
        delay={delay}
        duration={duration}
        objectPosition={objectPosition}
        priority={priority}
        sizes={sizes}
        src={src}
        sx={{ display: { xs: "none", md: "block" } }}
      />
    </>
  );
}
