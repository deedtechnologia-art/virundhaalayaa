"use client";

import PlayCircleRoundedIcon from "@mui/icons-material/PlayCircleRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { Avatar, Box, Card, Grid, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { testimonials } from "@/lib";

export function TestimonialCards({ carousel = false }: { carousel?: boolean }) {
  return (
    <Box
      sx={{
        display: carousel ? "grid" : "block",
        gridAutoColumns: { xs: "88%", md: "minmax(360px, 1fr)" },
        gridAutoFlow: carousel ? "column" : "unset",
        gap: 3,
        overflowX: carousel ? "auto" : "visible",
        pb: carousel ? 2 : 0,
        scrollSnapType: carousel ? "x mandatory" : "none",
      }}
    >
      {carousel ? (
        testimonials.map((item, index) => <ReviewCard item={item} key={item.name} index={index} />)
      ) : (
        <Grid container spacing={3}>
          {testimonials.map((item, index) => (
            <Grid key={item.name} size={{ xs: 12, md: 6 }}>
              <ReviewCard item={item} index={index} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

function ReviewCard({
  item,
  index,
}: {
  item: (typeof testimonials)[number];
  index: number;
}) {
  return (
    <Card
      component={motion.figure}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      whilehover={{ y: -7 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.08, 0.28) }}
      sx={{
        bgcolor: "rgba(255,252,245,0.92)",
        border: "1px solid rgba(62,39,35,0.1)",
        boxShadow: "0 24px 70px rgba(62,39,35,0.08)",
        height: "100%",
        m: 0,
        p: { xs: 3, md: 4 },
        scrollSnapAlign: "start",
      }}
    >
      <Stack direction="row" spacing={0.25} sx={{ color: "warning.main", mb: 2 }}>
        {Array.from({ length: item.rating }).map((_, starIndex) => (
          <StarRoundedIcon key={starIndex} fontSize="small" />
        ))}
      </Stack>
      <Typography component="blockquote" sx={{ color: "text.primary", fontSize: "1.08rem", lineHeight: 1.85, m: 0 }}>
        &ldquo;{item.quote}&rdquo;
      </Typography>
      <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", borderTop: "1px solid rgba(62,39,35,0.1)", mt: 3, pt: 2.5 }}>
        <Avatar alt={item.name} src={item.image} sx={{ height: 52, width: 52 }} />
        <Box>
          <Typography variant="h6" sx={{ color: "primary.main", lineHeight: 1.1 }}>
            {item.name}
          </Typography>
          <Typography sx={{ color: "text.secondary", fontSize: 14 }}>{item.role}</Typography>
        </Box>
      </Stack>
    </Card>
  );
}

export function VideoTestimonials() {
  return (
    <Grid container spacing={3}>
      {["Wedding feast memory", "Office lunch review", "Family pooja catering"].map((title) => (
        <Grid key={title} size={{ xs: 12, md: 4 }}>
          <Box
            component={motion.div}
            whilehover={{ y: -6 }}
            sx={{
              alignItems: "center",
              background:
                "linear-gradient(135deg, rgba(122,31,31,0.84), rgba(42,23,20,0.88)), url(https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=900&q=85)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: 2,
              boxShadow: "0 24px 70px rgba(62,39,35,0.12)",
              color: "background.default",
              display: "flex",
              minHeight: 260,
              p: 3,
              position: "relative",
            }}
          >
            <Stack spacing={1.5}>
              <PlayCircleRoundedIcon sx={{ color: "warning.main", fontSize: 58 }} />
              <Typography variant="h5">{title}</Typography>
              <Typography sx={{ color: "rgba(255,248,237,0.74)" }}>Video testimonial placeholder</Typography>
            </Stack>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
