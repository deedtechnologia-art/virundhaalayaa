"use client";

import { Box, Button, Chip, Container, Typography } from "@mui/material";
import { ArrowRight, Clock3, Coffee, Flame, Moon, Sparkles, Sun, Sunrise } from "lucide-react";
import Link from "next/link";
import { MotionBox } from "./Motion";

const servingHours = [
  {
    meal: "Breakfast",
    start: "7:00 AM",
    end: "10:00 AM",
    note: "Morning tiffin",
    menuSlug: "breakfast-tiffin",
    Icon: Sunrise,
  },
  {
    meal: "Lunch",
    start: "12:00 PM",
    end: "3:00 PM",
    note: "Fresh saapadu",
    menuSlug: "lunch-dinner",
    Icon: Sun,
  },
  {
    meal: "Snacks",
    start: "4:00 PM",
    end: "6:00 PM",
    note: "Evening bites",
    menuSlug: "long-time-storable-items",
    Icon: Coffee,
  },
  {
    meal: "Dinner",
    start: "6:00 PM",
    end: "9:00 PM",
    note: "Evening comfort",
    menuSlug: "lunch-dinner",
    Icon: Moon,
  },
] as const;

function DigitalTime({ value }: { value: string }) {
  const [time, period] = value.split(" ");

  return (
    <Box
      sx={{
        alignItems: "baseline",
        background:
          "linear-gradient(180deg, rgba(55,26,22,0.98), rgba(122,31,31,0.92))",
        border: "1px solid rgba(212,160,23,0.28)",
        borderRadius: 1,
        boxShadow:
          "inset 0 1px 0 rgba(255,248,237,0.12), 0 8px 18px rgba(62,39,35,0.16)",
        color: "#FFE6A1",
        display: "inline-flex",
        gap: 0.45,
        justifyContent: "center",
        minWidth: { xs: 92, sm: 100 },
        px: { xs: 1, sm: 1.15 },
        py: 0.65,
        textShadow: "0 0 10px rgba(212,160,23,0.38)",
      }}
    >
      <Typography
        component="span"
        sx={{
          fontFamily:
            'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',
          fontSize: { xs: "0.92rem", sm: "1rem" },
          fontWeight: 900,
          letterSpacing: "0.02em",
          lineHeight: 1,
        }}
      >
        {time}
      </Typography>
      <Typography
        component="span"
        sx={{
          color: "rgba(255,248,237,0.74)",
          fontSize: "0.58rem",
          fontWeight: 900,
          lineHeight: 1,
        }}
      >
        {period}
      </Typography>
    </Box>
  );
}

export function ServingHours() {
  return (
    <Box
      aria-label="Food serving timings"
      component="section"
      sx={{
        mb: { xs: -1, md: -2 },
        mt: { xs: 4, sm: 4.5, md: 5 },
        px: { xs: 2, sm: 3, lg: 6 },
        position: "relative",
        zIndex: 2,
      }}
    >
      <Container maxWidth="lg" disableGutters>
        <MotionBox
          initial={{ opacity: 0, y: 24, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
          whileHover={{ y: -3 }}
          sx={{
            background:
              "linear-gradient(135deg, rgba(255,252,245,0.94) 0%, rgba(255,248,237,0.88) 48%, rgba(245,230,204,0.92) 100%)",
            border: "1px solid rgba(212,160,23,0.34)",
            borderRadius: 2,
            boxShadow:
              "0 22px 58px rgba(62,39,35,0.13), inset 0 1px 0 rgba(255,255,255,0.72)",
            overflow: "hidden",
            position: "relative",
            px: { xs: 1.4, sm: 2, md: 2.2 },
            py: { xs: 1.5, sm: 1.8, md: 2 },
            backdropFilter: "blur(18px)",
            "&::before": {
              background:
                "linear-gradient(90deg, transparent, rgba(212,160,23,0.72), transparent)",
              content: '""',
              height: 2,
              left: "12%",
              position: "absolute",
              right: "12%",
              top: 0,
            },
            "&::after": {
              background:
                "radial-gradient(circle at 20% 20%, rgba(212,160,23,0.18), transparent 28%), radial-gradient(circle at 92% 80%, rgba(122,31,31,0.10), transparent 30%)",
              content: '""',
              inset: 0,
              pointerEvents: "none",
              position: "absolute",
            },
          }}
        >
          <Box
            sx={{
              alignItems: "center",
              display: "grid",
              gap: { xs: 1.2, md: 1.4 },
              gridTemplateColumns: {
                xs: "1fr",
                md: "minmax(210px, 0.72fr) repeat(2, minmax(0, 1fr))",
                xl: "minmax(210px, 0.72fr) repeat(4, minmax(0, 1fr))",
              },
              position: "relative",
              zIndex: 1,
            }}
          >
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                flexShrink: 0,
                gap: 1.2,
                justifyContent: { xs: "center", md: "flex-start" },
                textAlign: { xs: "center", md: "left" },
                gridRow: { md: "span 2", xl: "auto" },
              }}
            >
              <Box
                sx={{
                  alignItems: "center",
                  background:
                    "radial-gradient(circle, rgba(212,160,23,0.25), rgba(122,31,31,0.10))",
                  border: "1px solid rgba(212,160,23,0.42)",
                  borderRadius: "50%",
                  boxShadow: "inset 0 1px 8px rgba(255,255,255,0.56)",
                  color: "primary.main",
                  display: "flex",
                  height: { xs: 42, sm: 46 },
                  justifyContent: "center",
                  width: { xs: 42, sm: 46 },
                }}
              >
                <Clock3 size={21} strokeWidth={2.2} />
              </Box>
              <Box>
                <Typography className="eyebrow" sx={{ color: "primary.main", mb: 0.25 }}>
                  Serving Hours
                </Typography>
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: { xs: "0.78rem", sm: "0.84rem" },
                    fontWeight: 600,
                    lineHeight: 1.35,
                  }}
                >
                  Fresh batches from our kitchen
                </Typography>
              </Box>
            </Box>

            {servingHours.map(({ meal, start, end, note, menuSlug, Icon }, index) => (
              <MotionBox
                key={meal}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.28 + index * 0.08,
                }}
                whileHover={{ y: -2, scale: 1.012 }}
                sx={{
                  alignItems: "center",
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.78), rgba(255,248,237,0.52))",
                  border: "1px solid rgba(122,53,36,0.10)",
                  borderRadius: 1.5,
                  boxShadow: "0 10px 24px rgba(62,39,35,0.055)",
                  display: "flex",
                  flexDirection: { xs: "row", md: "column", lg: "row" },
                  gap: { xs: 1, md: 1.05, lg: 1 },
                  justifySelf: "stretch",
                  minHeight: { xs: 78, sm: 86, md: 122, lg: 94 },
                  minWidth: 0,
                  px: { xs: 1.2, md: 1.25, lg: 1.35 },
                  py: { xs: 1.15, md: 1.25 },
                  transition: "box-shadow 220ms ease, border-color 220ms ease",
                  width: "100%",
                  "&:hover": {
                    borderColor: "rgba(212,160,23,0.34)",
                    boxShadow: "0 16px 34px rgba(122,31,31,0.10)",
                  },
                }}
              >
                <Box
                  sx={{
                    alignItems: "center",
                    bgcolor: "rgba(212,160,23,0.12)",
                    border: "1px solid rgba(212,160,23,0.18)",
                    borderRadius: "50%",
                    color: "secondary.main",
                    display: "flex",
                    flex: "0 0 38px",
                    height: 38,
                    justifyContent: "center",
                    width: 38,
                  }}
                >
                  <Icon size={18} strokeWidth={2.1} />
                </Box>
                <Box sx={{ minWidth: 0, width: "100%" }}>
                  <Typography
                    sx={{
                      color: "primary.main",
                      fontFamily: "var(--font-heading)",
                      fontSize: { xs: "1rem", md: "1.04rem" },
                      fontWeight: 800,
                      lineHeight: 1.1,
                    }}
                  >
                    {meal}
                  </Typography>
                  <Box
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 0.65,
                      mt: 0.85,
                    }}
                  >
                    <DigitalTime value={start} />
                    <Typography
                      aria-label="to"
                      component="span"
                      sx={{
                        color: "rgba(62,39,35,0.46)",
                        fontSize: "0.7rem",
                        fontWeight: 900,
                        lineHeight: 1,
                        textTransform: "uppercase",
                      }}
                    >
                      to
                    </Typography>
                    <DigitalTime value={end} />
                  </Box>
                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      lineHeight: 1.35,
                      mt: 0.75,
                    }}
                  >
                    {note}
                  </Typography>
                  <Button
                    component={Link}
                    endIcon={<ArrowRight size={14} strokeWidth={2.4} />}
                    href={`/menu?section=${menuSlug}`}
                    scroll={false}
                    size="small"
                    sx={{
                      bgcolor: "rgba(122,31,31,0.08)",
                      border: "1px solid rgba(122,31,31,0.16)",
                      borderRadius: 999,
                      color: "primary.main",
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      letterSpacing: "0.04em",
                      minHeight: 30,
                      mt: 0.85,
                      px: 1.35,
                      textTransform: "none",
                      "& .MuiButton-endIcon": {
                        ml: 0.35,
                        transition: "transform 180ms ease",
                      },
                      "&:hover": {
                        bgcolor: "primary.main",
                        borderColor: "primary.main",
                        color: "background.default",
                        "& .MuiButton-endIcon": {
                          transform: "translateX(2px)",
                        },
                      },
                    }}
                  >
                    Menu
                  </Button>
                </Box>
              </MotionBox>
            ))}

            <Chip
              icon={<Flame size={15} />}
              label="Hot & fresh"
              size="small"
              sx={{
                alignSelf: "center",
                bgcolor: "rgba(122,31,31,0.08)",
                border: "1px solid rgba(122,31,31,0.12)",
                color: "primary.main",
                display: { xs: "inline-flex", md: "none" },
                flexShrink: 0,
                fontWeight: 900,
                height: 32,
                justifySelf: "center",
                px: 0.35,
                "& .MuiChip-icon": {
                  color: "primary.main",
                  ml: 1,
                },
              }}
            />
          </Box>

          <Box
            aria-hidden="true"
            sx={{
              alignItems: "center",
              bgcolor: "rgba(255,248,237,0.72)",
              border: "1px solid rgba(212,160,23,0.24)",
              borderRadius: "50%",
              bottom: { xs: -22, md: -18 },
              color: "warning.main",
              display: { xs: "none", sm: "flex" },
              height: 48,
              justifyContent: "center",
              position: "absolute",
              right: { sm: 18, md: 28 },
              width: 48,
              zIndex: 2,
            }}
          >
            <Sparkles size={18} strokeWidth={1.9} />
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
}
