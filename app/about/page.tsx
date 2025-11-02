import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Our Story — Sarmad Original Products',
  description: 'Learn about Sarmad Original Products — our passion for authentic, naturally-made goods.',
};

export default function About() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="py-16 lg:py-24 px-4 lg:px-8 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-center">
              Our Story
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-dark-text/80 mb-6 leading-relaxed">
                Sarmad Original Products was born from a passion for authentic, naturally-made goods. 
                We source the finest ingredients and use traditional methods to deliver premium honey, 
                artisanal ittar, and pure desi ghee. We believe in purity, transparency, and exceptional taste.
              </p>
              <p className="text-lg text-dark-text/80 mb-6 leading-relaxed">
                Every product we offer is carefully selected and prepared with respect for traditional 
                craftsmanship and natural processes. Our commitment to quality ensures that you receive 
                only the finest, most authentic products.
              </p>
            </div>
          </div>
        </section>

        {/* Our Promise Section */}
        <section className="py-16 lg:py-24 px-4 lg:px-8 bg-off-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 text-center">
              Our Promise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-accent-gold/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">Quality Control</h3>
                <p className="text-dark-text/70">
                  Every product undergoes rigorous quality checks to ensure purity and excellence.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-accent-gold/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">Small-Batch Production</h3>
                <p className="text-dark-text/70">
                  We produce in small batches to maintain the highest standards and preserve traditional methods.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-accent-gold/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">Sustainable Sourcing</h3>
                <p className="text-dark-text/70">
                  We work with trusted local suppliers committed to sustainable and ethical practices.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

