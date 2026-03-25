
"use client";

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronUp } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cl } from '@/lib/cloudinary';
import { APP_SECTIONS } from '@/lib/sections';

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

      for (let i = APP_SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(APP_SECTIONS[i].id);
        if (el && el.offsetTop - 150 <= scrollPos) {
          setActiveId(APP_SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <aside className="fixed left-0 top-0 h-screen w-64 bg-brand-green hidden md:flex flex-col z-50 border-r border-white/5">
        <div className="p-8 pb-4 space-y-8">
          <div className="flex flex-col gap-6">
            {savannaLogo && (
              <img 
                src={cl(savannaLogo.imageUrl, 'q_auto:best,f_auto,dpr_2.0,w_400')} 
                alt="Savanna" 
                style={{ height: '56px', width: 'auto', objectFit: 'contain' }}
              />
            )}
            <div className="flex items-center gap-2">
              <div className="h-[1px] w-6 bg-brand-gold/30" />
              <div className="text-[var(--text-xs)] tracking-[4px] text-brand-gold uppercase font-bold">Managed by</div>
            </div>
            {fireflyLogo && (
              <img 
                src={cl(fireflyLogo.imageUrl, 'q_auto:best,f_auto,dpr_2.0,w_400')} 
                alt="Firefly Management" 
                className="opacity-100 hover:scale-105 transition-transform"
                style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
              />
            )}
          </div>
          <div className="pt-4 border-t border-white/5">
            <div className="text-[var(--text-xs)] tracking-[4px] text-brand-gold/60 uppercase mb-2 font-bold">Strategic Proposal</div>
            <div className="font-headline text-[var(--text-2xl)] text-brand-gold leading-none tracking-tighter">Savanna Sundays</div>
          </div>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-8 px-0 scrollbar-hide">
          <ul className="space-y-1">
            {APP_SECTIONS.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollTo(section.id)}
                  className={cn(
                    "w-full text-left py-4 px-8 text-[var(--text-xs)] tracking-[4px] font-bold uppercase transition-all border-l-4",
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
