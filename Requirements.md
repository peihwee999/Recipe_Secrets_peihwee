# Build a complete, production-ready website for "Recipe Secrets Restaurant".

## Tech stack
- Use plain HTML5, CSS3 and vanilla JavaScript only. No frameworks, no build step, no npm.
- It must run by opening index.html directly, and deploy as-is to free static hosting
  (GitHub Pages, Netlify or Cloudflare Pages).
- One shared stylesheet (css/styles.css) and one shared script (js/main.js).
- Use relative paths everywhere so it works from any sub-folder on GitHub Pages.

## Pages (exactly 6)
1. index.html – Home
2. about.html – About
3. menu.html – Menu
4. specials.html – Specials
5. reservation.html – Reservation
6. contact.html – Contact

Every page shares the same header (logo + navigation, with the current page highlighted)
and footer (address, opening hours, phone, social icons, copyright).
On mobile, the navigation collapses into a hamburger menu.

## Page content
- Home: full-width hero image with the restaurant name, a short tagline
  ("Every dish has a secret") and two buttons: "Book a Table" and "View Menu".
  Below that: a short welcome intro, 3 featured dishes as image cards, a "Why dine with us"
  strip (fresh ingredients / family recipes / cosy ambience), 3 customer testimonials,
  and a call-to-action banner for reservations.
- About: the restaurant's story, the chef's profile with a photo, values and philosophy,
  and an image gallery of the interior and kitchen (6+ images, in a grid).
- Menu: categories (Starters, Mains, Desserts, Drinks) with tabs or anchor links to
  switch between them. Each item has a photo, name, short description, price, and tags
  (e.g. Vegetarian, Spicy, Chef's Pick). At least 5 items per category.
- Specials: this week's specials as large feature cards with images, a "Chef's Signature"
  highlight, and promotions (e.g. weekday lunch set, happy hour) shown with a badge.
- Reservation: a booking form (name, email, phone, date, time, number of guests,
  occasion dropdown, special requests). Add client-side validation: no past dates,
  times only within opening hours, 1–20 guests. Show a friendly success message after
  submitting. Put an ambience image and the opening hours beside the form.
- Contact: a contact form, address, phone, email, opening hours table,
  an embedded Google Maps iframe, and social links.

## Forms (static hosting has no backend)
Make both forms submit to Formspree (action="https://formspree.io/f/YOUR_FORM_ID").
Add a clear comment in the HTML explaining how to replace YOUR_FORM_ID.
Submit with fetch() so the page shows an inline success or error message
instead of redirecting.

## Visual design – light, soft, appetising
- Colour palette (define as CSS variables in :root):
  - background: warm cream #FFF9F3
  - surface/cards: #FFFFFF
  - primary: soft terracotta #E07A5F
  - secondary: sage green #A8C3A0
  - accent: blush pink #F4D6CC
  - text: warm charcoal #3D3A36; muted text: #7A746D
- Typography (Google Fonts): "Playfair Display" for headings, "Lato" or "Nunito" for body text.
- Style: generous white space, rounded corners (12–16px), soft shadows,
  and subtle hover lifts on cards and buttons.
- Large, high-quality food and restaurant photos are the centrepiece of every page.
  Each page gets its own hero banner image with a soft gradient overlay
  so the text stays readable.
- Subtle scroll-reveal fade-in animations (use IntersectionObserver).
  Respect prefers-reduced-motion.

## Images
- Use free, royalty-free photos from Unsplash (images.unsplash.com URLs, with
  ?w=1200&q=80 sizing parameters). Pick images that match each dish or section.
- Every <img> needs descriptive alt text, loading="lazy" (except the hero images),
  and explicit width/height or aspect-ratio to avoid layout shift.
- Use object-fit: cover so all image cards are a consistent size.

## Quality requirements
- Fully responsive: mobile (375px), tablet (768px) and desktop (1280px+).
  No horizontal scrolling.
- Accessible: semantic HTML (header/nav/main/section/footer), proper heading order,
  labelled form fields, visible focus states, and colour contrast that meets WCAG AA.
- SEO: a unique <title> and meta description on each page, Open Graph tags,
  and a favicon (an inline SVG is fine).
- No console errors, and no broken links between pages.

## Restaurant details (use these, or invent realistic placeholders)
- Address: [address]
- Phone: [phone]   Email: [email]
- Hours: [e.g. Tue–Sun 11:30am–10pm, closed Mondays]
- Cuisine style: [e.g. modern home-style fusion]
- Currency for prices: [e.g. SGD $]

## Deliverables
1. All files in a clean folder structure: /css, /js, plus the 6 HTML files at the root.
2. A README.md with: how to preview locally, step-by-step deployment to
   GitHub Pages and Netlify (free), how to set up Formspree, and how to swap in
   your own photos and text.
3. When you are finished, open each page in a browser and check it at
   mobile and desktop widths. Fix anything that looks off before you report back.