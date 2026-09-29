# Branding

CHAILD is led from the University of Oxford, and the site uses the University's
published palette and typefaces.

Colour lives in one place, [`src/_globalColor.scss`](../src/_globalColor.scss).
Nothing under `src/` hardcodes a **hue**. Components do write neutral
black-or-white alpha inline — shadows, scrims, code washes — which carry no hue
and cannot drift off-palette. Anything with a hue belongs in the palette file.

Every light token has a dark twin (`$darkBorder1`, `$darkSurface`, `$darkGlow`),
so the two themes cannot drift apart.

## Palette

| Token | Hex | Oxford name | Pantone | Role | Contrast |
|---|---|---|---|---|---|
| `$buttonColor` | `#1D42A6` | Oxford royal blue | 2126C | Links, buttons, borders, focus rings, the header wordmark — **light theme only** | 8.82:1 on white |
| `$buttonHover` | `#002147` | Oxford blue | 282 (core) | Hover for the above | 16.05:1 on white |
| `$titleColor` | `#002147` | Oxford blue | 282 (core) | Headings | 16.05:1 on white |
| `$darkBackground` | `#002147` | Oxford blue | 282 (core) | The dark-theme canvas | 16.05:1 with white text |
| `$accentColorDark` | `#B9D6F2` | Oxford sky blue | 277C | Links **and surfaces** in dark mode, labelled `$darkBackground` | 10.67:1 on the dark canvas |
| `$highlight` | `#EAD27B` | **Oxford yellow ochre, lightened** | 4016C (tint) | Small accents only — tags, current nav item, the CTA edge bar | 10.70:1 / APCA Lc 77 under `$highlightLabel` |
| `$highlightLabel` | `#002147` | Oxford blue | 282 | The only text colour permitted on `$highlight` | — |
| `$highlightEdge` | `#CAA620` | **Oxford yellow ochre at 46%** | 4016C (tint) | The edge of a yellow badge, in both themes | 1.56:1 on `$highlight` |
| `$textColor` | `#334d6c` | **Oxford blue at 80%** | 282 (tint) | Body text, light theme | 8.68:1 on white (AAA) |
| `$textColorDark` | `#ffffff` | — | — | Headings, dark theme; labels on accent fills | 16.05:1 on the dark canvas |
| `$subTitleDark` | `#E6E9ED` | **white at 90% toward Oxford blue** | 282 (tint) | Body text, dark theme | 13.18:1 on the dark canvas |
| `$lightBackground3` | `#F5F6F8` | **Oxford blue at 4%** | 282 (tint) | Card fills, light theme | — |
| `$lightBorder1` | `#CCD3DA` | **Oxford blue at 20%** | 282 (tint) | Card and divider borders, light theme | 1.51:1 on white |
| `$darkBorder1` | `rgba(255, 255, 255, 0.15)` | — | — | The same borders, dark theme | 1.56:1 on the dark canvas |
| `$darkSurface` | `rgba(255, 255, 255, 0.04)` | — | — | Lifted card and panel fills, dark theme | 1.11:1 on the dark canvas |
| `$darkGlow` | `rgba(255, 255, 255, 0.1)` | — | — | The CTA band's glow, dark theme | — |
| `$sparkleEdge` | `#b2bcc8` | **Oxford blue at 30%** | 282 (tint) | The halo behind a sparkle, light theme | 1.92:1 on the light page |
| `$sparkleEdgeDark` | `rgba(255, 255, 255, 0.35)` | — | — | The same halo, dark theme | 3.09:1 on the dark page |
| `$toggleSwitchSliderBG` | `#667A91` | **Oxford blue at 60%** | 282 (tint) | The theme switch track, both themes | 4.41:1 white / 3.64:1 navy |

Every value is exact from Oxford's published table except the **stated tints of
Oxford blue** — the rows marked as such.

**Both themes are blue, yellow and white.** The light theme sets its text in
tints of Oxford blue rather than black. Oxford blue itself is unusable as body
text: at a luminance of 0.015 it reads as black however saturated it is. The
tints keep the hue and lift the lightness, so the page looks blue rather than
merely being blue. Full-strength Oxford blue is reserved for **headings and the
wordmark**; the interactive layer takes royal blue below it, so a link never
competes with a heading for weight.

**The light theme is white plus tints of one colour** — Oxford blue at 4% (card
fills) through 20% (borders) and 80% (text) to 100% (headings), with the yellow
as the only other colour. A grey or off-hue neutral reads as a second scheme
laid over the first. Reach for another step on the tint ramp instead.

### The site is AAA throughout

Every text pairing in both themes clears 7:1. Worst case is **8.03:1**.

Both themes have exactly two text levels, split at the same place:

| | Headings | Everything else |
|---|---|---|
| Light | `$titleColor` `#002147` | `$textColor` `#334d6c` |
| Dark | `$textColorDark` `#ffffff` | `$subTitleDark` `#E6E9ED` |

Headings take the extreme value; everything below steps back one notch. So
**"secondary text" is not a role this site has**: subtitles, card copy,
captions, nav links and body paragraphs are all the same colour, told apart by
size and weight.

The default is the *body* colour, not the heading colour. `body` in light and
`.dark-mode` in dark both set the step-back value, and `h1`–`h6` lift back up,
so a component naming no colour gets body text in either theme.

**There is no third level, and the light theme cannot have one.** AAA wants
luminance ≤ 0.0887 on the card fills and `$textColor` already sits at 0.0709,
so the whole window is **1.25×**. Inside it a tier stops looking secondary; past
it the "secondary" text comes out *darker than the body text it should recede
behind*. The constraint is the hierarchy, not the value, so no retuning fixes
it. Do not add a lighter tint for captions or summaries — it will look fine and
quietly drop the site below AAA.

The dark theme's step back is free by comparison, but it cannot match light's
*ratios* because **white is the ceiling**: headings cannot move up to make room,
so the heading-to-body step is 1.22:1 in dark against 1.85:1 in light. Size and
weight carry the rest.

**Do not pin a heading to the body colour.** Only the light theme would carry
such an override, putting the same element on a different level per theme. Look
for `color: $textColor` on something whose dark counterpart sets
`$textColorDark`.

### Rules

**The highlight is a fill, never text.** The yellow is 1.50:1 on white, so it
always carries `$highlightLabel`, which is what lets it look identical in both
themes. Use it for small accents; at the size of a panel it stops being a
highlight.

**Judge yellow with APCA, not the WCAG ratio.** WCAG 2.x ignores chroma and
overstates saturated yellows: Oxford yellow ochre at its listed lightness
measures 9.06:1 — nominally AAA — while being APCA Lc 68. The shipped value is
the same hue (47°) and saturation (73%) lifted to 70% lightness, taking the
label to Lc 77. If the yellow is retuned, check Lc ≥ 75; the ratio will not tell
you.

**On the light theme the yellow usually needs an edge**, since at 1.50:1 a
yellow shape dissolves into the page. How hard depends on the job:

| | edge on the light theme | why |
|---|---|---|
| Post tags | `$highlightEdge`, soft | a badge, not a control |
| Sparkles | `$sparkleEdge` / `$sparkleEdgeDark` | decorative; a halo in **both** themes, weighted the same in each |
| Current nav item | none | bold weight and `aria-current` already carry the state, and an outline reads as a button |

**Match the two halos by luminance gap, not contrast ratio.** They look alike at
1.92:1 on white and 3.09:1 on navy. The navy page's luminance is 0.015, so an
equal ratio against it is a gap of 0.056 where the same ratio on white is 0.504
— nine times larger. This is the one place where equal ratios are the wrong
target.

**A yellow shape needing an edge on both pages takes `$highlightEdge`**, a step
down the same hue: 1.56:1 against the fill, 2.34:1 on white, 6.87:1 on navy, so
one rule covers both themes. A dark outline cannot — it is as heavy as the label
and drops to 1.00:1 on navy.

That 2.34:1 is below WCAG 1.4.11's 3:1, so **this treatment is for badges
only**. The news filter pills are controls and keep a `$buttonColor` border at
8.82:1.

**The CTA band has no fill**, in either theme: the card border, the yellow edge
bar and a soft glow, sitting directly on the page, which keeps its text on the
highest-contrast ground available. Yellow as a *fill* would force every line
inside onto the dark label — the dark theme's body colour is 1.23:1 on yellow.
The glow is the only one on the page.

**Every tag is yellow**, whether a badge on a post or a selected filter pill, so
a tag looks like a tag wherever it appears. The yellow brings its own label, so
the selected state needs no dark variant. On the light theme a pill keeps its
blue border: an all-yellow pill would be 1.50:1 against the page and lose the
boundary WCAG 1.4.11 requires.

The yellow is warm on purpose, so it sits with the orange in the IEAI logo and
the emoji used across the site.

**Links come in two kinds.** A *standalone action* — the CTA links, "All news
→", a card's call to action — is bold, takes no underline at rest, gains one on
hover, and usually carries an arrow. An *inline prose link* — the footer's grant
reference, anything in blog markdown — keeps its underline at rest, because in
running text the underline identifies it without relying on colour. Do not
"fix" prose links to match action links.

**`$buttonColor` must never be a surface inside `.dark-mode`** — 1.82:1 on the
dark canvas, short of the 3:1 a control needs to show an edge. Dark-mode
surfaces use `$accentColorDark` with a `$darkBackground` label, and **the label
must flip**: white on the accent is 1.50:1.

This is structural, not a quirk of these colours. AAA on white needs luminance
≤ 0.10; 3:1 against Oxford blue needs ≥ 0.153. No colour satisfies both, so
*any* AAA-on-white primary is unusable as a dark-page surface.

**Only the page wrapper carries `.dark-mode`.** Every dark rule is a descendant
selector — `.dark-mode .thing` — so components never add a dark class or take
`isDark` to style themselves. Write the light rule, then prefix it.

Two exceptions, both structural:

| | why |
|---|---|
| The page wrapper | `Main.js` and each page put `.dark-mode` on their outermost `div`. That is the switch. |
| `.qr-dialog` | portalled to `<body>`, outside the wrapper, so no descendant selector reaches it. |

Because of that portal, **a class shared with the dialog must carry its colour
on the class itself**, not nested inside a container.

Two places still read `isDark`, for *content* rather than styling: the footer
picks `logoDark` over `logo`, and the switch picks a moon over a sun. Those
choose a different thing to render, not a different way to render it.

**There is no `!important` in `src/`, and there should stay none.** Every theme
rule wins on specificity: `.dark-mode .thing` is one class more specific than
`.thing`. When a rule must out-rank a state — the current nav chip has to beat
`li a:hover` — qualify it with an ancestor: `.header .menu li a.current` is
`(0,3,2)` against the hover rule's `(0,2,2)`. `!important` compounds, forcing
itself onto every rule that then has to override it.

**A future request for green means dropping to AA.** Only six Oxford colours
reach 7:1 on white — charcoal, Oxford blue, plum, royal blue, Oxford Red and
viridian — and no green is among them. Oxford green is 6.10:1.

### Surfaces

Which level a block takes is a decision, not an accident:

| Block | Fill | Border |
|---|---|---|
| Audience cards | lifted — `$lightBackground3` / `$darkSurface` | `$lightBorder1` / `$darkBorder1` |
| News filter panel | lifted, same values | none |
| News cards | **flush with the page** — `$lightBackground1` / `$darkBackground` | `$lightBorder1` / `$darkBorder1` |
| CTA band | **no fill** | same border, plus the yellow bar and the glow |

The two card types differ on purpose. What matters is that **each behaves the
same way in both themes** — a block lifted in one and flush in the other is a
bug.

`$darkSurface` separates from the navy page by 1.11:1, matching the 1.08:1
`$lightBackground3` gives on white, so a lifted block reads as equally lifted in
either theme.

**Cards hover the same way**: a 4px lift, the border going to the primary, and a
shadow. `:hover` and `:focus-within` together, since the whole card is one link.
Nothing changes the card's *fill*, so one contrast measurement covers it.

**The news card's arrow badge overhangs the border on purpose.** It is
positioned against the anchor, which sits inside the container's border, so at
`0,0` it lands a border-width short of the corner — a visible seam once hover
turns the border the badge's own colour. It is pulled out by `$cardBorder`,
which is why that width is a named value. The anchor is `display: flow-root` so
the title's top margin cannot collapse out of it; `overflow: hidden` would
contain it equally but clip the overhang.

### The theme switch

The track and thumb do not change with the theme — only position and the emoji
do, so the switch reads as one object rather than two.

One track colour is also the only option on this palette: on the navy page
anything dark enough to read as a *dark* track falls below 3:1 against it, so it
must be a mid-tone. `$toggleSwitchSliderBG` clears 3:1 three ways — against the
white header, the navy one, and under its white thumb.

It is `user-select: none`: the sun and moon are real emoji characters, so a drag
across the header would select them.

### Two notes on the source

- Oxford's published table gives **Oxford Red** as both RGB 190, 15, 52 and
  `#AA1A2D`, which are different colours. Pantone 187C is ≈`#A6192E`, so the hex
  looks right. Not a colour this site uses — recorded so nobody "fixes" it.
- Third-party mirrors of the palette are unreliable; one lists Oxford mauve as a
  core colour (core is Oxford blue alone). Cite the guidelines.

## Typography

| Role | Family | Weight | Size / line-height | Tracking |
|---|---|---|---|---|
| Body and UI | **Roboto** (Oxford core sans) | 400, 500, 700 | 19px / **1.5** | normal |
| `h1`, `h2` | **Montserrat** (Oxford display) | 700 | — / 1.1 | **-0.04em** |
| `h3`–`h6` | Montserrat | 600 | — / 1.2 | **-0.03em** |
| Header logotype | Montserrat | 700 | — | -0.03em |
| Code | system monospace stack | — | — | — |

Line-height and tracking follow UCL's published web specification. Both families
come from `@fontsource`, are served from our own origin, and ship their OFL
licence in-package.

### Rules

- **Every `@font-face` needs an explicit `font-weight` descriptor.** Omit one and
  the browser silently synthesises a fake bold instead of loading the real face.
- **Roboto needs 700**, not just 400/500: links, buttons and CTAs are
  body-family text set bold.
- **Every `font-family` needs a fallback stack**, or a missing face drops to the
  browser default — for a wordmark, that means Times.
- **Any committed font binary must have its licence committed beside it.**
- **No icon fonts.** A stylesheet plus a webfont is a poor trade for a handful
  of glyphs; use inline SVG.
- **No third-party runtime origins.** Serving fonts or icons from a CDN
  discloses every visitor's IP to it, which German case law has found a GDPR
  breach for Google's font CDN — and this is a UKRI-funded university project.

## Partner logos

All eight assets are SVG, in [`src/assets/images/logos/`](../src/assets/images/logos/).

| Partner | Light | Dark | Brand colour |
|---|---|---|---|
| Oxford, Dept of Computer Science | `oxford-cs-pos.svg` | `oxford-cs-neg.svg` | Oxford blue `#002147` |
| Oxford, Institute for Ethics in AI | `ieai-light.svg` | `ieai-dark.svg` | their navy `#032440` |
| UCL Knowledge Lab | `ucl.svg` | `ucl-inverted.svg` | UCL bright purple `#993BFF`, dark `#361A54`, white `#FAFAFA` |
| UKRI | `ukri.svg` | `ukri-inverted.svg` | UKRI blue `#2E2D62` (Pantone 2758 C) |

### Rules

- **The IEAI artwork is IEAI's, untouched.** Every motif path and opacity is
  theirs. `ieai-light.svg` differs from their supplied file by one thing, a
  removed full-canvas white `<rect>` — a background, not part of the mark, which
  would otherwise sit as a white box on the dark page. `ieai-dark.svg` then
  differs from the light one by exactly one value, the wordmark fill. **If a
  future edit makes those two differ by more than that line, the mark is being
  restyled per theme, which is out of bounds.** This is IEAI's standalone mark;
  their co-branded lockup carries a second Oxford crest, duplicating the one in
  the CS logo beside it.
- **UKRI's artwork is used unmodified, and their guidelines are specific.**
  Primary (navy logotype) on light grounds, secondary (white symbol and
  logotype) on dark — `Footer.js` swaps them. Never recolour an element or
  re-derive a variant: the supplied secondary is a white square with the
  letters in UKRI navy, which is self-contained and therefore correct on any
  dark ground. Two measurable rules apply to the footer:

  | Rule | Requirement | Ours |
  |---|---|---|
  | Minimum size (digital) | symbol ≥ 28px high | 59px desktop, 42.5px mobile |
  | Exclusion zone | ¼ of symbol height, clear on all sides | 14.8px needed, ≥24px given |

  The symbol is the square, which spans the artwork's full height, so its
  height is the rendered image height. The SVG carries no padding of its own —
  the square touches three edges of the viewBox — so the clear space has to
  come from the strip's `gap` and the footer's padding.
- **The partner order is "order of mention", and the footer's partnership line
  is what establishes it.** UKRI require partner logos to run either
  alphabetically or in order of mention; alphabetically would put the lead
  institution last. If that line is reworded, the logo order must move with it.
- **Site copy abbreviates UKRI without a prior full mention**, which their
  page 17 asks for. Accepted deliberately — "UKRI" is widely recognised and the
  footer partnership line carries the full name.
- **Equal visual weight, not equal height**, which is what UCL's co-branding
  rules ask for. The marks are not comparable on any single measure: they run
  from 2.1:1 to 6.3:1 in aspect, and their ink covers anywhere from 14% to 89%
  of their own box. Heights are therefore set per logo in `Footer.js` by eye
  against each other, not by a formula. Clear space between logos is one
  portico width, and `max-width` on the image must stay above the widest
  lockup's natural width or `object-fit` silently letterboxes it.
- UCL's purple sits in an otherwise blue footer. That is unavoidable and
  correct: their palette is entirely purple.

## The greeting animation

`Greeting.js` renders `childrenWaving.json` through Lottie, and
`childrenWaving.svg` as a still for `prefers-reduced-motion`. **They are two
files showing the same picture and must never diverge** — recolour one and
reduced-motion visitors see something different.

The illustration hides the CHAILD wordmark in two precomps, in Oxford blue. The
second is byte-identical to the first at the same transform, so it renders
nothing; it is kept in step anyway, so a layer reorder cannot surface an
off-palette colour. The two formats round differently — the SVG export floors
where the hex rounds — so match colours with a tolerance, not an exact string.

## The mark and icons

The mark reads as adults, children and AI: a tall figure and a short one either
side of three sparkles, one ochre and two sky. Two masters, both in
[`src/assets/images/logo/`](../src/assets/images/logo/):

| File | Corners | Generates |
|---|---|---|
| `chaild-mark.svg` | rounded | `favicon.ico`, `android-chrome-*`, `mstile-150x150.png` |
| `chaild-mark-square.svg` | full bleed | `apple-touch-icon.png` |

Everything in `public/` is generated from those two. Change a master and
regenerate; nothing edits the icons directly.

### Rules

- **The AI element must never be figure-shaped or figure-height.** Anything
  centred, upright and roughly as tall as the people reads as a third person
  once the icon is small. Three sparkles at three sizes, scattered rather than
  stacked, do not.
- **Leave the sparkles unconnected.** A closed triangle reads as a warning sign
  and five in a row as a letter W, and the links compete with the figures for
  the little white in the mark.
- **One ochre sparkle, the rest sky.** The single warm accent gives the eye
  somewhere to land; more than one flattens it.
- **No robot.** AI-literacy teaching works to undo the "AI equals robot"
  conception, so the mark for a project on children's agency should not assert
  it — even though a robot is the most legible option available.
- **`apple-touch-icon.png` is square and fully opaque.** iOS applies its own
  corner mask, so rounding here shows as a rounded shape inside a rounded mask,
  and transparency composites onto black.
- **`safari-pinned-tab.svg` must stay solid black on transparent.** Safari uses
  it as a stencil and takes the tint from the `color=` attribute in
  `index.html`.
- **Bump the cache-buster whenever the icons change** — currently `?v9=` in
  `public/index.html`, `public/manifest.json` and `public/browserconfig.xml`.
  Leave it and returning visitors keep the old icons indefinitely.
- **No `--` inside an SVG comment.** It is illegal XML and the renderer rejects
  the whole file.

At 16px the mark is a coloured blur rather than a legible scene. That is true of
any three-element composition at that size and is accepted; 32px upwards reads
correctly.

### The wordmark

The header extends the mark rather than repeating it: the adult and child stand
to the left of the name, and the sparkle trio sits above the **AI** in CHAILD.

- **The name is real text**, not artwork, so it stays selectable and
  translatable and a screen reader says "CHAILD" rather than spelling it. Only
  the figures and sparkles are drawn, and both are `aria-hidden`.
- **The sparkles are yellow in both themes**, over a halo equally weighted in
  each: `$sparkleEdge` darker than the light page, `$sparkleEdgeDark` lighter
  than the dark one. The halo is painted *behind* the fill (`paint-order:
  stroke`), so it is an outer edge rather than blunting the points, and only
  ever shows against the page.
- The sparkles sit above intact letters rather than standing in for one. A
  sparkle used *as* a letter would have to take the text colour.
- **The wordmark takes `$buttonColor`, the interactive colour** — it is a link
  sitting above the page's headings, and at `$titleColor` it would be the
  darkest thing on screen, competing with them. The menu bars follow it.
- Everything is sized in `em`, so the lockup tracks the header at any size, and
  the sparkles are positioned relative to the AI pair rather than the whole
  word.

### Decorative sparkles

`components/sparkles/Sparkles.js` is the same trio used as a flourish elsewhere,
currently beside three homepage section headings.

- **Keep it sparse.** A sparkle on every heading turns a flourish into a
  texture. `flip` mirrors the arrangement so repeated use does not read as one
  stamp reapplied.
- **It is `aria-hidden` and carries no meaning**, so it must never be the only
  thing marking something out.
- It uses the same halo as the wordmark, and the same **one space** before it.
  That space is a `{" "}` in the JSX — JSX strips a newline between the heading
  text and the element, so without it the sparkle jams against the last letter.

## Sources

- Oxford — [brand guidelines](https://www.ox.ac.uk/about/the-university/brand/guidelines)
  and [fonts](https://communications.admin.ox.ac.uk/communications-resources/visual-identity/identity-guidelines/fonts).
- UCL — [co-branding](https://www.ucl.ac.uk/brand-and-experience/brand/visual-guidelines/logo/co-branding-and-partnerships),
  [colour](https://www.ucl.ac.uk/brand-and-experience/brand/visual-guidelines/colour),
  [typography](https://www.ucl.ac.uk/brand-and-experience/brand/visual-guidelines/typography)
- UKRI — [logo library](https://ukri.frontify.com/d/zgfuBB2r7aAg/brand-basics)

Checked July 2026.
