import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 28 }) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <div 
        className="absolute inset-0 border-current"
        style={{
          clipPath: 'polygon(0 100%, 50% 0, 100% 100%)',
        }}
      />
    </div>
  );
};

export default Logo;