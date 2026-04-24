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

## Final Deployment Checklist

Upload the project contents to a normal hosting `public_html` folder. The site is static and does not require a build step.

### Hostinger

- Upload the files directly to Hostinger `public_html`.
- Keep `index.html` directly inside `public_html`.
- Keep `assets/`, `en/`, and `ua/` folders in place.
- Keep `.htaccess`, `robots.txt`, and `sitemap.xml`.
- Confirm HTTPS works on `https://nordchipzagreb.com/`.
- Confirm non-www canonical redirect points to `https://nordchipzagreb.com/`.
- Open key URLs after upload: `/`, `/pc-services.html`, `/development.html`, `/pricing.html`, `/about.html`, `/faq.html`, `/contact.html`, plus EN/UA homepages.
- Clear Hostinger cache and browser cache if the old site still appears.

### Google Search Console

- Add `nordchipzagreb.com`.
- Prefer a Domain property with DNS verification if possible.
- Submit `https://nordchipzagreb.com/sitemap.xml`.
- Request indexing for `/`, `/pc-services.html`, `/development.html`, `/pricing.html`, `/about.html`, `/faq.html`, and `/contact.html`.
- Check Coverage/Indexing again after a few days.

### Google Business Profile

- Website field: `https://nordchipzagreb.com/`.
- Services should match the site: PC servis, popravak laptopa, instalacija Windowsa, čišćenje laptopa, nadogradnja SSD/RAM, dijagnostika računala, web stranice, landing stranice, botovi, and automatizacije.
- Phone, address, and working hours should match the site.
- Add the logo and real photos.
- Reviews are handled later manually. Do not add fake reviews, review CTAs, ratings, `AggregateRating`, `ratingValue`, or `reviewCount`.

### GA4

- Measurement ID: `G-RZFS47HSMB`.
- Check Realtime after deployment.
- Test clicks on WhatsApp, Telegram, phone, email, Google Maps, and contact form WhatsApp/email actions.

### Pre-Launch SEO QA

- Every HTML page has exactly one H1.
- Every HTML page has a unique title and meta description.
- Every HTML page has a canonical URL and HR/EN/UK/x-default hreflang cluster.
- `robots.txt` points to `https://nordchipzagreb.com/sitemap.xml`.
- `sitemap.xml` contains only existing pages and all HR/EN/UA language variants.
- WhatsApp, Telegram, phone, email, Google Maps, contact CTAs, and language switchers work.
- JSON-LD parses and contains no review/rating schema.

## SEO Notes

Croatian is the primary SEO target. Keep HR pages focused on local Zagreb searches such as PC service, laptop repair, Windows installation, cleaning, web development, bots, and automation for small businesses.

Do not add a PC catalog, inventory, gaming PC sales pages, or marketplace navigation.
