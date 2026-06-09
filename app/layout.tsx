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
  title: "Virundhaalaya | Authentic South Indian Homemade Food in Coimbatore",
  description:
    "Handcrafted South Indian cuisine, daily meals, cloud kitchen delivery, and premium catering for weddings, family events, and corporate lunches in Coimbatore.",
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
            <svg
              aria-hidden="true"
              className="floating-whatsapp__icon"
              viewBox="0 0 24 24"
            >
              <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91a9.86 9.86 0 0 0-2.91-7.01Zm-7.01 15.24h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.39c0-4.55 3.7-8.25 8.25-8.25a8.2 8.2 0 0 1 5.83 2.42 8.2 8.2 0 0 1 2.42 5.84c-.01 4.54-3.71 8.23-8.26 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.78.98-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.38-1.73-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.76-1.85-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.16 1.73 2.64 4.19 3.7.59.25 1.04.4 1.4.52.59.19 1.12.16 1.55.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.14-1.18-.06-.1-.22-.16-.47-.28Z" />
            </svg>
            <span>WhatsApp</span>
          </a>
        </ThemeRegistry>
      </body>
    </html>
  );
}
