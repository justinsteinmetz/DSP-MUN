https://justinsteinmetz.github.io/DSP-MUN/


# DSP MUN — Model United Nations Student Guide

**Live site:** https://justinsteinmetz.github.io/DSP-MUN/  
**Part of:** DSP English Hub · MUN Programme  
**Maintained by:** Justin Steinmetz, DSP English / MUN Programme Lead

---

## What this is

A standalone, student-facing web application supporting the full three-unit Model United Nations curriculum at Deutsche Schule Prag. Designed and built by Justin Steinmetz as part of a broader suite of digital learning resources for the DSP English programme.

The site is not a course management tool. It is a **student reference and practice environment** — something students open before, during, and after class to consolidate understanding, practise skills, and prepare for committee simulation. It works offline once loaded, requires no login, and stores no data on any server.

---

## Pedagogical overview

### The problem it addresses

MUN is procedurally demanding. Students simultaneously need to understand UN history and structure, conduct credible diplomatic research, write formal position papers, and perform confidently under parliamentary procedure — often in a second or third language. Existing external platforms (e.g. Model Diplomat) handle AI-assisted country research well but do not address procedural reference, resolution construction, or the structured curriculum arc from Unit 1 to Unit 3.

This site fills that gap. It is designed to sit alongside classroom instruction, not replace it.

### The three-unit structure

The site mirrors the course exactly.

**Unit 1 — History, Goals & Structure** (7 lessons · 3 weeks)  
Covers the historical origins of the UN, the six main organs, core Charter principles, and specialised agencies. The site provides an expandable lesson map keyed to learning targets, a twelve-point historical timeline from WWI to the SDGs, organ and principle reference cards, and a searchable glossary of all Unit 1 vocabulary.

**Unit 2 — Research to Policy** (14 lessons · 6 weeks)  
Covers the research process, source evaluation, and position paper writing. The site provides an expandable lesson map, a committee reference panel (DISEC, SOCHUM, UNSC, HRC, and others), and a **Position Paper Builder** — a four-section interactive scaffold (Background → Past International Actions → Country Policy → Possible Solutions) with guidance, examples, a checklist, and a clearly labelled common mistake for each section.

**Unit 3 — Simulated Committee** (17 lessons · 7 weeks)  
Covers parliamentary procedure, caucusing, resolution drafting, amendment, and voting. The site provides an expandable lesson map, a **Parliamentary Procedure Quick-Reference** (five tabs: Points, Motions, Voting, Speeches, Caucusing — designed for in-session use), a **Resolution Clause Builder** (preambulatory and operative verbs with correct formatting and live clause preview), and a delegate skills panel covering preparation through reflection.

### Active study tools

The **Glossary** covers all curriculum vocabulary across all three units. Students can browse, search by keyword, filter by unit, switch to **Flashcard mode** (flip on click or spacebar, navigate with arrow keys), or switch to **Quiz mode** (four-option multiple choice with immediate feedback). Progress in flashcard and quiz modes is saved automatically.

The **Position Paper Builder** checklists save per-section as students work through them. Progress persists across sessions via localStorage — students can pick up where they left off.

A **Progress panel** shows completion across all checklist items, with export and import options so progress can be moved between devices or shared with a teacher.

### Assessment rubrics

Four rubrics are included, each with four performance levels:

- **Position Paper** — background, past actions, country policy, solutions, overall quality
- **Opening Speech** — content, structure, delivery, diplomacy
- **Resolution** — preambulatory clauses, operative clauses, specificity, policy alignment
- **Participation** — procedure, caucusing, debate, collaboration

### Critical lens

The site does not present the UN as an unambiguous success. Unit 1 includes explicit treatment of the Security Council veto — its structural logic, its historical use, and its role in institutional paralysis. The colonial authorship of the UN Charter is addressed: the 1945 drafters represented a world in which over half the current member states were not yet independent. The position paper guidance in Unit 2 includes a note on whose voices shape "national policy" and what research sources may systematically underrepresent. Unit 3 includes delegate tips that explicitly name the difference between consensus as genuine agreement and consensus as power-asymmetric compromise.

This critical framing is intentional. Students who understand the institution's limitations are better equipped to represent countries credibly — and to engage with the genuine complexity of multilateral diplomacy.

---

## Technical overview

### Architecture

The site is a multi-file static web application hosted on GitHub Pages. No build step, no framework, no backend.

```
dsp-mun/
├── index.html          # Structure and markup
├── style.css           # All styling
├── app.js              # Application logic
├── data.js             # All curriculum data
├── dsp-logo.png        # DSP logo (nav)
├── un-logo.png         # UN emblem (hero)
└── pdfs/
    ├── position-paper-template.pdf
    ├── procedure-guide.pdf
    └── assessment-rubrics.pdf
```

**data.js** is the content layer. All lesson maps, glossary terms, rubric descriptors, procedural tables, resolution verbs, committee descriptions, and paper builder guidance live here as structured JavaScript constants. Updating curriculum content means editing data.js only — no changes to app.js or index.html are required.

**app.js** contains all rendering and interaction logic. It reads from data.js and writes to the DOM. No data is defined in app.js.

**index.html** contains only structure — section containers, nav, modal scaffolding.

### Data persistence

Progress is saved to `localStorage` under the key `dsp-mun-v1`. This includes position paper checklist completion (per section, per item) and flashcard seen/correct/incorrect state (per glossary term). Students can export progress as a JSON file and import it on another device. A reset option clears all stored data after confirmation.

No data is sent to any server. No analytics, no cookies, no tracking.

### Accessibility

- Skip-to-content link
- ARIA labels on all navigation, interactive controls, and live regions
- Full keyboard navigation: flashcards (Space to flip, ←/→ to navigate), lesson rows (Enter/Space to expand)
- Screen-reader-compatible quiz feedback via `aria-live` regions

### Updating content

All curriculum content lives in `data.js`. The relevant constants are clearly named and commented. To add a glossary term, update a lesson target, modify a rubric descriptor, or add a resolution verb, edit `data.js` only. No redeployment step is required beyond pushing to the `main` branch — GitHub Pages serves updated files automatically within a few minutes.

---

