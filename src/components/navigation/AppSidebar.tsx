
"use client";

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronUp } from 'lucide-react';

const sections = [
  { id: 'hero', label: '00 — HERO' },
  { id: 'the-gap', label: '01 — THE GAP' },
  { id: 'the-concept', label: '02 — THE CONCEPT' },
  { id: 'the-experience', label: '03 — THE EXPERIENCE' },
  { id: 'the-content-engine', label: '04 — THE CONTENT ENGINE' },
  { id: 'the-demand-machine', label: '05 — THE DEMAND MACHINE' },
  { id: 'the-numbers', label: '06 — THE NUMBERS' },
  { id: 'the-partnership', label: '07 — THE PARTNERSHIP' },
];

export const AppSidebar = () => {
  const [activeId, setActiveId] = useState('hero');
  const [progress, setProgress] = useState(0);

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
        <div className="p-8 pb-4">
          <div className="text-[10px] tracking-[5px] text-brand-teal uppercase mb-1 font-bold">Proposal</div>
          <div className="font-headline text-3xl text-brand-gold leading-none">Savanna Sundays</div>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-8 px-0 scrollbar-hide">
          <ul className="space-y-1">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollTo(section.id)}
                  className={cn(
                    "w-full text-left py-3 px-8 text-[10px] tracking-[2px] font-bold uppercase transition-all border-l-4",
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
          progress > 10 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        )}
      >
        <ChevronUp size={24} />
      </button>
    </>
  );
};
