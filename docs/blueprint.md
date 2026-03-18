# **App Name**: Savanna Sundays Prospectus

## Core Features:

- Dynamic Navigation System: Implement a fixed desktop sidebar and a mobile-responsive navigation (hamburger/bottom nav) for smooth, section-based scrolling, complete with active state indication and a scroll progress bar.
- Hero Section Presentation: Design and animate a full-viewport hero section featuring the dual-colored 'Savanna Sundays' title, co-presenter logo, a dynamic statistics row, and an animated scroll-down chevron, all set against a Deep Green background with a custom pattern.
- Thematic Section Structure: Develop 14 distinct section containers with predefined IDs, labels, titles, and background treatments (alternating light Cream and dark Deep Green), serving as the foundational layout for content delivery.
- Reusable Brand UI Components: Create a library of UI components including pill-shaped buttons (primary, secondary, teal, dark variants), hover-interactive cards, various pill-shaped badges/tags, and standardized section labels and titles, adhering strictly to the Savanna Brand Kit.
- Animated Visual Elements: Integrate scroll-triggered fade-in animations, card hover transitions, and a 'breathing' pulse effect for circular elements, ensuring smooth performance and a premium feel by prioritizing CSS transforms for efficiency.
- Signature Graphic Elements: Implement reusable SVG-based visual assets such as organic brush-stroke banners, liquid splash shapes, and a water droplet texture, applied as decorative backgrounds and overlays to enhance visual depth and brand consistency.
- Responsive Design Architecture: Build a mobile-first, adaptive layout system that ensures optimal viewing and interaction on various devices, including the Samsung A55, with specific breakpoints for stacking grids, adjusting padding, and responsive typography using 'clamp()'.

## Style Guidelines:

- Primary accent: Gold (#F4C542) is used for hero accentuation, including headlines, statistics, CTAs, and underlines.
- Secondary accent: Teal (#2D8C7F) is utilized for labels, tags, and subtle highlights, providing a complementary contrast.
- Backgrounds: Page backgrounds use Cream (#F8F5E6), while dark sections, such as the hero and specific content areas, are Deep Green (#1F4D3A). The palette strictly avoids corporate blues, purples, or cold grays.
- Supporting colors: A comprehensive palette includes Gold Dark (#D4A017), Green Mid (#2A6B4E), Parchment (#EDE8D0), Light Yellow (#FEF3C7), White (#FFFFFF), Ink (#0E1A10), and Ink Soft (#1A2E1C) to maintain visual richness and brand integrity.
- Headline Font: 'Bebas Neue' (sans-serif) for all-caps display text, section titles, hero text, and large numbers, styled with tight leading and specified letter-spacing. Note: currently only Google Fonts are supported.
- Editorial Font: 'Libre Baskerville' (serif) in italic for taglines, pull quotes, and brand essence, offering a warm, premium feel. Note: currently only Google Fonts are supported.
- Body/UI Font: 'Source Sans 3' (sans-serif) in weights 300 (Light) for body text, 700 (Bold) for uppercase labels with tracking, and 600 (SemiBold) for buttons and captions. Note: currently only Google Fonts are supported.
- Interactive Icons: A Gold animated scroll-down chevron indicates user interaction in the hero section, complemented by a floating Gold pill-shaped 'back to top' button for navigation.
- Branded Elements: The Firefly Management logo serves as a prominent co-presenter badge, enhancing brand recognition.
- Navigation: A fixed desktop sidebar (Deep Green background, Gold active state) provides continuous access to 14 sections, transforming into a hamburger menu or bottom navigation bar on mobile (< 768px).
- Section Structure: Content is divided into 14 clearly defined sections with specific IDs, alternating light Cream and dark Deep Green backgrounds, and a consistent layout structure for optimal readability.
- Footer Design: An Ink (#0E1A10) background footer showcases the Firefly logo and mandatory legal text, reinforcing branding and compliance.
- Responsive Adaptation: A mobile-first approach dictates single-column grids on mobile, reduced card padding, appropriate page padding (0 20px), and fluid typography through 'clamp()' for consistent display across all devices, particularly the Samsung A55.
- Scroll-Triggered Reveals: Elements will elegantly fade in (opacity: 0, translateY: 22px) upon entering the viewport, timed for a 0.7s ease, enhancing visual flow and content emphasis.
- Interactive Card Hover: Cards will feature a smooth translateY(-4px) and box-shadow transition over 0.3s on hover, providing subtle, responsive feedback.
- Dynamic Focus: Circular elements will exhibit a 'breathing pulse' animation via a Gold box-shadow, drawing attention to key interactive areas.
- Seamless Navigation: All section transitions will utilize smooth scrolling, ensuring a polished and uninterrupted user experience.
- Performance Prioritization: All animations will favor CSS transforms to guarantee high performance and fluidity, especially on mobile devices like the Samsung A55, avoiding heavy JavaScript computations.