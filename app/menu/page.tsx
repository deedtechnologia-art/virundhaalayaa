import type { Metadata } from "next";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { FoodCard } from "@/components/FoodCard";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";
import { businessConfig, menuItems } from "@/lib";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Menu | Virundhaalaya Tamil Homemade Food",
  description:
    "Explore Virundhaalaya's homemade Tamil food menu with breakfast, lunch, dinner, snacks and catering specials in Coimbatore.",
  path: "/menu",
});

const categories = ["Breakfast", "Lunch", "Dinner", "Snacks", "Catering Specials"] as const;

export default function MenuPage() {
  return (
    <main>
      <PageHero
        eyebrow="Premium Homemade Menu"
        title="Traditional meals, tiffin, and family/corporate feasts"
        copy="Around fifty Tamil kitchen favorites, organized for everyday cravings and memorable occasions."
        image="https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=1800&q=85"
        primaryLabel="Order on WhatsApp"
        primaryHref={`https://wa.me/${businessConfig.whatsapp}`}
        secondaryLabel="Book Catering"
        secondaryHref="/catering"
      />
      <Box component="section" className="section">
        <SectionIntro
          eyebrow="The Complete Spread"
          title="Choose by meal, mood, or celebration"
          copy="Prices are sample starting points and can vary by quantity, season, and custom event planning."
        />
        <Stack spacing={7}>
          {categories.map((category) => {
            const items = menuItems.filter((item) => item.category === category);

            return (
              <Box component="section" key={category}>
                <Container maxWidth="xl" disableGutters>
                  <Typography
                    component="h2"
                    variant="h3"
                    sx={{ color: "primary.main", fontSize: { xs: "2rem", md: "3rem" }, mb: 3 }}
                  >
                    {category}
                  </Typography>
                  <Grid container spacing={3}>
                    {items.map((item) => (
                      <Grid key={item.name} size={{ xs: 12, sm: 6, lg: 4 }}>
                        <FoodCard item={item} />
                      </Grid>
                    ))}
                  </Grid>
                </Container>
              </Box>
            );
          })}
        </Stack>
      </Box>
    </main>
  );
}
