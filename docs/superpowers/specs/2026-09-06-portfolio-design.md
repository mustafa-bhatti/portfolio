# Portfolio Design Spec

**Owner:** Ghulam Mustafa Bhatti
**Date:** 2026-09-06
**Status:** Locked — ready for implementation planning

## 1. Positioning

Junior AI/ML Engineer (currently at HOF Global) who builds websites, apps, and
automation that help businesses operate better. Audience is dual: business
owners/clients evaluating whether to trust this person with their operations,
and technical reviewers (recruiters, engineers) evaluating depth. The site
must read as *engineered and trustworthy* first, *creative* through
interaction craft and typographic confidence — not through illustration or
decorative chaos.

## 2. Visual system

- **Base:** warm light/cream (Brie Wolfson-style ivory, e.g. `#FDFBF0`–`#FAF7ED`
  range), not stark white. Near-black/charcoal text (e.g. `#1A1A1A`), not pure
  black.
- **Accent:** single confident amber/gold, locked identically across the
  entire site — buttons, links, tags, hover/focus states, active nav. No
  second accent color anywhere (Color Consistency Lock).
- **Proof tiles:** every project's demo/screenshot lives inside a dark
  charcoal "nested frame" (double-bezel: dark outer shell, inset content
  panel) sitting on the light page — deliberate figure-ground contrast, not a
  full dark-mode site.
- **Type:** bold geometric sans display (Geist or Cabinet Grotesk), tight
  tracking on headlines, left-aligned always (no centered hero). Body text
  `max-w-[65ch]`, relaxed leading.
- **Corner-radius lock:** one soft scale for the whole site — 12–16px on
  cards/frames, full-pill on buttons and tags.
- **Icons:** Phosphor or Tabler only, standardized stroke width. No Lucide, no
  hand-rolled SVGs.
- **Motion:** Motion (`motion/react`). Scroll-triggered fade/slide-up on
  section entry, magnetic/scale hover on buttons and cards, one genuinely
  custom hero interaction (not a stock fade) as the site's signature "extremely
  creative" moment. `prefers-reduced-motion` fallback required throughout.
  GPU-safe only (`transform`/`opacity`), no `window.addEventListener('scroll')`.

## 3. Page structure

### 3.1 Hero
- Eyebrow: role framing built from the actual HOF Global title — workflow
  automation / AI integrations for business operations.
- Headline: 2 lines max, left-aligned.
- Subtext: ≤ 20 words / ≤ 4 lines.
- CTAs: solid pill primary (`View Work`) + outlined pill secondary
  (`Get in Touch`). No scroll-cue text, no version/beta badge.

### 3.2 Featured work — numbered case-study rows
Four projects, in this order, alternating image-left/text-right and
text-left/image-right (no 3 consecutive rows sharing the same side):

1. **TeachingCircle — WhatsApp enrollment bot** (freelance, academy client in
   Lahore). Automates enrollment/inquiry handling — answers prospective
   student questions, captures leads, routes to staff.
   Tags: `Meta Cloud API`, `FastAPI`, `Redis`, `Alpine.js`.
   Proof: architecture-diagram or screen-capture of the Alpine.js chat-review
   dashboard inside the dark nested frame (no live embed — client's WhatsApp
   number, not publicly demoable).
   Case-study beats: Problem (manual enrollment inquiries ate staff time) →
   Approach (Meta Cloud API webhook → FastAPI → Redis for session/queue state
   → lightweight Alpine.js dashboard for staff to review conversations,
   chosen for cost efficiency over a heavier frontend stack) → Outcome
   (staff time reclaimed from manual inquiry handling).

2. **HOF Vault** — two products, one platform: employee benefits app (venue
   discounts, receipt OCR compliance, HRMS sync) + QR dine-in ordering
   platform for restaurant partners. Live in production.
   Tags: `Next.js`, `Supabase`, `Expo / React Native`, `Railway OCR`.
   Proof: real screenshots (web admin portal + mobile app), dark nested
   frame, production link (`vault.hof-global.com`).

3. **PsychConnect** (FYP, flagship deep-dive — see 3.3). Row here links
   through to the full case-study section/page.
   Tags: `Next.js 16`, `TypeScript`, `Supabase`, `FastAPI`, `Gemini AI`.

4. **Easy-PDF** — privacy-first local RAG system, chat with PDFs fully
   on-device (Ollama), zero data leakage.
   Tags: `Node.js`, `LangChain`, `PostgreSQL`, `Redis`, `Docker`.
   Proof: **screen-capture loop** inside the dark nested frame (not a live
   embed — local/Ollama-based, not hostable for site visitors).

Every row: tech-tag pills + dual links (`Case Study ↗` for the deep-dive ones,
`GitHub ↗` where a public repo exists).

### 3.3 PsychConnect deep dive
Own section (or dedicated route if the implementation plan calls for it):
- **Problem:** access gap between patients and licensed psychologists.
- **Architecture:** Next.js App Router, 21 view components across
  patient/psychologist/admin portals with strict Page–View separation,
  defense-in-depth security (Next.js Middleware session validation,
  role-based context gating, Postgres Row Level Security per-row isolation),
  standalone FastAPI microservice powered by Google Gemini for multimodal
  HTP-drawing analysis and clinical questionnaire scoring, Safepay (PKR
  payments) + Cal.com V2 (scheduling/video) integrations.
- **What was hard:** call out the RLS + role-gating security model and the
  FastAPI/Gemini microservice split as the two genuine technical challenges.
- **Outcome:** working multi-role telepsychology platform (state as shipped,
  not "in progress," unless still incomplete — confirm at copy time).

### 3.4 About
Short, personal, one photo. Ties the AI/ML engineer day job back to why this
kind of work (automation that removes operational drag) is the throughline.

### 3.5 Contact
One CTA, one intent. No duplicate "get in touch" + "let's talk" pair.

## 4. Stack

- Next.js (App Router, Server Components by default; `'use client'` isolated
  to leaf components doing motion/scroll/pointer work).
- Tailwind v4.
- Motion (`motion/react`) for animated leaves.
- Phosphor or Tabler icons.
- `next/font` for type loading (no runtime Google Fonts `<link>`).
- Deploy: Vercel.

## 5. Explicitly out of scope / cut

- **HOF Ledger** and **FinTrack** — cut from the featured lineup (Ledger
  replaced by PsychConnect per direct decision; FinTrack was the weakest
  candidate next to the final four).
- **Space** (self-hosted Meet alternative) — considered as an optional 5th
  project, declined; not featured. Revisit only if the four-project lineup
  needs a systems-engineering counterweight later.
- **hof-pack**, **frappe-crm work**, **refresh-app/refresh-web** — not
  discussed as portfolio candidates; not included.

## 6. Content still needed at implementation time

- Final PsychConnect status (shipped vs. in-progress) for correct case-study
  tense.
- Real screenshots/capture for HOF Vault (web + mobile) and Easy-PDF
  (screen-capture loop).
- Architecture diagram or capture for TeachingCircle (no live demo possible).
- About-page bio copy and photo.
- Contact method (email vs. booking link).

## 7. Verification approach

UI-only project — verify visually in a running `next dev` instance via
browser automation (screenshot at desktop + mobile viewport, confirm motion
reduced-motion fallback, confirm color/corner-radius/CTA-intent locks from
Section 2 hold across every section). No unit-test suite proof needed beyond
a smoke check that the app builds and renders; this is a static-content site,
not business logic requiring regression tests.
