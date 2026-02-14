# iProk — Engineering Building System (Landing Page)

A modern, high-performance landing website for **iProk**, an engineering construction system where the frame, insulation, and cladding work as a single integrated structure.  
Built with **Next.js (App Router)** and **Tailwind CSS**, focused on clean UI, strong marketing copy, accessibility-friendly markup, and solid Lighthouse scores.

---

## ✨ Highlights

- **Next.js App Router** architecture (fast, SEO-friendly, production-ready)
- **Tailwind CSS** responsive UI (mobile-first, clean layout, consistent spacing)
- **Semantic HTML** where it matters (FAQ, sections, headings, lists)
- **Cookie consent banner** (localStorage-based) + Privacy Policy page
- **Optimized images** via `next/image` (LCP-first approach: priority only for hero)
- Smooth section navigation (`scroll-smooth`) and component-driven structure

---

## 🧱 Sections Included

- Hero (first-screen pitch)
- System explanation + insulation options
- Factory-quality advantages (production/quality)
- Constructive “DNA” features
- Spheres / value system blocks
- Honest engineering process (90% factory work scale)
- Philosophy
- FAQ
- Who it’s for
- Contact / CTA

---

## 🛠 Tech Stack

- **Next.js** (App Router)
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Headless UI** (mobile dialog menu)
- **Heroicons**

---

## 📁 Project Structure (simplified)

- `app/` — App Router pages and layout
  - `layout.tsx` — global metadata, fonts, footer, cookie banner
  - `page.tsx` — homepage composition from sections
  - `privacy-policy/` — privacy policy page
- `app/components/` — UI sections (Hero, System, Stats, DNA, FAQ, etc.)
- `public/` — static assets
  - `img/` — images used across sections
  - `favicon/` — full favicon set + manifest
  - `og.jpg` — OpenGraph preview image

---

## ✅ SEO & Metadata

The project includes:
- OpenGraph / Twitter cards
- robots and indexing rules
- favicon set + `site.webmanifest`
- theme color + viewport metadata for modern browsers

---

## 🍪 Cookie Consent

Cookie banner:
- appears only if no decision is stored
- stores `accepted` / `rejected` in `localStorage`
- links to the Privacy Policy page




