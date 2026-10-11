# L’Artisan Indien (Hastkala)

L’Artisan Indien (Hastkala): An Online Marketplace for Indian Handcrafted Products.

This repository contains a production-ready MVP starter built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Modern Next.js App Router setup with TypeScript and Tailwind CSS
- Homepage with hero, featured collections, featured products, and artisan highlights
- Product listing page with client-side search and category filter UI
- Product detail page with gallery, product details, artisan story, and related products
- Shopping cart and checkout flow UI using browser persistence
- Basic admin product management page for creating and editing listings locally
- Seeded handcrafted products and artisan profiles for instant demo
- Responsive layouts for mobile and desktop

## Project Structure

- `/app` - Route pages (home, products, product detail, cart, checkout, admin)
- `/components` - Reusable UI components and cart/admin client state
- `/lib` - Seed data, types, and formatting utilities
- `/public/images/products` - Local SVG assets for products and artisans

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy environment template:

   ```bash
   cp .env.example .env.local
   ```

3. Start development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000)

## Scripts

- `npm run dev` - Start local development server
- `npm run build` - Build for production
- `npm run start` - Run the production build
- `npm run lint` - Run ESLint

## Notes

- Core demo functionality does not depend on external services.
- Cart and admin-created products are persisted in browser local storage for MVP demonstration.
