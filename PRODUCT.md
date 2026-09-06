# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js 16 (App Router), Tailwind CSS v4, Motion (`motion/react`) for animation,
deployed on Vercel. Confirmed across this session: user specified "latest
Next.js version"; Tailwind/Motion/Vercel were proposed and explicitly locked
by the user earlier in the same session.

## Users

Two audiences the same visit must satisfy:

1. **Prospective clients / business owners** deciding whether to trust this
   person with software that touches their operations (freelance/contract
   work). Non-technical, evaluating trust and outcomes, not code.
2. **Technical reviewers** (recruiters, hiring managers, engineers) deciding
   whether to interview/hire. Evaluating technical depth and real production
   experience.

## Product Purpose

A portfolio site for Ghulam Mustafa Bhatti, a junior AI/ML engineer, that
proves his ability to build production-grade websites, apps, and business
automation. Success is a visitor deciding to make contact — hire, contract,
or interview.

## Positioning

Differentiated from a generic developer portfolio by leading with shipped,
production-grade systems built for real businesses (live production apps, a
paid freelance automation client) rather than tutorial or toy projects. The
throughline across every featured project is "AI integrations and workflow
automation that streamline business operations" — lifted directly from his
current job's actual scope, not marketing language invented for the site.

## Operating Context

Lahore-based junior AI/ML engineer, currently employed at HOF Global
(building internal CRM software and automation pipelines), who also takes on
freelance client work outside that role. The site must work simultaneously
for a business owner assessing trust and a technical recruiter assessing
depth — it is not purely a hiring-audience artifact.

## Capabilities and Constraints

- **Phased build, confirmed by the user:** the site will not be built in one
  pass. Direction gets explored and decided first (this skill's 3-direction
  process), then built incrementally.
- Some featured projects cannot be live-demoed on the public site because
  they touch real client/employer/patient data (TeachingCircle, HOF Vault,
  PsychConnect) — these ship as real screenshots, screen-capture loops, or
  architecture diagrams, never a live embed.
- Easy-PDF is local/Ollama-based and cannot be hosted for site visitors under
  any circumstance — screen-capture loop only, confirmed by the user.
- Open, explicitly undecided at time of writing: PsychConnect's shipped vs.
  in-progress status (affects case-study tense), final About-page bio/photo,
  final contact method (email vs. booking link).

## Brand Commitments

- Name: Ghulam Mustafa Bhatti, goes by "Mustafa Bhatti" professionally.
- GitHub: `github.com/mustafa-bhatti` (per resume) — the account actually
  reachable this session is `github.com/mustafa-bhatti12`, holding one public
  repo, `spaces`.
- LinkedIn: `linkedin.com/in/mustafa-bhattil`.
- No existing visual identity, logo, or wordmark — this is a greenfield
  visual world.

## Evidence on Hand

Four confirmed featured projects (explicitly locked by the user this
session; HOF Ledger and FinTrack were considered and cut, Space was
considered as an optional 5th and declined):

1. **TeachingCircle** — freelance WhatsApp enrollment/inquiry-handling bot
   for an academy in Lahore. Stack: Meta Cloud API, FastAPI, Redis, and an
   Alpine.js frontend (chosen for cost efficiency) for staff to review
   conversations. No local repo or public source found on this machine —
   proof must be an architecture diagram or a description, not a screenshot
   of the client's actual WhatsApp thread.
2. **HOF Vault** — two products in one platform: an employee benefits app
   (venue discounts, receipt OCR compliance, HRMS sync) and a QR dine-in
   ordering platform for restaurant partners. Live in production at
   `vault.hof-global.com`. Web: Next.js/Supabase/Railway. Mobile: Expo/React
   Native (Expo Router, 4 tabs). Local repos: `~/Documents/work/vault/hof-vault`
   and `~/Documents/work/vault/vault-app`.
3. **PsychConnect** (final-year project) — full-stack telepsychology
   platform connecting patients and licensed psychologists. Next.js 16,
   TypeScript, Supabase, FastAPI, Google Gemini. Defense-in-depth security
   (Middleware session validation, role-based context gating, Postgres Row
   Level Security), a standalone FastAPI/Gemini microservice for multimodal
   assessment scoring, Safepay (PKR payments) and Cal.com V2 (scheduling)
   integrations. 21 view components across patient/psychologist/admin
   portals.
4. **Easy-PDF** — privacy-first local RAG tool: chat with PDFs entirely
   on-device via Ollama, zero data leakage. Node.js, LangChain, PostgreSQL
   (pgvector), Redis (BullMQ), Docker.

**Explicitly not fabricated:** no client names, dollar figures, user counts,
or performance benchmarks exist for any of these beyond what's stated above.
Future work must not invent them.

## Product Principles

1. Prove capability through shipped, production-grade systems built for real
   businesses — not tutorial or toy projects.
2. Speak simultaneously to a non-technical business buyer's trust and a
   technical reviewer's scrutiny; neither audience is sacrificed for the
   other.
3. "Automation and AI integration that streamlines business operations" is
   the throughline connecting every featured project — it is what makes this
   portfolio different from a generic frontend showcase.
4. Quality over coverage: a small, deep set of case studies beats an
   exhaustive project list.
5. Ship in phases — a visual direction is decided and validated before full
   build-out, rather than building the whole site against a single untested
   guess.
