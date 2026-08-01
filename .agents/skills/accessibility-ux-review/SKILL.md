---
name: accessibility-ux-review
description: Audit and improve web accessibility and interaction usability, including semantics, keyboard behavior, focus, contrast, forms, motion, touch, error states, and screen-reader cues. Use before completion or when UI behavior changes.
---


# Accessibility and UX Review

## Review order

### Structure
- one logical page title;
- semantic landmarks;
- sensible heading sequence;
- meaningful link text;
- correct list and table markup.

### Keyboard
- all actions reachable;
- visible focus;
- logical order;
- no traps;
- menus, dialogs, tabs, and accordions follow expected patterns.

### Forms
- persistent labels;
- instructions before errors;
- programmatic error association;
- input preserved after error;
- valid autocomplete;
- no color-only validation.

### Visual
- text contrast;
- non-text contrast;
- zoom to 200%;
- reflow at narrow width;
- readable focus;
- no clipped content;
- status not color-only.

### Motion
- reduced-motion path;
- no flashing;
- no essential information lost when motion is disabled;
- no forced smooth scrolling.

### Media
- useful alt text;
- decorative media ignored;
- captions/transcripts when relevant;
- controls labeled.

### Touch
- adequate target size;
- space between destructive and common actions;
- no hover-only content;
- orientation does not block use.

## Fix priority

1. Blocks task completion.
2. Blocks keyboard or assistive technology.
3. Causes misunderstanding or irreversible error.
4. Creates substantial fatigue.
5. Cosmetic best practice.

Document limitations honestly.
