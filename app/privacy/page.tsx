import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy — Sarmad Original Products',
  description: 'Privacy Policy for Sarmad Original Products',
};

export default function Privacy() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="py-16 lg:py-24 px-4 lg:px-8 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
            <div className="prose prose-lg max-w-none text-dark-text/80 space-y-6">
              <p>
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <p>
                Sarmad Original Products ("we," "our," or "us") is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                when you visit our website.
              </p>
              <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
              <p>
                We may collect information about you in various ways. The information we may collect includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personal data such as your name, email address, phone number, and shipping address</li>
                <li>Payment information (processed securely through our payment providers)</li>
                <li>Usage data such as your IP address, browser type, and pages visited</li>
              </ul>
              <h2 className="font-serif text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about your orders and inquiries</li>
                <li>Improve our website and customer service</li>
                <li>Send marketing communications (with your consent)</li>
              </ul>
              <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information. However,
                no method of transmission over the Internet is 100% secure, and we cannot guarantee
                absolute security.
              </p>
              <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:was8297123@gmail.com" className="text-accent-gold hover:underline">
                  was8297123@gmail.com
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

