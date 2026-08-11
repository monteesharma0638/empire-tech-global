# EmpireTech Global — AI Image Generation Prompts

> Source of truth: `EmpireTechGlobal_Brochuree.pdf`, `EmpireTechGlobal_Flyer.pdf`, `CLAUDE.md`
> Purpose: generate every photographic asset the website needs, in one consistent visual language.

---

## 1. How to use this file

1. Pick an image block below.
2. Paste **`[STYLE]`** (Section 3) + the block's **Prompt** into your generator.
3. Paste **`[NEGATIVE]`** (Section 4) into the negative-prompt field (or append it for models that don't have one).
4. Generate at the stated **aspect ratio**.
5. Save with the **exact filename** given — the website code will reference these names.
6. Upload to Cloudflare R2 under the stated path.

**Recommended models:** Flux 1.1 Pro / Midjourney v7 / Google Imagen 4 / Nano Banana Pro — all handle realistic architecture and Indian context well. For anything with people, prefer Flux Pro or Imagen (better hands/faces).

**Deliver each image twice:** original `.jpg` (quality 82) **and** a `.webp`. Next.js will serve WebP/AVIF, but keep JPG as fallback.

---

## 2. Brand DNA (this drives every prompt)

| Token | Value |
|---|---|
| Primary (navy) | `#1B2447` |
| Primary deep | `#141B36` |
| Accent (gold) | `#C89B3F` |
| Accent light | `#D9B15F` |
| Surface (cream) | `#F7F3EA` |
| Text muted | `#5A6072` |

**Tone words:** engineered, cleared, delivered · founder-led · compliance-first · heavy-duty · calm authority · no flash, no hype.
**Anti-tone:** glossy stock-photo handshakes, generic skyscraper skylines, Western suburban context, CGI plastic renders.

**Region:** Jaipur / Rajasthan / NCR industrial belt. Skies, dust, light and people should read as **North India**, not Dubai or the US.

---

## 3. `[STYLE]` — paste before every prompt

```
Photorealistic commercial architectural photography. Shot on a full-frame DSLR,
35mm lens, f/5.6, ISO 200, natural available light, tripod-steady, ultra sharp
throughout. High dynamic range with real texture in concrete, steel, and dust.
Restrained editorial color grade: deep navy-blue shadows, warm muted gold
highlights, soft cream mid-tones — low saturation, no HDR crunch. Clean,
architectural composition with generous negative space for text overlay.
Indian subcontinent setting (Rajasthan / North India), authentic local
materials, vehicles, vegetation and people. Professional, understated,
documentary realism. 8K, magazine quality.
```

## 4. `[NEGATIVE]` — paste into every generation

```
text, lettering, words, signage with readable text, logos, brand marks,
watermarks, captions, numbers, distorted hands, extra fingers, deformed faces,
duplicated limbs, mangled anatomy, floating objects, melted geometry,
impossible structures, cartoon, illustration, anime, painting, 3D render, CGI,
plastic sheen, video game look, oversaturated, HDR halos, heavy vignette,
lens flare overload, fisheye distortion, tilt-shift toy effect, motion blur,
noise, jpeg artifacts, low resolution, cluttered composition, American suburb,
European old town, Dubai skyline, snow, autumn foliage, stock-photo handshake,
fake smiling models, hard hats worn incorrectly
```

---

## 5. File naming & R2 structure

```
empire-tech-global/           ← R2 bucket
├── hero/
├── sectors/
├── about/
├── capabilities/
├── process/
├── why/
├── safety/
├── team/
├── cta/
├── textures/
└── meta/
```

Public URL pattern the site will use:
`https://<your-r2-public-domain>/empire-tech-global/<folder>/<filename>`

Keep filenames **lowercase-kebab-case**, exactly as written below.

---

## 6. IMAGE BRIEFS

### Priority key
- **P0** — blocking. Site cannot launch without it.
- **P1** — important. Launch looks incomplete without it.
- **P2** — polish. Add after launch.

---

## A. HERO

### A1 · `hero/hero-industrial-dusk.jpg` — **P0**
**Use:** Homepage hero background, full-bleed, with navy gradient scrim + headline overlay
**Aspect:** 16:9 → export 2560×1440
**Overlay safe zone:** left 45% must stay uncluttered (headline + CTA sit there)

**Prompt:**
```
A large steel-framed industrial factory shed under construction at golden hour
in Rajasthan, India. Exposed structural steel portal frames and purlins catch
warm low sunlight against a deep blue-navy dusk sky. A tall yellow tower crane
stands to the right. Foreground: compacted red-brown earth and neatly stacked
steel sections. Two Indian construction engineers in white hard hats and
high-visibility vests stand small in the mid-right, viewed from behind,
reviewing the frame. Wide establishing shot, low camera angle, strong
horizontal lines, vast empty sky in the upper-left third. Dust haze softens the
far background. Epic scale, calm, controlled, no chaos.
```
**Alt text:** `Steel-framed industrial facility under construction at dusk in Rajasthan`

---

### A2 · `hero/hero-mobile.jpg` — **P0**
**Use:** Mobile hero (portrait crop of the same scene — generate separately, don't crop A1)
**Aspect:** 4:5 → export 1200×1500

**Prompt:**
```
Vertical composition. A steel portal-frame industrial building under
construction at golden hour in Rajasthan, India, shot from ground level looking
up along the frame. Warm gold sunlight rakes across the steel; the sky above is
a deep navy-blue gradient occupying the top half of the frame. A single Indian
site engineer in a white hard hat stands at the base for scale, seen from
behind. Strong vertical steel columns lead the eye upward. Clean, minimal,
heroic, plenty of open sky for text.
```
**Alt text:** `Industrial steel frame rising against a dusk sky`

---

### A3 · `hero/hero-alt-warehouse.jpg` — **P1**
**Use:** Alternate hero slide / hero carousel second frame
**Aspect:** 16:9 → 2560×1440

**Prompt:**
```
A vast newly completed warehouse and logistics park in the North India
industrial belt, photographed at early morning. Long clear-span metal roof,
a continuous row of loading docks with closed grey shutters, wide concrete
apron, crisp white line markings. Two white Indian tata-style trucks parked at
the far docks, small in frame for scale. Pale gold morning light, long soft
shadows, cool blue-grey sky with thin haze. Extremely wide, symmetrical,
architectural. Empty sky across the top third for headline text.
```
**Alt text:** `Completed warehouse and logistics park with loading docks at sunrise`

---

## B. WHAT WE BUILD — sector cards (6 images, must feel like one set)

> **Consistency rule:** generate all six in the same session, same model, same seed family if your tool supports it. They sit side by side in a grid — mismatched lighting will be obvious.
> **Aspect for all six:** 4:3 → export 1200×900

### B1 · `sectors/sector-factory.jpg` — **P0**
```
Interior of a modern Indian manufacturing factory shed. Tall clear-span steel
roof trusses, industrial ridge ventilators letting in shafts of daylight,
polished grey concrete floor with yellow safety walkway markings, orderly rows
of machinery along one side. Two workers in navy uniforms and white hard hats
in the mid-distance. Clean, bright, well-ventilated, high ceilings. Wide-angle
architectural interior, one-point perspective down the length of the shed.
Cool daylight with warm gold accents from the roof lights.
```
**Alt:** `Interior of a clear-span manufacturing factory shed`

### B2 · `sectors/sector-warehouse.jpg` — **P0**
```
Interior of a large empty modern warehouse in India, immediately after
completion. Enormous clear-span space, tall white steel racking on one side
partially installed, flawless smooth grey power-floated concrete floor
stretching to the horizon line, daylight flooding in through translucent roof
panels and an open dock door at the far end. No goods yet — pristine and
cavernous. One-point perspective, wide angle, cool neutral light with a warm
glow at the open door.
```
**Alt:** `Clear-span warehouse interior with polished concrete floor`

### B3 · `sectors/sector-school.jpg` — **P0**
```
Exterior of a newly built modern Indian school building, three storeys, clean
horizontal lines, warm sandstone-toned facade with deep window recesses and
shaded corridors, a covered assembly area at ground level. Neat paved courtyard
in front with young trees and a low boundary wall. Bright late-morning
Rajasthan sunlight, clear blue sky, crisp shadows. No people. Architectural
three-quarter view, straight verticals.
```
**Alt:** `Newly built modern school campus building`

### B4 · `sectors/sector-college.jpg` — **P0**
```
Exterior of a modern Indian college academic block, four storeys, contemporary
institutional architecture combining warm sandstone cladding with clean white
concrete bands and vertical louvre shading. A wide accessible entrance ramp and
broad steps lead to the main door. Landscaped lawn and paved plaza in front,
mature trees framing the left edge. Late afternoon golden light, deep blue sky.
Wide architectural three-quarter view, no people.
```
**Alt:** `Modern college academic block with landscaped plaza`

### B5 · `sectors/sector-hospital.jpg` — **P0**
```
Exterior of a newly completed multi-storey hospital building in India. Clean
white and warm-grey facade, generous glazing, a wide covered ambulance porch
with a drive-through canopy at the entrance, ramps and clearly organised
approach road. Landscaped forecourt with low hedges. Bright, clinical, calm.
Soft overcast-to-clear daylight, cool neutral grade with warm stone accents.
Architectural three-quarter exterior view, straight verticals, no people, no
readable signage.
```
**Alt:** `Completed multi-storey hospital building with ambulance porch`

### B6 · `sectors/sector-township.jpg` — **P0**
```
Aerial drone view of a planned residential township development on the outskirts
of Jaipur, Rajasthan. Orderly grid of low-rise and mid-rise residential blocks
with warm sandstone and cream facades, wide tree-lined internal roads, a central
green park, water tank tower, and clearly demarcated plots. Arid scrubland and
distant Aravalli hills on the horizon. Late afternoon golden light, long soft
shadows, warm dusty haze. High-altitude oblique aerial, wide.
```
**Alt:** `Aerial view of a planned township development near Jaipur`

---

## C. ABOUT / OUR STORY

### C1 · `about/about-site-visit.jpg` — **P0**
**Use:** "Our Story & Mission" split section, image on one side
**Aspect:** 4:5 → 1200×1500

**Prompt:**
```
Two Indian civil engineers on an active construction site in Rajasthan,
standing over a set of rolled architectural drawings spread on a makeshift
plywood table. Both wear white hard hats, high-visibility vests over formal
shirts. One points at the drawing, the other looks on — genuine working
concentration, not posed smiles, faces partially in profile. Behind them,
out-of-focus RCC column stubs and steel reinforcement rise from the ground.
Warm late-morning light, shallow depth of field on the background, sharp on the
drawings. Documentary reportage feel.
```
**Alt:** `EmpireTech Global engineers reviewing drawings on site`

### C2 · `about/about-jaipur-context.jpg` — **P1**
**Use:** "Based in Jaipur" credential strip / about page banner
**Aspect:** 21:9 → 2400×1030

**Prompt:**
```
Wide panoramic view of the modern outskirts of Jaipur, Rajasthan at dawn.
Low-rise industrial and institutional buildings with warm sandstone tones spread
across the mid-ground, a broad new highway with light traffic cutting across,
and the hazy blue silhouette of the Aravalli hills behind. Soft pink-gold dawn
light, cool blue shadows, atmospheric dust haze layering the distance. Serene,
expansive, wide-angle. No prominent landmarks, no monuments.
```
**Alt:** `Jaipur industrial outskirts at dawn with the Aravalli hills beyond`

---

## D. CAPABILITIES — Design, Engineering & Systems (4 images, one set)

> **Aspect for all four:** 3:2 → 1200×800

### D1 · `capabilities/cap-architectural-drawings.jpg` — **P1**
```
Overhead flat-lay of professional architectural drawings on a large drafting
desk. Crisp printed site plans, floor plans and elevations in fine navy-blue
line work on white paper, partially overlapping. A metal scale ruler, a set
square, a mechanical pencil and a pair of dividers rest on top. Soft directional
daylight from the left, gentle shadows, warm cream paper tone. Sharp,
minimal, orderly. Drawings show geometric linework only — no readable text or
dimensions.
```
**Alt:** `Architectural site plans and elevations on a drafting desk`

### D2 · `capabilities/cap-structural-engineering.jpg` — **P1**
```
Close-up detail of a reinforced concrete column-beam junction under
construction. Dense grid of steel reinforcement bars precisely tied with black
binding wire, sharp geometry, formwork panels standing ready to one side.
Strong low-angle sunlight rakes across the steel creating crisp shadow lines.
Shallow depth of field falling off behind. Textural, technical, confident.
Warm gold light on steel against cool navy shadow.
```
**Alt:** `Steel reinforcement detail at a concrete column junction`

### D3 · `capabilities/cap-cost-estimation.jpg` — **P1**
```
Overhead flat-lay on a clean desk: an open hardcover project ledger with ruled
columns, a scientific calculator, a stack of printed spreadsheets, a
fountain pen, and a rolled drawing at the edge of frame. Neutral warm-grey desk
surface. Soft even window light from the upper left. Restrained, professional,
uncluttered — plenty of empty desk space. Pages show ruled columns and
gridlines only, no readable text or numbers.
```
**Alt:** `Project cost ledger, calculator and estimates on a desk`

### D4 · `capabilities/cap-material-sourcing.jpg` — **P1**
```
A neatly organised construction material yard in India at golden hour. Bundled
steel reinforcement bars stacked by diameter, palletised cement bags under a
tarpaulin, stacks of red clay bricks and grey concrete blocks in tidy rows,
aggregate piles behind. Everything squared and orderly — a well-managed yard,
not a scrap heap. Warm side light, long shadows, dusty golden air. Wide
three-quarter view.
```
**Alt:** `Organised construction material yard with steel, cement and blocks`

---

## E. PROCESS & SECTION BACKGROUNDS

### E1 · `process/process-bg.jpg` — **P1**
**Use:** Dark background behind the 9-step process timeline (will sit under a heavy navy overlay at ~85% opacity)
**Aspect:** 16:9 → 2560×1440

**Prompt:**
```
Abstract dark architectural detail: the underside of a steel roof truss system
photographed against a deep twilight sky. Repeating diagonal steel members
create a rhythmic geometric lattice across the frame. Very low key — mostly deep
navy-blue and near-black, with thin gold rim-light catching the top edges of the
steel. Moody, minimal, high contrast, almost graphic. Large areas of clean dark
sky for text to sit on.
```
**Alt:** `Steel roof truss lattice against a twilight sky`

### E2 · `process/process-handover.jpg` — **P2**
**Use:** Final process step / "Handover & Support" accent image
**Aspect:** 3:2 → 1200×800

**Prompt:**
```
Interior of a freshly completed institutional building in India on handover day.
Immaculate empty corridor with polished vitrified tile flooring reflecting
daylight, clean painted walls, a run of new doors, natural light pouring in from
a window at the far end. Absolutely spotless and unoccupied. One-point
perspective down the corridor. Bright, calm, cool neutral grade with a warm glow
at the window.
```
**Alt:** `Spotless completed corridor of a newly handed-over building`

---

## F. WHY EMPIRETECH GLOBAL

### F1 · `why/why-one-team.jpg` — **P1**
**Use:** "One Team, One Owner" / single-point accountability feature
**Aspect:** 3:2 → 1200×800

**Prompt:**
```
An Indian project manager in a white hard hat and high-visibility vest stands in
the foreground of an active construction site, holding a tablet, calmly
directing work. Behind him, in soft focus, a small coordinated team works —
one at a total station survey instrument, two at a reinforcement cage. Everyone
correctly wearing PPE. Mid-morning light, natural expressions, real work in
progress. Shallow depth of field, documentary style, no posing to camera.
```
**Alt:** `Project manager coordinating work on an active site`

### F2 · `why/why-compliance.jpg` — **P1**
**Use:** "Rules Checked Early" / compliance-first feature
**Aspect:** 3:2 → 1200×800

**Prompt:**
```
Close-up of an Indian engineer's hands in the foreground reviewing a stamped
approval drawing set on a site desk, a clipboard checklist and a red-painted
fire hydrant riser visible behind in soft focus inside a newly built industrial
building. Fine navy linework on the drawing, warm cream paper. Directional
daylight from the side. Precise, procedural, unglamorous competence.
No readable text on any document.
```
**Alt:** `Engineer reviewing approval drawings against site compliance checks`

---

## G. SAFETY & QUALITY

> **Aspect for all three:** 3:2 → 1200×800

### G1 · `safety/safety-ppe.jpg` — **P1**
```
A line of Indian construction workers at the start of a shift on site, all
correctly wearing white and yellow hard hats, high-visibility vests, gloves and
safety boots. Photographed from a low three-quarter angle, mid-stride, purposeful
and organised. Early morning light, long shadows, dusty air. Behind them, the
frame of a large industrial building under construction. Authentic, respectful,
documentary — real working people, not models.
```
**Alt:** `Construction crew in full PPE at the start of a shift`

### G2 · `safety/safety-inspection.jpg` — **P1**
```
An Indian quality inspector in a white hard hat crouching to examine a freshly
poured concrete slab surface, holding a spirit level against it, a clipboard on
the ground beside him. Sharp raking sunlight reveals the texture of the concrete.
Close, low camera position, shallow depth of field. Focused, meticulous,
hands-on. Warm gold light, cool blue shadow in the concrete.
```
**Alt:** `Quality inspector checking a freshly poured concrete slab`

### G3 · `safety/safety-training.jpg` — **P2**
```
A site safety toolbox talk in progress in India. A supervisor in a white hard hat
stands facing a semicircle of eight seated and standing workers in
high-visibility vests, all attentive. Held under the shade of a partially
completed concrete structure. Natural light from the open side, soft shadows.
Wide shot, candid, faces mostly in three-quarter or profile view. Genuine,
unstaged.
```
**Alt:** `Site safety toolbox talk with the construction crew`

---

## H. TEAM

> ⚠️ **Do not AI-generate the directors.** Ashwil Bhupesh and Devdeep Singh are real people. Generating synthetic portraits of named real individuals is misleading and will look wrong to anyone who knows them. **Please send real headshots** — plain background, chest-up, shot on a phone in soft window light is fine; I'll grade them to match the site.
> If headshots aren't ready by launch, use H3 (monogram placeholder) — the code will swap in real photos later without layout changes.

### H1 · `team/team-engineers.jpg` — **P1**
**Use:** "Team & Core Values" section banner
**Aspect:** 16:9 → 1920×1080
```
A group of six Indian construction professionals — structural engineers, an MEP
consultant, a procurement lead and site supervisors — standing together in a
site office doorway of a nearly completed industrial building. Mix of hard hats,
high-visibility vests and formal shirts. Relaxed, competent, confident postures;
natural half-smiles, not a stiff corporate line-up. Soft directional daylight
from outside the frame. Mid-wide shot, shallow depth of field on the background.
```
**Alt:** `The EmpireTech Global engineering and site team`

### H2 · `team/team-site-office.jpg` — **P2**
**Use:** Contact / about secondary
**Aspect:** 3:2 → 1200×800
```
Interior of a well-organised construction site office in India. Large printed
drawings pinned to the wall, a project schedule board with coloured markers, a
laptop and hard hats on a plain desk, a window looking out onto the site.
Practical and tidy, no clutter. Natural daylight from the window, warm neutral
tones. No people. All boards and drawings show linework and colour blocks only,
no readable text.
```
**Alt:** `Organised construction site project office`

### H3 · `team/avatar-placeholder.png` — **P0 (fallback only)**
**Use:** Director card placeholder until real headshots arrive
**Aspect:** 1:1 → 600×600
```
A minimal flat vector avatar placeholder. Solid deep navy blue background
(#1B2447). Centred, a simple elegant muted gold (#C89B3F) line-art silhouette of
a person's head and shoulders, thin uniform 3px stroke weight, geometric and
refined. Perfectly symmetrical, generous padding around the silhouette. Flat
design, no gradients, no shadows, no texture, no text.
```
**Alt:** `Director portrait placeholder`

---

## I. CTA / CONTACT

### I1 · `cta/cta-lets-build.jpg` — **P0**
**Use:** Full-width "LET'S BUILD" CTA band background (heavy navy overlay on top)
**Aspect:** 21:9 → 2400×1030

**Prompt:**
```
Wide cinematic view of a large construction site in Rajasthan at blue hour. The
silhouette of a tower crane and a partially completed steel structure stand
against a deep navy-blue sky with the last band of gold on the horizon. Warm
work lights glow in a few places within the dark structure. Extremely low key,
mostly deep navy, quiet and monumental. Very wide, huge amount of clean dark sky
across the upper two-thirds for large text overlay.
```
**Alt:** `Construction site at blue hour with a tower crane silhouette`

### I2 · `cta/contact-office-exterior.jpg` — **P2**
**Use:** Contact page, beside the Jaipur address
**Aspect:** 3:2 → 1200×800
```
A modest, professional ground-floor commercial office entrance on a clean
residential-commercial street in Jaipur, Rajasthan. Warm sandstone and painted
plaster facade, a glass door under a simple canopy, a couple of parked
motorcycles and a small tree at the kerb. Bright mid-morning sunlight, crisp
shadows, clear blue sky. Straight-on architectural view. Understated and real,
not a glass corporate tower. No readable signage.
```
**Alt:** `EmpireTech Global office entrance in Jaipur`

---

## J. TEXTURES, PATTERNS & META

### J1 · `textures/texture-navy-concrete.jpg` — **P2**
**Use:** Subtle background texture behind dark sections (used at 6–10% opacity)
**Aspect:** 1:1 → 2000×2000
```
Seamless flat-lit macro texture of smooth polished dark navy-blue concrete.
Very fine aggregate speckle, subtle tonal variation, faint natural mottling.
Absolutely even lighting with no hotspots, no shadows, no directional light,
no visible edges or seams. Photographed perfectly perpendicular. Muted,
desaturated, near-monochrome deep navy. Tileable.
```

### J2 · `textures/texture-blueprint-grid.png` — **P2**
**Use:** Faint technical-drawing pattern behind the process timeline
**Aspect:** 1:1 → 2000×2000
```
A minimal technical blueprint pattern. Deep navy blue background with a precise
grid of very thin muted gold hairlines, plus a few faint architectural
construction lines, section arrows and circular node markers scattered
sparsely. Flat, graphic, vector-like, perfectly even. Extremely subtle and
low contrast. Seamlessly tileable. No text, no numbers, no dimensions.
```

### J3 · `meta/og-image.jpg` — **P0**
**Use:** Open Graph / Twitter card / WhatsApp link preview
**Aspect:** 1.91:1 → 1200×630
> Generate the **photographic background only** — I'll composite the logo and headline text in code/Figma so the type stays crisp and correct.
```
Deep navy-blue cinematic photograph of a steel-framed industrial building under
construction at dusk, positioned in the right half of the frame. The left half
is almost entirely empty deep navy sky with a faint gold gradient near the
horizon. Very low key, moody, minimal. Wide, clean, high contrast between the
dark sky and the thin gold-lit steel edges. Deliberate large empty space on the
left for a logo and headline.
```

### J4 · `meta/404-blueprint.jpg` — **P2**
**Aspect:** 3:2 → 1200×800
```
A single rolled architectural drawing lying alone on a large empty polished
concrete floor, lit by one soft shaft of daylight from above. Vast empty grey
space around it, deep shadows at the edges. Minimal, quiet, slightly wry.
Overhead three-quarter angle. Deep navy shadows, warm cream paper.
```

---

## 7. Generation checklist

- [ ] A1, A2 hero (P0)
- [ ] B1–B6 sector set — **generate as one batch** (P0)
- [ ] C1 about site visit (P0)
- [ ] I1 CTA band (P0)
- [ ] J3 OG background (P0)
- [ ] H3 avatar placeholder (P0, fallback)
- [ ] A3, C2, D1–D4, E1, F1, F2, G1, G2, H1 (P1)
- [ ] E2, G3, H2, I2, J1, J2, J4 (P2)
- [ ] Real director headshots requested from client ⚠️

**Minimum to start building: the P0 set (11 images).** I can build the full site with those and drop the rest in as they arrive.

---

## 8. Quality gate — reject and regenerate if

1. **Any readable text appears** anywhere in the image (AI text is always garbled and will look unprofessional).
2. Hands, fingers or faces are malformed on any visible person.
3. Hard hats or PPE are worn incorrectly or float above heads.
4. The structure is physically impossible (beams that don't connect, floating slabs, columns landing on nothing) — a construction company's website cannot show impossible construction.
5. The setting reads as American, European or Gulf rather than Indian.
6. Colour grade fights the brand — avoid teal-and-orange, heavy HDR, or blown-out whites.
7. The sector set (B1–B6) doesn't look like it came from one photographer.

---

## 9. After generation — hand back to me

Upload to R2 and send me either:
- the **public base URL** of the bucket (e.g. `https://images.empiretechglobal.com`), or
- the files, and I'll reference them by the exact paths above.

Then I'll wire them into the Next.js build with `next/image`, blur placeholders, and the fade-in / zoom-in scroll animations.
