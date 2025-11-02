'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { products } from '@/data/products';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-deep-green text-white overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hoempage.jpeg"
              alt="Sarmad Original Products - Premium honey, ittar, and desi ghee"
              fill
              className="object-cover animate-float"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-deep-green/70"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20 lg:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-wide drop-shadow-lg animate-fadeInDown">
                Sarmad Original Products —<br />
                Pure. Authentic. Luxurious.
              </h1>
              <p className="text-lg md:text-xl text-white/95 mb-10 max-w-2xl mx-auto drop-shadow-md animate-fadeInUp animate-delay-200">
                Natural honey, handcrafted ittar, and rich desi ghee — sourced and prepared with traditional care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animate-delay-400">
                <Link
                  href="/shop"
                  className="bg-accent-gold text-deep-green px-8 py-4 rounded-lg font-semibold hover:bg-accent-gold/90 transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:scale-105 transform"
                >
                  Shop Now
                </Link>
                <Link
                  href="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:scale-105 transform"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="py-16 lg:py-24 px-4 lg:px-8 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pure Honey */}
              <AnimatedSection animation="fadeInUp" delay={100}>
                <div className="bg-off-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover-lift group">
                <div className="w-16 h-16 bg-accent-gold/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent-gold/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <svg className="w-8 h-8 text-accent-gold group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">Pure Honey</h3>
                <p className="text-dark-text/80 mb-6">
                  100% natural, no additives.
                </p>
                <Link
                  href="/shop?product=honey"
                  className="text-accent-gold font-semibold hover:underline"
                >
                  Shop Honey →
                </Link>
                </div>
              </AnimatedSection>

              {/* Top-Quality Itter */}
              <AnimatedSection animation="fadeInUp" delay={200}>
                <div className="bg-off-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover-lift group">
                <div className="w-16 h-16 bg-accent-gold/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent-gold/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <svg className="w-8 h-8 text-accent-gold group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">Top-Quality Itter</h3>
                <p className="text-dark-text/80 mb-6">
                  Hand-blended, long-lasting scents.
                </p>
                <Link
                  href="/shop?product=itter"
                  className="text-accent-gold font-semibold hover:underline"
                >
                  Shop Itter →
                </Link>
                </div>
              </AnimatedSection>

              {/* Desi Ghee */}
              <AnimatedSection animation="fadeInUp" delay={300}>
                <div className="bg-off-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover-lift group">
                <div className="w-16 h-16 bg-accent-gold/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent-gold/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <svg className="w-8 h-8 text-accent-gold group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">Desi Ghee</h3>
                <p className="text-dark-text/80 mb-6">
                  Traditional clarity, rich flavour.
                </p>
                <Link
                  href="/shop?product=ghee"
                  className="text-accent-gold font-semibold hover:underline"
                >
                  Shop Ghee →
                </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="py-12 px-4 lg:px-8 bg-deep-green text-white">
          <div className="container mx-auto max-w-6xl text-center">
            <p className="text-lg font-semibold mb-4">
              Quality Guaranteed — Money-back guarantee if not satisfied
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Secure Payment
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
                Shipping across Pakistan
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Preview */}
        <section className="py-16 lg:py-24 px-4 lg:px-8 bg-off-white">
          <div className="container mx-auto max-w-6xl">
            <AnimatedSection animation="fadeInUp">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
                Featured Products
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* This will be populated by shop products */}
              <AnimatedSection animation="scaleIn" delay={100}>
                <div className="bg-white p-6 rounded-lg shadow-md hover-lift group overflow-hidden">
                  <div className="aspect-square bg-gray-200 rounded-lg mb-4 overflow-hidden relative group-hover:scale-105 transition-transform duration-500">
                    {products.find(p => p.slug === 'pure-honey')?.images?.[0] && (
                      <Image
                        src={products.find(p => p.slug === 'pure-honey')!.images[0]}
                        alt="Pure Honey"
                        fill
                        className="object-cover rounded-lg"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    )}
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-accent-gold transition-colors">Pure Honey</h3>
                  <p className="text-dark-text/60 mb-4">250g / 500g</p>
                  <Link
                    href="/shop/pure-honey"
                    className="block w-full text-center bg-deep-green text-white py-3 rounded-lg font-semibold hover:bg-deep-green/90 transition-all duration-300 hover:scale-105 transform"
                  >
                    View Product
                  </Link>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="scaleIn" delay={200}>
                <div className="bg-white p-6 rounded-lg shadow-md hover-lift group overflow-hidden">
                  <div className="aspect-square bg-gray-200 rounded-lg mb-4 overflow-hidden relative group-hover:scale-105 transition-transform duration-500">
                    {products.find(p => p.slug === 'luxury-itter-fadai')?.images?.[0] && (
                      <Image
                        src={products.find(p => p.slug === 'luxury-itter-fadai')!.images[0]}
                        alt="Luxury Itter"
                        fill
                        className="object-cover rounded-lg"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    )}
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-accent-gold transition-colors">Luxury Itter</h3>
                  <p className="text-dark-text/60 mb-4">10ml / 25ml</p>
                  <Link
                    href="/shop"
                    className="block w-full text-center bg-deep-green text-white py-3 rounded-lg font-semibold hover:bg-deep-green/90 transition-all duration-300 hover:scale-105 transform"
                  >
                    View Products
                  </Link>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="scaleIn" delay={300}>
                <div className="bg-white p-6 rounded-lg shadow-md hover-lift group overflow-hidden">
                  <div className="aspect-square bg-gray-200 rounded-lg mb-4 overflow-hidden relative group-hover:scale-105 transition-transform duration-500">
                    {products.find(p => p.slug === 'pure-desi-ghee')?.images?.[0] && (
                      <Image
                        src={products.find(p => p.slug === 'pure-desi-ghee')!.images[0]}
                        alt="Pure Desi Ghee"
                        fill
                        className="object-cover rounded-lg"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    )}
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-accent-gold transition-colors">Pure Desi Ghee</h3>
                  <p className="text-dark-text/60 mb-4">300g / 1kg</p>
                  <Link
                    href="/shop/pure-desi-ghee"
                    className="block w-full text-center bg-deep-green text-white py-3 rounded-lg font-semibold hover:bg-deep-green/90 transition-all duration-300 hover:scale-105 transform"
                  >
                    View Product
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

