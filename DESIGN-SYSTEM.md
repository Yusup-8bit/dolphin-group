# Project Design System

This file provides defaults. Adapt them to the brand rather than applying them mechanically.

## Core principles

1. **One visual thesis per page.** A page may be rich, but it should not look like several unrelated templates stacked together.
2. **Hierarchy before decoration.** Type, spacing, and composition do most of the work.
3. **Contrast creates rhythm.** Alternate density, scale, alignment, and material treatment intentionally.
4. **Motion communicates.** Animate state, relationship, progress, or spatial continuity—not merely because motion is available.
5. **Mobile is recomposed.** Preserve the narrative, not the desktop geometry.

## Spacing

Use a small token set and fluid ranges.

Suggested base tokens:
- `--space-1: 0.25rem`
- `--space-2: 0.5rem`
- `--space-3: 0.75rem`
- `--space-4: 1rem`
- `--space-6: 1.5rem`
- `--space-8: 2rem`
- `--space-12: 3rem`
- `--space-16: 4rem`
- `--space-24: 6rem`
- `--space-32: 8rem`

Use `clamp()` for major page spacing and display sizes. Keep related items close; separate conceptual groups clearly.

## Typography

Use a limited system:
- one display family;
- one text family, or a single family with enough range;
- optional mono only for code, labels, or data.

A typical fluid scale:
- display: `clamp(3rem, 8vw, 8.5rem)`
- h1: `clamp(2.5rem, 6vw, 6rem)`
- h2: `clamp(2rem, 4vw, 4rem)`
- h3: `clamp(1.4rem, 2vw, 2rem)`
- body-lg: `clamp(1.05rem, 1.4vw, 1.35rem)`
- body: `1rem`
- small: `0.875rem`

Tune line height and measure:
- display: 0.88–1.02;
- headings: 0.95–1.15;
- body: 1.5–1.75;
- long text measure: roughly 55–75 characters.

## Color

Define semantic roles rather than scattered hex values:
- canvas;
- surface;
- elevated surface;
- primary text;
- muted text;
- border;
- accent;
- accent contrast;
- success;
- warning;
- danger.

A premium design does not require low contrast. Ensure important text and controls meet accessibility targets.

## Shape

Use radius intentionally:
- small controls: 8–12 px;
- cards: 14–24 px;
- major media: 20–36 px;
- avoid applying the same oversized radius to everything.

Use borders, shadows, and surface contrast sparingly. Select one dominant material language.

## Layout

Use a 12-column desktop grid when helpful, but allow content to break the grid intentionally. Pair a stable global grid with one memorable device such as:
- an offset rail;
- oversized editorial type;
- a vertical timeline;
- layered product UI;
- controlled diagonal flow;
- full-bleed media interrupted by text;
- a modular data wall;
- a strong sticky narrative.

## Motion

Default motion ranges:
- micro interaction: 120–220 ms;
- component transition: 220–420 ms;
- section reveal: 400–700 ms;
- page transition: 450–900 ms.

Use easing with fast response and gentle settlement. Respect reduced motion and never hide essential content behind animation.

## Components

A component should have:
- purpose;
- variants;
- interactive states;
- responsive behavior;
- accessible name;
- predictable spacing;
- no page-specific magic numbers unless deliberately isolated.

## Visual assets

Prefer product-specific assets:
- real screenshots;
- custom diagrams;
- data visualizations;
- cropped photography;
- lightweight SVG systems;
- branded textures.

Avoid anonymous stock photography and generic 3D blobs unless the brief explicitly calls for them.
