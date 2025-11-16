export interface OrderItem {
  productId: string;
  productName: string;
  variantId: string;
  variantName: string;
  quantity: number;
  price: number;
  sku: string;
}

export interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
}

export interface Order {
  orderId: string;
  customer: CustomerInfo;
  order: {
    items: OrderItem[];
    subtotal: number;
    shipping: number;
    total: number;
    paymentMethod: string;
  };
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  createdAt: string;
}

