'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getProductBySlug, products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';

interface ProductPageProps {
  params: { slug: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const router = useRouter();
  const product = getProductBySlug(params.slug);
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (!product) {
      router.push('/shop');
    }
  }, [product, router]);

  if (!product || !selectedVariant) {
    return null;
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="py-16 lg:py-24 px-4 lg:px-8 bg-white">
          <div className="container mx-auto max-w-6xl">
            {/* Breadcrumb */}
            <nav className="mb-8 text-sm text-dark-text/60">
              <Link href="/" className="hover:text-accent-gold">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/shop" className="hover:text-accent-gold">Shop</Link>
              <span className="mx-2">/</span>
              <span>{product.name}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Product Images */}
              <div>
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden mb-4 relative group">
                  {product.images && product.images[0] ? (
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover rounded-lg group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-deep-green/10 to-accent-gold/10">
                      <p className="text-dark-text/40 text-sm">Product Image</p>
                    </div>
                  )}
                </div>
                {product.images && product.images.length > 1 && (
                  <div className="grid grid-cols-4 gap-2">
                    {product.images.slice(1).map((img, idx) => (
                      <div
                        key={idx}
                        className="aspect-square bg-gray-200 rounded-lg overflow-hidden relative group cursor-pointer"
                      >
                        <Image
                          src={img}
                          alt={`${product.name} - ${idx + 2}`}
                          fill
                          className="object-cover rounded-lg group-hover:scale-110 transition-transform duration-300"
                          sizes="(max-width: 768px) 25vw, 10vw"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Details */}
              <div>
                <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                  {product.name}
                </h1>
                <p className="text-lg text-dark-text/80 mb-6">{product.shortDescription}</p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-3xl font-bold text-deep-green">
                    Rs. {selectedVariant.price.toLocaleString()}
                  </span>
                </div>

                {/* Variant Selector */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-3">Select Size</label>
                  <div className="flex flex-wrap gap-3">
                    {product.variants.map((variant) => (
                      <button
                        key={variant.id}
                        onClick={() => setSelectedVariant(variant)}
                        disabled={!variant.inStock}
                        className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                          selectedVariant.id === variant.id
                            ? 'bg-deep-green text-white'
                            : variant.inStock
                            ? 'bg-off-white text-dark-text hover:bg-deep-green hover:text-white'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        {variant.name}
                        {!variant.inStock && ' (Out of Stock)'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity Selector */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-3">Quantity</label>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-off-white"
                    >
                      -
                    </button>
                    <span className="text-lg font-semibold w-12 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-off-white"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  disabled={!selectedVariant.inStock}
                  className={`w-full py-4 rounded-lg font-semibold text-lg transition-colors mb-4 ${
                    selectedVariant.inStock
                      ? 'bg-deep-green text-white hover:bg-deep-green/90'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {selectedVariant.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>

                {showSuccess && (
                  <div className="mb-4 p-4 bg-green-100 text-green-800 rounded-lg">
                    Added to cart successfully!
                  </div>
                )}

                {/* Product Description */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h2 className="font-serif text-xl font-bold mb-4">Description</h2>
                  <p className="text-dark-text/80 leading-relaxed whitespace-pre-line">
                    {product.longDescription}
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-6">
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-accent-gold/20 text-accent-gold rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <div>
                <h2 className="font-serif text-2xl font-bold mb-8">Related Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedProducts.map((relatedProduct) => {
                    const lowestPrice = Math.min(
                      ...relatedProduct.variants.map((v) => v.price)
                    );
                    return (
                      <Link
                        key={relatedProduct.id}
                        href={`/shop/${relatedProduct.slug}`}
                        className="bg-off-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                      >
                        <div className="aspect-square bg-gray-200 relative overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-deep-green/10 to-accent-gold/10">
                            <p className="text-dark-text/40 text-sm">Product Image</p>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-serif text-lg font-bold mb-2">
                            {relatedProduct.name}
                          </h3>
                          <p className="text-deep-green font-bold">
                            Rs. {lowestPrice.toLocaleString()}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

