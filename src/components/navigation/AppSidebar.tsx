"use client";

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronUp } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cl } from '@/lib/cloudinary';

const sections = [
  { id: 'the-gap', label: '01 — The Opportunity' },
  { id: 'the-engine', label: '02 — The Venue Network' },
  { id: 'the-ritual', label: '03 — The Ritual' },
  { id: 'the-numbers', label: '04 — The Investment' },
  { id: 'why-firefly', label: '05 — Why Firefly' },
  { id: 'growth-plan', label: '06 — Growth Plan' },
  { id: 'infrastructure', label: '07 — Infrastructure' },
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
              <img 
                src={cl(savannaLogo.imageUrl, 'q_auto:best,f_auto,dpr_2.0,w_400')} 
                alt="Savanna" 
                style={{ height: '48px', width: 'auto', objectFit: 'contain' }}
              />
            )}
            <div className="flex items-center gap-2">
              <div className="h-[1px] w-4 bg-white/20" />
              <div className="text-[var(--text-xs)] tracking-[3px] text-brand-teal uppercase font-bold">Managed by</div>
            </div>
            {fireflyLogo && (
              <img 
                src={cl(fireflyLogo.imageUrl, 'q_auto:best,f_auto,dpr_2.0,w_400')} 
                alt="Firefly" 
                style={{ height: '24px', width: 'auto', objectFit: 'contain' }}
              />
            )}
          </div>
          <div className="pt-2">
            <div className="text-[var(--text-xs)] tracking-[5px] text-brand-teal uppercase mb-1 font-bold">Proposal</div>
            <div className="font-headline text-[var(--text-xl)] text-brand-gold leading-none">Savanna Sundays</div>
          </div>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-8 px-0 scrollbar-hide">
          <ul className="space-y-1">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollTo(section.id)}
                  className={cn(
                    "w-full text-left py-4 px-8 text-[var(--text-xs)] tracking-[2px] font-bold uppercase transition-all border-l-4",
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