# Deployment Guide
**Get your Jungle Reset Society website live in minutes**

---

## 🚀 Quick Deploy Options

### Option 1: Netlify (Recommended, Free)
**Best for**: Beginners, automatic deploys, free SSL

1. **Create Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up (free)

2. **Deploy**
   - Click "Add new site" → "Deploy manually"
   - Drag & drop your project folder
   - Done! Your site is live in ~30 seconds

3. **Custom Domain** (Optional)
   - Go to Domain settings
   - Add your domain
   - Update DNS records (Netlify provides instructions)

**Benefits**:
- ✅ Free SSL certificate
- ✅ Global CDN
- ✅ Automatic deploys from GitHub
- ✅ Form handling built-in
- ✅ 100GB bandwidth/month (free tier)

---

### Option 2: Vercel (Also Great, Free)
**Best for**: Next.js experience, CLI deployment

1. **Install CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   cd your-project-folder
   vercel
   ```

3. **Follow Prompts**
   - Login with GitHub/GitLab/Email
   - Confirm project settings
   - Done!

**Benefits**:
- ✅ Free SSL certificate
- ✅ Global CDN
- ✅ Automatic deploys from Git
- ✅ Serverless functions support
- ✅ 100GB bandwidth/month (free tier)

---

### Option 3: GitHub Pages (Free)
**Best for**: GitHub users, open-source projects

1. **Create Repository**
   - Go to [github.com/new](https://github.com/new)
   - Name it (e.g., `jungle-reset-society`)
   - Make it public

2. **Upload Files**
   - Use GitHub Desktop or CLI:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/jungle-reset-society.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repo Settings → Pages
   - Select branch: `main`
   - Folder: `/ (root)`
   - Save

4. **Access Site**
   - Live at: `https://yourusername.github.io/jungle-reset-society`

**Benefits**:
- ✅ Completely free
- ✅ No bandwidth limits
- ✅ Automatic deploys on push
- ❌ No free SSL for custom domains (need external service)

---

### Option 4: Cloudflare Pages (Free)
**Best for**: Advanced users, best performance

1. **Create Account**
   - Go to [pages.cloudflare.com](https://pages.cloudflare.com)
   - Sign up (free)

2. **Connect Git**
   - Connect GitHub/GitLab account
   - Select repository
   - Deploy

**Benefits**:
- ✅ Free SSL certificate
- ✅ Best global CDN (Cloudflare network)
- ✅ Unlimited bandwidth (free tier)
- ✅ Web Analytics included
- ✅ Email Workers support

---

## 📦 Pre-Deployment Checklist

### 1. Update Configuration
Edit `js/config.js`:

```javascript
✅ brand.name        → Your retreat name
✅ brand.email       → Your real email
✅ brand.whatsapp    → Your real WhatsApp number
✅ retreats.prices   → Confirm pricing
✅ batches           → Add real retreat dates
```

### 2. Replace Placeholder Content
```
✅ Update villa images (if you have real photos)
✅ Replace Maria image (already removed in this version!)
✅ Add your logo (optional)
✅ Update footer text
```

### 3. SEO Optimization
Edit `index.html`:

```html
<!-- Update title -->
<title>Your Retreat Name — Premium Muay Thai Retreats Koh Samui</title>

<!-- Update description -->
<meta name="description" content="Your compelling 150-character description here">

<!-- Add Open Graph tags -->
<meta property="og:title" content="Your Retreat Name">
<meta property="og:description" content="Your description">
<meta property="og:image" content="https://yoursite.com/og-image.jpg">
<meta property="og:url" content="https://yoursite.com">
<meta property="og:type" content="website">

<!-- Add Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Your Retreat Name">
<meta name="twitter:description" content="Your description">
<meta name="twitter:image" content="https://yoursite.com/og-image.jpg">
```

### 4. Add Favicon
1. Create favicon:
   - Go to [favicon.io](https://favicon.io)
   - Generate from text or image
   - Download package

2. Add to `<head>`:
   ```html
   <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
   <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
   <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
   ```

### 5. Test Locally
```bash
# Option A: Python
python -m http.server 8000

# Option B: Node.js http-server
npx http-server

# Then open: http://localhost:8000
```

Test checklist:
- [ ] Navigation works
- [ ] Language toggle works (EN/DE)
- [ ] Scroll animations smooth
- [ ] All links work
- [ ] Responsive on mobile
- [ ] No console errors

---

## 🔧 Post-Deployment Tasks

### 1. Set Up Analytics

**Google Analytics 4** (Recommended)
1. Go to [analytics.google.com](https://analytics.google.com)
2. Create account + property
3. Get Measurement ID (e.g., `G-XXXXXXXXXX`)
4. Add to `<head>`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

**Plausible Analytics** (Privacy-friendly alternative)
1. Go to [plausible.io](https://plausible.io)
2. Add your domain
3. Add script:
   ```html
   <script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
   ```

### 2. Set Up Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property (your domain)
3. Verify ownership (DNS or HTML file)
4. Submit sitemap: `https://yoursite.com/sitemap.xml`

**Create sitemap.xml**:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yoursite.com/</loc>
    <lastmod>2026-01-08</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yoursite.com/checkout.html</loc>
    <priority>0.8</priority>
  </url>
</urlset>
```

### 3. Set Up Email
**For contact form** (if you add one):

**Option A: Netlify Forms** (Free on Netlify)
```html
<form name="contact" method="POST" data-netlify="true">
  <input type="email" name="email" required>
  <textarea name="message" required></textarea>
  <button type="submit">Send</button>
</form>
```

**Option B: Formspree** (Free tier available)
1. Go to [formspree.io](https://formspree.io)
2. Create form
3. Get endpoint URL
4. Use in HTML

**Option C: EmailJS** (Client-side email)
1. Go to [emailjs.com](https://emailjs.com)
2. Create service
3. Add JavaScript:
   ```javascript
   emailjs.send('service_id', 'template_id', {
     from_email: email,
     message: message
   });
   ```

### 4. Set Up Domain (Custom)

**If using Netlify**:
1. Buy domain (Namecheap, GoDaddy, Google Domains, etc.)
2. In Netlify: Domain settings → Add custom domain
3. Update DNS records at your registrar:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5

   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   ```

**If using Cloudflare**:
1. Transfer DNS to Cloudflare (free)
2. Add CNAME record pointing to your host
3. Enable "Proxied" for CDN + SSL

---

## 🔒 Security Setup

### 1. Configure Security Headers

**Netlify** (`netlify.toml`):
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "geolocation=(), microphone=(), camera=()"
```

**Vercel** (`vercel.json`):
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

### 2. Enable HTTPS
- **Netlify/Vercel/Cloudflare**: Automatic (free SSL)
- **GitHub Pages**: Automatic for `.github.io` domains
- **Custom domain**: May require verification

### 3. Set Up Backups
- **If using Git**: Already backed up in repository
- **If not**: Download site regularly or set up automatic backups

---

## 📊 Performance Monitoring

### 1. Core Web Vitals

**Monitor with**:
- [Google PageSpeed Insights](https://pagespeed.web.dev)
- [GTmetrix](https://gtmetrix.com)
- [WebPageTest](https://webpagetest.org)

**Target Scores**:
```
Performance:      90+
Accessibility:    95+
Best Practices:   90+
SEO:              90+
```

### 2. Real User Monitoring

**Cloudflare Web Analytics** (Free):
```html
<script defer src='https://static.cloudflareinsights.com/beacon.min.js' 
        data-cf-beacon='{"token": "your-token"}'></script>
```

### 3. Uptime Monitoring

**Free Options**:
- [UptimeRobot](https://uptimerobot.com) — Check every 5 minutes
- [StatusCake](https://statuscake.com) — Free tier available
- [Freshping](https://freshping.io) — 50 checks, 1-minute intervals

---

## 🐛 Troubleshooting

### Issue: 404 on page refresh
**Cause**: Single-page app routing  
**Fix**: Add redirect rules

**Netlify** (`_redirects`):
```
/*    /index.html   200
```

**Vercel** (`vercel.json`):
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Issue: Fonts not loading
**Cause**: CORS policy  
**Fix**: Already preconnected in HTML:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

### Issue: Images not loading
**Cause**: Wrong path or CORS  
**Fix**: Use relative paths (`./assets/image.png`)

### Issue: Slow load time
**Solutions**:
1. Compress images (use [TinyPNG](https://tinypng.com))
2. Enable CDN (Cloudflare)
3. Lazy load images (already implemented)
4. Use WebP format

---

## 🔄 Continuous Deployment

### GitHub → Netlify Auto-Deploy

1. **Connect Repository**
   - Netlify: Site settings → Build & deploy
   - Link to GitHub repo

2. **Configure Build**
   - Build command: (leave empty for static site)
   - Publish directory: `.` (root)

3. **Auto-Deploy**
   - Push to `main` branch
   - Netlify automatically rebuilds
   - Live in ~30 seconds

### GitHub Actions (Advanced)

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      # Add your deployment steps here
      # Example: Deploy to FTP, AWS S3, etc.
```

---

## 💳 Add Payment (Stripe)

### 1. Create Stripe Account
1. Go to [stripe.com](https://stripe.com)
2. Sign up
3. Get API keys (Dashboard → Developers → API keys)

### 2. Create Checkout Session

**Backend needed** (Node.js example):
```javascript
const stripe = require('stripe')('sk_test_...');

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: 'usd',
        product_data: { name: '7-Day Retreat' },
        unit_amount: 350000, // $3500 in cents
      },
      quantity: 1,
    }],
    mode: 'payment',
    success_url: 'https://yoursite.com/success',
    cancel_url: 'https://yoursite.com/cancel',
  });

  res.json({ id: session.id });
});
```

**Frontend** (in checkout.html):
```javascript
const stripe = Stripe('pk_test_...');

document.getElementById('checkout-button').addEventListener('click', async () => {
  const response = await fetch('/create-checkout-session', {
    method: 'POST',
  });
  
  const session = await response.json();
  
  const result = await stripe.redirectToCheckout({
    sessionId: session.id
  });
});
```

---

## ✅ Final Checklist

Before announcing your launch:

- [ ] All content updated in `js/config.js`
- [ ] Real retreat dates added
- [ ] Contact info updated
- [ ] Tested on mobile + desktop
- [ ] All browsers tested (Chrome, Firefox, Safari, Edge)
- [ ] Analytics installed
- [ ] Search Console verified
- [ ] Sitemap submitted
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active (HTTPS)
- [ ] Security headers configured
- [ ] Uptime monitoring set up
- [ ] Backup system in place
- [ ] Payment system tested (if using Stripe)
- [ ] Email notifications working
- [ ] 404 page created
- [ ] Terms & Privacy pages created
- [ ] Lighthouse score 90+ achieved
- [ ] Social media meta tags added
- [ ] Favicon added
- [ ] Loading states tested
- [ ] Error states tested

---

## 🆘 Need Help?

### Documentation
- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)
- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Cloudflare Pages**: [developers.cloudflare.com/pages](https://developers.cloudflare.com/pages)

### Community
- **Stack Overflow**: Tag `netlify`, `vercel`, or `deployment`
- **Discord**: Join GSAP or Netlify Discord servers

### Direct Support
- **Netlify Support**: [answers.netlify.com](https://answers.netlify.com)
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)

---

**Ready to go live? Pick a deployment method and launch in the next 10 minutes!** 🚀
