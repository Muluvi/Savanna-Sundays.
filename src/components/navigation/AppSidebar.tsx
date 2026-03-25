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
      <aside className="fixed left-0 top-0 h-screen w-64 bg-[#0A140B]/90 backdrop-blur-3xl hidden md:flex flex-col z-50 border-r border-white/5 shadow-2xl">
        <div className="p-8 pb-4 space-y-10">
          <div className="flex flex-col gap-8">
            {savannaLogo && (
              <img 
                src={cl(savannaLogo.imageUrl, 'q_auto:best,f_auto,dpr:2.0,w_400')} 
                alt="Savanna" 
                className="drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                style={{ height: '64px', width: 'auto', objectFit: 'contain' }}
              />
            )}
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-8 bg-brand-gold/30" />
              <div className="text-[10px] tracking-[4px] text-brand-gold uppercase font-bold">Managed by</div>
            </div>
            {fireflyLogo && (
              <img 
                src={cl(fireflyLogo.imageUrl, 'q_auto:best,f_auto,dpr:2.0,w_400')} 
                alt="Firefly Management" 
                className="opacity-100 hover:scale-105 transition-transform drop-shadow-[0_5px_15px_rgba(0,0,0,0.3)]"
                style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
              />
            )}
          </div>
          <div className="pt-6 border-t border-white/10">
            <div className="text-[10px] tracking-[4px] text-brand-gold/60 uppercase mb-2 font-bold">Strategic Proposal</div>
            <div className="font-headline text-3xl text-brand-gold leading-none tracking-tighter uppercase">Savanna Sundays</div>
          </div>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-10 px-0 scrollbar-hide">
          <ul className="space-y-1">
            {APP_SECTIONS.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollTo(section.id)}
                  className={cn(
                    "w-full text-left py-6 px-10 text-[10px] tracking-[4px] font-bold uppercase transition-all border-l-4",
                    activeId === section.id 
                      ? "bg-white/5 text-brand-gold border-brand-gold shadow-[inset_4px_0_10px_rgba(244,197,66,0.1)]" 
                      : "text-brand-cream/40 border-transparent hover:text-brand-cream hover:bg-white/5"
                  )}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-10 border-t border-white/10">
           <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div 
                className="h-full bg-brand-gold transition-all duration-500 shadow-[0_0_10px_rgba(244,197,66,0.5)]" 
                style={{ width: `${progress}%` }}
              />
           </div>
        </div>
      </aside>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={cn(
          "fixed bottom-10 right-10 z-[60] bg-brand-gold text-brand-green p-5 rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.4)] transition-all duration-300 active:scale-95 hover:-translate-y-1",
          progress > 5 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        )}
      >
        <ChevronUp size={28} />
      </button>
    </>
  );
};
