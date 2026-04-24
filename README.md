# NordChip Zagreb Website

Static website for NordChip Zagreb, a local Zagreb service that combines PC service with web development and lightweight digital automation for small businesses.

## Project Structure

- `index.html`, `pc-services.html`, `development.html`, `pricing.html`, `about.html`, `faq.html`, `contact.html` are the primary Croatian pages.
- `en/` contains the English mirror pages.
- `ua/` contains the Ukrainian mirror pages.
- `assets/css/main.css` contains all site styling.
- `assets/js/main.js` controls the mobile menu, sticky header, reveal animations, FAQ accordion, contact-form actions, and dynamic footer year.
- `assets/img/logo-96.png` is the optimized header logo.
- `sitemap.xml`, `robots.txt`, and `.htaccess` are deployment and SEO files.

## Local Preview

Open the HTML files directly in a browser, or run any simple static server from the project root, for example:

```powershell
npx serve .
```

If you do not want to use Node tools, any Apache or static-file server can serve this folder as-is.

## Deployment

Upload the project contents to a normal hosting `public_html` folder. The site is static and does not require a build step.

Before deployment, verify:

- `robots.txt` points to `https://nordchipzagreb.com/sitemap.xml`.
- `.htaccess` redirects to `https://nordchipzagreb.com`.
- `sitemap.xml` contains only existing pages.
- HR, EN, and UA language switchers work.
- WhatsApp, Telegram, phone, and email CTAs still work.

## SEO Notes

Croatian is the primary SEO target. Keep HR pages focused on local Zagreb searches such as PC service, laptop repair, Windows installation, cleaning, web development, bots, and automation for small businesses.

Do not add a PC catalog, inventory, gaming PC sales pages, or marketplace navigation.
