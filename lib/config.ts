export const siteConfig = {
  name: "Virundhaalaya",
  tagline: "Taste of Amma's Kitchen",
  description:
    "Authentic homemade Tamil food, traditional meals delivery, and premium family catering in Coimbatore made with love, hygiene, and heritage recipes.",
  url: "https://virundhaalaya.com",
  locale: "en_IN",
  keywords: [
    "Homemade food in Coimbatore",
    "Tamil homemade catering",
    "Traditional meals delivery",
    "South Indian homemade food",
    "cloud kitchen",
    "cloudkitchen india",
    "cloud kitchen tamilnadu",
    "event foods",
    "family event foods",
    "cooking with love",
    "Tasty food",
    "Traditional Tamil food delivery",
    "Authentic South Indian homemade meals",
  ],
} as const;

export const businessConfig = {
  phone: "+91 8695383239",
  whatsapp: "8695383239",
  email: "hello@virundhaalaya.com",
  address: {
    street: "Peelamedu",
    city: "Coimbatore",
    region: "Tamil Nadu",
    postalCode: "641001",
    country: "IN",
  },
  socialLinks: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },
} as const;

export const themeColors = {
  primary: "#7A1F1F",
  secondary: "#4F772D",
  accent: "#D4A017",
  background: "#FFF8ED",
  surface: "#F5E6CC",
  text: "#3E2723",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Catering", href: "/catering" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;
