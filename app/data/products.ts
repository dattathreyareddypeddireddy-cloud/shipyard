
export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  category: "Sneakers" | "Audio" | "Wearables" | "Gadgets";
  emoji: string;
  image: string;
  accent: string;
  description: string;
  specs: string[];
}

const assetPrefix = "/shipyard";

export const products: Product[] = [
  {
    id: "wave-runner",
    name: "Wave Runner",
    tagline: "Everyday running sneakers built for long miles.",
    price: 129,
    category: "Sneakers",
    emoji: "👟",
    image: `${assetPrefix}/products/wave-runner.jpg`,
    accent: "#6c8cff",
    description: "Lightweight running shoes with a breathable upper and comfortable foam sole.",
    specs: ["Knit upper", "Foam midsole", "320g per shoe", "Unisex sizing"],
  },
  {
    id: "pulse-buds",
    name: "Pulse Buds",
    tagline: "Wireless earbuds with deep, clean bass.",
    price: 89,
    category: "Audio",
    emoji: "🎧",
    image: `${assetPrefix}/products/pulse-buds.jpg`,
    accent: "#a06cff",
    description: "Wireless earbuds with clear sound, noise cancellation and long battery life.",
    specs: ["Active noise cancellation", "8-hour battery", "USB-C case", "IPX4 sweatproof"],
  },
  {
    id: "nova-watch",
    name: "Nova Watch",
    tagline: "Smart technology for everyday life.",
    price: 199,
    category: "Wearables",
    emoji: "⌚",
    image: `${assetPrefix}/products/nova-watch.jpg`,
    accent: "#42bda8",
    description: "A modern smartwatch with fitness tracking and smart notifications.",
    specs: ["Heart rate tracking", "AMOLED display", "Water resistant", "7-day battery"],
  },
  {
    id: "orbit-speaker",
    name: "Orbit Speaker",
    tagline: "Big sound in a compact design.",
    price: 149,
    category: "Audio",
    emoji: "🔊",
    image: `${assetPrefix}/products/orbit-speaker.jpg`,
    accent: "#f08a67",
    description: "Portable Bluetooth speaker with powerful sound and deep bass.",
    specs: ["Bluetooth 5.3", "12-hour battery", "Water resistant", "USB-C charging"],
  },
  {
    id: "pixel-lamp",
    name: "Pixel Lamp",
    tagline: "Bring creativity to your workspace.",
    price: 59,
    category: "Gadgets",
    emoji: "💡",
    image: `${assetPrefix}/products/pixel-lamp.jpg`,
    accent: "#e5b84d",
    description: "A colorful smart desk lamp for a comfortable workspace.",
    specs: ["RGB lighting", "Touch controls", "Adjustable brightness", "USB powered"],
  },
  {
    id: "swift-runner",
    name: "Swift Runner",
    tagline: "Lightweight sneakers for active days.",
    price: 119,
    category: "Sneakers",
    emoji: "👟",
    image: `${assetPrefix}/products/swift-runner.jpg`,
    accent: "#e879a5",
    description: "Comfortable athletic shoes designed for daily movement.",
    specs: ["Breathable mesh", "Flexible sole", "Lightweight design", "Unisex sizing"],
  },
  {
    id: "fit-band",
    name: "Fit Band",
    tagline: "Track your fitness every day.",
    price: 79,
    category: "Wearables",
    emoji: "⌚",
    image: `${assetPrefix}/products/fit-band.jpg`,
    accent: "#65a7d8",
    description: "A lightweight fitness band with activity and sleep tracking.",
    specs: ["Step tracking", "Sleep monitoring", "OLED display", "10-day battery"],
  },
  {
    id: "mini-drone",
    name: "Mini Drone",
    tagline: "Explore the world from above.",
    price: 249,
    category: "Gadgets",
    emoji: "🚁",
    image: `${assetPrefix}/products/mini-drone.jpg`,
    accent: "#9b8bd8",
    description: "A compact drone designed for beginners and creative exploration.",
    specs: ["HD camera", "Easy controls", "Foldable design", "20-minute flight time"],
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
