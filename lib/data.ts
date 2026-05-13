export type FoodKind = "Veg" | "Non-Veg";

export type MenuItem = {
  name: string;
  category: "Breakfast" | "Lunch" | "Dinner" | "Snacks" | "Sweets" | "Catering Specials";
  description: string;
  price: string;
  kind: FoodKind;
  image: string;
  popular?: boolean;
};

export const heroImage =
  "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=1800&q=85";

export const trustHighlights = [
  { title: "Homemade", copy: "Small-batch cooking with patient hands and family recipes." },
  { title: "No Preservatives", copy: "Freshly prepared food without shortcuts or artificial boosters." },
  { title: "Hygienic Kitchen", copy: "Clean prep zones, measured storage, and disciplined service." },
  { title: "Traditional Recipes", copy: "Tamil flavors shaped by stone-ground masalas and slow tempering." },
  { title: "Fresh Ingredients", copy: "Daily vegetables, fragrant spices, and trusted local sourcing." },
] as const;

export const popularFoods = [
  "Chicken Biriyani",
  "Mutton Biriyani",
  "Meals",
  "Idli",
  "Dosa",
  "Pongal",
  "Lemon Rice",
  "Parotta",
  "Chettinad Chicken",
  "Sweet Pongal",
] as const;

export const menuItems: MenuItem[] = [
  {
    name: "Soft Idli",
    category: "Breakfast",
    description: "Steamed rice cakes with coconut chutney and sambar.",
    price: "₹45",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=900&q=85",
    popular: true,
  },
  {
    name: "Ghee Dosa",
    category: "Breakfast",
    description: "Crisp fermented dosa finished with fragrant ghee.",
    price: "₹75",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1694849789325-914b71ab4075?auto=format&fit=crop&w=900&q=85",
    popular: true,
  },
  {
    name: "Ven Pongal",
    category: "Breakfast",
    description: "Pepper, cumin, moong dal, and cashew comfort bowl.",
    price: "₹70",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1630409351217-bc4fa6422075?auto=format&fit=crop&w=900&q=85",
    popular: true,
  },
  {
    name: "Rava Upma",
    category: "Breakfast",
    description: "Roasted semolina, vegetables, curry leaves, and ghee.",
    price: "₹60",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1617692855027-33b14f061079?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Poori Masala",
    category: "Breakfast",
    description: "Puffed pooris with turmeric potato masala.",
    price: "₹80",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Kuzhi Paniyaram",
    category: "Breakfast",
    description: "Crisp-edged paniyaram with tomato chutney.",
    price: "₹85",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Adai Avial",
    category: "Breakfast",
    description: "Protein-rich lentil dosa with coconut vegetable avial.",
    price: "₹95",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Kambu Koozh",
    category: "Breakfast",
    description: "Pearl millet porridge with shallots and curd.",
    price: "₹55",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Tamil Nadu Meals",
    category: "Lunch",
    description: "Rice, sambar, rasam, poriyal, kootu, appalam, and curd.",
    price: "₹130",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
    popular: true,
  },
  {
    name: "Chicken Biriyani",
    category: "Lunch",
    description: "Seeraga samba rice, country spices, and tender chicken.",
    price: "₹190",
    kind: "Non-Veg",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=900&q=85",
    popular: true,
  },
  {
    name: "Mutton Biriyani",
    category: "Lunch",
    description: "Slow-cooked mutton biriyani with hand-ground masala.",
    price: "₹280",
    kind: "Non-Veg",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=85",
    popular: true,
  },
  {
    name: "Lemon Rice",
    category: "Lunch",
    description: "Bright lemon rice with peanuts, turmeric, and curry leaves.",
    price: "₹85",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=900&q=85",
    popular: true,
  },
  {
    name: "Curd Rice",
    category: "Lunch",
    description: "Cooling curd rice with pomegranate and tempered mustard.",
    price: "₹75",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1630409351241-e90b7f5c3591?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Sambar Sadam",
    category: "Lunch",
    description: "Home-style sambar rice with vegetables and ghee.",
    price: "₹95",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Kara Kuzhambu Rice",
    category: "Lunch",
    description: "Tangy tamarind gravy rice with brinjal and garlic.",
    price: "₹110",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Fish Curry Meals",
    category: "Lunch",
    description: "Coastal fish curry, rice, poriyal, rasam, and curd.",
    price: "₹230",
    kind: "Non-Veg",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Egg Podimas Rice",
    category: "Lunch",
    description: "Peppery scrambled egg served with rice and rasam.",
    price: "₹145",
    kind: "Non-Veg",
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Parotta Kurma",
    category: "Dinner",
    description: "Layered parotta with coconut vegetable kurma.",
    price: "₹95",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=900&q=85",
    popular: true,
  },
  {
    name: "Kothu Parotta",
    category: "Dinner",
    description: "Chopped parotta tossed with spices and onion salna.",
    price: "₹130",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Chicken Kothu Parotta",
    category: "Dinner",
    description: "Street-style kothu with shredded chicken and egg.",
    price: "₹175",
    kind: "Non-Veg",
    image: "https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Chettinad Chicken",
    category: "Dinner",
    description: "Bold pepper, fennel, and roasted coconut chicken curry.",
    price: "₹210",
    kind: "Non-Veg",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85",
    popular: true,
  },
  {
    name: "Dosa with Kari Kuzhambu",
    category: "Dinner",
    description: "Crisp dosa with village-style mutton gravy.",
    price: "₹190",
    kind: "Non-Veg",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Idiyappam Stew",
    category: "Dinner",
    description: "String hoppers with mild coconut vegetable stew.",
    price: "₹110",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Appam with Kurma",
    category: "Dinner",
    description: "Soft-centered appam with aromatic kurma.",
    price: "₹115",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1617692855027-33b14f061079?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Pepper Mutton Chukka",
    category: "Dinner",
    description: "Dry-roasted mutton with black pepper and curry leaves.",
    price: "₹295",
    kind: "Non-Veg",
    image: "https://images.unsplash.com/photo-1604908177453-7462950a6a3b?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Medhu Vadai",
    category: "Snacks",
    description: "Crispy lentil vadai with coconut chutney.",
    price: "₹45",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1626500155537-93690c24099e?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Masala Vadai",
    category: "Snacks",
    description: "Chana dal fritters with onion, fennel, and mint.",
    price: "₹40",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Sundal",
    category: "Snacks",
    description: "Temple-style chickpeas with coconut and mustard.",
    price: "₹55",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Banana Bajji",
    category: "Snacks",
    description: "Golden plantain fritters with house chilli chutney.",
    price: "₹50",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1617692855027-33b14f061079?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Murukku",
    category: "Snacks",
    description: "Rice flour spirals with sesame and cumin.",
    price: "₹120",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1605197183305-6ddca27249d4?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Chicken Cutlet",
    category: "Snacks",
    description: "Spiced chicken and potato cutlets with mint chutney.",
    price: "₹90",
    kind: "Non-Veg",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Sweet Pongal",
    category: "Sweets",
    description: "Jaggery rice pudding with ghee, cashew, and cardamom.",
    price: "₹80",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1605197183305-6ddca27249d4?auto=format&fit=crop&w=900&q=85",
    popular: true,
  },
  {
    name: "Paal Payasam",
    category: "Sweets",
    description: "Slow-reduced milk payasam with rice and nuts.",
    price: "₹85",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Kesari",
    category: "Sweets",
    description: "Saffron semolina sweet with ghee-roasted cashews.",
    price: "₹65",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1590080876207-928d931916dc?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Adhirasam",
    category: "Sweets",
    description: "Traditional rice and jaggery sweet fried gently.",
    price: "₹110",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1610508500445-a4592435e27e?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Mysore Pak",
    category: "Sweets",
    description: "Ghee-rich gram flour sweet with a soft bite.",
    price: "₹150",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1605197183305-6ddca27249d4?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Laddu",
    category: "Sweets",
    description: "Festive gram flour laddu with cardamom and nuts.",
    price: "₹130",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1590080876207-928d931916dc?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Wedding Banana Leaf Virundhu",
    category: "Catering Specials",
    description: "Full-course wedding feast with welcome drinks and sweets.",
    price: "From ₹280",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Seemantham Feast",
    category: "Catering Specials",
    description: "Auspicious Tamil menu designed for intimate family rituals.",
    price: "From ₹240",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Birthday Mini Buffet",
    category: "Catering Specials",
    description: "Kid-friendly tiffin, rice, sweets, and live counter options.",
    price: "From ₹220",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Corporate Lunch Box",
    category: "Catering Specials",
    description: "Balanced office meals packed neatly for repeat orders.",
    price: "From ₹160",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Festival Sweets Hamper",
    category: "Catering Specials",
    description: "Traditional sweets and savories packed for gifting.",
    price: "From ₹499",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1605197183305-6ddca27249d4?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Housewarming Breakfast",
    category: "Catering Specials",
    description: "Idli, pongal, dosa, vadai, chutneys, sambar, and filter coffee.",
    price: "From ₹180",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Non-Veg Family Combo",
    category: "Catering Specials",
    description: "Biriyani, chicken gravy, boiled egg, raita, and sweet.",
    price: "From ₹320",
    kind: "Non-Veg",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Live Dosa Counter",
    category: "Catering Specials",
    description: "Made-to-order dosa station with chutneys and podi.",
    price: "From ₹190",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1694849789325-914b71ab4075?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Traditional Millet Spread",
    category: "Catering Specials",
    description: "Kambu, ragi, thinai, and saamai dishes for health-focused events.",
    price: "From ₹230",
    kind: "Veg",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Chettinad Feast",
    category: "Catering Specials",
    description: "Pepper chicken, mutton chukka, biriyani, salna, and parotta.",
    price: "From ₹420",
    kind: "Non-Veg",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85",
  },
];

export const stats = [
  { value: 12000, suffix: "+", label: "Orders Served" },
  { value: 8500, suffix: "+", label: "Happy Customers" },
  { value: 420, suffix: "+", label: "Catering Events" },
  { value: 18, suffix: "+", label: "Years of Tradition" },
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

export const cateringServices = [
  {
    title: "Wedding Catering",
    copy: "Ceremonial banana leaf feasts, premium buffet layouts, and graceful service for large guest counts.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Birthday Events",
    copy: "Comforting family menus with live dosa counters, sweets, snacks, and kid-friendly portions.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Corporate Catering",
    copy: "Neatly packed meals and buffets that keep office lunches warm, hygienic, and dependable.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Festival Catering",
    copy: "Pongal, Deepavali, Tamil New Year, and temple-style menus with sweets and savories.",
    image: "https://images.unsplash.com/photo-1605197183305-6ddca27249d4?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Seemantham",
    copy: "Auspicious home-style spreads planned with gentle flavors, rituals, and elder-friendly service.",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Housewarming",
    copy: "Early-morning breakfast and lunch packages for pooja days, family visits, and new beginnings.",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=900&q=85",
  },
] as const;

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
