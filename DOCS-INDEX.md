# 📚 DOCUMENTATION INDEX
**Start here for complete project navigation**

---

## 🚦 New to this project? Start here:

1. **QUICKSTART.md** (10 min read, 10 min action)
   - Update brand info
   - Test locally  
   - Deploy to Netlify
   - Go live!

2. **README.md** (15 min read)
   - Complete feature overview
   - Technical details
   - Configuration guide
   - Performance specs

3. **Deploy your site** (5 min)
   - Follow DEPLOYMENT.md
   - Choose hosting platform
   - Go live with free SSL

---

## 📖 Documentation Files

| File | Purpose | When to Read |
|------|---------|--------------|
| **QUICKSTART.md** | 10-minute setup guide | **Start here!** |
| **README.md** | Complete documentation | After quick start |
| **STYLEGUIDE.md** | Design system + code standards | When customizing design |
| **DEPLOYMENT.md** | Deployment options + guides | When going live |
| **PROJECT-SUMMARY.md** | Project overview + deliverables | For stakeholders/overview |
| **index.html** | Main website (view in browser) | The actual site! |

---

## 🎯 Quick Navigation

### I want to...

**→ Get the site live in 10 minutes**  
Read: QUICKSTART.md

**→ Understand what was built**  
Read: PROJECT-SUMMARY.md

**→ Customize colors/fonts**  
Read: STYLEGUIDE.md → "Design Tokens"

**→ Change prices/dates**  
Edit: `js/config.js` (documented in README.md)

**→ Deploy to production**  
Read: DEPLOYMENT.md

**→ Understand the animations**  
Read: README.md → "Scene-by-Scene Breakdown"

**→ Change content/translations**  
Edit: `js/config.js` → All content is there

**→ Add analytics**  
Read: DEPLOYMENT.md → "Post-Deployment Tasks"

**→ Integrate Stripe payment**  
Read: DEPLOYMENT.md → "Add Payment"

**→ Fix a bug**  
Read: README.md → "Troubleshooting"

---

## 🗂️ Project Structure

```
📁 Project Root
│
├── 📄 index.html                    Main website
├── 📄 QUICKSTART.md                 ⭐ Start here!
├── 📄 README.md                     Complete docs
├── 📄 STYLEGUIDE.md                 Design system
├── 📄 DEPLOYMENT.md                 Deployment guide
├── 📄 PROJECT-SUMMARY.md            Overview
├── 📄 DOCS-INDEX.md                 This file
│
├── 📁 assets/
│   └── 🖼️ jungle-layers-master.png  Jungle imagery
│
├── 📁 css/
│   └── 📄 style.css                 All styles
│
└── 📁 js/
    ├── 📄 config.js                 ⚙️ Configure here!
    ├── 📄 language.js               EN/DE toggle
    ├── 📄 scroll.js                 Animations
    └── 📄 app.js                    Content rendering
```

---

## 🔍 Find Specific Information

### Configuration
- **Brand name/email**: `js/config.js` → lines 10-14
- **Pricing**: `js/config.js` → lines 18-40
- **Room tiers**: `js/config.js` → lines 44-67
- **Retreat dates**: `js/config.js` → lines 71-90
- **Content/translations**: `js/config.js` → lines 94-134

### Design System
- **Colors**: `css/style.css` → lines 13-22
- **Typography**: `css/style.css` → lines 24-43
- **Spacing**: `css/style.css` → lines 45-51
- **Motion curves**: `css/style.css` → lines 53-55

### Animations
- **Scene 1 (Canopy)**: `js/scroll.js` → lines 35-85
- **Scene 2 (Path)**: `js/scroll.js` → lines 90-115
- **Scene 6 (Horizontal)**: `js/scroll.js` → lines 160-195
- **All animations**: `js/scroll.js` (fully commented)

---

## 📊 File Sizes

```
Total Project:        ~7 MB
  ├── Jungle image:   6.5 MB
  ├── HTML/CSS/JS:    70 KB
  └── Documentation:  60 KB

Code Only:            70 KB
  ├── index.html      9 KB
  ├── style.css       21 KB
  ├── config.js       5 KB
  ├── scroll.js       10 KB
  ├── language.js     3 KB
  └── app.js          4 KB
```

---

## ⏱️ Time Investment Guide

### Immediate Tasks
- **Update config**: 5 minutes
- **Test locally**: 5 minutes
- **Deploy**: 5 minutes
- **Total**: 15 minutes

### This Week
- **Replace images**: 30 minutes
- **Add analytics**: 15 minutes
- **Custom domain**: 10 minutes
- **Total**: 1 hour

### This Month
- **SEO optimization**: 2 hours
- **Checkout page**: 4 hours
- **Terms/Privacy**: 1 hour
- **Total**: 7 hours

---

## 🎓 Learning Path

### Beginner (Never deployed a site)
1. Read QUICKSTART.md (10 min)
2. Follow step-by-step
3. Deploy to Netlify
4. Celebrate! 🎉

### Intermediate (Know HTML/CSS)
1. Read README.md (15 min)
2. Read STYLEGUIDE.md (20 min)
3. Customize design
4. Deploy with custom domain

### Advanced (Know JavaScript)
1. Read all docs (1 hour)
2. Study `js/scroll.js` animations
3. Customize scroll behaviors
4. Optimize performance

---

## 🆘 Common Questions

**Q: Where do I start?**  
A: Open QUICKSTART.md and follow the 3 steps.

**Q: How do I change prices?**  
A: Edit `js/config.js` → `retreats` object.

**Q: How do I add my logo?**  
A: Edit `index.html` line 41, add `<img>` tag.

**Q: How do I deploy?**  
A: Read DEPLOYMENT.md or just drag folder to netlify.com.

**Q: How do I add Google Analytics?**  
A: Read DEPLOYMENT.md → "Post-Deployment Tasks" → "Set Up Analytics".

**Q: The animations aren't smooth on my phone**  
A: Mobile has lower frame rate (30fps vs 60fps desktop). This is normal.

**Q: Can I use this for another business?**  
A: Yes! Update `js/config.js` with your content. MIT license.

**Q: How do I add more retreat dates?**  
A: Edit `js/config.js` → `batches` array, add new objects.

---

## 🔗 External Resources

### Libraries Used
- **Lenis**: [github.com/studio-freight/lenis](https://github.com/studio-freight/lenis)
- **GSAP**: [greensock.com/docs](https://greensock.com/docs/)
- **ScrollTrigger**: [greensock.com/scrolltrigger](https://greensock.com/scrolltrigger/)

### Hosting Platforms
- **Netlify**: [netlify.com](https://netlify.com)
- **Vercel**: [vercel.com](https://vercel.com)
- **Cloudflare**: [pages.cloudflare.com](https://pages.cloudflare.com)

### Tools
- **Google Analytics**: [analytics.google.com](https://analytics.google.com)
- **Stripe**: [stripe.com](https://stripe.com)
- **TinyPNG**: [tinypng.com](https://tinypng.com) (image compression)

---

## ✅ Quick Checklist

Before going live:
- [ ] Read QUICKSTART.md
- [ ] Update `js/config.js` (brand, email, dates)
- [ ] Test locally in browser
- [ ] Test on mobile
- [ ] Deploy to Netlify/Vercel
- [ ] Share your live URL! 🎉

After going live:
- [ ] Add Google Analytics
- [ ] Set up custom domain (optional)
- [ ] Create Terms & Privacy pages
- [ ] Add real villa images
- [ ] Build checkout page

---

## 🎉 Final Note

**You have everything you need to launch.**

1. QUICKSTART.md → Update & deploy (15 min)
2. README.md → Understand the system (15 min)
3. DEPLOYMENT.md → Go live with custom domain (optional)

**The documentation is complete. The code is production-ready.**

**Now go make it yours.** 🚀

---

## 📞 Support

If you get stuck:
1. Check the specific doc file (see table above)
2. Search browser console for errors (F12)
3. Try in Incognito mode (rule out extensions)
4. Check GSAP forums: [greensock.com/forums](https://greensock.com/forums/)

**Everything is documented. You've got this!** 💪
