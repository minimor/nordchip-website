# Codex Agent Rules

This project is a static HTML/CSS/JS website for NordChip Zagreb.

## Core Rules
- Keep the project static: no React, Next, Vite, Astro, or heavy client libraries.
- Preserve the HR/EN/UA page structure and reciprocal language links.
- Treat Croatian (HR) as the primary audience and SEO target.
- Work mobile first and keep the site lightweight.
- Do not add PC catalog, PC inventory, gaming PC sales, or similar marketplace sections.
- Do not remove WhatsApp, Telegram, phone, or email contact paths.
- Do not break contact CTAs, language switchers, canonical links, or hreflang clusters.

## SEO Requirements
- Every page must have exactly one H1.
- Every page must have a unique title and meta description.
- Every page must have a canonical URL.
- Every page must include correct `hr`, `en`, `uk`, and `x-default` hreflang links.
- `sitemap.xml`, `robots.txt`, and `.htaccess` must stay deployment-ready.

## Checks After Changes
- Check internal links and local assets.
- Validate `sitemap.xml`.
- Check robots and sitemap URL.
- Search for accidental PC catalog/inventory/gaming-PC language.
- Smoke-test HR, EN, and UA homepages plus the contact page.
