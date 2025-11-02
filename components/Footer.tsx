import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-green text-white mt-20">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <Logo variant="horizontal" className="mb-4" />
            <p className="text-white/80 text-sm">
              Sarmad Original Products — Quality Guaranteed
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="text-white/80 hover:text-accent-gold transition-all duration-300 hover:translate-x-1 transform inline-block">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-accent-gold transition-all duration-300 hover:translate-x-1 transform inline-block">
                  About
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white/80 hover:text-accent-gold transition-all duration-300 hover:translate-x-1 transform inline-block">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-accent-gold transition-all duration-300 hover:translate-x-1 transform inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="font-serif text-lg mb-4">Legal</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href="/privacy" className="text-white/80 hover:text-accent-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/80 hover:text-accent-gold transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/sarmadoriginal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-accent-gold transition-all duration-300 hover:scale-110 transform inline-block"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com/sarmadoriginal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-accent-gold transition-all duration-300 hover:scale-110 transform inline-block"
                aria-label="Facebook"
              >
                Facebook
              </a>
              <a
                href="https://wa.me/923428297123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-accent-gold transition-all duration-300 hover:scale-110 transform inline-block"
                aria-label="WhatsApp"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
          <p>&copy; {currentYear} Sarmad Original Products. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

