'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

function OrderConfirmationContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="py-16 lg:py-24 px-4 lg:px-8 bg-white">
          <div className="container mx-auto max-w-2xl">
            <div className="text-center mb-8">
              <div className="mb-8">
                <CheckCircleIcon className="w-24 h-24 text-green-500 mx-auto" />
              </div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                Order Confirmed!
              </h1>
              <p className="text-lg text-dark-text/80 mb-8">
                Thank you for your order. We have received your order and will process it shortly.
                {orderId && (
                  <span className="block mt-2 font-semibold text-deep-green">
                    Your Order ID: {orderId}
                  </span>
                )}
              </p>
            </div>

            <div className="bg-off-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="font-serif text-2xl font-bold mb-4">What's Next?</h2>
              <ul className="space-y-3 text-dark-text/80">
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>You will receive an email confirmation with your order details.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Our team will review your order and contact you if needed.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>You will receive updates about your order status via email.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Please keep your Order ID for reference: <strong className="text-deep-green">{orderId || 'N/A'}</strong></span>
                </li>
              </ul>
            </div>

            <div className="text-center space-y-4">
              <Link
                href="/shop"
                className="inline-block bg-deep-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-deep-green/90 transition-colors"
              >
                Continue Shopping
              </Link>
              <Link
                href="/"
                className="block text-dark-text/70 hover:text-accent-gold transition-colors mt-4"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default function OrderConfirmation() {
  return (
    <Suspense fallback={
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="text-lg text-dark-text/80">Loading...</p>
          </div>
        </main>
        <Footer />
      </>
    }>
      <OrderConfirmationContent />
    </Suspense>
  );
}

