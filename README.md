# HealYou Partners

**Advanced Wound Care & Comprehensive Pain Management**  
*Delivering evidence-based treatment with compassion, innovation, and personalized care.*

---

## 🌟 Overview

HealYou Partners is a premium, modern medical practice web application built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Designed to reflect the high standards and aesthetic of a world-class healthcare institution.

### Key Features
- **Billion-Dollar Aesthetics**: Deep teal & rich gold color scheme with glassmorphism effects, smooth depth, and sleek cards.
- **Fluid Micro-Animations**: Smooth entrance and scroll-triggered animations powered by Framer Motion.
- **Minimalist & High-Impact Content**: Clean typography, clear calls to action, and distinct service breakdowns.
- **Fully Responsive**: Optimized across mobile, tablet, and desktop devices.
- **SEO & Performance Ready**: Static prerendering, metadata optimization, and fast load times.

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18.x or later
- npm or pnpm

### Installation

```bash
# Clone or navigate to project folder
cd c:/projects/cloudflareapps/healyoupartners

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ☁️ Deploying to Cloudflare Pages

### Option 1: Git Integration (Recommended)

1. Push this repository to GitHub / GitLab.
2. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/) and go to **Workers & Pages**.
3. Click **Create Application** > **Pages** > **Connect to Git**.
4. Select your `healyoupartners` repository.
5. Set the build settings:
   - **Framework preset**: `Next.js (Static)` or `None`
   - **Build command**: `npm run build`
   - **Build output directory**: `out` (if using `output: 'export'`) or `.next` (when using Cloudflare `@cloudflare/next-on-pages`)
6. Click **Save and Deploy**.

### Option 2: Wrangler CLI Deployment

To deploy directly via Cloudflare Wrangler CLI:

```bash
# Install Wrangler globally if needed
npm install -g wrangler

# Deploy output directory
npx wrangler pages deploy out
```

---

## 📄 Pages Included

- `/` – Home (Hero banner, stats bar, core services preview, about teaser, CTA)
- `/services` – Detailed Wound Care & Pain Management treatment offerings
- `/about` – Mission, compassionate care philosophy, and core values
- `/contact` – Interactive contact form (Formspree compatible), phone, email, and location info
