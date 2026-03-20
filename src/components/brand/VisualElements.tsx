
"use client";

import React, { useEffect, useState } from 'react';

export const BrushStroke = ({ className, color = "#F4C542", opacity = 0.85 }: { className?: string; color?: string; opacity?: number }) => (
  <svg viewBox="0 0 200 60" className={className} style={{ position: 'absolute', zIndex: 0 }}>
    <path 
      d="M6 40 C35 10, 85 8, 128 20 C165 30, 190 22, 196 18" 
      stroke={color} 
      strokeWidth="24" 
      strokeLinecap="round" 
      fill="none" 
      opacity={opacity} 
    />
    <path 
      d="M6 40 C35 10, 85 8, 128 20 C165 30, 190 22, 196 18" 
      stroke="#FFFFFF" 
      strokeWidth="5" 
      strokeLinecap="round" 
      fill="none" 
      opacity=".2" 
    />
  </svg>
);

export const LiquidSplash = ({ className, color = "#F4C542" }: { className?: string; color?: string }) => (
  <div className={`absolute pointer-events-none opacity-40 blur-3xl ${className}`}>
    <div className="w-64 h-64 rounded-full" style={{ backgroundColor: color }}></div>
  </div>
);

export const CiderFizz = ({ className }: { className?: string }) => {
  const [bubbles, setBubbles] = useState<{
    size: string;
    left: string;
    delay: string;
    duration: string;
  }[]>([]);

  useEffect(() => {
    const generated = [...Array(15)].map(() => ({
      size: `${Math.random() * 4 + 2}px`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 3 + 4}s`
    }));
    setBubbles(generated);
  }, []);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {bubbles.map((bubble, i) => (
        <div 
          key={i} 
          className="absolute bottom-0 rounded-full bg-brand-gold opacity-30 animate-fizz"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: bubble.left,
            animationDelay: bubble.delay,
            animationDuration: bubble.duration
          }}
        />
      ))}
    </div>
  );
};

export const WaterDroplets = ({ className }: { className?: string }) => {
  const [droplets, setDroplets] = useState<{
    width: string;
    height: string;
    top: string;
    left: string;
    backgroundColor: string;
    opacity: number;
  }[]>([]);

  useEffect(() => {
    const generated = [...Array(20)].map(() => ({
      width: `${Math.random() * 6 + 2}px`,
      height: `${Math.random() * 6 + 2}px`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      backgroundColor: Math.random() > 0.5 ? '#F4C542' : '#2D8C7F',
      opacity: Math.random() * 0.35 + 0.3
    }));
    setDroplets(generated);
  }, []);

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {droplets.map((style, i) => (
        <div 
          key={i} 
          className="absolute rounded-full"
          style={style}
        />
      ))}
    </div>
  );
};
