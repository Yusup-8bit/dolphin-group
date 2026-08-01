---
name: motion-interaction
description: Create purposeful web motion and micro-interactions that support hierarchy, state, spatial continuity, and delight while respecting reduced-motion preferences. Use when implementing reveals, transitions, scroll interactions, hover states, or animated product demonstrations.
---


# Motion and Interaction

## Motion purpose

Every animation should do at least one:
- orient;
- explain relationship;
- confirm action;
- preserve spatial continuity;
- direct attention;
- communicate progress;
- add restrained brand character.

Remove animation with no clear purpose.

## Motion system

Define:
- fast, standard, and slow durations;
- entrance and exit curves;
- stagger rule;
- distance scale;
- opacity rule;
- reduced-motion behavior.

## Performance

Prefer:
- transform;
- opacity;
- compositor-friendly effects.

Avoid large continuously animated blur, filters, shadows, or layout properties.

## Scroll

Scroll-driven motion must:
- retain content access;
- avoid scroll hijacking;
- work with keyboard and reduced motion;
- stay coherent on short mobile viewports;
- not require perfect trackpad behavior.

## Hover

Hover is enhancement, not the only discoverability mechanism. Provide touch and focus equivalents.

## Product demonstrations

Use animation to reveal causality:
- input to output;
- state change;
- sequence;
- relationship between steps.

Keep text readable during motion.

## Validation

Test:
- reduced motion;
- low-powered device behavior;
- route changes;
- rapid repeated input;
- tab navigation;
- mobile touch.
