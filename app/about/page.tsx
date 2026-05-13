import type { Metadata } from "next";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { FloatingCoverImage } from "@/components/FloatingCoverImage";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";
import { SectionReveal } from "@/components/Motion";
import { storyTimeline } from "@/lib";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About Us | Virundhaalaya Family Tamil Kitchen",
  description:
    "Meet Virundhaalaya, a Coimbatore Tamil homemade food and catering kitchen rooted in family recipes, hygiene, fresh ingredients, and traditional preparation.",
  path: "/about",
});

const reasons = [
  "Recipes carried through family kitchens",
  "Fresh daily cooking without preservatives",
  "Separate planning for veg and non-veg menus",
  "Premium event coordination with homemade warmth",
  "Traditional vessels, slow tempering, and hand-ground masalas",
  "Meals designed for elders, children, teams, and celebrations",
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Family Story"
        title="A Tamil kitchen built on love, memory, and patience"
        copy="Virundhaalaya exists for people who miss food that tastes cared for: the kind served at home, at festivals, and at family tables where everyone is asked to eat one more spoon."
        image="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1800&q=85"
      />

      <Box component="section" className="section">
        <Grid container spacing={{ xs: 4, md: 8 }} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <SectionReveal>
              <Typography className="eyebrow">Cooking Philosophy</Typography>
              <Typography variant="h2" sx={{ color: "primary.main", fontSize: { xs: "2.5rem", md: "4.6rem" } }}>
                Handmade food should feel generous, honest, and beautifully timed.
              </Typography>
              <Typography sx={{ color: "text.secondary", fontSize: "1.08rem", lineHeight: 1.9, mt: 3 }}>
                We treat every order as hospitality. Rice must be warm. Sambar
                must taste layered. Chutney must feel fresh. Catering must feel
                calm for the host. That is our standard, whether it is ten lunch
                boxes or a wedding virundhu.
              </Typography>
            </SectionReveal>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <SectionReveal delay={0.1}>
              <Box sx={{ borderRadius: 2, minHeight: { xs: 380, md: 560 }, overflow: "hidden", position: "relative" }}>
                <FloatingCoverImage
                  alt="Traditional Tamil cooking process"
                  sizes="(max-width: 900px) 100vw, 50vw"
                  src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=85"
                />
              </Box>
            </SectionReveal>
          </Grid>
        </Grid>
      </Box>

      <Box component="section" className="section" sx={{ bgcolor: "rgba(245,230,204,0.42)" }}>
        <SectionIntro
          eyebrow="Why Choose Us"
          title="Traditional preparation with modern kitchen discipline"
        />
        <Grid container spacing={2.5}>
          {reasons.map((reason, index) => (
            <Grid key={reason} size={{ xs: 12, md: 6, lg: 4 }}>
              <SectionReveal delay={index * 0.04}>
                <Stack
                  direction="row"
                  spacing={1.5}
                  sx={{
                    bgcolor: "rgba(255,252,245,0.88)",
                    border: "1px solid rgba(62,39,35,0.1)",
                    borderRadius: 2,
                    boxShadow: "0 20px 60px rgba(62,39,35,0.07)",
                    height: "100%",
                    p: 3,
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: "secondary.main",
                      borderRadius: "50%",
                      flex: "0 0 auto",
                      height: 12,
                      mt: 0.65,
                      width: 12,
                    }}
                  />
                  <Typography sx={{ fontWeight: 800, lineHeight: 1.55 }}>{reason}</Typography>
                </Stack>
              </SectionReveal>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box component="section" className="section">
        <SectionIntro
          eyebrow="Timeline"
          title="From neighborhood meals to celebration catering"
          copy="A simple family kitchen grew by doing one thing consistently: serving Tamil food that people trusted."
        />
        <Grid container spacing={3}>
          {storyTimeline.map((item, index) => (
            <Grid key={item.year} size={{ xs: 12, md: 3 }}>
              <SectionReveal delay={index * 0.06}>
                <Box
                  sx={{
                    borderLeft: "3px solid",
                    borderColor: "warning.main",
                    bgcolor: "rgba(255,252,245,0.88)",
                    borderRadius: 2,
                    boxShadow: "0 20px 60px rgba(62,39,35,0.07)",
                    minHeight: 250,
                    p: 3,
                  }}
                >
                  <Typography sx={{ color: "secondary.main", fontWeight: 900 }}>{item.year}</Typography>
                  <Typography variant="h5" sx={{ color: "primary.main", mt: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: "text.secondary", lineHeight: 1.75, mt: 1 }}>
                    {item.copy}
                  </Typography>
                </Box>
              </SectionReveal>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box component="section" className="section" sx={{ bgcolor: "#2A1714", color: "background.default" }}>
        <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <SectionReveal>
              <Typography className="eyebrow" sx={{ color: "warning.main" }}>
                Kitchen Visuals
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: "2.4rem", md: "4.2rem" } }}>
                The team cooks with quiet rhythm and family attention.
              </Typography>
            </SectionReveal>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Grid container spacing={2}>
              {[
                "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=85",
                "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=85",
                "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=85",
              ].map((src) => (
                <Grid key={src} size={{ xs: 12, sm: 4 }}>
                  <Box sx={{ borderRadius: 2, height: { xs: 260, sm: 360 }, overflow: "hidden", position: "relative" }}>
                    <FloatingCoverImage
                      alt="Virundhaalaya kitchen team visual"
                      sizes="33vw"
                      src={src}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}
