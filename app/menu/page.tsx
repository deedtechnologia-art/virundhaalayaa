import type { Metadata } from "next";
import { Suspense } from "react";
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
        title="Meals served with love, comfort, and authentic village-style flavors"
        copy="Traditionally made south indian dishes, organized for everyday cravings and memorable occasions."
        image="https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=1800&q=85"
        primaryLabel="Order on WhatsApp"
        primaryHref={`https://wa.me/${businessConfig.whatsapp}`}
        secondaryLabel="Book Catering"
        secondaryHref="/catering"
      />
      <Suspense fallback={null}>
        <PremiumMenuExperience />
      </Suspense>
    </main>
  );
}
