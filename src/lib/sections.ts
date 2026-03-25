
/**
 * Centralized strategic section definitions.
 * Ensures synchronization across navigation and page components.
 */
export const APP_SECTIONS = [
  { id: 'the-gap', label: '01 — The Opportunity', num: '01' },
  { id: 'the-engine', label: '02 — The Venue Network', num: '02' },
  { id: 'the-ritual', label: '03 — The Ritual', num: '03' },
  { id: 'the-numbers', label: '04 — The Investment', num: '04' },
  { id: 'the-partnership', label: '05 — The Partnership', num: '05' },
];

export const PROGRESS_SECTIONS = ['hero', ...APP_SECTIONS.map(s => s.id), 'closing'];
