import { Box, Chip, Container, Grid, Stack, Typography } from "@mui/material";
import { AnimatedButton } from "@/components/AnimatedButton";
import { AnimatedText } from "@/components/AnimatedText";
import { FoodCard } from "@/components/FoodCard";
import { FloatingCoverImage } from "@/components/FloatingCoverImage";
import { GalleryGrid } from "@/components/GalleryGrid";
import { MotionBox, ParallaxBox, SectionReveal } from "@/components/Motion";
import { SectionIntro } from "@/components/SectionIntro";
import { StatsCounter } from "@/components/StatsCounter";
import { TestimonialCards } from "@/components/TestimonialCards";
import { businessConfig, heroImage, menuItems, popularFoods, trustHighlights } from "@/lib";

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
          minHeight: { xs: "auto", md: "calc(100vh - 84px)" },
          overflow: "hidden",
          position: "relative",
        }}
      >
        <FloatingCoverImage
          alt="Tamil homemade feast with biriyani and traditional dishes"
          priority
          sizes="100vw"
          src={heroImage}
        />
        <Box
          sx={{
            background:
              "linear-gradient(90deg, rgba(42,23,20,0.88), rgba(122,31,31,0.58), rgba(42,23,20,0.18))",
            inset: 0,
            position: "absolute",
          }}
        />
        <Container
          maxWidth="xl"
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "minmax(0, 0.95fr) minmax(360px, 0.55fr)" },
            gap: 5,
            minHeight: { xs: 680, md: "calc(100vh - 84px)" },
            position: "relative",
            py: { xs: 8, md: 12 },
          }}
        >
          <Stack
            component={MotionBox}
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            spacing={3}
            sx={{ alignSelf: "center", color: "background.default", maxWidth: 890 }}
          >
            <Typography className="eyebrow" sx={{ color: "warning.main" }}>
              Authentic Tamil Homemade Foods
            </Typography>
            <AnimatedText
              component="h1"
              immediate
              text="Taste of Amma's Kitchen"
              variant="h1"
              sx={{ fontSize: { xs: "3.7rem", sm: "5rem", md: "7.2rem" } }}
            />
            <Typography
              sx={{
                color: "rgba(255,248,237,0.82)",
                fontSize: { xs: "1rem", md: "1.22rem" },
                lineHeight: 1.85,
                maxWidth: 680,
              }}
            >
              Tradition served fresh from a hygienic Coimbatore kitchen, with
              slow-ground masalas, banana leaf memories, and meals that feel
              like home.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 1 }}>
              <AnimatedButton href="/menu" variant="contained" glow>
                View Menu
              </AnimatedButton>
              <AnimatedButton
                href={`https://wa.me/${businessConfig.whatsapp}`}
                target="_blank"
                variant="outlined"
                whatsapp
                sx={{ borderColor: "rgba(255,248,237,0.45)", color: "background.default" }}
              >
                Order Now
              </AnimatedButton>
              <AnimatedButton
                href="/catering"
                variant="outlined"
                sx={{ borderColor: "rgba(255,248,237,0.45)", color: "background.default" }}
              >
                Book Catering
              </AnimatedButton>
            </Stack>
          </Stack>

          <ParallaxBox
            strength={-90}
            sx={{ alignSelf: "center", display: { xs: "none", lg: "block" }, position: "relative" }}
          >
            <Box
              sx={{
                backdropFilter: "blur(22px)",
                bgcolor: "rgba(255,248,237,0.86)",
                border: "1px solid rgba(255,248,237,0.32)",
                borderRadius: 2,
                boxShadow: "0 28px 90px rgba(0,0,0,0.24)",
                p: 3,
              }}
            >
              <Typography className="eyebrow">Today&apos;s Kitchen</Typography>
              <Typography variant="h4" color="primary.main">
                Fresh meals begin at sunrise
              </Typography>
              <Typography sx={{ color: "text.secondary", lineHeight: 1.75, mt: 1.5 }}>
                Idli batter, sambar, biriyani masala, and festival sweets are
                prepared in careful daily batches.
              </Typography>
            </Box>
          </ParallaxBox>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "primary.main", color: "background.default", overflow: "hidden", py: 2 }}>
        <Box className="marquee">
          {[...popularFoods, ...popularFoods].map((food, index) => (
            <Typography key={`${food}-${index}`} sx={{ fontFamily: "var(--font-heading)", fontSize: { xs: "1.15rem", md: "1.6rem" }, fontWeight: 800 }}>
              {food}
            </Typography>
          ))}
        </Box>
      </Box>

      <Box component="section" className="section-tight">
        <Grid container spacing={2.5}>
          {trustHighlights.map((item, index) => (
              <Grid key={item.title} size={{ xs: 12, sm: 6, lg: 2.4 }}>
                <SectionReveal delay={index * 0.05}>
                  <Box
                    sx={{
                      bgcolor: "rgba(255,252,245,0.88)",
                      border: "1px solid rgba(62,39,35,0.1)",
                      borderRadius: 2,
                      boxShadow: "0 22px 64px rgba(62,39,35,0.07)",
                      height: "100%",
                      p: 3,
                    }}
                  >
                    <Box
                      sx={{
                        alignItems: "center",
                        bgcolor: "rgba(212,160,23,0.16)",
                        borderRadius: "50%",
                        color: "warning.main",
                        display: "flex",
                        fontFamily: "var(--font-heading)",
                        fontSize: "1.35rem",
                        fontWeight: 900,
                        height: 42,
                        justifyContent: "center",
                        mb: 1.5,
                        width: 42,
                      }}
                    >
                      {index + 1}
                    </Box>
                    <Typography variant="h5" color="primary.main">
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: "text.secondary", lineHeight: 1.7, mt: 1 }}>
                      {item.copy}
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
          bgcolor: "#2A1714",
          color: "background.default",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Container maxWidth="xl" sx={{ position: "relative" }}>
          <Grid container spacing={{ xs: 4, md: 8 }} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <SectionReveal>
                <Box sx={{ borderRadius: 2, minHeight: { xs: 380, md: 560 }, overflow: "hidden", position: "relative" }}>
                  <FloatingCoverImage
                    alt="Family cooking traditional Tamil food"
                    sizes="(max-width: 900px) 100vw, 50vw"
                    src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85"
                  />
                </Box>
              </SectionReveal>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <SectionReveal delay={0.12}>
                <Typography className="eyebrow" sx={{ color: "warning.main" }}>
                  Our Story
                </Typography>
                <Typography variant="h2" sx={{ fontSize: { xs: "2.4rem", md: "4.6rem" } }}>
                  Every meal feels like home because it begins like one.
                </Typography>
                <Typography sx={{ color: "rgba(255,248,237,0.76)", fontSize: "1.08rem", lineHeight: 1.9, mt: 3 }}>
                  Virundhaalaya grew from a family kitchen where recipes were
                  measured by memory, patience, and care. The sambar is not
                  rushed. The biriyani masala is not generic. The sweetness is
                  not just jaggery; it is the feeling of being served by someone
                  who wants you to eat well.
                </Typography>
                <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", mt: 3 }}>
                  {["Stone-ground masala", "Banana leaf service", "Fresh daily batches"].map((label) => (
                    <Chip
                      key={label}
                      label={label}
                      sx={{ bgcolor: "rgba(255,248,237,0.1)", color: "background.default", fontWeight: 800 }}
                    />
                  ))}
                </Stack>
              </SectionReveal>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box component="section" className="section">
        <StatsCounter />
      </Box>

      <Box component="section" className="section-tight" sx={{ bgcolor: "rgba(245,230,204,0.38)" }}>
        <SectionIntro
          eyebrow="Guest Notes"
          title="Loved by families, teams, and celebration hosts"
        />
        <TestimonialCards carousel />
      </Box>

      <Box component="section" className="section">
        <SectionIntro
          eyebrow="Behind the Scenes"
          title="A kitchen you can feel before the first bite"
          copy="Traditional vessels, fresh ingredients, team prep, and banana leaf serving come together as one visual story."
        />
        <GalleryGrid preview />
      </Box>

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
            <Typography variant="h2" sx={{ fontSize: { xs: "2.5rem", md: "5rem" } }}>
              Tradition served beautifully for your next family event.
            </Typography>
            <Typography sx={{ color: "rgba(255,248,237,0.78)", lineHeight: 1.85, mx: "auto", mt: 2.5, maxWidth: 720 }}>
              Weddings, birthdays, corporate lunches, festival orders,
              seemantham, and housewarming menus planned with calm coordination
              and handmade taste.
            </Typography>
            <AnimatedButton href="/catering" variant="contained" glow sx={{ mt: 4 }}>
              Plan Catering
            </AnimatedButton>
          </SectionReveal>
        </Container>
      </Box>
    </main>
  );
}
