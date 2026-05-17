import type { Metadata } from "next";
import { businessConfig, siteConfig } from "./config";

const baseUrl = new URL(siteConfig.url);
const ogImage =
  "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=1600&q=85";

type PageSeo = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function createMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}: PageSeo): Metadata {
  const url = new URL(path, baseUrl).toString();

  return {
    title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    metadataBase: baseUrl,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1600,
          height: 900,
          alt: "Traditional Tamil homemade food",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": ["Restaurant", "LocalBusiness"],
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: businessConfig.phone,
  email: businessConfig.email,
  image: ogImage,
  servesCuisine: ["Tamil", "South Indian", "Homemade Food", "Catering"],
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: businessConfig.address.street,
    addressLocality: businessConfig.address.city,
    addressRegion: businessConfig.address.region,
    postalCode: businessConfig.address.postalCode,
    addressCountry: businessConfig.address.country,
  },
  sameAs: [businessConfig.socialLinks.instagram, businessConfig.socialLinks.facebook],
  potentialAction: {
    "@type": "OrderAction",
    target: `https://wa.me/${businessConfig.whatsapp}`,
  },
};
