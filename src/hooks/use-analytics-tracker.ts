
'use client';

import { useEffect, useRef } from 'react';
import { getAnalytics, logEvent, setUserId } from 'firebase/analytics';
import { getFirebaseApp, useUser } from '@/firebase';

/**
 * Enhanced hook to track stakeholder engagement within the prospectus.
 * Tracks scroll depth, time per section, and specific 'VIP Actions' (CTA clicks).
 */
export function useAnalyticsTracker() {
  const { user } = useUser();
  const scrollDepths = useRef(new Set<number>());
  const sectionObservers = useRef(new Map<string, number>());

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const app = getFirebaseApp();
    const analytics = getAnalytics(app);

    if (user?.uid) {
      setUserId(analytics, user.uid);
    }

    // 1. Track Scroll Depth Milestones
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;
      
      const scrollPercent = Math.round((window.scrollY / scrollHeight) * 100);

      [25, 50, 75, 100].forEach((depth) => {
        if (scrollPercent >= depth && !scrollDepths.current.has(depth)) {
          scrollDepths.current.add(depth);
          logEvent(analytics, 'engagement_milestone', {
            depth_percent: depth,
            user_email: user?.email || 'unauthorized_attempt'
          });
        }
      });
    };

    // 2. High-Fidelity Section Observation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id;
          if (entry.isIntersecting) {
            sectionObservers.current.set(sectionId, Date.now());
            logEvent(analytics, 'section_view', { 
              section_id: sectionId,
              user_email: user?.email || 'anonymous'
            });
          } else {
            const startTime = sectionObservers.current.get(sectionId);
            if (startTime) {
              const duration = Math.round((Date.now() - startTime) / 1000);
              // Only log if they spent more than 2 seconds (avoids scroll-by noise)
              if (duration > 2) {
                logEvent(analytics, 'section_engagement_duration', {
                  section_id: sectionId,
                  seconds: duration,
                  user_email: user?.email || 'anonymous'
                });
              }
              sectionObservers.current.delete(sectionId);
            }
          }
        });
      },
      { threshold: 0.6 } // High threshold for "active reading"
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [user]);
}
