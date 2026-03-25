
'use client';

import React, { useEffect, useState } from 'react';
import { PROGRESS_SECTIONS } from '@/lib/sections';

export const MobileProgressBar = () => {
  const [progresses, setProgresses] = useState<number[]>(new Array(PROGRESS_SECTIONS.length).fill(0));

  useEffect(() => {
    const handleScroll = () => {
      const newProgresses = PROGRESS_SECTIONS.map((id) => {
        const el = document.getElementById(id);
        if (!el) return 0;

        const rect = el.getBoundingClientRect();
        const sectionHeight = el.offsetHeight;
        const scrolled = -rect.top;
        const progress = Math.min(1, Math.max(0, scrolled / sectionHeight));
        
        return progress;
      });

      setProgresses(newProgresses);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full h-[4px] z-[50] flex gap-1.5 px-2 pb-0 md:hidden pointer-events-none">
      {PROGRESS_SECTIONS.map((id, i) => (
        <div 
          key={id} 
          className="flex-1 h-full bg-brand-gold/20 relative rounded-full overflow-hidden"
        >
          <div 
            className="absolute inset-0 bg-brand-gold origin-left transition-transform duration-100 ease-out"
            style={{ 
              transform: `scaleX(${progresses[i]})`,
            }}
          />
        </div>
      ))}
    </div>
  );
};
