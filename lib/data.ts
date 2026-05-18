import {ChefHat,ScrollText,Leaf,Flame,Wheat} from "lucide-react";
export type FoodKind = "Veg" | "Non-Veg";

export type MenuItem = {
  name: string;
  category: "Catering Specials" | "Breakfast" | "Lunch" | "Dinner" | "Snacks";
  description: string;
  kind: FoodKind;
  image: string;
  price?: string;
  popular?: boolean;
};

export const heroImage =
  "/images/hero/virundhaalaya-hero.webp";

export const trustHighlights = [
  {
    title: "Freshly Prepared Daily",
    icon: ChefHat,
  },
  {
    title: "Authentic Tamil Recipes",
    icon: ScrollText,
  },
  {
    title: "No Artificial Preservatives",
    icon: Leaf,
  },
  {
    title: "Woodfire Hygienic Kitchen",
    icon: Flame,
  },
  {
    title: "Quality Farm Ingredients",
    icon: Wheat,
  },
] as const;

export const popularFoods = [
  "Senior Care",
  "Birthday Events",
  "Corporate/Office Events",
  "Family Gatherings",
  "Sunday Saapadu",
  "Lunch Box",
  "Kattu Soaru",
  "Side Dishes"
] as const;

export const menuItems: MenuItem[] = [
  {
    name: "Soft Idli",
    category: "Breakfast",
    description: "Steamed rice cakes with coconut chutney and sambar.",
    kind: "Veg",
    image: "",
    popular: true,
  },
  {
    name: "Ghee Dosa",
    category: "Breakfast",
    description: "Crisp fermented dosa finished with fragrant ghee.",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1694849789325-914b71ab4075?auto=format&fit=crop&w=900&q=85",
    popular: true,
  },
  {
    name: "Ven Pongal",
    category: "Breakfast",
    description: "Pepper, cumin, moong dal, and cashew comfort bowl.",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1630409351217-bc4fa6422075?auto=format&fit=crop&w=900&q=85",
    popular: true,
  },
  {
    name: "Rava Upma",
    category: "Breakfast",
    description: "Roasted semolina, vegetables, curry leaves, and ghee.",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1617692855027-33b14f061079?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Poori Masala",
    category: "Breakfast",
    description: "Puffed pooris with turmeric potato masala.",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Kuzhi Paniyaram",
    category: "Breakfast",
    description: "Crisp-edged paniyaram with tomato chutney.",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Adai Avial",
    category: "Breakfast",
    description: "Protein-rich lentil dosa with coconut vegetable avial.",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Kambu Koozh",
    category: "Breakfast",
    description: "Pearl millet porridge with shallots and curd.",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Tamil Nadu Meals",
    category: "Lunch",
    description: "Rice, sambar, rasam, poriyal, kootu, appalam, and curd.",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
    popular: true,
  },
  {
    name: "Chicken Biriyani",
    category: "Lunch",
    description: "Seeraga samba rice, country spices, and tender chicken.",
    kind: "Non-Veg",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=900&q=85",
    popular: true,
  },
  {
    name: "Mutton Biriyani",
    category: "Lunch",
    description: "Slow-cooked mutton biriyani with hand-ground masala.",
    kind: "Non-Veg",
    image: "",
    popular: true,
  },
  {
    name: "Lemon Rice",
    category: "Lunch",
    description: "Bright lemon rice with peanuts, turmeric, and curry leaves.",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=900&q=85",
    popular: true,
  },
  {
    name: "Curd Rice",
    category: "Lunch",
    description: "Cooling curd rice with pomegranate and tempered mustard.",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1630409351241-e90b7f5c3591?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Sambar Sadam",
    category: "Lunch",
    description: "Home-style sambar rice with vegetables and ghee.",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Kara Kuzhambu Rice",
    category: "Lunch",
    description: "Tangy tamarind gravy rice with brinjal and garlic.",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Fish Curry Meals",
    category: "Lunch",
    description: "Coastal fish curry, rice, poriyal, rasam, and curd.",
    kind: "Non-Veg",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Egg Podimas Rice",
    category: "Lunch",
    description: "Peppery scrambled egg served with rice and rasam.",
    kind: "Non-Veg",
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Parotta Kurma",
    category: "Dinner",
    description: "Layered parotta with coconut vegetable kurma.",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=900&q=85",
    popular: true,
  },
  {
    name: "Kothu Parotta",
    category: "Dinner",
    description: "Chopped parotta tossed with spices and onion salna.",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Chicken Kothu Parotta",
    category: "Dinner",
    description: "Street-style kothu with shredded chicken and egg.",
    kind: "Non-Veg",
    image: "https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Chettinad Chicken",
    category: "Dinner",
    description: "Bold pepper, fennel, and roasted coconut chicken curry.",
    kind: "Non-Veg",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85",
    popular: true,
  },
  {
    name: "Dosa with Kari Kuzhambu",
    category: "Dinner",
    description: "Crisp dosa with village-style mutton gravy.",
    kind: "Non-Veg",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Idiyappam Stew",
    category: "Dinner",
    description: "String hoppers with mild coconut vegetable stew.",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Appam with Kurma",
    category: "Dinner",
    description: "Soft-centered appam with aromatic kurma.",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1617692855027-33b14f061079?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Pepper Mutton Chukka",
    category: "Dinner",
    description: "Dry-roasted mutton with black pepper and curry leaves.",
    kind: "Non-Veg",
    image: "https://images.unsplash.com/photo-1604908177453-7462950a6a3b?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Medhu Vadai",
    category: "Snacks",
    description: "Crispy lentil vadai with coconut chutney.",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1626500155537-93690c24099e?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Masala Vadai",
    category: "Snacks",
    description: "Chana dal fritters with onion, fennel, and mint.",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Sundal",
    category: "Snacks",
    description: "Temple-style chickpeas with coconut and mustard.",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Banana Bajji",
    category: "Snacks",
    description: "Golden plantain fritters with house chilli chutney.",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1617692855027-33b14f061079?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Murukku",
    category: "Snacks",
    description: "Rice flour spirals with sesame and cumin.",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1605197183305-6ddca27249d4?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Chicken Cutlet",
    category: "Snacks",
    description: "Spiced chicken and potato cutlets with mint chutney.",
    kind: "Non-Veg",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=900&q=85",
  },

  {
    name: "Banana Leaf Virundhu",
    category: "Catering Specials",
    description: "Full-course feast with welcome drinks and sweets.",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Seemantham Feast",
    category: "Catering Specials",
    description: "Auspicious Tamil menu designed for intimate family rituals.",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Birthday Mini Buffet",
    category: "Catering Specials",
    description: "Kid-friendly tiffin, rice, sweets, and live counter options.",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Corporate Lunch Box",
    category: "Catering Specials",
    description: "Balanced office meals packed neatly for repeat orders.",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Festival Sweets Hamper",
    category: "Catering Specials",
    description: "Traditional sweets and savories packed for gifting.",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1605197183305-6ddca27249d4?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Housewarming Breakfast",
    category: "Catering Specials",
    description: "Idli, pongal, dosa, vadai, chutneys, sambar, and filter coffee.",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Non-Veg Family Combo",
    category: "Catering Specials",
    description: "Biriyani, chicken gravy, boiled egg, raita, and sweet.",
    kind: "Non-Veg",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Live Dosa Counter",
    category: "Catering Specials",
    description: "Made-to-order dosa station with chutneys and podi.",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1694849789325-914b71ab4075?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Traditional Millet Spread",
    category: "Catering Specials",
    description: "Kambu, ragi, thinai, and saamai dishes for health-focused events.",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Chettinad Feast",
    category: "Catering Specials",
    description: "Pepper chicken, mutton chukka, biriyani, salna, and parotta.",
    kind: "Non-Veg",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85",
  },
];

export const stats = [
  { value: 7000, suffix: "+", label: "Deliveries Completed" },
  { value: 5000, suffix: "+", label: "Happy Customers" },
  { value: 50, suffix: "+", label: "Catering Events" },
  { value: 7, suffix: "+", label: "Years of Tradition" },
] as const;

export const testimonials = [
  {
    name: "Priya Raman",
    role: "Wedding Host",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
    quote:
      "The banana leaf virundhu felt exactly like a family kitchen, but the service was polished and calm. Every guest asked who cooked the sambar.",
  },
  {
    name: "Arun Kumar",
    role: "Corporate Lunch Client",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    quote:
      "Our team lunch arrived hot, neatly packed, and full of home-style flavor. It never felt oily or commercial.",
  },
  {
    name: "Meena Subramaniam",
    role: "Family Event Host",
    rating: 5,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
    quote:
      "Their Chettinad chicken and sweet pongal were the talk of our housewarming. It felt personal, generous, and beautifully managed.",
  },
  {
    name: "Vikram S",
    role: "Birthday Catering",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
    quote:
      "The food had soul. The kids loved the dosa counter, and the elders kept saying it tasted like proper home food.",
  },
] as const;

export const galleryImages = [
  {
    title: "Banana Leaf Serving",
    category: "Serving",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=85",
    height: 440,
  },
  {
    title: "Fresh Tempering",
    category: "Cooking Process",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=85",
    height: 560,
  },
  {
    title: "Traditional Vessels",
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=85",
    height: 380,
  },
  {
    title: "Morning Tiffin",
    category: "Breakfast",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1000&q=85",
    height: 520,
  },
  {
    title: "Handpicked Spices",
    category: "Ingredients",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=85",
    height: 420,
  },
  {
    title: "Family Event Spread",
    category: "Catering",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=85",
    height: 520,
  },
  {
    title: "Biriyani Batch",
    category: "Behind the Scenes",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=1000&q=85",
    height: 400,
  },
  {
    title: "Team Prep",
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=85",
    height: 560,
  },
] as const;

export type CateringService = {
  title: string;
  slug: string;
  copy: string;
  image: string;
  specialties: string[];
};

export const cateringServices: CateringService[] = [
  {
    title: "Senior Care Meals",
    slug: "senior-care",
    copy: "Gentle, easy-to-digest meals tailored for elders, prepared with less oil, zero artificial ingredients, and mild spices.",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=85",
    specialties: ["Mild Spices", "Soft Cooked", "Daily Delivery", "Custom Diet"],
  },
  {
    title: "Birthday Events",
    slug: "birthday-events",
    copy: "Comforting family menus with live dosa counters, sweets, snacks, and kid-friendly portions.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=85",
    specialties: ["Live Dosa Counter", "Kid-friendly", "Custom Sweets", "Mini Buffet"],
  },
  {
    title: "Corporate Catering",
    slug: "corporate-events",
    copy: "Neatly packed meals and buffets that keep office lunches warm, hygienic, and dependable.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=900&q=85",
    specialties: ["Buffet Setup", "Lunch Boxes", "Timely Delivery", "Bulk Orders"],
  },
  {
    title: "Family Gatherings",
    slug: "family-gatherings",
    copy: "Hearty, traditional spreads perfect for weekend family meetups, bursting with authentic homemade flavors.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
    specialties: ["Banana Leaf Service", "Grand Feasts", "Custom Menus", "Traditional Taste"],
  },
  {
    title: "Sunday Saapadu",
    slug: "sunday-saapadu",
    copy: "The classic Sunday non-veg feast featuring rich gravies, biriyani, and sides, just like Amma makes.",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=900&q=85",
    specialties: ["Mutton Biriyani", "Nattu Kozhi", "Meen Kuzhambu", "Weekend Special"],
  },
  {
    title: "Lunch Box",
    slug: "lunch-box",
    copy: "Perfectly portioned daily meals with a healthy balance of rice, poriyal, kootu, and traditional curries.",
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=900&q=85",
    specialties: ["Daily Subscriptions", "Eco-friendly Pack", "Balanced Diet", "Freshly Made"],
  },
  {
    title: "Kattu Soaru",
    slug: "kattu-soaru",
    copy: "Traditional travel-friendly mixed rice varieties packed in banana leaves for long-lasting freshness.",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=900&q=85",
    specialties: ["Travel Friendly", "Banana Leaf Packed", "Variety Rice", "Long Shelf Life"],
  },
  {
    title: "Side Dishes",
    slug: "side-dishes",
    copy: "Authentic Chettinad and village-style side dishes to perfectly complement your home-cooked meals.",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85",
    specialties: ["Pepper Chukka", "Chicken 65", "Fish Fry", "Veg Poriyal"],
  },
  {
    title: "Wedding Catering",
    slug: "wedding-catering",
    copy: "Ceremonial banana leaf feasts, premium buffet layouts, and graceful service for large guest counts.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=85",
    specialties: ["Grand Virundhu", "Welcome Drinks", "Premium Service", "Sweets & Desserts"],
  },
  {
    title: "Festival Catering",
    slug: "festival-catering",
    copy: "Pongal, Deepavali, Tamil New Year, and temple-style menus with sweets and savories.",
    image: "https://images.unsplash.com/photo-1605197183305-6ddca27249d4?auto=format&fit=crop&w=900&q=85",
    specialties: ["Temple Recipes", "Traditional Sweets", "Bulk Snacks", "Auspicious Menus"],
  },
  {
    title: "Seemantham",
    slug: "seemantham",
    copy: "Auspicious home-style spreads planned with gentle flavors, rituals, and elder-friendly service.",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=900&q=85",
    specialties: ["Ritual Foods", "Gentle Spices", "Variety Rice", "Family Style"],
  },
  {
    title: "Housewarming",
    slug: "housewarming",
    copy: "Early-morning breakfast and lunch packages for pooja days, family visits, and new beginnings.",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=900&q=85",
    specialties: ["Early Morning Delivery", "Idli & Pongal", "Filter Coffee", "Pooja Specials"],
  },
];

export const processSteps = [
  "Share event details",
  "Taste and finalize menu",
  "Ingredient planning",
  "Fresh cooking",
  "Warm delivery and service",
] as const;

export const storyTimeline = [
  { year: "2008", title: "Family Kitchen Begins", copy: "Recipes were first cooked for neighbors and relatives who missed everyday Tamil home food." },
  { year: "2014", title: "Catering for Celebrations", copy: "The kitchen grew into intimate events, poojas, birthdays, and office lunches." },
  { year: "2020", title: "Cloud Kitchen Discipline", copy: "Daily operations became more structured with hygiene checklists and reliable delivery." },
  { year: "Today", title: "Tradition Served Fresh", copy: "Virundhaalaya now brings handmade Tamil food to homes, offices, and family events across Coimbatore." },
] as const;

export const faqs = [
  {
    question: "Do you take same-day orders?",
    answer: "Yes, selected daily meals and tiffin items are available on same-day preorder depending on kitchen capacity.",
  },
  {
    question: "Can you customize spice levels?",
    answer: "Absolutely. We can prepare elder-friendly, kid-friendly, mild, medium, or spicy menus for families and events.",
  },
  {
    question: "Do you offer veg and non-veg catering?",
    answer: "Yes. We plan separate menus, prep flows, and packaging for vegetarian and non-vegetarian orders.",
  },
  {
    question: "Which areas do you serve?",
    answer: "We primarily serve Coimbatore and nearby locations. Larger catering events can be planned outside the city by request.",
  },
] as const;
