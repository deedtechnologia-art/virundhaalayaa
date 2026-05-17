import type { Metadata } from "next";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { AnimatedButton } from "@/components/AnimatedButton";
import { CateringCard } from "@/components/CateringCard";
import { MediaGallery } from "@/components/MediaGallery";
import { PageHero } from "@/components/PageHero";
import { SectionReveal } from "@/components/Motion";
import { SectionIntro } from "@/components/SectionIntro";
import { StatsCounter } from "@/components/StatsCounter";
import { cateringServices, processSteps } from "@/lib";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Catering | Tamil Homemade Event Food in Coimbatore",
  description:
    "Book Virundhaalaya for Tamil homemade catering in Coimbatore: wedding catering, birthday events, corporate catering, festival food, seemantham, and housewarming menus.",
  path: "/catering",
});

export default function CateringPage() {
  return (
    <main>
      <PageHero
        eyebrow="Tamil Homemade Catering"
        title="Family event food planned with warmth and precision"
        copy="From wedding virundhu to birthday counters and corporate lunch programs, we build menus around your guests, timing, rituals, and appetite."
        image="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1800&q=85"
        primaryLabel="Send Inquiry"
        primaryHref="/contact"
        secondaryLabel="See Gallery"
        secondaryHref="/gallery"
      />

      <Box component="section" className="section">
        <SectionIntro
          eyebrow="Services"
          title="Catering for every Tamil family milestone"
          copy="Each service can be customized for guest count, spice preference, serving style, packaging, and vegetarian or non-vegetarian menu needs."
        />
        <Grid container spacing={3}>
          {cateringServices.map((service, index) => (
            <Grid key={service.title} size={{ xs: 12, sm: 6, lg: 4 }}>
              <CateringCard service={service} index={index} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box component="section" className="section" sx={{ bgcolor: "rgba(245,230,204,0.42)" }}>
        <SectionIntro
          eyebrow="Process"
          title="A calm path from first call to final serving"
        />
        <Grid container spacing={2.5}>
          {processSteps.map((step, index) => (
            <Grid key={step} size={{ xs: 12, sm: 6, lg: 2.4 }}>
              <SectionReveal delay={index * 0.05}>
                <Box
                  sx={{
                    bgcolor: "rgba(255,252,245,0.9)",
                    border: "1px solid rgba(62,39,35,0.1)",
                    borderRadius: 2,
                    height: "100%",
                    minHeight: 180,
                    p: 3,
                    position: "relative",
                  }}
                >
                  <Typography sx={{ color: "warning.main", fontFamily: "var(--font-heading)", fontSize: "2.7rem", fontWeight: 800, lineHeight: 1 }}>
                    0{index + 1}
                  </Typography>
                  <Typography variant="h5" color="primary.main" sx={{ mt: 2 }}>
                    {step}
                  </Typography>
                </Box>
              </SectionReveal>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box component="section" className="section">
        <SectionIntro
          eyebrow="Catering Gallery"
          title="Food, flow, and serving moments"
        />
        <MediaGallery preview />
      </Box>

      <Box component="section" className="section-tight">
        <StatsCounter />
      </Box>

      <Box
        component="section"
        className="section"
        sx={{
          background:
            "linear-gradient(120deg, rgba(42,23,20,0.92), rgba(122,31,31,0.88)), url(https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=85)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          color: "background.default",
        }}
      >
        <SectionReveal sx={{ textAlign: "center" }}>
          <Typography className="eyebrow" sx={{ color: "warning.main" }}>
            Inquiry
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: "2.5rem", md: "5rem" } }}>
            Tell us the occasion. We will shape the menu.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ justifyContent: "center", mt: 4 }}>
            <AnimatedButton href="/contact" variant="contained" glow>
              Start Catering Inquiry
            </AnimatedButton>
            <AnimatedButton
              href="/menu"
              variant="outlined"
              sx={{ borderColor: "rgba(255,248,237,0.42)", color: "background.default" }}
            >
              View Menu
            </AnimatedButton>
          </Stack>
        </SectionReveal>
      </Box>
    </main>
  );
}
