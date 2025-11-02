interface LogoProps {
  variant?: 'horizontal' | 'stacked';
  className?: string;
  showIcon?: boolean;
}

export default function Logo({ variant = 'horizontal', className = '', showIcon = true }: LogoProps) {
  // Icon: Stylized bottle with honey drop/leaf
  const IconSVG = (
    <svg
      width="40"
      height="48"
      viewBox="0 0 40 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="flex-shrink-0"
    >
      {/* Bottle silhouette */}
      <path
        d="M20 2C18.8954 2 18 2.89543 18 4V6H14C13.4477 6 13 6.44772 13 7V43C13 45.2091 14.7909 47 17 47H23C25.2091 47 27 45.2091 27 43V7C27 6.44772 26.5523 6 26 6H22V4C22 2.89543 21.1046 2 20 2Z"
        fill="#c9a84a"
      />
      {/* Bottle neck detail */}
      <rect x="16" y="6" width="8" height="2" fill="#0f5a3c" opacity="0.3" />
      {/* Cap/stopper */}
      <rect x="18" y="2" width="4" height="2" rx="1" fill="#c9a84a" />
      {/* Honey drop/leaf accent */}
      <path
        d="M20 12C18 12 16 14 16 16C16 18 18 20 20 22C22 20 24 18 24 16C24 14 22 12 20 12Z"
        fill="#0f5a3c"
      />
      {/* Small decorative line */}
      <path d="M18 28H22" stroke="#c9a84a" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center ${className}`}>
        {showIcon && (
          <div className="mb-3 flex items-center justify-center">
            {IconSVG}
          </div>
        )}
        <span className="font-serif text-3xl font-bold text-accent-gold tracking-wide">
          Sarmad
        </span>
        <span className="font-sans text-xs tracking-wider text-accent-gold mt-1 uppercase">
          Original Products
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {showIcon && IconSVG}
      <div className="flex flex-col">
        <span className="font-serif text-2xl font-bold text-accent-gold tracking-wide leading-tight">
          Sarmad
        </span>
        <span className="font-sans text-xs tracking-wider text-accent-gold uppercase leading-tight">
          Original Products
        </span>
      </div>
    </div>
  );
}
