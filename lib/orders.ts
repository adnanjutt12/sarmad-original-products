import fs from 'fs';
import path from 'path';
import { Order, OrderItem, CustomerInfo } from '@/types/order';

export type { Order, OrderItem, CustomerInfo };

const ORDERS_FILE = path.join(process.cwd(), 'data', 'orders.json');

// Ensure data directory exists
function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

// Read orders from file
export function getOrders(): Order[] {
  ensureDataDirectory();
  
  if (!fs.existsSync(ORDERS_FILE)) {
    return [];
  }

  try {
    const fileContent = fs.readFileSync(ORDERS_FILE, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error('Error reading orders file:', error);
    return [];
  }
}

// Save order to file
export function saveOrder(order: Order): void {
  ensureDataDirectory();
  
  const orders = getOrders();
  orders.unshift(order); // Add new order at the beginning
  
  try {
    fs.writeFileSync(ORDERS_FILE, JSON.stringify(orders, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error saving order:', error);
    throw new Error('Failed to save order');
  }
}

// Update order status
export function updateOrderStatus(orderId: string, status: Order['status']): boolean {
  const orders = getOrders();
  const orderIndex = orders.findIndex((o) => o.orderId === orderId);
  
  if (orderIndex === -1) {
    return false;
  }
  
  orders[orderIndex].status = status;
  
  try {
    fs.writeFileSync(ORDERS_FILE, JSON.stringify(orders, null, 2), 'utf-8');
    return true;
  } catch (error) {
    console.error('Error updating order status:', error);
    return false;
  }
}

// Get order by ID
export function getOrderById(orderId: string): Order | undefined {
  const orders = getOrders();
  return orders.find((o) => o.orderId === orderId);
}

