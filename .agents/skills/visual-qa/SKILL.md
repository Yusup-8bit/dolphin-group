---
name: visual-qa
description: Perform rendered visual quality assurance on a completed page or interface, compare it against the brief, identify issues by impact, fix them, and repeat. Use after substantial UI implementation; do not substitute source-code review for rendered inspection.
---


# Visual QA

## Required input

Review the actual rendered interface when tools permit. Source code alone is insufficient.

## Viewports

Inspect at:
- 390 px;
- 768 px;
- 1280 px;
- 1440 px.

Also inspect at least one intermediate width.

## First-pass checks

### Composition
- clear dominant element;
- intentional balance;
- no accidental dead zones;
- sections have distinct narrative jobs;
- signature motif is coherent;
- no generic template sequence.

### Typography
- line breaks feel intentional;
- body measure is readable;
- hierarchy survives mobile;
- no clipping;
- labels remain legible;
- numbers align where relevant.

### Rhythm
- spacing is systematic;
- section transitions are intentional;
- dense and quiet moments alternate;
- no stack of identical containers.

### Components
- states look related;
- borders and radii are consistent;
- icons align;
- controls have adequate targets;
- content edge cases do not break cards.

### Media
- crops are intentional;
- images are sharp;
- aspect ratios remain stable;
- mockups are readable;
- alt behavior is acceptable.

### Motion
- timing feels responsive;
- content does not jump;
- reduced motion works;
- no scroll trap;
- repeated animation does not annoy.

### Usability
- primary action is obvious;
- navigation works;
- form errors are clear;
- sticky elements do not cover content;
- focus is visible.

## Severity

- Critical: task cannot be completed.
- High: major confusion, inaccessible flow, broken responsive behavior, obvious visual defect.
- Medium: inconsistency or polish issue affecting quality.
- Low: minor refinement.

Fix critical and high issues. Fix medium issues that materially affect the visual thesis.

## Final question

Would a user believe this page was designed specifically for this product?

If no, identify the most generic region and redesign it rather than adding more decoration.
