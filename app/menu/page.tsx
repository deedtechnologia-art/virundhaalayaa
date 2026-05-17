import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PremiumMenuExperience } from "@/components/PremiumMenuExperience";
import { businessConfig } from "@/lib";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Menu | Virundhaalaya Tamil Homemade Food",
  description:
    "Explore Virundhaalaya's homemade Tamil food menu with breakfast, lunch, dinner, snacks and catering specials in Coimbatore.",
  path: "/menu",
});

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
      <PremiumMenuExperience />
    </main>
  );
}
