export const siteConfig = {
  name: "Virundhaalaya",
  tagline: "Premium Tamil hospitality, crafted with heritage",
  description:
    "Premium authentic Indian cuisine, Tamil heritage menus, refined catering, festive dining, and warm hospitality experiences in Coimbatore.",
  url: "https://example.com",
  locale: "en_IN",
  keywords: [
    "Homemade food in Coimbatore",
    "Traditional Tamil food delivery",
    "Home catering services",
    "Authentic South Indian homemade meals",
  ],
} as const;

export const businessConfig = {
  phone: "+91 00000 00000",
  whatsapp: "+910000000000",
  email: "hello@example.com",
  address: {
    street: "Coimbatore",
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
  primary: "#c66824",
  secondary: "#533320",
  accent: "#D4A24C",
  background: "#F8F3EA",
  surface: "#FFFDF8",
  text: "#1F1A17",
} as const;
