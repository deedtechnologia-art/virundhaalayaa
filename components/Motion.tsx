"use client";

import { Box } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";
import { motion, useScroll, useTransform } from "framer-motion";

export const MotionBox = motion(Box);

export function SectionReveal({
  children,
  delay = 0,
  sx,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  sx?: SxProps<Theme>;
}) {
  return (
    <MotionBox
      className={className}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay }}
      sx={sx}
    >
      {children}
    </MotionBox>
  );
}

export function ParallaxBox({
  children,
  strength = 80,
  sx,
}: {
  children: React.ReactNode;
  strength?: number;
  sx?: SxProps<Theme>;
}) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, strength]);

  return (
    <MotionBox style={{ y }} sx={sx}>
      {children}
    </MotionBox>
  );
}
