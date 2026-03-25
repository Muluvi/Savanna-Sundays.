/**
 * Cloudinary URL transformation utility.
 * Injects transformation parameters into the Cloudinary URL.
 * Defaults to best quality, auto format, and 2.0 DPR for high-fidelity displays.
 */
export function cl(url: string, t = 'q_auto:best,f_auto,dpr_2.0') {
  if (!url || !url.includes('/upload/')) return url;
  return url.replace('/upload/', `/upload/${t}/`);
}
