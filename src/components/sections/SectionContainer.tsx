"use client";

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { CiderFizz } from '@/components/brand/VisualElements';

interface SectionProps {
  id: string;
  label: string;
  title: string;
  children?: React.ReactNode;
}

export const SectionContainer = ({ id, label, title, children }: SectionProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
      setScrollProgress(progress);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const translateX = isMounted ? (scrollProgress - 0.5) * 30 : 0; 

  return (
    <section 
      ref={sectionRef}
      id={id} 
      className={cn(
        "py-20 md:py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden flex flex-col justify-center border-b border-white/5"
      )}
    >
      <div className="noise-overlay" />
      <CiderFizz className="opacity-[0.03] z-0" />
      
      <div className={cn(
        "max-w-6xl mx-auto w-full relative z-10 reveal-on-scroll",
        isVisible && "reveal-visible"
      )}>
        <div className="mb-12 md:mb-20 text-center md:text-left relative">
          <span className="section-label">{label}</span>
          <h2 
            className="section-title"
            style={{ transform: `translateX(${translateX}px)` }}
          >
            {title}
          </h2>
        </div>
        
        <div className="w-full relative">
          {children}
        </div>
      </div>
    </section>
  );
};
