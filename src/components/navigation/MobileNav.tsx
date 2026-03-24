"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const sections = [
  { id: 'the-gap', label: 'The Sunday Opportunity', num: '01' },
  { id: 'the-concept', label: 'How It Works', num: '02' },
  { id: 'the-experience', label: 'The Savanna Experience', num: '03' },
  { id: 'the-content-engine', label: 'Content That Works Hard', num: '04' },
  { id: 'building-the-crowd', label: 'Building the Crowd', num: '05' },
  { id: 'the-numbers', label: 'The Numbers', num: '06' },
];

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const savannaLogo = PlaceHolderImages.find(p => p.id === 'savanna-logo');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // Mobile header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      <div className={cn(
        "md:hidden fixed top-0 left-0 w-full z-[100] px-6 py-4 flex justify-between items-center transition-all duration-500",
        scrolled ? "bg-brand-dark/80 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      )}>
        <div className="flex items-center gap-4">
          {savannaLogo && (
            <div className="relative h-10 w-28">
              <Image 
                src={savannaLogo.imageUrl} 
                alt="Savanna" 
                fill 
                className="object-contain object-left"
              />
            </div>
          )}
        </div>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 flex items-center justify-center bg-brand-gold text-brand-green rounded-2xl shadow-xl active:scale-90 transition-all z-[110]"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={cn(
        "fixed inset-0 bg-brand-green z-[105] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] flex flex-col p-10 pt-32 overflow-hidden",
        isOpen ? "translate-y-0" : "-translate-y-full"
      )}>
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-teal/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 space-y-2">
          <p className="font-body text-[10px] tracking-[5px] text-brand-gold uppercase font-bold opacity-60">PROSPECTUS NAVIGATION</p>
          <h3 className="font-headline text-5xl text-white">STRATEGIC PILLARS</h3>
        </div>

        <nav className="relative z-10 flex-1 flex flex-col justify-center py-10">
          <ul className="space-y-4">
            {sections.map((section, i) => (
              <li 
                key={section.id} 
                className={cn(
                  "transition-all duration-700 transform",
                  isOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                )}
                style={{ transitionDelay: isOpen ? `${i * 70}ms` : '0ms' }}
              >
                <button
                  onClick={() => scrollTo(section.id)}
                  className="w-full flex items-center justify-between group py-3 border-b border-white/5"
                >
                  <div className="flex items-center gap-6">
                    <span className="font-headline text-xl text-brand-gold/40">{section.num}</span>
                    <span className="font-headline text-3xl text-white tracking-wide uppercase transition-all group-hover:text-brand-gold group-hover:translate-x-2">
                      {section.label}
                    </span>
                  </div>
                  <ChevronRight className="text-brand-gold opacity-0 group-hover:opacity-100 transition-all" size={24} />
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className={cn(
          "relative z-10 pt-10 border-t border-white/10 transition-all duration-1000 delay-500",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <Sparkles className="text-brand-gold" size={20} />
            </div>
            <p className="font-body text-xs text-white/60 font-bold uppercase tracking-widest">A Firefly Strategic Deck</p>
          </div>
        </div>
      </div>
    </>
  );
};