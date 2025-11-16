import { NextRequest, NextResponse } from 'next/server';
import { getOrders, updateOrderStatus } from '@/lib/orders';

export async function GET(request: NextRequest) {
  try {
    // Simple authentication check via query parameter or header
    // In production, use proper authentication (JWT, sessions, etc.)
    const auth = request.headers.get('authorization') || request.nextUrl.searchParams.get('auth');
    
    // Simple password check - you can change this password
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';
    
    if (auth !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const orders = getOrders();
    return NextResponse.json({ orders }, { status: 200 });
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json(
      { error: 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const auth = request.headers.get('authorization') || request.nextUrl.searchParams.get('auth');
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';
    
    if (auth !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { orderId, status } = await request.json();
    
    if (!orderId || !status) {
      return NextResponse.json(
        { error: 'Missing orderId or status' },
        { status: 400 }
      );
    }

    const success = updateOrderStatus(orderId, status);
    
    if (!success) {
      return NextResponse.json(
        { error: 'Order not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error updating order:', error);
    return NextResponse.json(
      { error: 'Failed to update order' },
      { status: 500 }
    );
  }
}

