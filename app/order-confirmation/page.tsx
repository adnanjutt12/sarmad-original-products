import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function OrderConfirmation() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="py-16 lg:py-24 px-4 lg:px-8 bg-white">
          <div className="container mx-auto max-w-2xl text-center">
            <div className="mb-8">
              <CheckCircleIcon className="w-24 h-24 text-green-500 mx-auto" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Order Confirmed!
            </h1>
            <p className="text-lg text-dark-text/80 mb-8">
              Thank you for your order. We have received your order and will process it shortly.
              You will receive an email confirmation shortly.
            </p>
            <div className="space-y-4">
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

