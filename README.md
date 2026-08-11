# EmpireTech Global

Marketing site for EmpireTech Global Pvt. Ltd. — a Jaipur-based industrial, warehouse and institutional construction company.

Next.js 16 (App Router) · React 19 · Tailwind v4 · Motion · Resend · deployed to Vercel.

---

## Run it

```bash
npm install
cp .env.example .env.local   # then fill in RESEND_API_KEY
npm run dev                  # http://localhost:3000
```

```bash
npm run build   # production build
npm run lint    # eslint
npx tsc --noEmit
```

---

## Design direction

The site is composed like a **drawing set**, not a brochure — the one idea everything else follows from:

- **Sheet numbering.** The home page runs as nine sheets (`01 / 09` … `09 / 09`), mirroring the brochure's own page marks. A fixed margin rail on wide screens reports which sheet you are reading. Inner pages pass `sheet={false}` to reused sections, because a nine-sheet set only exists on the home page.
- **Corner registration ticks** (`.tick-frame`) on cards, lifted from the brochure's card artwork. They grow on hover.
- **Mono stage codes** (`FEAS`, `APPR`, `IND`, `WHS`) as the connective vernacular.
- **The process is a register**, not a card grid — stage / code / activity / scope, with column headers. Numbering is used because the process genuinely is a nine-step sequence.

### Brand tokens

Sampled directly from the brochure PDF, not guessed:

| Token | Value | Use |
|---|---|---|
| `ink` | `#171B39` | exact brochure navy |
| `ink-deep` | `#0E1128` | hero scrims, footer |
| `ink-raised` | `#232848` | raised surfaces on dark |
| `gold` | `#B68843` | exact logo gold |
| `gold-bright` | `#D2A45E` | hover, highlights |
| `paper` | `#FAF7F3` | page ground |
| `rule` | `#E4DED4` | hairlines |

### Type

- **Newsreader** — display serif. Editorial authority without the overused Playfair/Cormorant look.
- **IBM Plex Sans** — body. Drawn for technical documentation, which is what this company produces.
- **IBM Plex Mono** — codes, sheet numbers, phone numbers, eyebrows.

### Motion

`src/components/ui/Reveal.tsx` holds the primitives: `Reveal` (fade + rise), `ZoomIn` (scale-in), `Stagger`/`StaggerItem`, `DrawRule`. All collapse to a plain fade under `prefers-reduced-motion`. The hero runs one orchestrated load sequence rather than scattered effects.

---

## Where things live

```
src/
  lib/site.ts        All company copy and facts — SINGLE SOURCE OF TRUTH
  lib/images.ts      R2 image manifest (URL, alt text, intrinsic size)
  app/               Routes; api/contact is the only dynamic one
  components/
    layout/          Header, Footer, SheetRail, PageHero
    sections/        Home page sections, reused across inner pages
    ui/              Bits.tsx (Eyebrow, Button, SectionHead, Container), Reveal.tsx
public/brand/        Logo, extracted from the brochure PDF and vectorised
```

**To change any company text — phone, address, sector copy, process steps — edit `src/lib/site.ts`.** Nothing is hard-coded in components.

---

## Images

Served from the public R2 bucket, declared once in `src/lib/images.ts`:

```
https://pub-b09a677af6a84e489708bae5457ea79b.r2.dev/<folder>/<file>
```

Folders sit at the **bucket root** — there is no `empire-tech-global/` prefix. The host is allow-listed in `next.config.ts`; if the bucket changes, set `NEXT_PUBLIC_IMAGE_BASE` and the config follows automatically.

> One filename note: the college photo is uploaded as `sectors/sector-collage.jpg` (typo for "college"). `images.ts` references the actual name. If you rename it in R2, update that one line.

Generation prompts for all 31 images are in `brand/AI-IMAGE-PROMPTS.md`.

### Logo

Extracted from page 1 of the brochure PDF (embedded bitmap + its soft mask), then traced to SVG so it stays crisp at any size:

- `logo-mark.svg` — winged ETG monogram (header)
- `logo-full.svg` — full lockup with wordmark and tagline (footer)
- `logo-wordmark.svg` — wordmark only
- `-navy` / `-paper` variants of each, for light and dark grounds
- `src/app/icon.png`, `apple-icon.png` — favicons built from the central roundel (the wings are illegible at 32px)

---

## Contact form

`POST /api/contact` → validates → sends via Resend to `CONTACT_TO`.

Includes a honeypot field, length caps on every input, HTML escaping, and `replyTo` set to the sender so you can reply straight from your inbox. Field-level errors come back as 422 and render inline.

### To make it actually send

1. Create a free account at [resend.com](https://resend.com).
2. **API Keys → Create API Key.** Put it in `RESEND_API_KEY`.
3. Add the same variable in **Vercel → Settings → Environment Variables**.

Until a domain is verified, `CONTACT_FROM` must stay `onboarding@resend.dev`, and Resend will **only deliver to the email address that owns the Resend account**. To send to `communications.etg@gmail.com` from your own domain:

4. **Resend → Domains → Add Domain**, add the DNS records it gives you.
5. Change `CONTACT_FROM` to e.g. `EmpireTech Global <projects@empiretechglobal.com>`.

Without a key the endpoint returns a clear 503 and the form tells the visitor to call instead — nothing crashes.

---

## Deploying to Vercel

1. Push to GitHub, then **Add New → Project** in Vercel and import the repo. Framework preset is detected automatically.
2. Set environment variables (`RESEND_API_KEY`, `CONTACT_TO`, `CONTACT_FROM`, `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_IMAGE_BASE`).
3. Add the domain under **Settings → Domains**.
4. Set `NEXT_PUBLIC_SITE_URL` to the live domain — it drives canonical tags, `sitemap.xml`, and Open Graph URLs.

---

## Still outstanding

- [ ] **Director headshots.** `Team.tsx` and the contact page use a gold-on-navy placeholder avatar. Real photos of Ashwil Bhupesh and Devdeep Singh should replace `img.avatarPlaceholder` — a phone camera against a plain wall in soft window light is fine. These were deliberately not AI-generated: they are real people, and synthetic portraits of named individuals would mislead visitors.
- [ ] **Resend API key**, and domain verification if enquiries should land in the Gmail inbox.
- [ ] **Real domain** in `NEXT_PUBLIC_SITE_URL`.
- [ ] **Google Business Profile / Maps embed** on the contact page, once the listing exists.
- [ ] **Analytics** — Vercel Analytics is one toggle in the dashboard if you want it.
- [ ] **Portfolio, case studies and testimonials** are deliberately absent while the company is new. The layout has room for a projects section between "What we build" and "Story" when there is real work to show.
