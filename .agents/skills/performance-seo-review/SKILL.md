---
name: performance-seo-review
description: Review a web page for frontend performance, metadata, crawlability, structured data, image/font delivery, bundle cost, and runtime stability. Use near completion for public marketing, editorial, ecommerce, and product pages.
---


# Performance and SEO Review

## Performance

Review:
- largest contentful element;
- image dimensions and formats;
- font loading and subsets;
- JavaScript shipped to the client;
- third-party scripts;
- layout shift;
- long tasks;
- animation cost;
- hydration needs;
- route-level code splitting;
- caching.

Prefer server rendering or static rendering for public content when appropriate.

## Metadata

Verify:
- unique title;
- useful description;
- canonical URL;
- robots behavior;
- Open Graph;
- social image;
- favicon and app icons;
- language;
- viewport;
- theme color where appropriate.

## Content structure

- one useful H1;
- logical headings;
- descriptive links;
- indexable primary content;
- meaningful alt text;
- no important text only inside images or canvas.

## Structured data

Add only supported, truthful schema matching the page:
- Organization;
- Product;
- Article;
- FAQ where content is visibly present and policy-compliant;
- BreadcrumbList;
- SoftwareApplication where appropriate.

Do not add misleading ratings or reviews.

## Forms and analytics

- avoid blocking rendering;
- make consent behavior clear where required;
- do not leak sensitive values;
- track meaningful actions, not every hover.

## Completion

Report what was checked, what was changed, and any performance work requiring production measurement.
