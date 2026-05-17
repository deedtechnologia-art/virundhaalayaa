"use client";

import PlayCircleRoundedIcon from "@mui/icons-material/PlayCircleRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { Avatar, Box, Container, Grid, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { testimonials } from "@/lib";
import { SectionReveal } from "./Motion";

type Testimonial = (typeof testimonials)[number];

const marqueeItems = [...testimonials, ...testimonials];

export function TestimonialCards({ carousel = false }: { carousel?: boolean }) {
  if (carousel) {
    return <PremiumTestimonials />;
  }

  return (
    <Grid container spacing={3}>
      {testimonials.map((item, index) => (
        <Grid key={item.name} size={{ xs: 12, md: 6 }}>
          <ReviewCard item={item} index={index} />
        </Grid>
      ))}
    </Grid>
  );
}

function PremiumTestimonials() {
  return (
    <Box
      component="section"
      className="section-tight"
      sx={{
        background:
          "radial-gradient(circle at 16% 8%, rgba(212,160,23,0.16), transparent 28%), linear-gradient(180deg, rgba(255,248,237,0.98), rgba(245,230,204,0.62))",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <SectionReveal
          sx={{
            mb: { xs: 3.5, md: 5 },
            mx: "auto",
            textAlign: "center",
          }}
        >
          <Typography className="eyebrow" component="p">
            Words From Our Guests
          </Typography>
          <Typography
            component="h2"
            variant="h2"
            sx={{
              color: "text.primary",
              fontSize: { xs: "2.25rem", sm: "3.1rem", md: "4.25rem" },
              mx: "auto",
              maxWidth: 900,
            }}
          >
            Stories shared over meals, celebrations, and everyday tables
          </Typography>
          <Box
            aria-hidden="true"
            sx={{
              background:
                "linear-gradient(90deg, transparent, rgba(212,160,23,0.95), transparent)",
              borderRadius: 1,
              height: 2,
              mt: { xs: 2.5, md: 3 },
              mx: "auto",
              width: { xs: 88, md: 132 },
            }}
          />
        </SectionReveal>
      </Container>

      <Box
        aria-label="Guest testimonials"
        sx={{
          overflow: "hidden",
          position: "relative",
          touchAction: "pan-y",
          "&::before, &::after": {
            content: '""',
            height: "100%",
            pointerEvents: "none",
            position: "absolute",
            top: 0,
            width: { xs: 28, md: 120 },
            zIndex: 2,
          },
          "&::before": {
            background:
              "linear-gradient(90deg, rgba(255,248,237,0.98), rgba(255,248,237,0))",
            left: 0,
          },
          "&::after": {
            background:
              "linear-gradient(270deg, rgba(255,248,237,0.98), rgba(255,248,237,0))",
            right: 0,
          },
          "&:hover .testimonial-track": {
            animationPlayState: "paused",
          },
          "@media (prefers-reduced-motion: reduce)": {
            "& .testimonial-track": {
              animation: "none",
              overflowX: "auto",
            },
          },
        }}
      >
        <Box
          className="testimonial-track"
          component={motion.div}
          drag="x"
          dragConstraints={{ left: -900, right: 0 }}
          dragElastic={0.08}
          sx={{
            "@keyframes testimonialMarquee": {
              "0%": { transform: "translate3d(0,0,0)" },
              "100%": { transform: "translate3d(-50%,0,0)" },
            },
            animation: "testimonialMarquee 42s linear infinite",
            cursor: { xs: "grab", md: "default" },
            display: "flex",
            gap: { xs: 2, md: 3 },
            pl: { xs: 3, md: 6, lg: 8 },
            pr: { xs: 3, md: 6, lg: 8 },
            width: "max-content",
            willChange: "transform",
            "&:active": { cursor: "grabbing" },
          }}
        >
          {marqueeItems.map((item, index) => (
            <ReviewCard
              item={item}
              index={index}
              key={`${item.name}-${index}`}
              marquee
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function ReviewCard({
  item,
  index,
  marquee = false,
}: {
  item: Testimonial;
  index: number;
  marquee?: boolean;
}) {
  return (
    <Box
      component={motion.figure}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.012 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.04, 0.18) }}
      sx={{
        backdropFilter: "blur(18px)",
        background:
          "linear-gradient(145deg, rgba(255,252,245,0.88), rgba(255,248,237,0.72))",
        border: "1px solid rgba(255,255,255,0.58)",
        borderRadius: { xs: "24px", md: "28px" },
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.7), 0 24px 70px rgba(62,39,35,0.1)",
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
        height: marquee ? { xs: 360, sm: 350, md: 374 } : "100%",
        justifyContent: "space-between",
        m: 0,
        overflow: "hidden",
        p: { xs: 2.4, sm: 3, md: 3.6 },
        position: "relative",
        transition: "box-shadow 260ms ease, border-color 260ms ease",
        width: marquee
          ? { xs: "calc(100vw - 48px)", sm: 360, md: 410, lg: 430 }
          : "100%",
        "&:hover": {
          borderColor: "rgba(212,160,23,0.28)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.8), 0 30px 84px rgba(122,31,31,0.14)",
        },
        "&::before": {
          background:
            "radial-gradient(circle at 14% 0%, rgba(212,160,23,0.18), transparent 34%)",
          content: '""',
          inset: 0,
          pointerEvents: "none",
          position: "absolute",
        },
      }}
    >
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Stack
          aria-label={`${item.rating} star rating`}
          direction="row"
          spacing={0.25}
          sx={{ color: "warning.main", mb: { xs: 1.8, md: 2.2 } }}
        >
          {Array.from({ length: 5 }).map((_, starIndex) => (
            <StarRoundedIcon
              key={starIndex}
              sx={{
                fontSize: { xs: 18, md: 20 },
                opacity: starIndex < item.rating ? 1 : 0.28,
              }}
            />
          ))}
        </Stack>
        <Typography
          component="blockquote"
          sx={{
            color: "text.primary",
            fontSize: { xs: "1rem", md: "1.08rem" },
            lineHeight: { xs: 1.75, md: 1.85 },
            m: 0,
          }}
        >
          &ldquo;{item.quote}&rdquo;
        </Typography>
      </Box>

      <Stack
        direction="row"
        spacing={1.5}
        sx={{
          alignItems: "center",
          borderTop: "1px solid rgba(62,39,35,0.1)",
          mt: { xs: 2.4, md: 3 },
          pt: { xs: 2, md: 2.4 },
          position: "relative",
          zIndex: 1,
        }}
      >
        <Avatar
          alt={item.name}
          src={item.image}
          sx={{
            border: "2px solid rgba(255,248,237,0.9)",
            boxShadow: "0 10px 26px rgba(62,39,35,0.14)",
            height: { xs: 48, md: 54 },
            width: { xs: 48, md: 54 },
          }}
        />
        <Box sx={{ minWidth: 0 }}>
          <Typography
            variant="h6"
            sx={{
              color: "primary.main",
              fontSize: { xs: "1.12rem", md: "1.25rem" },
              lineHeight: 1.1,
            }}
          >
            {item.name}
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: { xs: "0.84rem", md: "0.9rem" },
              fontWeight: 600,
              mt: 0.35,
            }}
          >
            {item.role}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export function VideoTestimonials() {
  return (
    <Grid container spacing={3}>
      {["Wedding feast memory", "Office lunch review", "Family pooja catering"].map((title) => (
        <Grid key={title} size={{ xs: 12, md: 4 }}>
          <Box
            component={motion.div}
            whileHover={{ y: -6 }}
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
              <Typography sx={{ color: "rgba(255,248,237,0.74)" }}>
                Video testimonial placeholder
              </Typography>
            </Stack>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
