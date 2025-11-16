import { NextRequest, NextResponse } from 'next/server';
import { saveOrder } from '@/lib/orders';
import { Order, OrderItem } from '@/types/order';

interface OrderData {
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    postalCode: string;
  };
  order: {
    items: OrderItem[];
    subtotal: number;
    shipping: number;
    total: number;
    paymentMethod: string;
  };
  orderId?: string;
}

export async function POST(request: NextRequest) {
  try {
    const orderData: OrderData = await request.json();

    // Generate order ID
    const orderId = orderData.orderId || `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

    // Create order object
    const order: Order = {
      orderId,
      customer: orderData.customer,
      order: orderData.order,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    // Save order to file
    saveOrder(order);

    return NextResponse.json(
      {
        success: true,
        orderId,
        message: 'Order placed successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing order:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to process order. Please try again.',
      },
      { status: 500 }
    );
  }
}

