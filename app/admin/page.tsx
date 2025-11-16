'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Order } from '@/types/order';
import { 
  CheckCircleIcon, 
  XCircleIcon, 
  ClockIcon,
  ArrowPathIcon,
  EyeIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline';

export default function AdminPanel() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  useEffect(() => {
    // Check if already authenticated (stored in sessionStorage)
    const auth = sessionStorage.getItem('adminAuth');
    if (auth === 'admin123') {
      setIsAuthenticated(true);
      fetchOrders('admin123');
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const ADMIN_PASSWORD = 'admin123'; // You can change this
    
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('adminAuth', ADMIN_PASSWORD);
      fetchOrders(ADMIN_PASSWORD);
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('adminAuth');
    setPassword('');
    setOrders([]);
  };

  const fetchOrders = async (auth: string) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`/api/orders?auth=${auth}`);
      if (response.ok) {
        const data = await response.json();
        setOrders(data.orders || []);
      } else {
        setError('Failed to fetch orders');
      }
    } catch (err) {
      setError('Error loading orders');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const updateOrderStatus = async (orderId: string, status: Order['status']) => {
    const auth = sessionStorage.getItem('adminAuth') || 'admin123';
    try {
      const response = await fetch('/api/orders', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': auth,
        },
        body: JSON.stringify({ orderId, status }),
      });

      if (response.ok) {
        // Refresh orders
        fetchOrders(auth);
        if (selectedOrder?.orderId === orderId) {
          setSelectedOrder({ ...selectedOrder, status });
        }
      } else {
        setError('Failed to update order status');
      }
    } catch (err) {
      setError('Error updating order status');
      console.error(err);
    }
  };

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return <ClockIcon className="w-5 h-5" />;
      case 'processing':
        return <ArrowPathIcon className="w-5 h-5" />;
      case 'completed':
        return <CheckCircleIcon className="w-5 h-5" />;
      case 'cancelled':
        return <XCircleIcon className="w-5 h-5" />;
      default:
        return null;
    }
  };

  if (!isAuthenticated) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center bg-off-white py-16 px-4">
          <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
            <div className="text-center mb-8">
              <LockClosedIcon className="w-16 h-16 text-deep-green mx-auto mb-4" />
              <h1 className="font-serif text-3xl font-bold text-deep-green mb-2">Admin Panel</h1>
              <p className="text-dark-text/70">Enter password to access orders</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent"
                  placeholder="Enter admin password"
                  required
                />
              </div>
              {error && (
                <div className="text-red-600 text-sm">{error}</div>
              )}
              <button
                type="submit"
                className="w-full bg-deep-green text-white py-3 rounded-lg font-semibold hover:bg-deep-green/90 transition-colors"
              >
                Login
              </button>
            </form>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-off-white py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="font-serif text-4xl font-bold text-deep-green mb-2">Admin Panel</h1>
              <p className="text-dark-text/70">Manage and view all orders</p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => fetchOrders(sessionStorage.getItem('adminAuth') || 'admin123')}
                className="bg-deep-green text-white px-6 py-2 rounded-lg font-semibold hover:bg-deep-green/90 transition-colors flex items-center gap-2"
              >
                <ArrowPathIcon className="w-5 h-5" />
                Refresh
              </button>
              <button
                onClick={handleLogout}
                className="bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
              {error}
            </div>
          )}

          {loading ? (
            <div className="text-center py-12">
              <ArrowPathIcon className="w-12 h-12 text-deep-green mx-auto animate-spin" />
              <p className="mt-4 text-dark-text/70">Loading orders...</p>
            </div>
          ) : orders.length === 0 ? (
            <div className="bg-white p-12 rounded-lg shadow-md text-center">
              <p className="text-lg text-dark-text/70">No orders yet</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Orders List */}
              <div className="lg:col-span-2 space-y-4">
                {orders.map((order) => (
                  <div
                    key={order.orderId}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => setSelectedOrder(order)}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-bold text-lg text-deep-green">{order.orderId}</h3>
                        <p className="text-sm text-dark-text/70">
                          {new Date(order.createdAt).toLocaleString()}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 ${getStatusColor(order.status)}`}>
                        {getStatusIcon(order.status)}
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-dark-text">
                        <strong>Customer:</strong> {order.customer.firstName} {order.customer.lastName}
                      </p>
                      <p className="text-dark-text">
                        <strong>Email:</strong> {order.customer.email}
                      </p>
                      <p className="text-dark-text">
                        <strong>Phone:</strong> {order.customer.phone}
                      </p>
                      <p className="text-dark-text">
                        <strong>Total:</strong> Rs. {order.order.total.toLocaleString()}
                      </p>
                      <p className="text-dark-text">
                        <strong>Items:</strong> {order.order.items.length} item(s)
                      </p>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedOrder(order);
                        }}
                        className="flex-1 bg-accent-gold text-white px-4 py-2 rounded-lg font-semibold hover:bg-accent-gold/90 transition-colors flex items-center justify-center gap-2"
                      >
                        <EyeIcon className="w-4 h-4" />
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Details Sidebar */}
              <div className="lg:col-span-1">
                {selectedOrder ? (
                  <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="font-serif text-2xl font-bold text-deep-green">Order Details</h2>
                      <button
                        onClick={() => setSelectedOrder(null)}
                        className="text-dark-text/70 hover:text-deep-green"
                      >
                        <XCircleIcon className="w-6 h-6" />
                      </button>
                    </div>

                    <div className="space-y-6">
                      {/* Order Info */}
                      <div>
                        <h3 className="font-bold text-lg mb-3">Order Information</h3>
                        <div className="space-y-2 text-sm">
                          <p><strong>Order ID:</strong> {selectedOrder.orderId}</p>
                          <p><strong>Date:</strong> {new Date(selectedOrder.createdAt).toLocaleString()}</p>
                          <p><strong>Status:</strong> 
                            <span className={`ml-2 px-2 py-1 rounded text-xs ${getStatusColor(selectedOrder.status)}`}>
                              {selectedOrder.status}
                            </span>
                          </p>
                        </div>
                      </div>

                      {/* Customer Info */}
                      <div>
                        <h3 className="font-bold text-lg mb-3">Customer Information</h3>
                        <div className="space-y-2 text-sm">
                          <p><strong>Name:</strong> {selectedOrder.customer.firstName} {selectedOrder.customer.lastName}</p>
                          <p><strong>Email:</strong> {selectedOrder.customer.email}</p>
                          <p><strong>Phone:</strong> {selectedOrder.customer.phone}</p>
                          <p><strong>Address:</strong> {selectedOrder.customer.address}</p>
                          <p><strong>City:</strong> {selectedOrder.customer.city}</p>
                          <p><strong>Postal Code:</strong> {selectedOrder.customer.postalCode}</p>
                        </div>
                      </div>

                      {/* Order Items */}
                      <div>
                        <h3 className="font-bold text-lg mb-3">Order Items</h3>
                        <div className="space-y-3">
                          {selectedOrder.order.items.map((item, index) => (
                            <div key={index} className="border-b pb-3 last:border-0">
                              <p className="font-semibold">{item.productName}</p>
                              <p className="text-sm text-dark-text/70">
                                {item.variantName} × {item.quantity}
                              </p>
                              <p className="text-sm text-dark-text/70">SKU: {item.sku}</p>
                              <p className="text-sm font-semibold text-deep-green">
                                Rs. {(item.price * item.quantity).toLocaleString()}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Order Summary */}
                      <div>
                        <h3 className="font-bold text-lg mb-3">Order Summary</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Subtotal:</span>
                            <span>Rs. {selectedOrder.order.subtotal.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Shipping:</span>
                            <span>Rs. {selectedOrder.order.shipping.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between font-bold text-lg pt-2 border-t">
                            <span>Total:</span>
                            <span className="text-deep-green">Rs. {selectedOrder.order.total.toLocaleString()}</span>
                          </div>
                          <div className="pt-2">
                            <p><strong>Payment Method:</strong> {selectedOrder.order.paymentMethod}</p>
                          </div>
                        </div>
                      </div>

                      {/* Status Update */}
                      <div>
                        <h3 className="font-bold text-lg mb-3">Update Status</h3>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={() => updateOrderStatus(selectedOrder.orderId, 'pending')}
                            className={`px-3 py-2 rounded text-sm font-semibold ${
                              selectedOrder.status === 'pending'
                                ? 'bg-yellow-600 text-white'
                                : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                            }`}
                          >
                            Pending
                          </button>
                          <button
                            onClick={() => updateOrderStatus(selectedOrder.orderId, 'processing')}
                            className={`px-3 py-2 rounded text-sm font-semibold ${
                              selectedOrder.status === 'processing'
                                ? 'bg-blue-600 text-white'
                                : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                            }`}
                          >
                            Processing
                          </button>
                          <button
                            onClick={() => updateOrderStatus(selectedOrder.orderId, 'completed')}
                            className={`px-3 py-2 rounded text-sm font-semibold ${
                              selectedOrder.status === 'completed'
                                ? 'bg-green-600 text-white'
                                : 'bg-green-100 text-green-800 hover:bg-green-200'
                            }`}
                          >
                            Completed
                          </button>
                          <button
                            onClick={() => updateOrderStatus(selectedOrder.orderId, 'cancelled')}
                            className={`px-3 py-2 rounded text-sm font-semibold ${
                              selectedOrder.status === 'cancelled'
                                ? 'bg-red-600 text-white'
                                : 'bg-red-100 text-red-800 hover:bg-red-200'
                            }`}
                          >
                            Cancelled
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white p-6 rounded-lg shadow-md text-center text-dark-text/70">
                    <EyeIcon className="w-12 h-12 mx-auto mb-4 text-dark-text/30" />
                    <p>Select an order to view details</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

