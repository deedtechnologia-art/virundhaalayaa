import type { Metadata, Viewport } from "next";
import { Noto_Sans_Tamil, Noto_Serif_Tamil, Playfair_Display, Poppins } from "next/font/google";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { PremiumNavbar } from "@/components/PremiumNavbar";
import { ThemeRegistry } from "@/components/ThemeRegistry";
import { businessConfig } from "@/lib";
import { createMetadata, restaurantSchema } from "@/lib/seo";
import "./globals.css";

const headingFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700", "800"],
  display: "swap",
});

const bodyFont = Poppins({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const tamilSerifFont = Noto_Serif_Tamil({
  subsets: ["tamil"],
  variable: "--font-tamil-serif",
  weight: ["400", "500", "600"],
  display: "swap",
});

const tamilSansFont = Noto_Sans_Tamil({
  subsets: ["tamil"],
  variable: "--font-tamil-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = createMetadata({
  title: "Virundhaalaya | Authentic Tamil Homemade Food in Coimbatore",
  description:
    "Traditional Tamil homemade food, daily meals, cloud kitchen delivery, and premium catering for weddings, family events, and corporate lunches in Coimbatore.",
});

export const viewport: Viewport = {
  themeColor: "#7A1F1F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${headingFont.variable} ${bodyFont.variable} ${tamilSerifFont.variable} ${tamilSansFont.variable}`} lang="ta-IN">
      <body>
        <ThemeRegistry>
          <JsonLd data={restaurantSchema} />
          <PremiumNavbar />
          {children}
          <Footer />
          <a
            aria-label="Order on WhatsApp"
            className="floating-whatsapp"
            href={`https://wa.me/${businessConfig.whatsapp}`}
            rel="noreferrer"
            target="_blank"
          >
            WhatsApp
          </a>
        </ThemeRegistry>
      </body>
    </html>
  );
}
