---
name: data-interface-craft
description: Improve tables, charts, filters, metrics, and data-dense UI for clarity and actionability. Use when the page contains analytics, lists, comparisons, operational data, or complex filtering.
---


# Data Interface Craft

## Choose the right representation

- Use a number for a single important value.
- Use a line for change over ordered time.
- Use bars for category comparison.
- Use a table for precise lookup and scanning.
- Use a distribution when spread matters.
- Use annotations for events that explain change.
- Avoid charts when text answers faster.

## Metric design

Always show:
- label;
- value;
- unit;
- time window;
- comparison basis where relevant;
- freshness where relevant.

Do not use unexplained green/red percentages.

## Tables

- Put the most identifying column first.
- Align numeric columns.
- Keep headers visible for long tables.
- Provide sorting only where useful.
- Make row actions predictable.
- Avoid hiding all actions behind hover on touch devices.
- Support keyboard and screen-reader navigation.

## Filters

- Show active filters.
- Provide a clear reset.
- Preserve user state where appropriate.
- Separate global scope from local filters.
- Avoid applying expensive changes on every keystroke without feedback.

## Color

Color should support interpretation, not decorate every mark. Use patterns, labels, icons, or position alongside color for status.
