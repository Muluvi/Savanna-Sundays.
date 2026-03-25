
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCounterProps {
  value: string | number;
  delay?: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
  showCommas?: boolean;
  triggerOnce?: boolean;
}

/**
 * High-fidelity animated counter for strategic metrics.
 * Uses an IntersectionObserver to trigger sequential animations.
 */
export function AnimatedCounter({
  value,
  delay = 0,
  duration = 2000,
  className,
  suffix = "",
  prefix = "",
  showCommas = true,
  triggerOnce = true
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  const target = typeof value === 'string' 
    ? parseFloat(value.replace(/,/g, '')) 
    : value;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!triggerOnce || !hasAnimated)) {
          setHasAnimated(true);
          setTimeout(() => startAnimation(), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    const startAnimation = () => {
      let startTime: number | null = null;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease Out Quint: cubic-bezier(0.23, 1, 0.32, 1)
        const easeOutQuint = 1 - Math.pow(1 - progress, 5);
        
        setDisplayValue(easeOutQuint * target);
        if (progress < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    };

    return () => observer.disconnect();
  }, [target, hasAnimated, delay, duration, triggerOnce]);

  const formatted = showCommas 
    ? Math.floor(displayValue).toLocaleString() 
    : Math.floor(displayValue).toString();

  return (
    <span ref={containerRef} className={cn("inline-block", className)}>
      {prefix}{formatted}{suffix}
    </span>
  );
}
