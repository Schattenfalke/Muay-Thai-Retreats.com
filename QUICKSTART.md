# 🚀 QUICK START GUIDE
**Get your website live in 10 minutes**

---

## Step 1: Update Your Info (2 minutes)

Open `js/config.js` and update:

```javascript
// Line 10-14: Your brand
brand: {
  name: 'Jungle Reset Society',           // ← Change name
  email: 'hello@jungleresetsociety.com',  // ← Your email
  whatsapp: '+66XXXXXXXXXX'                // ← Your WhatsApp
}

// Line 69-82: Add real retreat dates
batches: [
  {
    id: 'feb-2026',
    startDate: '2026-02-15',  // ← Update date
    endDate7: '2026-02-22',   // ← 7-day end
    endDate10: '2026-02-25',  // ← 10-day end
    capacity: 10,
    spotsLeft: 6,             // ← Current availability
    villa: 'Villa Suriya'
  }
]
```

**That's it!** Prices are already set ($3,500 for 7-day, $4,900 for 10-day).

---

## Step 2: Test Locally (2 minutes)

### Option A: Just Open the File
1. Double-click `index.html`
2. Opens in your default browser
3. Scroll through all scenes
4. Toggle EN/DE (top-right)

### Option B: Use a Local Server (Better)

**If you have Python:**
```bash
python -m http.server 8000
# Open: http://localhost:8000
```

**If you have Node.js:**
```bash
npx http-server
# Open: http://localhost:8080
```

**What to check:**
- [ ] Hero scene loads
- [ ] Leaves part when scrolling
- [ ] Villa appears
- [ ] Horizontal scroll works (Transformation)
- [ ] Packages display with prices
- [ ] Language toggle works (EN ↔ DE)
- [ ] Mobile view works (resize browser)

---

## Step 3: Deploy (5 minutes)

### Netlify (Easiest, Free)

1. **Go to** [netlify.com](https://netlify.com)
2. **Sign up** (free, use GitHub/email)
3. **Drag & drop** your entire project folder into Netlify
4. **Done!** Your site is live at `yoursite.netlify.app`

**You get:**
- ✅ Free SSL (HTTPS)
- ✅ Global CDN
- ✅ Free subdomain
- ✅ Can add custom domain later

### Alternative: Vercel

1. Install: `npm i -g vercel`
2. Run: `vercel` in project folder
3. Follow prompts
4. Done!

---

## Step 4: Share Your Link (1 minute)

Your website is now live! 🎉

**Test it:**
- Open the Netlify URL on your phone
- Share with friends
- Check on different browsers

---

## 🎯 What You Just Built

### A Pendragon-Level Website With:
- ✨ Cinematic 8-scene scroll journey
- 🍃 Leaf-parting parallax (left/right foliage)
- 🌊 Ultra-smooth scroll (Lenis)
- 🌍 EN/DE language toggle
- 💵 USD/EUR automatic currency
- 📱 Mobile-responsive
- ♿ Accessible (reduced-motion support)
- ⚡ 60fps performance

### No Code Changes Needed
Everything works out of the box. Just update:
1. Brand info (done in Step 1)
2. Retreat dates (done in Step 1)
3. Deploy (done in Step 3)

---

## 📖 Want to Customize More?

### Change Colors
Edit `css/style.css` (line 13-22):
```css
:root {
  --color-gold: #c9a961;  /* Change to your brand color */
}
```

### Change Fonts
Edit `index.html` (line 12):
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap">
```

Then `css/style.css` (line 26-27):
```css
--font-display: 'YourFont', serif;
```

### Add Your Logo
Edit `index.html` (line 41):
```html
<div class="nav__logo">
  <img src="assets/logo.png" alt="Your Brand">
</div>
```

---

## 🐛 Troubleshooting

### Animations not working
**Fix**: Hard refresh: `Ctrl+Shift+R` (Win) / `Cmd+Shift+R` (Mac)

### Language toggle not switching
**Fix**: Check browser console (F12) for errors

### Parallax stuttering on mobile
**Expected**: Mobile has lower frame rate. Desktop is smooth.

### Can't deploy to Netlify
**Fix**: Make sure all files are in one folder (no nested projects)

---

## 📚 Full Documentation

### Want to learn more?
- **README.md** — Complete usage guide
- **STYLEGUIDE.md** — Design system reference
- **DEPLOYMENT.md** — Advanced deployment options
- **PROJECT-SUMMARY.md** — Project overview

---

## ✅ You're Done!

**In 10 minutes you:**
1. ✅ Updated your brand info
2. ✅ Tested locally
3. ✅ Deployed to production
4. ✅ Got a live website URL

**Next steps** (optional):
- Add custom domain (Netlify: Settings → Domain)
- Set up Google Analytics
- Replace villa images with your own
- Create Terms & Privacy pages
- Build checkout page (Stripe integration)

---

## 🆘 Need Help?

### Check documentation:
- **Lenis**: [github.com/studio-freight/lenis](https://github.com/studio-freight/lenis)
- **GSAP**: [greensock.com/docs](https://greensock.com/docs/)
- **Netlify**: [docs.netlify.com](https://docs.netlify.com)

### Or:
- Stack Overflow (tag `gsap` or `lenis`)
- GSAP Forums: [greensock.com/forums](https://greensock.com/forums/)

---

**Congratulations! Your immersive retreat website is live.** 🌴🥊

**Now go fill those retreat spots!** 🚀
