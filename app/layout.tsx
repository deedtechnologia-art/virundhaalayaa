import type { Metadata } from "next";
import { businessConfig, siteConfig } from "@/lib";
import "./globals.css";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Premium Authentic Indian Cuisine`,
  description: siteConfig.description,
};

const navLinks = [
  ["Menu", "#menu"],
  ["About", "#about"],
  ["Catering", "#catering"],
  ["Testimonials", "#testimonials"],
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="navbar">
          <a className="brand" href="#home" aria-label={`${siteConfig.name} home`}>
            <span className="brand-mark">V</span>
            <span>
              <strong>{siteConfig.name}</strong>
              <small>Authentic Indian Cuisine</small>
            </span>
          </a>
          <nav aria-label="Primary navigation">
            {navLinks.map(([label, href]) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
          </nav>
          <a className="nav-cta" href={`tel:${businessConfig.phone}`}>
            Reserve
          </a>
        </header>
        {children}
        <footer className="footer">
          <div className="footer-brand">
            <span className="brand-mark">V</span>
            <div>
              <strong>{siteConfig.name}</strong>
              <p>{siteConfig.tagline}</p>
            </div>
          </div>
          <div className="footer-links">
            <a href={`mailto:${businessConfig.email}`}>{businessConfig.email}</a>
            <a href={`tel:${businessConfig.phone}`}>{businessConfig.phone}</a>
            <span>{businessConfig.address.city}, {businessConfig.address.region}</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
