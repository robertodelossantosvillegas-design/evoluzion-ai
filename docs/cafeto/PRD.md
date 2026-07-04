# PRD.md — Cafeto (MVP)

> Read CONTEXT.md first. This document translates the vision into concrete scope. Where this document is silent or ambiguous, defer to CONTEXT.md and use judgment rather than asking for a spec that doesn't exist yet.

## MVP Scope
Launch city: **Monterrey, Nuevo León**.
Two sides of the product: **consumer app** (discovery) and **café owner dashboard** (business/subscription management). Both must exist for the business model to work — the MVP is not just the consumer app.

---

## 1. Consumer App

### 1.1 Onboarding
- Fast, low-friction entry. Optional account creation should not block browsing.
- Ask for location permission to power discovery, not for account setup.
- No lengthy preference surveys — let behavior (favorites, roulette spins, routes taken) teach the app about the user over time.

### 1.2 Discovery Feed
- Visual-first feed of cafés (photography-forward cards, not list rows).
- Should feel editorial: curated collections, not exhaustive listings ("Best for working," "Hidden gems," "New this month").
- Filtering exists but is secondary — it should feel like a tool for when exploration isn't enough, not the primary interaction.

### 1.3 Café Profile
Each café gets a premium, magazine-style profile page:
- High-quality photography (hero image + gallery)
- Short curated description (editorial voice, not owner-submitted marketing copy dump)
- Practical info: hours, location, price range, amenities (wifi, outlets, pet-friendly, outdoor seating)
- No star ratings, no public review threads (see CONTEXT.md — Reviews)
- Save/favorite action
- Share action

### 1.4 Coffee Roulette
- One-tap randomized café suggestion, filterable by rough proximity/mood (e.g. "near me," "for working," "for a date").
- Should feel like a fun decision-making tool, not a slot machine gimmick — the payoff is discovering somewhere good.

### 1.5 Coffee Routes
- Curated multi-stop itineraries built around a theme (neighborhood crawl, "third-wave tour," morning-to-afternoon route).
- Initial routes can be editorially curated by the Cafeto team; architecture should allow for algorithmic/personalized routes later.

### 1.6 Coffee Challenges
- Lightweight gamification: e.g. "Visit 5 new cafés this month," "Try 3 cafés in Barrio Antiguo."
- Progress tracking, light rewards (badges, recognition) — avoid heavy-handed points/leaderboard systems that feel like a different app.

### 1.7 Favorites & Personal Map
- Users can save cafés into a personal collection.
- A simple visual way to revisit saved places.

---

## 2. Café Owner Side (Business Platform)

### 2.1 Owner Onboarding
- Self-serve signup flow for café owners to claim/create their listing.
- Clear value proposition shown before payment: what a premium profile looks like, what visibility they get.

### 2.2 Subscription & Billing
- Recurring monthly subscription required to be listed/visible in discovery surfaces.
- Clear tiering is allowed (e.g. basic visibility vs. featured placement in Routes/Roulette), but keep it simple for MVP — one or two tiers, not a complex pricing matrix.
- Payment processing, invoicing, and cancellation flows must be reliable and low-friction (this is the revenue engine).

### 2.3 Owner Dashboard
- Manage café profile (photos, description, hours, amenities).
- Basic performance visibility: profile views, favorites/saves, appearances in Roulette or Routes.
- This dashboard is itself part of the value proposition — owners should feel like they're getting a marketing tool, not just paying for a directory listing.

---

## 3. Non-Goals for MVP
- Public reviews/ratings (intentionally excluded — see CONTEXT.md).
- Multi-city support (architecture should allow it later; scope should not include it now).
- In-app ordering/payment for coffee itself (this is a discovery and marketing platform, not a POS or delivery product).
- Complex loyalty/points economy beyond lightweight Challenges.

---

## 4. Success Metrics
**Consumer side:**
- % of sessions that end in a saved café, a completed roulette spin, or a route started (discovery engagement, not just browsing).
- Return visit rate (do people come back to Cafeto before deciding where to get coffee, rather than defaulting to habit or Maps).

**Business side:**
- Number of paying subscribed cafés in Monterrey.
- Subscription renewal/retention rate (proves owners perceive ongoing value).
- Owner-reported or dashboard-shown engagement (views, saves) as a leading indicator of renewal.

---

## 5. Technical Notes
- Built with Loveable; final output wrapped via Capacitor for App Store and Google Play distribution.
- Design and build with Monterrey as the only live city, but avoid hardcoding assumptions that would require a rewrite to add a second city (e.g. city should be a data attribute, not a baked-in constant).
- Prioritize mobile performance and image loading speed — a photography-first product that loads slowly undermines its own value proposition.
