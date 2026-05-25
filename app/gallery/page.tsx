import type { Metadata } from "next";
import { Box } from "@mui/material";
import { MediaGallery } from "@/components/MediaGallery";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Gallery | Virundhaalaya Kitchen, Food and Catering",
  description:
    "Explore Virundhaalaya's Tamil food gallery with kitchen visuals, cooking process, heirloom vessels, fresh ingredients, banana leaf serving, and catering moments.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <main>
      <PageHero
        eyebrow="Kitchen Gallery"
        title="The hands, vessels, ingredients, and serving moments"
        copy="A cinematic look at the food before it reaches your table: prep, tempering, banana leaf serving, catering flow, and the quiet rhythm of a Tamil kitchen."
        image="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1800&q=85"
      />
      <Box component="section" className="section">
        <SectionIntro
          eyebrow="Behind the Scenes"
          title="A masonry story of homemade Tamil food"
          copy="Tap any image to open a full-screen lightbox with a closer view."
        />
        <MediaGallery />
      </Box>
    </main>
  );
}
