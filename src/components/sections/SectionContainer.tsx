
"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  label: string;
  title: string;
  variant?: 'light' | 'dark';
  children?: React.ReactNode;
}

export const SectionContainer = ({ id, label, title, variant = 'light', children }: SectionProps) => {
  return (
    <section 
      id={id} 
      className={cn(
        "min-h-[50vh] py-16 md:py-24 px-6 md:px-12 lg:px-24 flex flex-col justify-center",
        variant === 'dark' ? "dark-section" : "bg-brand-cream"
      )}
    >
      <div className="max-w-5xl mx-auto w-full animate-fade-in-up">
        <span className="section-label">{label}</span>
        <h2 className="section-title">{title}</h2>
        <div className="w-full">
          {children || (
            <div className="font-body text-lg font-light opacity-80 max-w-2xl leading-relaxed">
              <p>Strategic presentation content loading for this segment...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
