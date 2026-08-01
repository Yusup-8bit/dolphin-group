---
name: responsive-composition
description: Translate expressive desktop compositions into deliberate tablet and mobile layouts without merely stacking or shrinking them. Use for any page with asymmetric grids, large typography, sticky stories, layered media, or dense controls.
---


# Responsive Composition

## Principle

Preserve:
- narrative order;
- primary action;
- signature motif;
- content relationships.

Do not preserve desktop coordinates.

## Breakpoint method

Use content breakpoints, not device names. Test at:
- narrow phone around 390 px;
- tablet around 768 px;
- common desktop around 1280 px;
- wide desktop around 1440 px.

Also drag continuously to catch intermediate failures.

## Recomposition tools

- reorder content;
- convert columns to sequence;
- change crop;
- swap sticky narrative for stepper;
- shorten labels;
- move secondary controls;
- collapse detail progressively;
- change type scale and line breaks;
- replace hover behavior with tap or always-visible state.

## Mobile first viewport

The mobile opening should include:
- category/context;
- promise;
- action;
- a meaningful visual or evidence.

Do not push all evidence below several screens of headline spacing.

## Common failures

Fix:
- overflow from large display type;
- clipped sticky sections;
- tiny text in scaled mockups;
- horizontal card carousels used only to avoid layout work;
- mobile nav that covers content;
- fixed-height sections;
- inaccessible off-canvas content;
- touch targets too close together.

## Safe areas

Account for browser chrome and device safe areas when using fixed or sticky controls.
