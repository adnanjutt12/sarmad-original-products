'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { products, getProductsByCategory } from '@/data/products';

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const filteredProducts = getProductsByCategory(selectedCategory);
  const categories = [
    { value: '', label: 'All Products' },
    { value: 'honey', label: 'Honey' },
    { value: 'itter', label: 'Itter' },
    { value: 'ghee', label: 'Desi Ghee' },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="py-16 lg:py-24 px-4 lg:px-8 bg-white">
          <div className="container mx-auto max-w-7xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-center">
              Our Products
            </h1>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.value
                      ? 'bg-deep-green text-white shadow-lg'
                      : 'bg-off-white text-dark-text hover:bg-deep-green hover:text-white'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => {
                const lowestPrice = Math.min(...product.variants.map((v) => v.price));
                const highestPrice = Math.max(...product.variants.map((v) => v.price));

                return (
                  <AnimatedSection key={product.id} animation="scaleIn" delay={index * 100}>
                    <Link
                      href={`/shop/${product.slug}`}
                      className="bg-off-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover-lift group block"
                    >
                      <div className="aspect-square bg-gray-200 relative overflow-hidden">
                        {product.images && product.images[0] ? (
                          <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-deep-green/10 to-accent-gold/10 group-hover:scale-110 transition-transform duration-500">
                            <p className="text-dark-text/40 text-sm">Product Image</p>
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-accent-gold transition-colors duration-300">
                          {product.name}
                        </h3>
                        <p className="text-dark-text/70 text-sm mb-4 line-clamp-2">
                          {product.shortDescription}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-deep-green">
                            {lowestPrice === highestPrice
                              ? `Rs. ${lowestPrice.toLocaleString()}`
                              : `Rs. ${lowestPrice.toLocaleString()} - Rs. ${highestPrice.toLocaleString()}`}
                          </span>
                          <span className="text-accent-gold font-semibold group-hover:translate-x-1 transition-transform duration-300 inline-block">View →</span>
                        </div>
                      </div>
                    </Link>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

