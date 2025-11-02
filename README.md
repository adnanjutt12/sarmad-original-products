# Sarmad Original Products — Official Website

A modern, luxurious e-commerce website for Sarmad Original Products, featuring pure honey, premium ittar, and traditional desi ghee.

## Repository
GitHub: https://github.com/adnanjutt12/sarmad-original-products

## Features

- **Modern Design**: Luxurious, authentic brand presentation with deep green and gold accents
- **E-Commerce**: Full shopping cart, checkout flow, and order confirmation
- **Product Catalog**: Browse products by category with detailed product pages
- **Responsive**: Fully responsive design for mobile, tablet, and desktop
- **SEO Optimized**: Meta tags, Open Graph tags, and semantic HTML
- **Accessibility**: Keyboard navigation, proper ARIA labels, and semantic structure

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Playfair Display (headlines), Inter (body)
- **Icons**: Heroicons

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js app router pages
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── shop/              # Shop catalog and product pages
│   ├── cart/              # Shopping cart
│   ├── checkout/          # Checkout flow
│   ├── faq/               # FAQ page
│   ├── contact/           # Contact page
│   └── layout.tsx         # Root layout with metadata
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   └── Logo.tsx           # Logo component
├── contexts/              # React contexts
│   └── CartContext.tsx    # Shopping cart state management
├── data/                  # Static data
│   └── products.ts        # Product catalog
└── types/                 # TypeScript types
    └── product.ts         # Product type definitions
```

## Pages

- **Home**: Hero section, feature cards, trust bar, featured products
- **Shop**: Product catalog with category filtering
- **Product Pages**: Detailed product information, variant selection, add to cart
- **Cart**: Shopping cart with quantity management
- **Checkout**: Shipping information and payment method selection
- **About**: Company story and values
- **FAQ**: Frequently asked questions with accordion UI
- **Contact**: Contact form and business information

## Color Scheme

- **Deep Green**: `#0f5a3c` (Primary)
- **Accent Gold**: `#c9a84a` (Accent)
- **Off-White**: `#f7f6f2` (Background)
- **Dark Text**: `#17201f` (Text)

## Next Steps

1. **Payment Integration**: Connect actual payment gateways (JazzCash, Easypaisa, Cards)
2. **Image Assets**: Add high-resolution product images
3. **Backend API**: Connect to backend for order processing and inventory management
4. **Email Integration**: Set up order confirmation emails
5. **Analytics**: Add Google Analytics or similar
6. **Product Management**: Build admin dashboard for product management

## Build for Production

```bash
npm run build
npm start
```

## Environment Variables

Create a `.env.local` file for environment-specific variables:

```
NEXT_PUBLIC_SITE_URL=https://sarmadoriginal.com
# Add other environment variables as needed
```

## License

Copyright © 2024 Sarmad Original Products. All rights reserved.

