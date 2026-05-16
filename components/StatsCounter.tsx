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
      style={{ display: "block" }}
      sx={{
        color: "primary.main",
        fontFamily: "var(--font-heading)",
        fontSize: { xs: "2.6rem", md: "4rem" },
        fontWeight: 800,
        lineHeight: 1,
      }}
    >
      {count.toLocaleString("en-IN")}
      {suffix}
    </Typography>
  );
}

export function StatsCounter() {
  return (
    <Grid container spacing={2.5}>
      {stats.map((stat) => (
        <Grid key={stat.label} size={{ xs: 6, md: 3 }}>
          <Box
            component={motion.div}
            whilehover={{ y: -6 }}
            sx={{
              bgcolor: "rgba(255,252,245,0.88)",
              border: "1px solid rgba(62,39,35,0.1)",
              borderRadius: 2,
              boxShadow: "0 24px 70px rgba(62,39,35,0.08)",
              height: "100%",
              p: { xs: 2.5, md: 3.5 },
            }}
          >
            <CounterNumber value={stat.value} suffix={stat.suffix} />
            <Typography sx={{ color: "text.secondary", fontWeight: 800, mt: 1 }}>
              {stat.label}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
