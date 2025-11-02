'use client';

import { useState, useEffect } from 'react';
import { XMarkIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

export default function UnderConstructionBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isVisible || !mounted) return null;

  return (
    <div className="relative bg-gradient-to-r from-accent-gold via-yellow-400 to-accent-gold text-deep-green py-3 px-4 overflow-hidden animate-slideDown shadow-md">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230f5a3c' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            animation: 'shimmer 10s linear infinite'
          }}
        ></div>
      </div>

      <div className="container mx-auto relative z-10 flex items-center justify-center gap-3 md:gap-4 text-xs md:text-sm font-medium">
        {/* Animated Construction Icon */}
        <div className="flex-shrink-0 animate-pulse">
          <WrenchScrewdriverIcon className="w-4 h-4 md:w-5 md:h-5 text-deep-green" />
        </div>

        {/* Main Text with Animation */}
        <div className="flex items-center gap-2 flex-wrap justify-center text-center">
          <span className="inline-block animate-bounce">🚧</span>
          <span>
            <span className="font-bold text-sm md:text-base">Website Under Construction</span>
            <span className="hidden sm:inline"> — </span>
            <span className="block sm:inline font-normal text-xs md:text-sm mt-1 sm:mt-0">
              We're working hard to bring you an exceptional experience. Some features may be limited.
            </span>
          </span>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-deep-green hover:text-deep-green/70 transition-all duration-200 p-1.5 rounded-full hover:bg-deep-green/10 active:scale-95"
          aria-label="Close banner"
          title="Close"
        >
          <XMarkIcon className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>

      {/* Animated Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 md:h-1 bg-deep-green/10 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-transparent via-deep-green to-transparent animate-progress"
          style={{
            width: '40%',
            animation: 'progress 2s linear infinite'
          }}
        ></div>
      </div>
    </div>
  );
}

