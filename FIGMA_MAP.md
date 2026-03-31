# Figma To Code Map

Use this checklist to make the current scaffold pixel-perfect with the provided Figma file.

## 1) Global tokens

Capture and replace these in `src/styles.css`:

- Color palette (hex/rgba for backgrounds, text, borders, accents)
- Typography (font families, sizes, weights, line heights, letter spacing)
- Corner radii, shadows, border widths
- Spacing scale and max container width
- Breakpoints and responsive behavior

## 2) Frame mapping

Map each major Figma frame to these code sections:

- Header/Nav -> `SiteHeader.tsx`
- Hero -> top hero section in `App.tsx`
- Metrics/Stats -> `stat-grid` in `App.tsx`
- Program cards/features -> `card-grid` in `App.tsx`
- Timeline/impact -> `timeline` in `App.tsx`
- Testimonials -> `quote-grid` in `App.tsx`
- Footer/CTA -> `SiteFooter.tsx` + `cta` block in `App.tsx`

## 3) Interactions and states

Add or refine:

- Hover/focus/active states for all links and buttons
- Section entrance or stagger animations (if present in Figma prototype)
- Scroll behavior and sticky header specifics
- Mobile nav drawer if the design includes one

## 4) Assets needed for exact parity

Please provide exports or specs for:

- Hero and card imagery (SVG/PNG/WebP)
- Logo files and icon set
- Exact text content
- Any gradients or illustration assets
- Prototype interaction notes (timings/easing)

## 5) Acceptance criteria

- Desktop (1440px), tablet (768px), mobile (390px) match target layouts
- Typography and spacing are visually consistent with Figma
- No horizontal overflow at any viewport
- Keyboard navigation and visible focus states are present
