import { Box, Chip, Container, Grid, Stack, Typography } from "@mui/material";
import { AnimatedButton } from "@/components/AnimatedButton";
import { AnimatedText } from "@/components/AnimatedText";
import { FoodCard } from "@/components/FoodCard";
import { FloatingCoverImage } from "@/components/FloatingCoverImage";
import { MotionBox, ParallaxBox, SectionReveal } from "@/components/Motion";
import { SectionIntro } from "@/components/SectionIntro";
import { ServingHours } from "@/components/ServingHours";
import { StatsCounter } from "@/components/StatsCounter";
import { SubscriptionPlans } from "@/components/SubscriptionPlans";
import { TestimonialCards } from "@/components/TestimonialCards";
import { SecretIngredientBadge } from "@/components/SecretIngredientBadge";
import {
  businessConfig,
  heroImage,
  menuItems,
  popularFoods,
  trustHighlights,
} from "@/lib";

export default function HomePage() {
  const popularItems = menuItems.filter((item) => item.popular).slice(0, 9);

  return (
    <main>
      <Box
        component="section"
        sx={{
          minHeight: { xs: "calc(100svh - 74px)", md: "calc(100vh - 84px)" },
          overflow: "hidden",
          position: "relative",
        }}
      >
        <FloatingCoverImage
          alt="Tamil heritage feast with biriyani and signature dishes"
          objectPosition={{ xs: "58% center", sm: "center center" }}
          priority
          sizes="100vw"
          src={heroImage}
        />
        <Box
          sx={{
            background: {
              xs: "linear-gradient(180deg, rgba(42,23,20,0.86) 0%, rgba(122,31,31,0.62) 54%, rgba(42,23,20,0.34) 100%)",
              md: "linear-gradient(90deg, rgba(42,23,20,0.88), rgba(122,31,31,0.58), rgba(42,23,20,0.18))",
            },
            inset: 0,
            position: "absolute",
          }}
        />
        <Container
          maxWidth="xl"
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              lg: "minmax(0, 0.95fr) minmax(360px, 0.55fr)",
            },
            gap: 5,
            minHeight: { xs: "calc(100svh - 74px)", md: "calc(100vh - 84px)" },
            position: "relative",
            py: { xs: 6.5, sm: 8, md: 12 },
          }}
        >
          <Stack
            component={MotionBox}
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            spacing={{ xs: 2.2, md: 3 }}
            sx={{
              alignSelf: "center",
              color: "background.default",
              maxWidth: 890,
              pb: { xs: 4, sm: 0 },
            }}
          >
            <Typography className="eyebrow" sx={{ color: "warning.main" }}>
              Authentic Tamil Homemade Foods
            </Typography>
            <AnimatedText
              component="h1"
              immediate
              text="Handcrafted Tamil Food, Served with Soul"
              variant="h1"
              sx={{
                fontSize: {
                  xs: "clamp(2.8rem, 14vw, 3.7rem)",
                  sm: "5rem",
                  md: "7.2rem",
                },
                maxWidth: { xs: 520, md: 900 },
              }}
            />
            <Typography
              sx={{
                color: "rgba(255,248,237,0.82)",
                fontSize: { xs: "0.98rem", sm: "1.05rem", md: "1.22rem" },
                lineHeight: { xs: 1.72, md: 1.85 },
                maxWidth: { xs: 560, md: 680 },
              }}
            >
              Tradition served fresh from a hygienic Coimbatore kitchen, with
              slow-ground masalas, banana leaf memories, and meals that feel
              like home.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.5}
              sx={{
                mt: { xs: 0.5, md: 1 },
                width: { xs: "100%", sm: "auto" },
                "& .MuiButton-root": {
                  width: { xs: "100%", sm: "auto" },
                },
              }}
            >
              <AnimatedButton href="/menu" variant="contained" glow>
                View Menu
              </AnimatedButton>
              <AnimatedButton
                href={`https://wa.me/${businessConfig.whatsapp}`}
                target="_blank"
                variant="outlined"
                whatsapp
                sx={{
                  borderColor: "rgba(255,248,237,0.45)",
                  color: "background.default",
                }}
              >
                Order Now
              </AnimatedButton>
              <AnimatedButton
                href="/contact"
                variant="outlined"
                sx={{
                  borderColor: "rgba(255,248,237,0.45)",
                  color: "background.default",
                }}
              >
                Book Catering
              </AnimatedButton>
            </Stack>

            <Box sx={{ mt: { xs: 3, md: 4 } }}>
              <SecretIngredientBadge />
            </Box>
          </Stack>

          <ParallaxBox
            strength={-90}
            sx={{
              alignSelf: "center",
              mx: { xs: "auto", lg: 0 },
              maxWidth: { xs: 340, sm: 420, md: 400, lg: "none" },
              position: "relative",
              width: "100%",
            }}
          >
            <Box
              sx={{
                backdropFilter: "blur(22px)",
                bgcolor: "rgba(255,248,237,0.86)",
                border: "1px solid rgba(255,248,237,0.32)",
                borderRadius: 2,
                boxShadow: "0 28px 90px rgba(0,0,0,0.24)",
                p: { xs: 1.5, md: 2.5 },
                textAlign: "center",
              }}
            >
              {/* ── Overline label ────────────────────────────── */}
              {/* <Typography
                component="p"
                sx={{
                  color: "rgba(122,31,31,0.55)",
                  fontFamily: "var(--font-tamil-sans)",
                  fontSize: { xs: "0.62rem", md: "0.65rem" },
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  mb: 1,
                  textTransform: "uppercase",
                }}
              >
                திருவள்ளுவர் · திருக்குறள்
              </Typography> */}

              {/* ── Section title ─────────────────────────────── */}
              <Typography
                component="h2"
                sx={{
                  color: "primary.main",
                  fontFamily: "var(--font-tamil-serif)",
                  fontSize: { xs: "0.95rem", sm: "1.35rem", md: "1.45rem" },
                  fontWeight: 700,
                  letterSpacing: 0,
                  lineHeight: 1.4,
                  mb: { xs: 1, sm: 1.5 },
                }}
              >
                உணவே மருந்து
              </Typography>

              {/* ── Gold rule divider (centred) ───────────────── */}
              <Box
                sx={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(212,160,23,0.9), transparent)",
                  borderRadius: 1,
                  height: "1.5px",
                  mb: { xs: 1.5, sm: 2.5 },
                  mx: "auto",
                  width: { xs: "56px", sm: "80px" },
                }}
              />

              {/* ── Decorative open-quote ─────────────────────── */}
              <Typography
                aria-hidden="true"
                component="span"
                sx={{
                  color: "rgba(122,31,31,0.18)",
                  display: "block",
                  fontFamily: "Georgia, serif",
                  fontSize: { xs: "2rem", sm: "3.5rem" },
                  lineHeight: 0.6,
                  mb: { xs: 0.5, sm: 1 },
                  userSelect: "none",
                }}
              >
                ❝
              </Typography>

              {/* ── Thirukkural verses ────────────────────────── */}
              <Box component="blockquote" sx={{ m: 0, p: 0 }}>
                <Typography
                  component="p"
                  sx={{
                    background:
                      "linear-gradient(135deg, #7A1F1F 0%, #5a1515 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontFamily: "var(--font-tamil-serif)",
                    fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                    fontWeight: 700,
                    letterSpacing: 0,
                    lineHeight: 2,
                    mb: 0,
                  }}
                >
                  மருந்தென வேண்டாவாம் யாக்கைக்கு
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    background:
                      "linear-gradient(135deg, #7A1F1F 0%, #5a1515 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontFamily: "var(--font-tamil-serif)",
                    fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                    fontWeight: 700,
                    letterSpacing: 0,
                    lineHeight: 2,
                    mb: 2.5,
                  }}
                >
                  அருந்தியது அற்றது போற்றி உணின்
                </Typography>

                {/* ── Author signature (centred) ────────────── */}
                <Box
                  sx={{
                    alignItems: "center",
                    borderTop: "1px solid rgba(62,39,35,0.12)",
                    display: "flex",
                    gap: 0.75,
                    justifyContent: "center",
                    pt: 1.5,
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: "rgba(212,160,23,0.22)",
                      borderRadius: "50%",
                      flexShrink: 0,
                      height: { xs: 16, sm: 22 },
                      width: { xs: 16, sm: 22 },
                    }}
                  />
                  <Typography
                    component="cite"
                    sx={{
                      color: "text.secondary",
                      fontFamily: "var(--font-tamil-sans)",
                      fontSize: { xs: "0.62rem", sm: "0.72rem", md: "0.76rem" },
                      fontStyle: "normal",
                      fontWeight: 500,
                      letterSpacing: 0,
                    }}
                  >
                    — திருவள்ளுவர்
                  </Typography>
                </Box>
              </Box>
            </Box>
          </ParallaxBox>
        </Container>
      </Box>

      <Box
        sx={{
          bgcolor: "primary.main",
          color: "background.default",
          overflow: "hidden",
          py: 2,
        }}
      >
        <Box className="marquee">
          {[...popularFoods, ...popularFoods].map((food, index) => (
            <Typography
              key={`${food}-${index}`}
              sx={{
                fontFamily: "var(--font-heading)",
                fontSize: { xs: "1.15rem", md: "1.6rem" },
                fontWeight: 800,
              }}
            >
              {food}
            </Typography>
          ))}
        </Box>
      </Box>

      <ServingHours />

      <Box component="section" className="section-tight">
        <Grid container spacing={{ xs: 1.6, sm: 2.2, lg: 2.5 }}>
          {trustHighlights.map((item, index) => {
            const isFssai = item.title.includes("FSSAI");

            return (
              <Grid
                key={item.title}
                size={
                  isFssai
                    ? { xs: 12 }
                    : {
                        xs: 12,
                        sm: 6,
                        md: 4,
                        lg: 2.4,
                      }
                }
              >
                <SectionReveal delay={index * 0.05}>
                  <Box
                    sx={{
                      background: isFssai
                        ? "linear-gradient(135deg, rgba(122,31,31,0.98) 0%, rgba(90,32,26,0.96) 52%, rgba(212,160,23,0.84) 100%)"
                        : "linear-gradient(135deg, rgba(255,252,245,0.96) 0%, rgba(250,244,232,0.92) 100%)",

                      border: isFssai
                        ? "1px solid rgba(255,248,237,0.28)"
                        : "1px solid rgba(122,53,36,0.08)",

                      borderRadius: "24px",

                      boxShadow: isFssai
                        ? "0 22px 58px rgba(122,31,31,0.20), inset 0 1px 0 rgba(255,248,237,0.24)"
                        : "0 12px 34px rgba(62,39,35,0.06)",

                      backdropFilter: "blur(12px)",

                      px: {
                        xs: 2,
                        sm: isFssai ? 3 : 2.4,
                        lg: isFssai ? 4 : 2.8,
                      },

                      py: {
                        xs: isFssai ? 2 : 1.5,
                        sm: isFssai ? 2.5 : 1.9,
                        lg: isFssai ? 3 : 2.8,
                      },

                      minHeight: {
                        xs: "auto",
                        lg: isFssai ? 132 : 185,
                      },

                      display: "flex",

                      flexDirection: {
                        xs: "row",
                        lg: isFssai ? "row" : "column",
                      },

                      alignItems: {
                        xs: "center",
                        lg: isFssai ? "center" : "flex-start",
                      },

                      justifyContent: isFssai ? "space-between" : "center",

                      gap: {
                        xs: 1.5,
                        lg: isFssai ? 3 : 2,
                      },

                      transition: "all 0.32s ease",

                      overflow: "hidden",

                      position: "relative",

                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: isFssai
                          ? "0 28px 70px rgba(122,31,31,0.26), inset 0 1px 0 rgba(255,248,237,0.28)"
                          : "0 20px 48px rgba(62,39,35,0.11)",
                      },

                      "&::before": {
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        background: isFssai
                          ? "radial-gradient(circle at 14% 18%, rgba(255,248,237,0.18), transparent 24%), linear-gradient(180deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 100%)"
                          : "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 100%)",
                        pointerEvents: "none",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                        gap: { xs: 1.5, sm: 2 },
                        minWidth: 0,
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      {/* Icon */}
                      <Box
                        sx={{
                          minWidth: {
                            xs: isFssai ? 54 : 46,
                            sm: isFssai ? 62 : 48,
                          },

                          width: {
                            xs: isFssai ? 54 : 46,
                            sm: isFssai ? 62 : 48,
                          },

                          height: {
                            xs: isFssai ? 54 : 46,
                            sm: isFssai ? 62 : 48,
                          },

                          borderRadius: "50%",

                          background: isFssai
                            ? "linear-gradient(135deg, rgba(255,248,237,0.96), rgba(255,230,161,0.78))"
                            : "linear-gradient(135deg, rgba(212,160,23,0.16) 0%, rgba(212,160,23,0.10) 100%)",

                          border: isFssai
                            ? "1px solid rgba(255,248,237,0.36)"
                            : "1px solid rgba(212,160,23,0.14)",

                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",

                          color: isFssai ? "primary.main" : "#b7791f",

                          flexShrink: 0,

                          boxShadow: isFssai
                            ? "0 10px 28px rgba(42,23,20,0.18), inset 0 1px 4px rgba(255,255,255,0.56)"
                            : "inset 0 1px 4px rgba(255,255,255,0.38)",
                        }}
                      >
                        <item.icon size={isFssai ? 28 : 21} strokeWidth={2.1} />
                      </Box>

                      <Box sx={{ minWidth: 0 }}>
                        {isFssai ? (
                          <Typography
                            sx={{
                              color: "rgba(255,248,237,0.82)",
                              fontSize: { xs: "0.7rem", sm: "0.76rem" },
                              fontWeight: 900,
                              letterSpacing: "0.12em",
                              lineHeight: 1.2,
                              mb: 0.55,
                              textTransform: "uppercase",
                            }}
                          >
                            Food Safety Certified
                          </Typography>
                        ) : null}

                        {/* Title */}
                        <Typography
                          sx={{
                            color: isFssai ? "background.default" : "primary.main",

                            fontSize: {
                              xs: isFssai ? "1.22rem" : "1rem",
                              sm: isFssai ? "1.45rem" : "1.05rem",
                              lg: isFssai ? "1.65rem" : "1.12rem",
                            },

                            fontWeight: isFssai ? 800 : 600,

                            lineHeight: {
                              xs: 1.25,
                              lg: 1.28,
                            },

                            letterSpacing: 0,

                            maxWidth: {
                              xs: "100%",
                              lg: isFssai ? 520 : "11ch",
                            },

                            textAlign: "left",
                          }}
                        >
                          {item.title}
                        </Typography>

                        {isFssai ? (
                          <Typography
                            sx={{
                              color: "rgba(255,248,237,0.74)",
                              fontSize: { xs: "0.82rem", sm: "0.92rem" },
                              fontWeight: 600,
                              lineHeight: 1.55,
                              mt: 0.6,
                              maxWidth: 620,
                            }}
                          >
                            Prepared in a hygiene-focused kitchen that follows approved food safety standards.
                          </Typography>
                        ) : null}
                      </Box>
                    </Box>

                    {isFssai ? (
                      <Box
                        sx={{
                          alignItems: "center",
                          bgcolor: "rgba(255,248,237,0.14)",
                          border: "1px solid rgba(255,248,237,0.22)",
                          borderRadius: 999,
                          color: "background.default",
                          display: { xs: "none", md: "inline-flex" },
                          flexShrink: 0,
                          fontSize: "0.78rem",
                          fontWeight: 900,
                          letterSpacing: "0.08em",
                          px: 2,
                          py: 1,
                          position: "relative",
                          textTransform: "uppercase",
                          zIndex: 1,
                        }}
                      >
                        Approved
                      </Box>
                    ) : null}
                  </Box>
                </SectionReveal>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      <Box component="section" className="section">
        <SectionIntro
          eyebrow="Popular From The Kitchen"
          title="Food that carries the warmth of a Tamil home"
          copy="Every dish is familiar, generous, and prepared with the kind of care that turns an ordinary meal into a family memory."
        />
        <Grid container spacing={3}>
          {popularItems.map((item) => (
            <Grid key={item!.name} size={{ xs: 12, sm: 6, lg: 4 }}>
              <FoodCard item={item!} compact />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box
        component="section"
        className="section"
        sx={{
          background:
            "radial-gradient(circle at 12% 18%, rgba(212,160,23,0.08), transparent 28%), linear-gradient(135deg, #2A1714 0%, #351914 56%, #21110f 100%)",
          color: "background.default",
          overflow: "hidden",
          pb: { xs: 15, sm: 12, md: 12 },
          pt: { xs: 6.5, sm: 7.5, md: 12 },
          position: "relative",
        }}
      >
        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
          <Grid
            container
            spacing={{ xs: 3, sm: 3.5, md: 6, lg: 8 }}
            sx={{ alignItems: "center" }}
          >
            <Grid
              size={{ xs: 12, lg: 6 }}
              sx={{
                display: { xs: "flex", lg: "block" },
                justifyContent: { xs: "center", lg: "initial" },
                order: { xs: 2, lg: 1 },
              }}
            >
              <SectionReveal>
                <Box
                  sx={{
                    aspectRatio: {
                      xs: "4 / 3",
                      sm: "16 / 10",
                      lg: "1 / 1.02",
                    },
                    border: "1px solid rgba(255,248,237,0.14)",
                    borderRadius: "24px",
                    boxShadow: "0 34px 90px rgba(0,0,0,0.34)",
                    maxWidth: { xs: "calc(100vw - 48px)", sm: "100%" },
                    minHeight: { xs: 220, sm: 360, md: 420, lg: 520 },
                    maxHeight: { md: 520, lg: "none" },
                    mb: { xs: 2, sm: 0 },
                    mx: { xs: "auto", lg: 0 },
                    overflow: "hidden",
                    position: "relative",
                    width: "100%",
                    "&::after": {
                      background:
                        "linear-gradient(180deg, rgba(42,23,20,0.02) 42%, rgba(42,23,20,0.34) 100%)",
                      content: '""',
                      inset: 0,
                      pointerEvents: "none",
                      position: "absolute",
                    },
                  }}
                >
                  <FloatingCoverImage
                    alt="Family preparing authentic Tamil cuisine"
                    objectPosition={{ xs: "48% center", sm: "center center" }}
                    sizes="(max-width: 900px) 100vw, 50vw"
                    src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85"
                  />
                </Box>
              </SectionReveal>
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }} sx={{ order: { xs: 1, lg: 2 } }}>
              <SectionReveal
                delay={0.12}
                sx={{
                  maxWidth: { xs: "100%", md: 760, lg: 680 },
                  mx: { xs: 0, md: "auto" },
                }}
              >
                <Typography className="eyebrow" sx={{ color: "warning.main" }}>
                  Our Story
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    color: "#FFF8ED",
                    fontSize: {
                      xs: "2rem",
                      sm: "3.2rem",
                      md: "3.55rem",
                      lg: "4.6rem",
                    },
                    lineHeight: { xs: 1.06, md: 1.02 },
                    maxWidth: 720,
                  }}
                >
                  Every meal feels like home because it begins like one.
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(255,248,237,0.76)",
                    fontSize: { xs: "0.96rem", sm: "1rem", md: "1.08rem" },
                    lineHeight: { xs: 1.7, sm: 1.78, md: 1.9 },
                    mt: { xs: 2, sm: 2.4, md: 3 },
                    maxWidth: 660,
                  }}
                >
                  Virundhaalaya grew from a family kitchen where recipes were
                  measured by memory, patience, and care. The sambar is not
                  rushed. The biriyani masala is not generic. The sweetness is
                  not just jaggery; it is the feeling of being served by someone
                  who wants you to eat well.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: { xs: 0.8, sm: 1 },
                    mt: { xs: 2.2, sm: 2.6, md: 3 },
                    maxWidth: 540,
                  }}
                >
                  {[
                    "Stone-ground masala",
                    "Banana leaf service",
                    "Fresh daily batches",
                  ].map((label) => (
                    <Chip
                      key={label}
                      label={label}
                      sx={{
                        backdropFilter: "blur(10px)",
                        bgcolor: "rgba(255,248,237,0.12)",
                        border: "1px solid rgba(255,248,237,0.12)",
                        color: "background.default",
                        fontSize: { xs: "0.8rem", sm: "0.92rem" },
                        fontWeight: 800,
                        height: { xs: 30, sm: 34 },
                        maxWidth: "100%",
                        px: { xs: 0.15, sm: 0.4 },
                        "& .MuiChip-label": {
                          overflow: "hidden",
                          px: { xs: 1.4, sm: 1.6 },
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        },
                      }}
                    />
                  ))}
                </Box>
              </SectionReveal>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box component="section" className="section">
        <StatsCounter />
      </Box>

      <TestimonialCards carousel />

      <SubscriptionPlans />

      

      <Box
  component="section"
  className="section"
  sx={{
    pb: { xs: 10, sm: 12, md: 14 },
    pt: { xs: 8, sm: 10, md: 12 },
    px: { xs: 2, sm: 3, lg: 6 },
    position: "relative",
    overflow: "hidden",
    background: "linear-gradient(180deg, #FFFDF7 0%, #FDF3E3 60%, #F5E6CC 100%)",
  }}
>
  {/* Background blurs */}
  <Box sx={{ position: "absolute", top: "-10%", left: "-15%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,160,23,0.12) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
  <Box sx={{ position: "absolute", bottom: "-10%", right: "-10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(94,50,38,0.08) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

  {/* ── 3-COLUMN FLEX ROW ── */}
  <Box
    sx={{
      position: "relative",
      zIndex: 1,
      maxWidth: 1400,
      mx: "auto",
      display: "flex",
      alignItems: "center",
      gap: 4,
    }}
  >

    {/* ── LEFT COLUMN ── */}
    <Box
      sx={{
        display: { xs: "none", lg: "flex" },
        flexDirection: "column",
        gap: 2.5,
        alignItems: "flex-start",
        flexShrink: 0,
        width: 185,
      }}
    >
      {/* Kolam ring */}
      <Box sx={{ width: 155, height: 155, borderRadius: "50%", border: "1.5px dashed rgba(212,160,23,0.35)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", mx: "auto" }}>
        <Box sx={{ width: 105, height: 105, borderRadius: "50%", border: "1px solid rgba(212,160,23,0.18)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Typography sx={{ fontSize: "2.2rem" }}>🍛</Typography>
        </Box>
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <Box key={deg} sx={{ position: "absolute", width: 7, height: 7, borderRadius: "50%", bgcolor: "rgba(212,160,23,0.45)", top: "50%", left: "50%", transform: `rotate(${deg}deg) translateY(-75px)` }} />
        ))}
      </Box>

      {/* Card 1 */}
      <Box sx={{ bgcolor: "white", borderRadius: "18px", p: 2, boxShadow: "0 8px 28px rgba(62,39,35,0.09)", border: "1px solid rgba(212,160,23,0.18)", width: "100%" }}>
        <Typography sx={{ fontSize: "1.3rem", mb: 0.5 }}>🌿</Typography>
        <Typography sx={{ color: "#3E2723", fontWeight: 700, fontSize: "0.82rem", lineHeight: 1.4 }}>
          Fresh ingredients, every single day
        </Typography>
      </Box>

      {/* Card 2 — years */}
      <Box sx={{ bgcolor: "rgba(212,160,23,0.08)", borderRadius: "18px", p: 2, border: "1px solid rgba(212,160,23,0.22)", width: "100%" }}>
        <Typography sx={{ color: "primary.main", fontWeight: 800, fontSize: "1.6rem", lineHeight: 1 }}>
          {businessConfig.yearsInBusiness}+
        </Typography>
        <Typography sx={{ color: "#6D4C41", fontSize: "0.75rem", mt: 0.4 }}>
          Years serving Tamil families
        </Typography>
      </Box>
    </Box>

    {/* ── CENTER COLUMN ── */}
    <Box sx={{ flex: 1, minWidth: 0 }}>
      <SectionReveal>
        <Stack spacing={3.5} sx={{ alignItems: "center", textAlign: "center" }}>

          {/* Years badge */}
          <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, bgcolor: "rgba(212,160,23,0.1)", border: "1px solid rgba(212,160,23,0.35)", borderRadius: "100px", px: 2.5, py: 0.75 }}>
            <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "primary.main" }} />
            <Typography sx={{ color: "primary.main", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              {businessConfig.yearsInBusiness}+ Years of Crafting Celebrations
            </Typography>
          </Box>

          {/* Headline */}
          <Typography variant="h2" sx={{ color: "#3E2723", fontSize: { xs: "2.4rem", sm: "3.2rem", md: "4rem" }, lineHeight: 1.1, fontWeight: 800, width: "100%" }}>
            Let's cook your{" "}
            <Box component="span" sx={{ color: "primary.main", fontStyle: "italic" }}>celebration</Box>
            <br />together
          </Typography>

          {/* Subtext */}
          <Typography sx={{ color: "#6D4C41", fontSize: { xs: "1rem", md: "1.1rem" }, lineHeight: 1.8, maxWidth: 500, width: "100%", textAlign: "center" }}>
            From intimate family dinners to grand wedding feasts — we bring the soul of Tamil tradition to every plate, every event, every memory.
          </Typography>

          {/* Service pills */}
          <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1.2, justifyContent: "center", pt: 0.5 }}>
            {[{ label: "🍽️  Event Catering" }, { label: "🥡  Meal Subscription" }, { label: "✨  Trial Meals" }].map(({ label }) => (
              <Box key={label} sx={{ px: 2.2, py: 0.7, borderRadius: "100px", border: "1px solid rgba(94,50,38,0.18)", bgcolor: "rgba(255,255,255,0.7)", backdropFilter: "blur(4px)" }}>
                <Typography sx={{ color: "#5A3026", fontSize: "0.85rem", fontWeight: 500 }}>{label}</Typography>
              </Box>
            ))}
          </Stack>

          {/* Divider */}
          <Box sx={{ width: 60, height: 2, borderRadius: 1, bgcolor: "rgba(212,160,23,0.4)" }} />

          {/* CTAs */}
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ pt: 0.5, alignItems: "center" }}>
            <AnimatedButton
              href={`https://wa.me/${businessConfig.whatsapp}?text=${encodeURIComponent("Hi, I'd like to plan a catering event with Virundhaalaya")}`}
              target="_blank" variant="contained" whatsapp glow
              sx={{ bgcolor: "#25D366", color: "white", fontSize: { xs: "1rem", sm: "1.05rem" }, px: { xs: 4.5, md: 5.5 }, py: { xs: 1.4, sm: 1.6 }, borderRadius: "100px", boxShadow: "0 12px 28px rgba(37,211,102,0.3)", "&:hover": { bgcolor: "#1EBE5D", boxShadow: "0 16px 36px rgba(37,211,102,0.4)" } }}
            >
              Plan Your Catering Event
            </AnimatedButton>
            <AnimatedButton
              href={`https://wa.me/${businessConfig.whatsapp}?text=${encodeURIComponent("Hi, I'd like to book a trial meal at Virundhaalaya")}`}
              target="_blank" variant="outlined"
              sx={{ color: "#5A3026", borderColor: "rgba(94,50,38,0.35)", fontSize: { xs: "0.95rem", sm: "1rem" }, px: { xs: 4, md: 4.5 }, py: { xs: 1.3, sm: 1.5 }, borderRadius: "100px", "&:hover": { bgcolor: "rgba(94,50,38,0.05)", borderColor: "#5A3026" } }}
            >
              Book your Trial Meal
            </AnimatedButton>
          </Stack>

          {/* Reassurance */}
          <Typography sx={{ color: "#9E8070", fontSize: "0.82rem", pt: 0.5 }}>
            No commitment needed · Respond within 2 hours · Serving Coimbatore & nearby
          </Typography>

        </Stack>
      </SectionReveal>
    </Box>

    {/* ── RIGHT COLUMN ── */}
    <Box
      sx={{
        display: { xs: "none", lg: "flex" },
        flexDirection: "column",
        gap: 2.5,
        alignItems: "flex-end",
        flexShrink: 0,
        width: 185,
      }}
    >
      {/* Card 3 */}
      <Box sx={{ bgcolor: "white", borderRadius: "18px", p: 2, boxShadow: "0 8px 28px rgba(62,39,35,0.09)", border: "1px solid rgba(94,50,38,0.12)", width: "100%" }}>
        <Typography sx={{ fontSize: "1.3rem", mb: 0.5 }}>🎊</Typography>
        <Typography sx={{ color: "#3E2723", fontWeight: 700, fontSize: "0.82rem", lineHeight: 1.4 }}>
          Birthdays, Corporate Events & Every Occasion
        </Typography>
      </Box>

      {/* Card 4 */}
      <Box sx={{ bgcolor: "white", borderRadius: "18px", p: 2, boxShadow: "0 8px 28px rgba(62,39,35,0.09)", border: "1px solid rgba(94,50,38,0.12)", width: "100%" }}>
        <Typography sx={{ fontSize: "1.3rem", mb: 0.5 }}>🤝</Typography>
        <Typography sx={{ color: "#3E2723", fontWeight: 700, fontSize: "0.82rem", lineHeight: 1.4 }}>
         High Standards, Low Prices, Affordable for everyone
        </Typography>
      </Box>

      {/* Kolam ring */}
      <Box sx={{ width: 125, height: 125, borderRadius: "50%", border: "1.5px dashed rgba(94,50,38,0.25)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", mx: "auto" }}>
        <Box sx={{ width: 84, height: 84, borderRadius: "50%", border: "1px solid rgba(94,50,38,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Typography sx={{ fontSize: "1.9rem" }}>🪔</Typography>
        </Box>
        {[0, 72, 144, 216, 288].map((deg) => (
          <Box key={deg} sx={{ position: "absolute", width: 6, height: 6, borderRadius: "50%", bgcolor: "rgba(94,50,38,0.28)", top: "50%", left: "50%", transform: `rotate(${deg}deg) translateY(-60px)` }} />
        ))}
      </Box>
    </Box>

  </Box>
</Box>
    </main>
  );
}
