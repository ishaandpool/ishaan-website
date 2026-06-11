# Portfolio Redesign — Design Spec
**Date:** 2026-06-11
**Project:** ishaan-website (single-page personal portfolio)

---

## Overview

Full visual redesign of Ishaan Sharma's personal portfolio. The goal is to replace the generic Inter-font, flat-gradient aesthetic with a distinctive editorial identity: Syne display type, left-rail asymmetric hero, gradient-drift atmosphere per section, and real project/contact content throughout.

---

## Typography System

| Role | Font | Weight |
|---|---|---|
| Hero / section titles | Syne | 800 |
| Subheadings / nav logo | Syne | 600–700 |
| Labels / nav links / tags | Syne | 500 |
| Body copy / descriptions | Plus Jakarta Sans | 300–400 |

**Key treatment:** "ishaan" in the hero renders as an outlined ghost — `color: transparent`, `-webkit-text-stroke: 2px rgba(247,55,79,0.55)` — to create extreme weight/fill contrast against the solid "i'm" above it.

Google Fonts load: `Syne:wght@400;500;600;700;800` + `Plus+Jakarta+Sans:wght@300;400`

---

## Color Palette

```css
--bg:        #090909   /* near-black base */
--bg-alt:    #0c0c0f   /* slightly lifted */
--bg-card:   #141414   /* card surfaces */
--bg-indigo: #07080f   /* cool section bg */
--border:    rgba(255,255,255,0.06)
--border-h:  rgba(255,255,255,0.12)
--text:      #f0f0f0
--text-muted:#666666
--text-dim:  #3a3a3a
--accent:    #88304E   /* deep burgundy */
--accent-2:  #F7374F   /* crimson */
--gradient:  linear-gradient(135deg, #88304E 0%, #F7374F 100%)
--green:     #22c55e
--green-dark:#16a34a
```

---

## Atmosphere: Gradient Drift

Color temperature shifts as you scroll down the page. Each section has its own layered gradient background + blurred orb(s):

| Section | Background feel | Orb colors |
|---|---|---|
| Hero | Warm — deep black, crimson orb top-left | `rgba(136,48,78,0.28)` + small indigo hint bottom-right |
| About | Cool — indigo drift | `rgba(30,40,120,0.14)` left |
| GeoCycle | Green — existing treatment kept | Green orbs |
| Projects | Neutral dark — dot grid texture | None |
| Essays | Slate cool | `rgba(50,60,140,0.10)` |
| CV | Warm dark | `rgba(136,48,78,0.08)` right |
| Contact | Warm — crimson bloom | `rgba(247,55,79,0.16)` center |

Orbs are `position: absolute`, `border-radius: 50%`, `filter: blur(60–100px)`, `pointer-events: none`.

---

## Section Designs

### Navigation
- Fixed, `backdrop-filter: blur(16px)`, `rgba(9,9,9,0.75)` bg
- Shrinks padding on scroll (`.scrolled` class via JS)
- Logo: `ishaan.` — Syne 600
- Links: Syne 500, 0.8rem, muted → white on hover
- GeoCycle link: green, pulsing dot
- Hamburger menu on mobile (full-screen overlay)

### Hero
- Full-viewport (`min-height: 100vh`), `overflow: hidden`
- **Left accent rail**: `2.5px` wide, `linear-gradient(180deg, transparent, #88304E, #F7374F, transparent)`, positioned at left edge of `.container`, spans 15%–85% of viewport height
- **Grid texture**: right 52% of hero, very faint line grid, masked to fade left
- **Content** (padded 1.75rem off the rail):
  - Eyebrow: `hey there` — Syne 500, 0.65rem, letter-spacing 0.35em, crimson, fadeUp 0.15s delay
  - `i'm` — Syne 800, `clamp(4.5rem, 9vw, 8rem)`, white, line-height 0.88, fadeUp 0.3s delay
  - `ishaan` — same size, outlined ghost style, fadeUp 0.3s delay (same block)
  - Role line: `developer · designer · builder` — Syne 500, 0.75rem, letter-spacing 0.22em, `--text-dim`, fadeUp 0.45s delay
  - Buttons: filled gradient + ghost outline, fadeUp 0.6s delay
- **Scroll indicator**: mouse + wheel animation, Syne label, fadeUp 1.0s delay

### About
- `background: linear-gradient(180deg, #090909 0%, #07080f 50%, #0c0e1a 100%)`
- Cool indigo orb, left side, blurred
- Two-column grid (1fr auto): text left, photo right
- **Photo**: `ishaanheadshot.jpg`, circular, 160×160px, 3px gradient ring (`--gradient`)
- Skills block: pill tags, Syne 500 font
- Stat cards: `3+` years, `10+` projects

### GeoCycle Spotlight
- Existing green-themed section retained
- Re-font to Syne throughout
- Eyebrow, title, description, tags, button — all updated to Syne weights
- iframe embed + browser chrome mock unchanged

### Projects
- `background: #090909`, subtle dot grid texture (`radial-gradient` at 18px × 18px)
- Three cards in auto-fit grid (`minmax(320px, 1fr)`):
  1. **GeoCycle** — green icon, `geocycle.vercel.app/waste` live demo
  2. **Caesar Cipher Decoder** — "Frequency analysis cipher decoder", tags: React, HTML, link: `github.com/ishaandpool/caesar-cipher`
  3. **OscarAI** — "Designed the website for an AI-powered trash sorting startup", tags: UI/UX, Web Design. Links: `oscarai.ca` (live) + `github.com/ItzXizZ/oscarai-website`. Award badges rendered as small pill tags with gold tint: `background: rgba(245,200,66,0.10)`, `color: #f5c842`, `border: 1px solid rgba(245,200,66,0.25)` — styled like the existing `gc-tag` elements.
- OscarAI card gets crimson icon tint (trophy/award icon — `fas fa-trophy`)

### Essays
- `background: linear-gradient(180deg, #0a0b12 0%, #0d0e1a 100%)` with a small slate orb (`rgba(50,60,140,0.10)`) top-right
- Three cards — placeholder content retained (user to populate later)

### CV
- Warm-dark bg
- Two-column timeline (Work + Education)
- **Work**: Lead Sensei @ Code Ninjas (2023–present), Full Stack Dev @ ionrunit (2021–2023)
- **Education**: B.S. Computer Science @ Virginia Tech (2026–2030)
- Download CV button (links to `#` — user to update)

### Contact
- Warm crimson drift bg (`rgba(247,55,79,0.16)` centered orb)
- Two columns: info left, form right
- Contact methods: email (`hello@ishaan.dev`), phone (`+1 (630) 853-7916`), location (`Chicago, IL`)
- Social icons: GitHub (`github.com/ishaandpool`), LinkedIn (`#`), Twitter/X (`#`)
- **Form**: Formspree — `action="https://formspree.io/f/YOUR_FORM_ID"`, `method="POST"`. Fields: name, email, subject, message. User must replace `YOUR_FORM_ID` after signing up at formspree.io.

### Footer
- `#050505` bg, border-top
- `ishaan.` logo · copyright · GeoCycle link

---

## Animations

### Page Load (Hero)
Staggered `fadeUp` keyframe (`opacity: 0, translateY(20px)` → `opacity: 1, translateY(0)`), `0.7s ease`:
- Eyebrow: 0.15s delay
- Name block: 0.30s delay
- Role line: 0.45s delay
- Buttons: 0.60s delay
- Scroll hint: 1.00s delay

### Scroll Reveal
`IntersectionObserver` watches `.reveal` elements. When 15% visible, adds `.visible` class:
```css
.reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
.reveal.visible { opacity: 1; transform: translateY(0); }
```

### Parallax
- **Hero orbs**: `mousemove` listener, orbs shift at different speeds using `data-speed` attribute (`transform: translate(x*speed, y*speed)`)
- **Section backgrounds**: `scroll` listener, `section-parallax-bg` elements shift vertically at 30% scroll speed

### Nav Scroll State
`scroll` listener adds `.scrolled` to `<nav>` past 50px: tighter padding, higher bg opacity, subtle shadow.

---

## File Structure

No new files. All changes land in the existing three files:
- `index.html` — markup, section content, Formspree action
- `styles.css` — full rewrite of all visual styles
- `script.js` — parallax, scroll reveal, nav state, hamburger, iframe fallback

---

## Out of Scope

- No build toolchain introduced
- No framework changes (stays vanilla)
- Essays content remains placeholder — user to populate later
- CV PDF download link remains `#` — user to update
- Social links (LinkedIn, Twitter) remain `#` — user to update
- Formspree endpoint requires manual setup by user
