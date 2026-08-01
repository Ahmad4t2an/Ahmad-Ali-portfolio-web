import React from 'react';

interface LogoProps {
  variant?: 'full' | 'mark' | 'icon-only';
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  size = 'md',
  className = '',
  onClick
}) => {
  // Height (in px) the logo mark should render at for each size step.
  // Tuned so the logo never looks too small or too large in the navbar/footer.
  const heightMap = {
    sm: { icon: 30, full: 34 },
    md: { icon: 38, full: 42 },
    lg: { icon: 46, full: 52 },
    xl: { icon: 60, full: 68 }
  };

  const currentHeight = heightMap[size];
  const showFull = variant === 'full';

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center select-none group ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        {showFull ? (
          <img
            src="/logo-full.png"
            alt="Ahmad Ali - Frontend Developer"
            style={{ height: currentHeight.full, width: 'auto' }}
            className="object-contain max-w-none"
            draggable={false}
          />
        ) : (
          <img
            src="/logo-icon.png"
            alt="Ahmad Ali"
            style={{ height: currentHeight.icon, width: 'auto' }}
            className="object-contain max-w-none"
            draggable={false}
          />
        )}
      </div>
    </div>
  );
};
