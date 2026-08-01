---
name: component-craft
description: Design and implement polished reusable UI components with purposeful variants, interaction states, and responsive behavior. Use for cards, navigation, buttons, forms, dialogs, accordions, media, and reusable page primitives.
---


# Component Craft

## Define the contract

For each component specify:
- purpose;
- content slots;
- variants;
- states;
- responsive behavior;
- accessible name and semantics;
- composition constraints.

Avoid components whose API merely exposes every CSS property.

## Buttons and links

- Use a button for actions and a link for navigation.
- Provide hover, active, focus, disabled, and loading states.
- Keep labels specific.
- Preserve touch target size.
- Avoid magnetic effects on critical or mobile controls.

## Cards

A card is justified when its boundary helps grouping or interaction. Do not put every content block in a card.

Create distinction through:
- scale;
- media crop;
- alignment;
- density;
- border treatment;
- interaction;
- not only background color.

## Navigation

- Keep current location visible.
- Provide keyboard support.
- Make mobile navigation reliable.
- Avoid hover-only disclosure.
- Prevent decorative motion from making navigation unstable.

## Forms

- Use persistent labels.
- Associate errors with fields.
- Preserve input on error.
- Do not use placeholder text as the only label.
- Make success explicit.
- Support autocomplete and appropriate input types.

## Dialogs and overlays

- Manage focus.
- Close with Escape where appropriate.
- Return focus to the trigger.
- Prevent background interaction.
- Avoid using modals for content that deserves a page.

## Quality

Test with long labels, missing images, translated text, loading data, and touch input.
