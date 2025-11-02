'use client';

import Link from 'next/link';
import { useState } from 'react';
import Logo from './Logo';
import UnderConstructionBanner from './UnderConstructionBanner';
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useCart } from '@/contexts/CartContext';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  const cartCount = getTotalItems();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/shop', label: 'Shop' },
    { href: '/about', label: 'About' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <UnderConstructionBanner />
      <header className="sticky top-0 z-50 bg-deep-green shadow-md backdrop-blur-sm bg-opacity-95 animate-fadeInDown">
        <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 hover:scale-105 transition-transform duration-300">
            <Logo variant="horizontal" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-accent-gold transition-all duration-300 font-medium relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-gold group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Cart Icon */}
          <Link href="/cart" className="relative flex items-center hover:scale-110 transition-transform duration-300 group">
            <ShoppingCartIcon className="h-6 w-6 text-white group-hover:text-accent-gold transition-colors duration-300" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent-gold text-deep-green text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse group-hover:scale-110 transition-transform">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-accent-gold/20">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-white hover:text-accent-gold transition-all duration-300 hover:translate-x-2 transform"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
    </>
  );
}

