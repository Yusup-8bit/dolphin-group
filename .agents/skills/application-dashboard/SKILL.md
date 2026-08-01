---
name: application-dashboard
description: Design or redesign application dashboards and operational interfaces around decisions, exceptions, and workflows instead of decorative metric cards. Use for authenticated products, admin panels, analytics, internal tools, and complex app surfaces.
---


# Application Dashboard

## Start from decisions

List:
- decisions users make;
- signals needed;
- exceptions requiring attention;
- frequent actions;
- irreversible or risky actions;
- data freshness;
- role differences.

Design around these, not around available chart types.

## Hierarchy

A useful dashboard usually has:
- context and scope;
- current state;
- exceptions or alerts;
- prioritized actions;
- supporting detail;
- filters and time range;
- drill-down paths.

Not every metric deserves a card.

## Density

- Keep related data close.
- Align numeric values.
- Use whitespace to group, not to make the interface feel empty.
- Prefer comparison and trend over isolated totals.
- Use tables when precise scanning matters.
- Make units and time windows explicit.

## States

Implement:
- loading;
- empty;
- partial data;
- stale data;
- error;
- permission denied;
- no search results;
- first-use guidance.

## Responsive behavior

On narrow screens:
- preserve priority;
- convert wide tables thoughtfully;
- keep filters reachable;
- avoid horizontal scroll for primary workflows;
- provide detail drawers or progressive disclosure.

## Safety

Confirm destructive actions. Make saved/unsaved state visible. Avoid color-only status communication.
