'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';
import { TrashIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline';

export default function Cart() {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <>
        <Header />
        <main className="min-h-screen">
          <section className="py-16 lg:py-24 px-4 lg:px-8 bg-white">
            <div className="container mx-auto max-w-4xl text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8">Your Cart</h1>
              <p className="text-lg text-dark-text/80 mb-8">Your cart is empty.</p>
              <Link
                href="/shop"
                className="inline-block bg-deep-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-deep-green/90 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="py-16 lg:py-24 px-4 lg:px-8 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-12">Your Cart</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.variant.id}`}
                    className="bg-off-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-4"
                  >
                    <div className="w-full md:w-32 h-32 bg-gray-200 rounded-lg flex-shrink-0 relative overflow-hidden">
                      {item.product.images && item.product.images[0] ? (
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          className="object-cover rounded-lg"
                          sizes="(max-width: 768px) 100vw, 128px"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-deep-green/10 to-accent-gold/10">
                          <p className="text-dark-text/40 text-xs">Image</p>
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl font-bold mb-2">{item.product.name}</h3>
                      <p className="text-dark-text/70 mb-2">{item.variant.name}</p>
                      <p className="text-deep-green font-bold mb-4">
                        Rs. {item.variant.price.toLocaleString()}
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 border border-gray-300 rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.variant.id, item.quantity - 1)}
                            className="p-2 hover:bg-gray-100"
                          >
                            <MinusIcon className="w-4 h-4" />
                          </button>
                          <span className="px-4 py-2 font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.variant.id, item.quantity + 1)}
                            className="p-2 hover:bg-gray-100"
                          >
                            <PlusIcon className="w-4 h-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.product.id, item.variant.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                          aria-label="Remove item"
                        >
                          <TrashIcon className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-deep-green text-lg">
                        Rs. {(item.variant.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
                <button
                  onClick={clearCart}
                  className="text-red-600 hover:underline text-sm"
                >
                  Clear Cart
                </button>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-off-white p-6 rounded-lg shadow-md sticky top-24">
                  <h2 className="font-serif text-2xl font-bold mb-6">Order Summary</h2>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>Rs. {getTotalPrice().toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span className="text-sm">Calculated at checkout</span>
                    </div>
                    <div className="border-t border-gray-300 pt-4 flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span className="text-deep-green">Rs. {getTotalPrice().toLocaleString()}</span>
                    </div>
                  </div>
                  <Link
                    href="/checkout"
                    className="block w-full bg-deep-green text-white py-4 rounded-lg font-semibold text-center hover:bg-deep-green/90 transition-colors mb-4"
                  >
                    Proceed to Checkout
                  </Link>
                  <Link
                    href="/shop"
                    className="block w-full text-center text-dark-text/70 hover:text-accent-gold transition-colors"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

