import type { Metadata } from "next";
import { Box } from "@mui/material";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";
import { TestimonialCards, VideoTestimonials } from "@/components/TestimonialCards";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Reviews | Virundhaalaya Customer Testimonials",
  description:
    "Read customer reviews for Virundhaalaya's homemade Tamil meals, biriyani, family event food, and catering service in Coimbatore.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Reviews"
        title="Warm words from families and event hosts"
        copy="Real-feeling notes from people who trusted us with office meals, wedding feasts, housewarming lunches, and everyday comfort food."
        image="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1800&q=85"
      />
      <Box component="section" className="section">
        <SectionIntro
          eyebrow="Customer Stories"
          title="Homemade taste, professional service"
        />
        <TestimonialCards />
      </Box>
      <Box component="section" className="section" sx={{ bgcolor: "rgba(245,230,204,0.42)" }}>
        <SectionIntro
          eyebrow="Video Notes"
          title="Moments from our guest tables"
          copy="Placeholder cards are ready for short customer videos, wedding clips, and event recaps."
        />
        <VideoTestimonials />
      </Box>
    </main>
  );
}
