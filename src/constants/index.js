const watchCollection = [
  {
    id: 1,
    name: "Heritage Classic",
    tagline: "Timeless Sophistication",
    price: "$12,500",
    description: "A masterpiece of traditional watchmaking",
    color: "silver",
    rotation: "md:rotate-[-5deg] rotate-0",
    image: "/images/watches/heritage-classic.png",
    features: ["Swiss Automatic", "42mm Case", "Leather Strap"],
  },
  {
    id: 2,
    name: "Royal Gold",
    tagline: "Ultimate Luxury",
    price: "$24,900",
    description: "Crafted for those who demand excellence",
    color: "gold",
    rotation: "md:rotate-[5deg] rotate-0",
    image: "/images/watches/royal-gold.png",
    features: ["18K Gold", "Chronograph", "Limited Edition"],
  },
  {
    id: 3,
    name: "Midnight Black",
    tagline: "Bold Statement",
    price: "$15,800",
    description: "Modern elegance meets precision engineering",
    color: "black",
    rotation: "md:rotate-[-5deg] rotate-0",
    image: "/images/watches/midnight-black.png",
    features: ["Ceramic Bezel", "GMT Function", "300m Water Resistant"],
  },
];

const heritageFeatures = [
  { label: "Power Reserve", amount: "72hrs" },
  { label: "Water Resistance", amount: "100m" },
  { label: "Sapphire Crystal", amount: "AR Coated" },
  { label: "Movement", amount: "Swiss Auto" },
];

const craftsmanshipFeatures = [
  "Swiss Movement",
  "Sapphire Crystal",
  "Hand-Assembled",
  "Lifetime Warranty",
];

const testimonials = [
  {
    name: "James Morrison",
    role: "CEO & Entrepreneur",
    quote: "The Heritage Classic is more than a watch—it's a statement of success and refined taste.",
    rating: 5,
    image: "/images/testimonials/client-1.jpg",
  },
  {
    name: "Sarah Chen",
    role: "Luxury Architect",
    quote: "Exceptional craftsmanship. Every detail speaks to the dedication of master watchmakers.",
    rating: 5,
    image: "/images/testimonials/client-2.jpg",
  },
  {
    name: "Michael Roberts",
    role: "Watch Collector",
    quote: "A worthy addition to any serious collection. The precision and beauty are unmatched.",
    rating: 5,
    image: "/images/testimonials/client-3.jpg",
  },
  {
    name: "Emma Wilson",
    role: "Fashion Designer",
    quote: "Elegance personified. This timepiece elevates every outfit and occasion.",
    rating: 5,
    image: "/images/testimonials/client-4.jpg",
  },
];

const whyChooseUs = [
  {
    title: "Swiss Precision",
    description: "Every movement crafted in Switzerland with centuries of expertise",
  },
  {
    title: "Lifetime Warranty",
    description: "Complete peace of mind with our comprehensive lifetime coverage",
  },
  {
    title: "Exclusive Design",
    description: "Limited production ensures your timepiece remains truly unique",
  },
  {
    title: "Investment Value",
    description: "Chronos watches appreciate in value, making them smart investments",
  },
];

const pressLogos = [
  { name: "Forbes", alt: "Featured in Forbes" },
  { name: "GQ", alt: "Featured in GQ Magazine" },
  { name: "Vogue", alt: "Featured in Vogue" },
  { name: "WSJ", alt: "Featured in Wall Street Journal" },
];

export { 
  watchCollection, 
  heritageFeatures, 
  craftsmanshipFeatures, 
  testimonials,
  whyChooseUs,
  pressLogos
};
