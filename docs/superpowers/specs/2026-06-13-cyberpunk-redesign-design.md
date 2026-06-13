# Cyberpunk Redesign — Design Spec
**Date:** 2026-06-13
**Project:** ishaan-website (single-page personal portfolio)

---

## Overview

Full visual overhaul of the existing portfolio in a neon cyberpunk direction, building on the existing crimson/dark palette. The hero gets a dramatic transformation (particle field + terminal chrome). A new skills ticker is inserted between hero and about. Every section gets neon glow treatments. Essays section is removed entirely (placeholder content, no real essays). All other content and section order stays the same.

---

## Style Direction

**Theme:** Neon Cyberpunk  
**Base palette:** Unchanged (`--accent: #88304E`, `--accent-2: #F7374F`, near-black backgrounds)  
**New additions:**
- Monospace (`font-family: monospace`) used for eyebrows, labels, nav links, ticker, corner tags
- Neon glow via `box-shadow` and `text-shadow` using `rgba(247,55,79,*)` 
- Grid texture: `repeating-linear-gradient` at 30px intervals, `rgba(247,55,79,0.05)` — applied to hero and subtly to other sections
- Scanline overlay: `repeating-linear-gradient(0deg, transparent 2px, rgba(0,0,0,0.07) 4px)` — hero only
- GeoCycle section intentionally stays green (visual contrast anchor mid-page — no change)

---

## Section-by-Section Design

### Navigation

**Changes from current:**
- Essays nav link removed
- Nav links switch to `font-family: monospace`
- Logo dot (`ishaan.`) gets `text-shadow: 0 0 10px rgba(247,55,79,0.6)` neon glow on the period
- Active/hover state: `border: 1px solid rgba(247,55,79,0.2)`, `background: rgba(247,55,79,0.05)`, `color: #F7374F`

**Unchanged:** Fixed positioning, backdrop blur, shrink-on-scroll behavior, hamburger menu, GeoCycle green link.

---

### Hero

**Dramatic transformation — two layered effects:**

**Layer 1 — Particle field (canvas):**
- `<canvas>` element fills the full hero background, `position: absolute; inset: 0`
- ~55 particles: small crimson dots (`rgba(247,55,79,0.4–0.6)`), radius 0.5–2px, slow random velocity
- Particles connect with lines when closer than 90px: `rgba(247,55,79,0.13 * (1 - dist/90))`, `lineWidth: 0.5`
- Particles have a faint `shadowBlur: 4` glow
- Runs in a `requestAnimationFrame` loop; bounces off edges
- Implemented in `script.js` as `initHeroParticles()`

**Layer 2 — Grid texture + scanlines:**
- `.grid-bg` div: `repeating-linear-gradient` grid at 30px, `rgba(247,55,79,0.05)`, `position: absolute; inset: 0`
- `.scanlines` div: `repeating-linear-gradient(0deg, transparent 2px, rgba(0,0,0,0.07) 4px)`, `position: absolute; inset: 0; z-index: 3; pointer-events: none`

**Hero content changes:**
- Terminal chrome bar added above the name:
  ```html
  <div class="terminal-bar">
    <span class="tdot tr"></span>
    <span class="tdot ty"></span>
    <span class="tdot tg"></span>
    <span class="terminal-title">ishaan@portfolio ~ %</span>
  </div>
  <div class="prompt-line"><span class="prompt">❯ </span>whoami && cat intro.txt</div>
  ```
- Eyebrow `hey there` replaced with prompt line above; eyebrow removed
- `name-ghost` ("ishaan") gets pulsing neon glow animation:
  ```css
  text-shadow: 0 0 20px rgba(247,55,79,0.5), 0 0 40px rgba(247,55,79,0.2);
  animation: neonPulse 2.5s ease-in-out infinite;
  ```
- Status pill (top-right): `[ ONLINE ]` with pulsing dot — replaces nothing, new addition
- Corner readout (bottom-right): monospace block showing `SYS / LOC / STATUS`

**Unchanged:** Min-height 100vh, hero buttons, scroll hint, fadeUp entry animations (applied to terminal bar + name block).

---

### Skills Ticker *(new section — inserted between hero and about)*

A full-width infinite-scroll marquee strip.

**Markup:**
```html
<div class="ticker-section">
  <div class="ticker-badge">
    <span class="ticker-dot"></span> SKILLS
  </div>
  <div class="ticker-track">
    <div class="ticker-inner">
      <!-- items × 2 for seamless loop -->
    </div>
  </div>
</div>
```

**Content (12 items, duplicated for loop):**
`JavaScript` · `React` · `Next.js` · `UI/UX Design` · `Python` · `Node.js` · `C#` · `Lua` · `AI Vision` · `Virginia Tech '30` · `300+ devices refurbished` · `Open to Work`

Every third item (skills highlights + fun stats) gets `color: rgba(247,55,79,0.9)`.  
Separator between items: `//` in `rgba(247,55,79,0.4)`.

**Animation:**
```css
@keyframes tickerScroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
.ticker-inner { animation: tickerScroll 22s linear infinite; }
.ticker-inner:hover { animation-play-state: paused; }
```

**Styling:**
- `background: #0a0a0a`, `border-top/bottom: 1px solid rgba(247,55,79,0.15)`
- Badge: `background: rgba(247,55,79,0.1)`, `border-right: 1px solid rgba(247,55,79,0.2)`, monospace font, crimson color
- Pulsing badge dot matches status pill dot style

---

### About

**Changes:**
- Eyebrow `who i am` → monospace, prefixed with `//` 
- Section title gets neon underbar: `::after` pseudo with `background: linear-gradient(90deg, #F7374F, rgba(247,55,79,0.2), transparent); box-shadow: 0 0 10px rgba(247,55,79,0.5); height: 3px`
- Skill tags: add `font-family: monospace`, `border-radius: 4px` (squarer, less pill-like), hover glow
- Stat cards: add `box-shadow: 0 0 20px rgba(247,55,79,0.05)` on hover, number stays gradient

**Unchanged:** Two-column grid, avatar ring, photo, stat numbers, body copy.

---

### GeoCycle Spotlight

**No changes.** Green palette is intentional — acts as a visual break in the cyberpunk crimson theme.

---

### Projects

**Changes:**
- Eyebrow + section title get monospace/neon underbar treatment (same as About)
- Each `.project-card` gets corner index: `[01]`, `[02]`, `[03]` — `position: absolute; top: 12px; right: 12px; font-family: monospace; font-size: 9px; color: rgba(247,55,79,0.35)`
- Card hover: add `box-shadow: 0 0 30px rgba(247,55,79,0.08), inset 0 0 30px rgba(247,55,79,0.03)` in addition to existing `translateY(-6px)`
- Card border on hover: `rgba(247,55,79,0.4)` instead of `rgba(255,255,255,0.12)`
- Proj tags: switch to `font-family: monospace`, `border-radius: 4px`

**Unchanged:** Iframe embeds, browser chrome bars, project links, card layout.

---

### Essays

**Removed entirely.** The `<section id="essays">` block and its CSS are deleted. No replacement. Nav link already removed above.

---

### CV

**Changes:**
- Eyebrow + section title: monospace/neon underbar treatment
- Timeline marker (`.t-marker`): add `box-shadow: 0 0 0 4px rgba(136,48,78,0.2), 0 0 12px rgba(247,55,79,0.3)` — neon ring glow
- `.t-content` hover: add `box-shadow: 0 0 20px rgba(247,55,79,0.05)` alongside existing border color change
- `.t-date` stays crimson; `.t-company` stays `--accent`

**Unchanged:** Two-column layout, timeline structure, all content, download button.

---

### Contact

**Changes:**
- Eyebrow + section title: monospace/neon underbar treatment
- `.contact-method` hover: add neon left border glow `box-shadow: inset 3px 0 0 rgba(247,55,79,0.6)` in addition to `translateX(6px)`
- Form focus state: existing `box-shadow: 0 0 0 3px rgba(136,48,78,0.12)` stays; add `border-color: rgba(247,55,79,0.6)`
- Social link hover: add `box-shadow: 0 0 16px rgba(136,48,78,0.4)` to existing hover state

**Unchanged:** Two-column grid, form fields, Formspree integration, social links.

---

### Footer

**Changes:**
- Logo dot gets same neon glow as nav logo
- Copyright year update: 2026

**Unchanged:** Structure, GeoCycle link.

---

## Animations

### New: `neonPulse`
```css
@keyframes neonPulse {
  0%, 100% { text-shadow: 0 0 20px rgba(247,55,79,0.5), 0 0 40px rgba(247,55,79,0.2); }
  50%       { text-shadow: 0 0 35px rgba(247,55,79,0.85), 0 0 70px rgba(247,55,79,0.35), 0 0 100px rgba(247,55,79,0.1); }
}
```
Applied to: `.name-ghost` in hero.

### New: `tickerScroll`
```css
@keyframes tickerScroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
```
Applied to: `.ticker-inner`, `animation: tickerScroll 22s linear infinite`.

### Existing (unchanged):
- `fadeUp` hero stagger animations
- `pulseDot` for GeoCycle nav dot
- `scrollDown` for scroll hint
- `IntersectionObserver` reveal for cards/timeline
- Parallax on hero orbs + section backgrounds

### New JS: `initHeroParticles()`
Added to `script.js`. Creates a `<canvas>` in `.hero-bg`, runs rAF loop for particle simulation. ~55 particles, bounce-on-edge, connection lines under 90px distance.

---

## File Changes

All changes land in the existing three files:

| File | Changes |
|---|---|
| `index.html` | Remove essays section + nav link; add terminal chrome to hero; add ticker section; add corner indices to project cards |
| `styles.css` | New: `.ticker-*`, `.terminal-bar`, `.grid-bg`, `.scanlines`, `.hero-status`, `.hero-corner`, `neonPulse`, `tickerScroll`, neon hover treatments on cards/timeline/contact; update nav link styles; remove essays CSS |
| `script.js` | Add `initHeroParticles()` canvas function |

---

## Out of Scope

- No new sections beyond the ticker
- No change to GeoCycle green palette
- No changes to Formspree integration or form behavior
- No build toolchain or framework changes (stays vanilla)
- Essays content not archived — just deleted
- CV download link remains `#` (user to update)
