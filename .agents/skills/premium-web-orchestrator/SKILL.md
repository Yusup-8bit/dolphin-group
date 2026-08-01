---
name: premium-web-orchestrator
description: Orchestrate a complete web page or major redesign from discovery through implementation and rendered visual QA. Use for landing pages, marketing sites, product pages, portfolios, ecommerce pages, and substantial application UI work. Do not use for tiny isolated CSS fixes.
---


# Premium Web Orchestrator

Use this skill when the request spans concept, composition, implementation, and final quality review.

## Inputs

Read:
- repository `AGENTS.md`;
- `PROJECT-BRIEF.md`;
- `BRAND-BRIEF.md`;
- `DESIGN-SYSTEM.md`;
- existing routes, UI primitives, tokens, content, and assets.

If a file is absent, continue with explicit assumptions.

## Workflow

### 1. Inspect

Determine:
- framework and styling system;
- existing visual language;
- reusable components;
- content availability;
- constraints and breakpoints;
- functional behavior that must survive.

Do not install or rewrite before inspecting.

### 2. Frame the page

Write a compact internal design frame:
- audience;
- job to be done;
- primary action;
- emotional target;
- strongest proof;
- likely objections;
- narrative order.

### 3. Select supporting skills

Load only what the page needs. Typical combinations:
- landing: `landing-page-art-direction`, `anti-template-composition`, `conversion-content-structure`;
- app: `application-dashboard`, `data-interface-craft`, `accessibility-ux-review`;
- ecommerce: `ecommerce-page`, `component-craft`;
- portfolio: `editorial-portfolio`;
- all substantial builds: `responsive-composition`, `frontend-implementation`, `visual-qa`.

### 4. Explore concepts

Consider at least two meaningfully different directions. Vary the governing composition, not merely colors.

For each direction identify:
- visual thesis;
- opening composition;
- content rhythm;
- signature device;
- motion language;
- implementation risk.

Select one based on the brief, content, and technical constraints.

### 5. Build the system

Establish:
- type scale;
- spacing scale;
- color roles;
- grid;
- surface and radius language;
- motion tokens.

Avoid one-off styling that cannot survive beyond the first viewport.

### 6. Implement the narrative

Build in narrative order, not component-library order:
- orient;
- establish value;
- demonstrate;
- prove;
- resolve objections;
- ask for the action.

Skip stages that do not fit the page.

### 7. Validate

Run repository checks and render the page. Review at 390, 768, 1280, and 1440 px. Use `visual-qa`, then fix high-impact issues.

## Decision rules

- Distinctiveness must emerge from product meaning and composition, not arbitrary effects.
- Reduce the section count when content is weak.
- Replace generic feature lists with demonstrations, comparisons, workflows, or outcomes.
- Keep the primary action clear even in expressive layouts.
- Never invent evidence.
- When assets are missing, create an honest structured placeholder or product-specific CSS/SVG visual, then state the limitation.

## Deliverable

The final result should be:
- usable;
- responsive;
- accessible;
- visually coherent;
- recognizably tailored to this product;
- verified in the running application.
