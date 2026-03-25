# Savanna Sundays | Firefly Management Strategic Prospectus

This is a high-fidelity, mobile-first React pitch deck built for Firefly Management to present the city-wide expansion proposal for the live "Savanna Sundays" movement for Savanna Premium Cider.

## Integrated Firebase & AI Services

The following services are fully configured and integrated into the application:

### 1. Firebase Authentication
- **Purpose**: Secure access for stakeholders.
- **Implementation**: `AuthGuard` component restricts entry to whitelisted emails.
- **Providers**: Google SSO and Password-based VIP Access.

### 2. Cloud Firestore
- **Purpose**: Strategic data management.
- **Collections**:
  - `invitedUsers`: Whitelist of emails allowed to view the deck.
  - `prospectusLeads`: Captures stakeholder feedback and interest in real-time.

### 3. Firebase Analytics
- **Purpose**: Engagement measurement.
- **Tracking**:
  - `section_view`: Logs when a user reads a specific strategic pillar.
  - `engagement_milestone`: Tracks scroll depth (25%, 50%, 75%, 100%).
  - `section_engagement_duration`: Measures seconds spent per section to identify "hot spots" of interest.

### 4. Genkit AI (Strategic Advisor)
- **Model**: `gemini-1.5-flash`.
- **Purpose**: Answering stakeholder questions about ROI, scalability, and city-wide expansion.
- **Reliability**: Features a 10-second auto-retry logic for 429 rate-limiting errors.

### 5. Firebase Hosting
- **Config**: Ready for deployment via `firebase.json` and `apphosting.yaml`.

## Visual Standards
- **HD Imagery**: Served via high-performance CDN.
- **Motion Enhancements**: Staggered reveals, marquee loops, and rolling KPI counters.
- **Identity**: Custom brand palette (Savanna Gold, Firefly Green) with glassmorphism and editorial noise textures.

---
*Confidential Strategic Document. © 2024 Firefly Management.*
