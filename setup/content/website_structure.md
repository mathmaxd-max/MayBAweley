# Website structure notes (static site)

This file is opinionated guidance for a **simple first version** of a book-overview website that funnels to Amazon.

## IA / pages

- **Home / Bücher** (single-page landing):
  - Horizontal book selector (covers or titles).
  - Book detail panel below (blurb, metadata, CTA buttons).
  - Optional jump controls: *Neueste*, *Beliebteste*, *Bestbewertet* (you can implement as scroll-to + sort on the client).
- **Über die Autorin**
  - Short bio (pseudonym context, themes, setting).
  - Press/Interview links.
- **Presse & Auszeichnungen**
  - Short bullets; link out.
- **Kontakt**
  - Only if the author wants it. Otherwise: link to socials.

## Interaction pattern (your horizontal scroll idea)

This pattern is sound if implemented carefully:
- Keep the selector **simple and fast**:
  - Prefer covers (recognition) + short title.
  - Enable keyboard navigation and mobile swipe.
- On selection, update:
  - Title, one-paragraph hook, *„Jetzt bei Amazon“* CTA.
  - Secondary CTA: *„Mehr Details“* (optional in v2).
- Default selection:
  - **Most bought** is a good default; in v1 you can hardcode.
  - Random default is fun but can be suboptimal for conversion; if you want it, randomize **within the top 2–3**.

## Conversion-first CTA layout

- Primary button: **„Bei Amazon kaufen“** (always visible).
- Secondary: **„Leseprobe“** (later; can link to Amazon “Look Inside” if present).
- Tertiary: **„Reihe / Reihenfolge“** (anchor to a small section explaining the suggested order).

## SEO basics (static site)

- One URL per book (even if you also have the single-page view). Static generators make this easy.
- Use:
  - `meta title` = "{Book Title} – Thriller von May B. Aweley"
  - `meta description` = 140–160 chars hook
  - OpenGraph image = cover

## German compliance checklist (if hosted for the public)

If the site is accessible in Germany:
- **Impressum** (provider identification).
- **Datenschutzerklärung** (especially if you use analytics, embedded widgets, or external fonts).
- Cookie banner only if you deploy non-essential cookies (e.g., marketing analytics).
