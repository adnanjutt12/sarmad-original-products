'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';

export default function Checkout() {
  const router = useRouter();
  const { items, getTotalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  // Only redirect to shop if cart is empty AND we haven't just placed an order
  if (items.length === 0 && !isOrderPlaced) {
    router.push('/shop');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare order data
      const orderItems = items.map((item) => ({
        productId: item.product.id,
        productName: item.product.name,
        variantId: item.variant.id,
        variantName: item.variant.name,
        quantity: item.quantity,
        price: item.variant.price,
        sku: item.variant.sku,
      }));

      const orderData = {
        customer: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          postalCode: formData.postalCode,
        },
        order: {
          items: orderItems,
          subtotal: getTotalPrice(),
          shipping: shippingCost,
          total: totalWithShipping,
          paymentMethod: formData.paymentMethod,
        },
      };

      // Send order to API
      const response = await fetch('/api/send-order-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success && result.orderId) {
        // Mark order as placed before clearing cart
        setIsOrderPlaced(true);
        // Clear cart
        clearCart();
        // Redirect to success page with order ID
        router.push(`/order-confirmation?orderId=${result.orderId}`);
      } else {
        throw new Error(result.message || 'Failed to place order');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      alert(`Failed to place order: ${error instanceof Error ? error.message : 'Please try again.'}`);
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const shippingRates: { [key: string]: number } = {
    'Karachi': 200,
    'Lahore': 250,
    'Islamabad': 250,
    'Rawalpindi': 250,
    'Faisalabad': 300,
    'Multan': 300,
    'Default': 350,
  };

  const shippingCost = shippingRates[formData.city] || shippingRates.Default;
  const totalWithShipping = getTotalPrice() + shippingCost;

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="py-16 lg:py-24 px-4 lg:px-8 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-12">Checkout</h1>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Checkout Form */}
              <div className="lg:col-span-2 space-y-8">
                {/* Shipping Information */}
                <div className="bg-off-white p-6 rounded-lg shadow-md">
                  <h2 className="font-serif text-2xl font-bold mb-6">Shipping Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent"
                    />
                  </div>
                  <div className="mt-4">
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent"
                    />
                  </div>
                  <div className="mt-4">
                    <label htmlFor="address" className="block text-sm font-medium mb-2">
                      Address *
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      required
                      rows={3}
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium mb-2">
                        City *
                      </label>
                      <select
                        id="city"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent"
                      >
                        <option value="">Select City</option>
                        <option value="Karachi">Karachi</option>
                        <option value="Lahore">Lahore</option>
                        <option value="Islamabad">Islamabad</option>
                        <option value="Rawalpindi">Rawalpindi</option>
                        <option value="Faisalabad">Faisalabad</option>
                        <option value="Multan">Multan</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="postalCode" className="block text-sm font-medium mb-2">
                        Postal Code *
                      </label>
                      <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        required
                        value={formData.postalCode}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-off-white p-6 rounded-lg shadow-md">
                  <h2 className="font-serif text-2xl font-bold mb-6">Payment Method</h2>
                  <div className="space-y-3">
                    <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        required
                        onChange={handleChange}
                        className="mr-3"
                      />
                      <span>Credit/Debit Card (Visa/Mastercard)</span>
                    </label>
                    <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="jazzcash"
                        onChange={handleChange}
                        className="mr-3"
                      />
                      <span>JazzCash</span>
                    </label>
                    <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="easypaisa"
                        onChange={handleChange}
                        className="mr-3"
                      />
                      <span>Easypaisa</span>
                    </label>
                    <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="bank"
                        onChange={handleChange}
                        className="mr-3"
                      />
                      <span>Bank Transfer</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-off-white p-6 rounded-lg shadow-md sticky top-24">
                  <h2 className="font-serif text-2xl font-bold mb-6">Order Summary</h2>
                  <div className="space-y-2 mb-6">
                    {items.map((item) => (
                      <div key={`${item.product.id}-${item.variant.id}`} className="flex justify-between text-sm">
                        <span>
                          {item.product.name} ({item.variant.name}) × {item.quantity}
                        </span>
                        <span>Rs. {(item.variant.price * item.quantity).toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-300 pt-4 space-y-2 mb-6">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>Rs. {getTotalPrice().toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>
                        {formData.city ? `Rs. ${shippingCost.toLocaleString()}` : 'Select city'}
                      </span>
                    </div>
                    <div className="flex justify-between font-bold text-lg pt-4 border-t border-gray-300">
                      <span>Total</span>
                      <span className="text-deep-green">
                        {formData.city ? `Rs. ${totalWithShipping.toLocaleString()}` : '—'}
                      </span>
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.paymentMethod}
                    className="w-full bg-deep-green text-white py-4 rounded-lg font-semibold hover:bg-deep-green/90 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Processing...' : 'Place Order'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

