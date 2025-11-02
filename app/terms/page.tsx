import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms & Conditions — Sarmad Original Products',
  description: 'Terms and Conditions for Sarmad Original Products',
};

export default function Terms() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="py-16 lg:py-24 px-4 lg:px-8 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8">Terms & Conditions</h1>
            <div className="prose prose-lg max-w-none text-dark-text/80 space-y-6">
              <p>
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <p>
                Please read these Terms and Conditions carefully before using our website and purchasing
                our products. By accessing or using our website, you agree to be bound by these terms.
              </p>
              <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Products</h2>
              <p>
                We strive to provide accurate product descriptions and images. However, we do not warrant
                that product descriptions or other content on this site is accurate, complete, reliable,
                current, or error-free.
              </p>
              <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Pricing and Payment</h2>
              <p>
                All prices are listed in Pakistani Rupees (PKR). We reserve the right to change prices
                at any time without notice. Payment must be made at the time of purchase through our
                secure payment gateway.
              </p>
              <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Shipping and Delivery</h2>
              <p>
                We ship within Pakistan. Delivery times may vary depending on your location. We are
                not responsible for delays caused by shipping carriers or unforeseen circumstances.
              </p>
              <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Returns and Refunds</h2>
              <p>
                We offer a 7-day satisfaction guarantee. If you are not satisfied with your purchase,
                please contact us within 7 days of delivery. Items must be unused and in their original
                packaging. Refunds will be processed within 5-10 business days.
              </p>
              <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Limitation of Liability</h2>
              <p>
                Sarmad Original Products shall not be liable for any indirect, incidental, special, or
                consequential damages arising out of or in connection with your use of our website or
                products.
              </p>
              <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Contact Us</h2>
              <p>
                If you have questions about these Terms and Conditions, please contact us at{' '}
                <a href="mailto:info@sarmadoriginal.com" className="text-accent-gold hover:underline">
                  info@sarmadoriginal.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

