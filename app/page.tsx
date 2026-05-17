import { Box, Chip, Container, Grid, Stack, Typography } from "@mui/material";
import { AnimatedButton } from "@/components/AnimatedButton";
import { AnimatedText } from "@/components/AnimatedText";
import { FoodCard } from "@/components/FoodCard";
import { FloatingCoverImage } from "@/components/FloatingCoverImage";
import { MotionBox, ParallaxBox, SectionReveal } from "@/components/Motion";
import { SectionIntro } from "@/components/SectionIntro";
import { StatsCounter } from "@/components/StatsCounter";
import { SubscriptionPlans } from "@/components/SubscriptionPlans";
import { TestimonialCards } from "@/components/TestimonialCards";
import {
  businessConfig,
  heroImage,
  menuItems,
  popularFoods,
  trustHighlights,
} from "@/lib";

export default function HomePage() {
  const popularItems = popularFoods
    .map((name) => menuItems.find((item) => item.name === name))
    .filter(Boolean)
    .slice(0, 10);

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
          alt="Tamil homemade feast with biriyani and traditional dishes"
          objectPosition={{ xs: "58% center", sm: "center center" }}
          priority
          sizes="100vw"
          src={heroImage}
        />
        <Box
          sx={{
            background:
              {
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
              text="Taste of Amma's Kitchen"
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
                href="/catering"
                variant="outlined"
                sx={{
                  borderColor: "rgba(255,248,237,0.45)",
                  color: "background.default",
                }}
              >
                Book Catering
              </AnimatedButton>
            </Stack>
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

      <Box component="section" className="section-tight">
  <Grid container spacing={{ xs: 1.6, sm: 2.2, lg: 2.5 }}>
    {trustHighlights.map((item, index) => (
      <Grid
        key={item.title}
        size={{
          xs: 12,
          sm: 6,
          md: 4,
          lg: 2.4,
        }}
      >
        <SectionReveal delay={index * 0.05}>
          <Box
            sx={{
              background:
                "linear-gradient(135deg, rgba(255,252,245,0.96) 0%, rgba(250,244,232,0.92) 100%)",

              border: "1px solid rgba(122,53,36,0.08)",

              borderRadius: "24px",

              boxShadow: "0 12px 34px rgba(62,39,35,0.06)",

              backdropFilter: "blur(12px)",

              px: {
                xs: 2,
                sm: 2.4,
                lg: 2.8,
              },

              py: {
                xs: 1.5,
                sm: 1.9,
                lg: 2.8,
              },

              minHeight: {
                xs: "auto",
                lg: 185,
              },

              display: "flex",

              flexDirection: {
                xs: "row",
                lg: "column",
              },

              alignItems: {
                xs: "center",
                lg: "flex-start",
              },

              justifyContent: "center",

              gap: {
                xs: 1.5,
                lg: 2,
              },

              transition: "all 0.32s ease",

              overflow: "hidden",

              position: "relative",

              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 20px 48px rgba(62,39,35,0.11)",
              },

              "&::before": {
                content: '""',
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 100%)",
                pointerEvents: "none",
              },
            }}
          >
            {/* Icon */}
            <Box
              sx={{
                minWidth: {
                  xs: 46,
                  sm: 48,
                },

                width: {
                  xs: 46,
                  sm: 48,
                },

                height: {
                  xs: 46,
                  sm: 48,
                },

                borderRadius: "50%",

                background:
                  "linear-gradient(135deg, rgba(212,160,23,0.16) 0%, rgba(212,160,23,0.10) 100%)",

                border: "1px solid rgba(212,160,23,0.14)",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                color: "#b7791f",

                flexShrink: 0,

                boxShadow:
                  "inset 0 1px 4px rgba(255,255,255,0.38)",
              }}
            >
              <item.icon size={21} strokeWidth={2} />
            </Box>

            {/* Title */}
            <Typography
              sx={{
                color: "primary.main",

                fontSize: {
                  xs: "1rem",
                  sm: "1.05rem",
                  lg: "1.12rem",
                },

                fontWeight: 600,

                lineHeight: {
                  xs: 1.4,
                  lg: 1.45,
                },

                letterSpacing: "-0.018em",

                maxWidth: {
                  xs: "100%",
                  lg: "11ch",
                },

                textAlign: {
                  xs: "left",
                  lg: "left",
                },
              }}
            >
              {item.title}
            </Typography>
          </Box>
        </SectionReveal>
      </Grid>
    ))}
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
                    alt="Family cooking traditional Tamil food"
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
          background:
            "linear-gradient(120deg, rgba(122,31,31,0.94), rgba(79,119,45,0.86)), url(https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1600&q=85)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          color: "background.default",
        }}
      >
        <Container maxWidth="lg">
          <SectionReveal sx={{ textAlign: "center" }}>
            <Typography className="eyebrow" sx={{ color: "warning.main" }}>
              Catering With Care
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: "2.5rem", md: "5rem" } }}
            >
              Tradition served beautifully for your next family event.
            </Typography>
            <Typography
              sx={{
                color: "rgba(255,248,237,0.78)",
                lineHeight: 1.85,
                mx: "auto",
                mt: 2.5,
                maxWidth: 720,
              }}
            >
              Weddings, birthdays, corporate lunches, festival orders,
              seemantham, and housewarming menus planned with calm coordination
              and handmade taste.
            </Typography>
            <AnimatedButton
              href="/catering"
              variant="contained"
              glow
              sx={{ mt: 4 }}
            >
              Plan Catering
            </AnimatedButton>
          </SectionReveal>
        </Container>
      </Box>
    </main>
  );
}
