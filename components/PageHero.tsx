"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { AnimatedButton } from "./AnimatedButton";
import { AnimatedText } from "./AnimatedText";
import { FloatingCoverImage } from "./FloatingCoverImage";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  imageAlt?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function PageHero({
  eyebrow,
  title,
  copy,
  image,
  imageAlt,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: PageHeroProps) {
  return (
    <Box
      component="section"
      sx={{
        minHeight: { xs: 520, md: 620 },
        overflow: "hidden",
        position: "relative",
      }}
    >
      <FloatingCoverImage
        alt={imageAlt ?? title}
        priority
        sizes="100vw"
        src={image}
      />
      <Box
        sx={{
          background:
            "linear-gradient(90deg, rgba(42,23,20,0.82), rgba(42,23,20,0.46), rgba(42,23,20,0.18))",
          inset: 0,
          position: "absolute",
        }}
      />
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          minHeight: { xs: 520, md: 620 },
          position: "relative",
        }}
      >
        <Stack
          component={motion.div}
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          spacing={2.5}
          sx={{
            alignSelf: "center",
            color: "background.default",
            maxWidth: 820,
            py: { xs: 8, md: 10 },
          }}
        >
          <Typography className="eyebrow" sx={{ color: "warning.main" }}>
            {eyebrow}
          </Typography>
          <AnimatedText
            variant="h1"
            component="h1"
            immediate
            text={title}
            sx={{
              fontSize: { xs: "2.6rem", md: "4rem" },
              maxWidth: 860,
            }}
          />
          <Typography sx={{ color: "rgba(255,248,237,0.82)", fontSize: { xs: "1rem", md: "1.2rem" }, lineHeight: 1.85, maxWidth: 680 }}>
            {copy}
          </Typography>
          {primaryLabel || secondaryLabel ? (
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 1 }}>
              {primaryLabel && primaryHref ? (
                <AnimatedButton href={primaryHref} variant="contained" glow>
                  {primaryLabel}
                </AnimatedButton>
              ) : null}
              {secondaryLabel && secondaryHref ? (
                <AnimatedButton
                  href={secondaryHref}
                  variant="outlined"
                  sx={{
                    borderColor: "rgba(255,248,237,0.42)",
                    color: "background.default",
                    "&:hover": {
                      bgcolor: "rgba(255,248,237,0.1)",
                      borderColor: "warning.main",
                    },
                  }}
                >
                  {secondaryLabel}
                </AnimatedButton>
              ) : null}
            </Stack>
          ) : null}
        </Stack>
      </Container>
    </Box>
  );
}
