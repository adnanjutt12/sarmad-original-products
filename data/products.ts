import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Pure Honey',
    slug: 'pure-honey',
    shortDescription: '100% pure, single-origin honey — no additives, naturally harvested.',
    longDescription: 'Our honey is sourced from trusted apiaries and harvested with care. It contains natural enzymes and floral notes unique to each batch. Perfect for tea, toast, and natural remedies. Store in a cool, dry place.',
    category: 'honey',
    variants: [
      { id: '1-250', name: '500g', price: 2100, inStock: true, sku: 'HNY-250' },
      { id: '1-500', name: '1kg', price: 4200, inStock: true, sku: 'HNY-500' },
    ],
    images: ['/images/Purehoney.png'],
    tags: ['honey', 'natural', 'organic', 'edible'],
  },
  {
    id: '2',
    name: 'Luxury Itter — Fadai',
    slug: 'luxury-itter-fadai',
    shortDescription: 'Rich, long-lasting traditional fragrance blended with premium oils.',
    longDescription: 'Handmade ittar crafted to evoke deep, classic scents. Free from alcohol and synthetic fillers. Apply sparingly on pulse points. This exquisite Fadai ittar offers a unique and captivating fragrance.',
    category: 'itter',
    variants: [
      { id: '2-10', name: '10ml', price: 2500, inStock: true, sku: 'ITR-10-FADAI' },
      { id: '2-25', name: '25ml', price: 5500, inStock: true, sku: 'ITR-25-FADAI' },
    ],
    images: ['/images/Fadai.jpeg'],
    tags: ['fragrance', 'ittar', 'perfume', 'alcohol-free'],
  },
  {
    id: '3',
    name: 'Luxury Itter — Bin Sheikh',
    slug: 'luxury-itter-bin-sheikh',
    shortDescription: 'Rich, long-lasting traditional fragrance blended with premium oils.',
    longDescription: 'Handmade ittar crafted to evoke deep, classic scents. Free from alcohol and synthetic fillers. Apply sparingly on pulse points. Bin Sheikh ittar delivers a distinctive and luxurious fragrance experience.',
    category: 'itter',
    variants: [
      { id: '3-10', name: '10ml', price: 2500, inStock: true, sku: 'ITR-10-BINSHEIKH' },
      { id: '3-25', name: '25ml', price: 5500, inStock: true, sku: 'ITR-25-BINSHEIKH' },
    ],
    images: ['/images/Bin-Sheikh.jpeg'],
    tags: ['fragrance', 'ittar', 'perfume', 'alcohol-free'],
  },
  {
    id: '4',
    name: 'Luxury Itter — Mushk al Bez',
    slug: 'luxury-itter-mushk-al-bez',
    shortDescription: 'Rich, long-lasting traditional fragrance blended with premium oils.',
    longDescription: 'Handmade ittar crafted to evoke deep, classic scents. Free from alcohol and synthetic fillers. Apply sparingly on pulse points. Mushk al Bez offers an authentic and captivating fragrance that lingers throughout the day.',
    category: 'itter',
    variants: [
      { id: '4-10', name: '10ml', price: 2500, inStock: true, sku: 'ITR-10-MUSHK' },
      { id: '4-25', name: '25ml', price: 5500, inStock: true, sku: 'ITR-25-MUSHK' },
    ],
    images: ['/images/Mushk-albez.jpeg'],
    tags: ['fragrance', 'ittar', 'perfume', 'alcohol-free'],
  },
  {
    id: '5',
    name: 'Pure Desi Ghee',
    slug: 'pure-desi-ghee',
    shortDescription: 'Clarified butter made traditionally — rich flavor, nutrient-dense.',
    longDescription: 'Our desi ghee is slow-cooked using traditional methods to preserve aroma and nutrients. Ideal for cooking, baking, and Ayurvedic uses. Store at room temperature; refrigerate in warm climates.',
    category: 'ghee',
    variants: [
      { id: '5-300', name: '500g', price: 2000, inStock: true, sku: 'GHE-300' },
      { id: '5-1000', name: '1kg', price: 4000, inStock: true, sku: 'GHE-1000' },
    ],
    images: ['/images/DesiGhee.png'],
    tags: ['desi ghee', 'clarified butter', 'cooking', 'premium'],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (!category) return products;
  return products.filter((p) => p.category === category);
}

