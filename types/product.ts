export interface ProductVariant {
  id: string;
  name: string;
  price: number;
  inStock: boolean;
  sku: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  category: 'honey' | 'itter' | 'ghee';
  variants: ProductVariant[];
  images: string[];
  tags: string[];
}

export interface CartItem {
  product: Product;
  variant: ProductVariant;
  quantity: number;
}

