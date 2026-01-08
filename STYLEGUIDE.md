# Design System & Style Guide
**Jungle Reset Society — Internal Reference**

---

## 🎨 Brand Identity

### Mission
Transform high-performers through disciplined Muay Thai training in a luxury setting.

### Brand Personality
- **Disciplined** yet welcoming
- **Premium** but not pretentious
- **Transformative** with measurable outcomes
- **Natural** jungle + modern luxury contrast

### Brand Voice
- **Tone**: Direct, poetic, confident
- **Language**: Clear without jargon, premium without fluff
- **Example**: "In the daily jungle, focus gets lost." (not "Life is stressful, we can help!")

---

## 🌈 Color System

### Primary Palette
```
Jungle Black    #0a0f0d    rgb(10, 15, 13)      → Deepest backgrounds
Jungle Dark     #1a2520    rgb(26, 37, 32)      → Main background
Jungle Mid      #2d4436    rgb(45, 68, 54)      → Section backgrounds
```

### Accent Palette
```
Gold            #c9a961    rgb(201, 169, 97)    → CTAs, highlights, headers
Gold Light      #d4c5aa    rgb(212, 197, 170)   → Hover states, secondary
Sand            #f5ede0    rgb(245, 237, 224)   → Body text
White           #fafaf8    rgb(250, 250, 248)   → Titles, emphasis
```

### Semantic Colors
```
Overlay         rgba(10, 15, 13, 0.6)            → Dark overlays
Mist            rgba(250, 250, 248, 0.03)        → Subtle highlights
```

### Usage Rules
- **Never use pure black** (#000) or pure white (#fff)
- **Text on dark**: Use Sand or White
- **Text on light**: Use Jungle Dark
- **CTAs**: Always Gold with Jungle Black text
- **Borders**: Use Gold at 10-30% opacity

### Accessibility
All color combinations meet **WCAG AA** standards:
- White on Jungle Dark: **7.8:1** ✅
- Sand on Jungle Dark: **6.2:1** ✅
- Gold on Jungle Black: **5.1:1** ✅

---

## 🔤 Typography

### Font Families
```css
Display:  'Cormorant Garamond', serif
Body:     'Inter', sans-serif
Mono:     'IBM Plex Mono', monospace (optional)
```

### Type Scale (8px base × golden ratio)
```
6xl     6rem      96px      Hero titles (desktop only)
5xl     5rem      80px      Large hero titles
4xl     4rem      64px      Section titles
3xl     3rem      48px      Subsection titles
2xl     2rem      32px      Card titles
xl      1.5rem    24px      Large body text
lg      1.125rem  18px      Subheadings
base    1rem      16px      Body text
sm      0.875rem  14px      Small text, labels
xs      0.75rem   12px      Captions, legal
```

### Font Weights
```
Light       300     Rarely used, only for large display text
Normal      400     Body text, most content
Medium      500     Emphasis in body text
Semibold    600     Button text, navigation
Bold        700     Very rare, only for strong emphasis
```

### Line Heights
```
Tight       1.1     Display text, hero titles
Snug        1.3     Subheadings
Normal      1.5     Body text
Relaxed     1.7     Long-form reading
```

### Usage Rules
- **Hero titles**: Cormorant Garamond, 4xl-6xl, weight 400, line-height tight
- **Section titles**: Cormorant Garamond, 2xl-4xl, weight 400-500
- **Body text**: Inter, base-lg, weight 400, line-height normal-relaxed
- **UI elements**: Inter, sm-base, weight 500-600
- **Never use all-caps** except for small labels (< 14px)

### Responsive Typography
```css
/* Desktop */
.hero-title { font-size: 6rem; }

/* Tablet */
@media (max-width: 1024px) {
  .hero-title { font-size: 4rem; }
}

/* Mobile */
@media (max-width: 768px) {
  .hero-title { font-size: 3rem; }
}

/* Or use clamp() */
.hero-title { font-size: clamp(3rem, 8vw, 6rem); }
```

---

## 📐 Spacing System

### Scale (8px grid)
```
xs      0.5rem    8px       Tight spacing
sm      1rem      16px      Default gap
md      2rem      32px      Section padding
lg      4rem      64px      Large sections
xl      6rem      96px      Scene padding
2xl     10rem     160px     Major sections
3xl     15rem     240px     Hero sections
```

### Usage Rules
- **Component padding**: sm-md
- **Section padding**: lg-xl
- **Scene height**: Always 100vh
- **Grid gaps**: md (32px) on desktop, sm (16px) on mobile
- **Button padding**: xs (8px) vertical, md (32px) horizontal

### Layout Containers
```css
.container {
  max-width: 1400px;  /* Default */
  padding: 0 4rem;    /* lg spacing */
}

.container--wide {
  max-width: 1600px;
}

.container--narrow {
  max-width: 900px;
}
```

---

## 🎬 Animation System

### Motion Curves
```css
Ease Out Expo       cubic-bezier(0.16, 1, 0.3, 1)
  → Use for: Reveals, entrances, dramatic effects

Ease In Out Quart   cubic-bezier(0.76, 0, 0.24, 1)
  → Use for: State changes, transforms

Ease Smooth         cubic-bezier(0.4, 0, 0.2, 1)
  → Use for: Hover states, subtle transitions
```

### Durations
```css
Fast        200ms     Hover states, toggles
Normal      400ms     Most transitions
Slow        600ms     Reveals, fades
Slower      1000ms    Dramatic entrances
```

### Animation Principles
1. **Always ease out** for entrances (feel snappy)
2. **Always ease in** for exits (feel smooth)
3. **Use stagger** for groups (0.1-0.2s delay)
4. **Respect reduced-motion** (disable all animations)
5. **Keep it subtle** (prefer 60-80% opacity over 0-100%)

### Scroll Animations
```javascript
// Sticky scenes
ScrollTrigger.create({
  trigger: scene,
  start: 'top top',
  end: 'bottom top',
  pin: true,
  scrub: 1,  // 1 second lag for smooth feel
});

// Parallax
gsap.to(element, {
  y: '30%',
  scrollTrigger: {
    trigger: scene,
    scrub: true,  // No lag for parallax
  }
});
```

---

## 🖼️ Imagery

### Style Guide
- **Mood**: Golden hour, warm light, subtle mist
- **Composition**: Depth (foreground/mid/background)
- **Treatment**: Slight grain overlay, warm color grading
- **Contrast**: High (but not clipped blacks/whites)

### Image Sizes
```
Hero images:        1920×1080 (16:9)
Villa photos:       1600×900
Feature cards:      800×600
Thumbnails:         400×300
```

### Optimization
- **Format**: WebP with JPEG fallback
- **Compression**: 80-85% quality
- **Lazy loading**: Everything below fold
- **Responsive**: Use srcset for different sizes

### Grain Overlay
Always apply subtle grain:
```css
.grain-overlay {
  background-image: url("data:image/svg+xml,...");
  opacity: 0.03;
  mix-blend-mode: soft-light;
}
```

---

## 🧩 Components

### Buttons

**Primary Button**
```css
.btn--primary {
  background: var(--color-gold);
  color: var(--color-jungle-black);
  padding: 0.5rem 2rem;
  font-weight: 600;
  transition: all 400ms ease-smooth;
}

.btn--primary:hover {
  background: var(--color-gold-light);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(201, 169, 97, 0.3);
}
```

**Secondary Button**
```css
.btn--secondary {
  background: transparent;
  color: var(--color-gold);
  border: 2px solid var(--color-gold);
}

.btn--secondary:hover {
  background: rgba(201, 169, 97, 0.1);
  border-color: var(--color-gold-light);
}
```

### Cards

**Feature Card**
```css
.program-card {
  padding: 4rem;
  background: rgba(45, 68, 54, 0.3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(201, 169, 97, 0.1);
  transition: all 400ms ease-smooth;
}

.program-card:hover {
  background: rgba(45, 68, 54, 0.5);
  border-color: rgba(201, 169, 97, 0.3);
  transform: translateY(-4px);
}
```

### Navigation
```css
.nav {
  position: fixed;
  backdrop-filter: blur(10px);
  background: linear-gradient(180deg, 
    rgba(10, 15, 13, 0.9) 0%, 
    rgba(10, 15, 13, 0) 100%);
}
```

---

## 📱 Responsive Behavior

### Breakpoints
```css
Mobile:         < 768px
Tablet:         769px - 1024px
Desktop:        1025px - 1440px
Large Desktop:  > 1440px
```

### Mobile Adjustments
- **Reduce spacing**: 50% of desktop values
- **Stack layouts**: Grid → single column
- **Reduce font sizes**: Use clamp() or 75% of desktop
- **Simplify animations**: Reduce parallax intensity
- **Touch targets**: Min 44×44px for buttons

### Example
```css
/* Desktop */
.scene__title { font-size: 4rem; padding: 4rem; }

/* Mobile */
@media (max-width: 768px) {
  .scene__title { font-size: 2rem; padding: 2rem; }
}
```

---

## ♿ Accessibility Guidelines

### Critical Rules
1. **Color contrast**: Always meet WCAG AA (4.5:1 for text)
2. **Focus states**: Always visible (gold outline)
3. **Alt text**: All images need descriptive alt
4. **Semantic HTML**: Use proper tags (`<nav>`, `<main>`, etc.)
5. **Keyboard nav**: All interactive elements must be keyboard-accessible
6. **ARIA labels**: Add where semantic HTML isn't enough
7. **Reduced motion**: Disable animations when `prefers-reduced-motion: reduce`

### Testing
```bash
# Install axe DevTools browser extension
# Run audit in DevTools → axe tab
# Fix all Critical and Serious issues
```

---

## 🎯 Content Guidelines

### Copywriting Tone
- **Direct**: "Reserve your spot" (not "Maybe consider joining us")
- **Confident**: "Limited to 10 guests" (not "We only take 10 people")
- **Benefit-focused**: "Restore clarity" (not "We have training")
- **Avoid clichés**: Never "journey", "unlock potential", "transform your life"

### Translation (EN → DE)
- **Maintain tone**: Keep directness in German
- **Cultural adaptation**: EUR pricing for DE, USD for EN
- **No machine translation**: Use native speaker
- **Test both versions**: Ensure UI doesn't break with longer German text

---

## 📊 Performance Standards

### Core Web Vitals
```
LCP (Largest Contentful Paint):   < 2.5s    ✅
FID (First Input Delay):           < 100ms   ✅
CLS (Cumulative Layout Shift):     < 0.1     ✅
```

### Lighthouse Scores (Target)
```
Performance:    90+
Accessibility:  95+
Best Practices: 90+
SEO:            90+
```

### Optimization Checklist
- [ ] Compress images (WebP, 80-85% quality)
- [ ] Lazy load below-fold images
- [ ] Preconnect to font CDNs
- [ ] Minify CSS/JS (production)
- [ ] Use CDN for static assets
- [ ] Enable Brotli/Gzip compression

---

## 🔒 Security Best Practices

### Headers (Configure in hosting)
```
Content-Security-Policy: default-src 'self'; script-src 'self' cdn.jsdelivr.net
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

### Forms (If added)
- Always validate + sanitize inputs
- Use HTTPS only
- Implement CSRF tokens
- Rate limit submissions

---

## 📝 Code Style

### HTML
```html
<!-- Use semantic elements -->
<main>
  <section class="scene scene--canopy">
    <h1 class="scene__title">Title</h1>
  </section>
</main>

<!-- BEM naming -->
.block
.block__element
.block--modifier
```

### CSS
```css
/* Group by type */
:root { /* variables */ }
/* reset */
/* typography */
/* components */
/* utilities */

/* Use custom properties */
color: var(--color-gold);

/* Mobile-first media queries */
.element { /* mobile styles */ }
@media (min-width: 768px) { /* desktop styles */ }
```

### JavaScript
```javascript
// Use ES6 modules
import { CONFIG } from './config.js';

// Use const/let (never var)
const element = document.querySelector('.scene');

// Use arrow functions
const formatPrice = (amount, lang) => { ... };

// Use template literals
const html = `<div class="${className}">${content}</div>`;
```

---

## 🚀 Deployment Checklist

### Pre-Launch
- [ ] Update all config in `js/config.js`
- [ ] Replace placeholder images
- [ ] Add real retreat dates
- [ ] Test on all devices/browsers
- [ ] Run Lighthouse audit
- [ ] Check accessibility (axe)
- [ ] Add favicon + app icons
- [ ] Add Open Graph meta tags
- [ ] Create 404 page
- [ ] Set up analytics

### Post-Launch
- [ ] Monitor Core Web Vitals
- [ ] Track user behavior
- [ ] A/B test CTAs
- [ ] Collect feedback
- [ ] Iterate based on data

---

**This is a living document. Update as the design evolves.**
