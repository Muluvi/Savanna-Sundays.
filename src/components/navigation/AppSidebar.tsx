
"use client";

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronUp } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const sections = [
  { id: 'the-gap', label: 'The Opportunity' },
  { id: 'the-engine', label: 'The Engine' },
  { id: 'the-ritual', label: 'The Ritual' },
  { id: 'the-data', label: 'The Feedback' },
  { id: 'the-numbers', label: 'The Investment' },
];

export const AppSidebar = () => {
  const [activeId, setActiveId] = useState('');
  const [progress, setProgress] = useState(0);
  const fireflyLogo = PlaceHolderImages.find(p => p.id === 'firefly-logo');
  const savannaLogo = PlaceHolderImages.find(p => p.id === 'savanna-logo');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress((scrollPos / windowHeight) * 100);

      const sectionElements = sections.map(s => document.getElementById(s.id));
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop - 150 <= scrollPos) {
          setActiveId(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <aside className="fixed left-0 top-0 h-screen w-64 bg-brand-green hidden md:flex flex-col z-50 border-r border-white/5">
        <div className="p-8 pb-4 space-y-6">
          <div className="flex flex-col gap-4">
            {savannaLogo && (
              <div className="relative h-12 w-full">
                <Image 
                  src={savannaLogo.imageUrl} 
                  alt="Savanna Premium Cider" 
                  fill 
                  className="object-contain object-left"
                />
              </div>
            )}
            <div className="flex items-center gap-2">
              <div className="h-[1px] w-4 bg-white/20" />
              <div className="text-[8px] tracking-[3px] text-brand-teal uppercase font-bold">Managed by</div>
            </div>
            {fireflyLogo && (
              <div className="relative h-6 w-full opacity-60">
                <Image 
                  src={fireflyLogo.imageUrl} 
                  alt="Firefly Management" 
                  fill 
                  className="object-contain object-left"
                />
              </div>
            )}
          </div>
          
          <div className="pt-2">
            <div className="text-[10px] tracking-[5px] text-brand-teal uppercase mb-1 font-bold">Proposal</div>
            <div className="font-headline text-3xl text-brand-gold leading-none">Savanna Sundays</div>
          </div>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-8 px-0 scrollbar-hide">
          <ul className="space-y-1">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollTo(section.id)}
                  className={cn(
                    "w-full text-left py-4 px-8 text-[10px] tracking-[2px] font-bold uppercase transition-all border-l-4",
                    activeId === section.id 
                      ? "bg-white/5 text-brand-gold border-brand-gold" 
                      : "text-brand-cream/40 border-transparent hover:text-brand-cream hover:bg-white/5"
                  )}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-8 border-t border-white/5">
          <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-brand-gold transition-all duration-300" 
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </aside>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={cn(
          "fixed bottom-8 right-8 z-[60] bg-brand-gold text-brand-green p-4 rounded-full shadow-lg transition-all duration-300 active:scale-95",
          progress > 5 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        )}
      >
        <ChevronUp size={24} />
      </button>
    </>
  );
};
