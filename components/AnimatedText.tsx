"use client";

import { Typography } from "@mui/material";
import type { SxProps, Theme, TypographyProps } from "@mui/material";
import { motion } from "framer-motion";

type AnimatedTextProps = {
  component?: TypographyProps["component"];
  immediate?: boolean;
  sx?: SxProps<Theme>;
  text: string;
  variant?: TypographyProps["variant"];
};

export function AnimatedText({
  component = "h2",
  immediate = false,
  sx,
  text,
  variant = "h2",
}: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <Typography
      aria-label={text}
      component={component}
      variant={variant}
      sx={sx}
    >
      {words.map((word, index) => (
        <motion.span
          aria-hidden="true"
          initial={immediate ? { opacity: 0, y: 36, filter: "blur(10px)" } : undefined}
          animate={immediate ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined}
          whileInView={!immediate ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined}
          viewport={{ once: true, amount: 0.7 }}
          transition={{
            delay: index * 0.045,
            duration: 0.68,
            ease: [0.22, 1, 0.36, 1],
          }}
          key={`${word}-${index}`}
          style={{
            display: "inline-block",
            marginRight: "0.24em",
            opacity: immediate ? undefined : 0,
            transform: immediate ? undefined : "translateY(28px)",
          }}
        >
          {word}
        </motion.span>
      ))}
    </Typography>
  );
}
