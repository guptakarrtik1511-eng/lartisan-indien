import { Artisan, Product, ProductCategory } from "@/lib/types";

export const appIdentity =
  "L’Artisan Indien (Hastkala): An Online Marketplace for Indian Handcrafted Products";

export const artisans: Artisan[] = [
  {
    id: "artisan-jaipur-blue-pottery",
    name: "Ritika Sharma",
    region: "Jaipur, Rajasthan",
    specialty: "Blue Pottery",
    bio: "Ritika leads a family workshop that preserves Jaipur blue pottery using hand-painted floral motifs.",
    avatar: "/images/products/artisan-ritika.svg",
  },
  {
    id: "artisan-banarasi-weaves",
    name: "Imran Ali",
    region: "Varanasi, Uttar Pradesh",
    specialty: "Handloom Weaving",
    bio: "Imran works with traditional pit looms to create intricate Banarasi-inspired textile pieces.",
    avatar: "/images/products/artisan-imran.svg",
  },
  {
    id: "artisan-saharanpur-wood",
    name: "Meera Joshi",
    region: "Saharanpur, Uttar Pradesh",
    specialty: "Wood Carving",
    bio: "Meera combines mango wood craftsmanship with contemporary utility for modern homes.",
    avatar: "/images/products/artisan-meera.svg",
  },
  {
    id: "artisan-kutch-metalwork",
    name: "Harshad Bhai",
    region: "Kutch, Gujarat",
    specialty: "Metal & Bell Craft",
    bio: "Harshad creates handcrafted decor and jewelry inspired by Kutch folk forms and desert tones.",
    avatar: "/images/products/artisan-harshad.svg",
  },
];

export const productCategories: ProductCategory[] = [
  "Pottery",
  "Textiles",
  "Woodwork",
  "Jewelry",
  "Home Decor",
];

export const products: Product[] = [
  {
    id: "blue-lotus-vase",
    name: "Blue Lotus Ceramic Vase",
    category: "Pottery",
    price: 2499,
    shortDescription: "Hand-painted Jaipur blue pottery vase with lotus pattern.",
    description:
      "A wheel-thrown ceramic vase finished with hand-painted lotus motifs and fired in a low-temperature kiln, ideal for dry flowers and table styling.",
    materials: ["Quartz clay", "Natural pigments", "Lead-free glaze"],
    artisanId: "artisan-jaipur-blue-pottery",
    image: "/images/products/blue-lotus-vase.svg",
    gallery: [
      "/images/products/blue-lotus-vase.svg",
      "/images/products/blue-lotus-vase-detail.svg",
      "/images/products/blue-lotus-vase-lifestyle.svg",
    ],
    collections: ["Festive Gifting", "Heritage Pottery"],
    featured: true,
  },
  {
    id: "banarasi-runner",
    name: "Banarasi Table Runner",
    category: "Textiles",
    price: 1799,
    shortDescription: "Silk-cotton runner inspired by Banarasi brocade patterns.",
    description:
      "This table runner is woven on handlooms by artisan clusters in Varanasi and finished with soft tassels for festive settings.",
    materials: ["Silk blend", "Cotton", "Natural dye"],
    artisanId: "artisan-banarasi-weaves",
    image: "/images/products/banarasi-runner.svg",
    gallery: [
      "/images/products/banarasi-runner.svg",
      "/images/products/banarasi-runner-detail.svg",
      "/images/products/banarasi-runner-lifestyle.svg",
    ],
    collections: ["Festive Gifting", "Handloom Classics"],
    featured: true,
  },
  {
    id: "carved-tea-box",
    name: "Carved Mango Wood Tea Box",
    category: "Woodwork",
    price: 2299,
    shortDescription: "Six-compartment tea organizer with floral hand carving.",
    description:
      "Crafted from seasoned mango wood, this tea box features six storage sections and a transparent top panel for display.",
    materials: ["Mango wood", "Glass", "Natural wax finish"],
    artisanId: "artisan-saharanpur-wood",
    image: "/images/products/carved-tea-box.svg",
    gallery: [
      "/images/products/carved-tea-box.svg",
      "/images/products/carved-tea-box-detail.svg",
      "/images/products/carved-tea-box-lifestyle.svg",
    ],
    collections: ["Kitchen & Dining", "Woodcraft Essentials"],
    featured: true,
  },
  {
    id: "kutch-coin-necklace",
    name: "Kutch Coin Necklace",
    category: "Jewelry",
    price: 1599,
    shortDescription: "Oxidized brass necklace inspired by Kutch folk coin motifs.",
    description:
      "A handcrafted statement necklace with a lightweight chain and intricate coin charms, made for festive and everyday wear.",
    materials: ["Oxidized brass", "Cotton thread"],
    artisanId: "artisan-kutch-metalwork",
    image: "/images/products/kutch-coin-necklace.svg",
    gallery: [
      "/images/products/kutch-coin-necklace.svg",
      "/images/products/kutch-coin-necklace-detail.svg",
      "/images/products/kutch-coin-necklace-lifestyle.svg",
    ],
    collections: ["Everyday Jewelry", "Craft Revival"],
  },
  {
    id: "terracotta-lamp",
    name: "Terracotta Pendant Lamp",
    category: "Home Decor",
    price: 3199,
    shortDescription: "Hand-molded terracotta lamp shade with earthy matte finish.",
    description:
      "This pendant lamp is hand-molded and sun-baked before firing, bringing warm ambient light and artisanal texture to interiors.",
    materials: ["Terracotta clay", "Jute cord"],
    artisanId: "artisan-jaipur-blue-pottery",
    image: "/images/products/terracotta-lamp.svg",
    gallery: [
      "/images/products/terracotta-lamp.svg",
      "/images/products/terracotta-lamp-detail.svg",
      "/images/products/terracotta-lamp-lifestyle.svg",
    ],
    collections: ["Home Refresh", "Heritage Pottery"],
    featured: true,
  },
  {
    id: "ajrakh-cushion-cover",
    name: "Ajrakh Cushion Cover Set",
    category: "Textiles",
    price: 1399,
    shortDescription: "Block-printed cotton cushion covers in indigo tones.",
    description:
      "Set of two hand block-printed cushion covers made with natural indigo and madder dyes using traditional Ajrakh techniques.",
    materials: ["Cotton", "Natural dyes"],
    artisanId: "artisan-banarasi-weaves",
    image: "/images/products/ajrakh-cushion-cover.svg",
    gallery: [
      "/images/products/ajrakh-cushion-cover.svg",
      "/images/products/ajrakh-cushion-cover-detail.svg",
      "/images/products/ajrakh-cushion-cover-lifestyle.svg",
    ],
    collections: ["Home Refresh", "Handloom Classics"],
  },
  {
    id: "wooden-serving-platter",
    name: "Hand-Carved Serving Platter",
    category: "Woodwork",
    price: 1899,
    shortDescription: "Acacia serving platter with hand-chiseled border detail.",
    description:
      "A versatile serving platter crafted by hand with smooth food-safe finishing and subtle carved motifs around the edges.",
    materials: ["Acacia wood", "Food-safe oil"],
    artisanId: "artisan-saharanpur-wood",
    image: "/images/products/wooden-serving-platter.svg",
    gallery: [
      "/images/products/wooden-serving-platter.svg",
      "/images/products/wooden-serving-platter-detail.svg",
      "/images/products/wooden-serving-platter-lifestyle.svg",
    ],
    collections: ["Kitchen & Dining", "Woodcraft Essentials"],
  },
  {
    id: "dokra-candle-stand",
    name: "Dokra Candle Stand",
    category: "Home Decor",
    price: 2099,
    shortDescription: "Tribal brass dokra candle stand cast in lost-wax style.",
    description:
      "A handcrafted decor piece made using traditional dokra casting that adds a warm handcrafted accent to shelves and dining tables.",
    materials: ["Brass", "Natural polish"],
    artisanId: "artisan-kutch-metalwork",
    image: "/images/products/dokra-candle-stand.svg",
    gallery: [
      "/images/products/dokra-candle-stand.svg",
      "/images/products/dokra-candle-stand-detail.svg",
      "/images/products/dokra-candle-stand-lifestyle.svg",
    ],
    collections: ["Craft Revival", "Festive Gifting"],
  },
];

export const featuredProducts = products.filter((product) => product.featured);

export const featuredCollections = [
  {
    name: "Festive Gifting",
    description: "Curated handmade gifts for celebrations and special occasions.",
  },
  {
    name: "Heritage Pottery",
    description: "Traditional clay and ceramic work from artisan clusters.",
  },
  {
    name: "Home Refresh",
    description: "Textiles and decor pieces that transform everyday spaces.",
  },
];

export const getProductById = (id: string) =>
  products.find((product) => product.id === id);

export const getArtisanById = (id: string) =>
  artisans.find((artisan) => artisan.id === id);

export const getRelatedProducts = (productId: string, category: ProductCategory) =>
  products.filter((product) => product.category === category && product.id !== productId).slice(0, 3);
