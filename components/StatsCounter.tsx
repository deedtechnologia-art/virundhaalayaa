"use client";

import { Box, Grid, Typography } from "@mui/material";
import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib";

function CounterNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2.2,
      ease: "easeOut",
      onUpdate: (latest) => setCount(Math.round(latest)),
    });
    return controls.stop;
  }, [inView, value]);

  return (
    <Typography
      ref={ref}
      component={motion.span}
      sx={{
        color: "primary.main",
        display: "block",
        fontFamily: "var(--font-heading)",
        fontSize: {
          xs: "clamp(1.5rem, 7.2vw, 2.2rem)",
          sm: "2.45rem",
          md: "3.25rem",
          lg: "4rem",
        },
        fontWeight: 800,
        letterSpacing: 0,
        lineHeight: 1,
        maxWidth: "100%",
        minWidth: 0,
        overflow: "hidden",
        textAlign: "center",
        textOverflow: "clip",
        whiteSpace: "nowrap",
      }}
    >
      {count.toLocaleString("en-IN")}
      {suffix}
    </Typography>
  );
}

export function StatsCounter() {
  return (
    <Grid container spacing={{ xs: 1.4, sm: 2, md: 2.5 }}>
      {stats.map((stat) => (
        <Grid key={stat.label} size={{ xs: 6, md: 3 }}>
          <Box
            component={motion.div}
            whileHover={{ y: -6 }}
            sx={{
              alignItems: "center",
              background:
                "linear-gradient(145deg, rgba(255,252,245,0.94), rgba(250,244,232,0.88))",
              border: "1px solid rgba(62,39,35,0.1)",
              borderRadius: { xs: "18px", md: 2 },
              boxShadow: {
                xs: "0 14px 34px rgba(62,39,35,0.07)",
                md: "0 24px 70px rgba(62,39,35,0.08)",
              },
              display: "flex",
              flexDirection: "column",
              height: "100%",
              justifyContent: "center",
              minHeight: { xs: 124, sm: 142, md: 170 },
              minWidth: 0,
              overflow: "hidden",
              p: { xs: 1.45, sm: 2, md: 3.5 },
              textAlign: "center",
            }}
          >
            <CounterNumber value={stat.value} suffix={stat.suffix} />
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: { xs: "0.76rem", sm: "0.88rem", md: "1rem" },
                fontWeight: 800,
                lineHeight: 1.35,
                mt: { xs: 0.9, md: 1 },
                px: { xs: 0.2, md: 0 },
              }}
            >
              {stat.label}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
