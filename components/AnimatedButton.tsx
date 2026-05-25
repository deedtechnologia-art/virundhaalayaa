"use client";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Button, ButtonProps } from "@mui/material";
import type { ElementType } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type AnimatedButtonProps = ButtonProps & {
  component?: ElementType;
  glow?: boolean;
  href?: string;
  rel?: string;
  target?: string;
  whatsapp?: boolean;
};

export function AnimatedButton({
  children,
  glow = false,
  rel,
  whatsapp = false,
  sx,
  target,
  href,
  ...props
}: AnimatedButtonProps) {
  const isExternal =
    href?.startsWith("http") ||
    href?.startsWith("mailto") ||
    href?.startsWith("tel");

  // Determine the right underlying element for the MUI Button
  const linkComponent: ElementType | undefined = href
    ? isExternal
      ? "a"
      : Link
    : undefined;

  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.015 }}
      whileTap={{ scale: 0.96 }}
      style={{ display: "inline-block" }}
    >
      <Button
        component={linkComponent as any}
        href={href}
        endIcon={whatsapp ? <WhatsAppIcon /> : <ArrowForwardRoundedIcon />}
        sx={{
          overflow: "hidden",
          position: "relative",
          boxShadow: glow ? "0 18px 42px rgba(122, 31, 31, 0.26)" : undefined,
          "&:before": {
            background:
              "linear-gradient(120deg, transparent, rgba(255,255,255,0.32), transparent)",
            content: '""',
            height: "100%",
            left: "-80%",
            position: "absolute",
            top: 0,
            transform: "skewX(-16deg)",
            transition: "left 520ms ease",
            width: "60%",
          },
          "&:hover:before": {
            left: "125%",
          },
          ...sx,
        }}
        rel={rel ?? (target === "_blank" ? "noreferrer noopener" : undefined)}
        target={target}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
}
