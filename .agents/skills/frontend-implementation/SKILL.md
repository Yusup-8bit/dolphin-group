---
name: frontend-implementation
description: Implement a design direction as maintainable production frontend code while preserving the repository stack, component conventions, types, tests, and performance. Use after the visual concept and content hierarchy are defined.
---


# Frontend Implementation

## Inspect first

Identify:
- framework;
- routing;
- styling;
- design tokens;
- component library;
- state/data layer;
- image/font pipeline;
- tests and build commands.

Preserve conventions unless they are the source of the problem.

## Build order

1. page semantics and content;
2. layout and responsive logic;
3. tokens and typography;
4. reusable primitives;
5. media and product visuals;
6. interaction states;
7. motion;
8. metadata and structured data;
9. tests and validation.

## CSS quality

- Prefer tokens and reusable patterns.
- Use grid and flex intentionally.
- Avoid fixed heights for content.
- Avoid excessive arbitrary values.
- Keep selectors predictable.
- Use container queries where they improve reusable components.
- Prevent overflow instead of hiding it globally.

## React quality

- Keep state local when possible.
- Separate content data from rendering when repeated.
- Avoid client components for static content.
- Do not memoize blindly.
- Use stable keys.
- Clean up effects.
- Avoid animation state that conflicts with navigation or reduced motion.

## Assets

- Optimize images.
- Provide dimensions.
- Lazy-load below-the-fold media.
- Preload only critical resources.
- Use SVG responsibly.
- Verify font loading and fallbacks.

## Dependencies

Before adding a package:
- check whether the repository already solves it;
- estimate bundle and maintenance cost;
- confirm license;
- prefer platform CSS/JS for small effects.

## Validation

Run the repository's lint, typecheck, tests, and build. Fix introduced warnings and failures.
