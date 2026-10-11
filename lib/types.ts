export type ProductCategory = "Pottery" | "Textiles" | "Woodwork" | "Jewelry" | "Home Decor";

export interface Artisan {
  id: string;
  name: string;
  region: string;
  specialty: string;
  bio: string;
  avatar: string;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  shortDescription: string;
  description: string;
  materials: string[];
  artisanId: string;
  image: string;
  gallery: string[];
  collections: string[];
  featured?: boolean;
}
