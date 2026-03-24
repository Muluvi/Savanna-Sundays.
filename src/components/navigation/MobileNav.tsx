
"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const sections = [
  { id: 'the-gap', label: 'The Sunday Opportunity' },
  { id: 'the-concept', label: 'How It Works' },
  { id: 'the-experience', label: 'The Savanna Experience' },
  { id: 'the-content-engine', label: 'Content That Works Hard' },
  { id: 'building-the-crowd', label: 'Building the Crowd' },
  { id: 'the-numbers', label: 'The Numbers' },
];

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const savannaLogo = PlaceHolderImages.find(p => p.id === 'savanna-logo');

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <div className="md:hidden fixed top-0 left-0 w-full z-[100] px-4 py-4 flex justify-between items-center pointer-events-none">
      <div className="glass-card p-2 px-3 pointer-events-auto flex items-center">
        {savannaLogo ? (
          <div className="relative h-8 w-24">
            <Image 
              src={savannaLogo.imageUrl} 
              alt="Savanna Premium Cider" 
              fill 
              className="object-contain object-left"
            />
          </div>
        ) : (
          <div className="text-brand-gold font-headline text-lg leading-none">SS</div>
        )}
      </div>
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-brand-gold text-brand-green p-3 rounded-xl shadow-lg pointer-events-auto active:scale-95 transition-all"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={cn(
        "fixed inset-0 bg-brand-green/95 backdrop-blur-xl z-[-1] transition-all duration-500 p-8 flex flex-col justify-center items-center pointer-events-auto",
        isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      )}>
        <nav className="w-full">
          <ul className="space-y-6">
            {sections.map((section, i) => (
              <li key={section.id} 
                className={cn(
                  "transition-all duration-500",
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                )}
                style={{ transitionDelay: isOpen ? `${i * 50}ms` : '0ms' }}
              >
                <button
                  onClick={() => scrollTo(section.id)}
                  className="w-full text-center py-2 text-2xl font-headline text-brand-gold hover:text-brand-cream transition-all uppercase tracking-wider"
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
