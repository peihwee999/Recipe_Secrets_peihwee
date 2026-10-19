# Recipe Secrets Restaurant — Static Website

A complete 6-page static website for Recipe Secrets Restaurant, built with plain HTML5, CSS3, and vanilla JavaScript. No build tools required.

---

## File Structure

```
Recipe_Website/
├── index.html          # Home page
├── about.html          # About / Our Story
├── menu.html           # Full menu with tabs
├── specials.html       # Weekly specials & promotions
├── reservation.html    # Table booking form
├── contact.html        # Contact form + map
├── css/
│   └── styles.css      # All styles (CSS variables, responsive layout)
├── js/
│   └── main.js         # Hamburger nav, scroll reveal, tabs, form validation
└── README.md           # This file
```

---

## How to Preview Locally

No server or build step needed. Simply open the project folder and double-click `index.html`, or drag it into any modern browser (Chrome, Firefox, Edge, Safari).

**Tip:** If images from Unsplash don't load, check your internet connection — they are served from `images.unsplash.com`.

---

## Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `recipe-secrets-website`).
2. Push the entire `Recipe_Website/` folder contents to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Recipe Secrets website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/recipe-secrets-website.git
   git push -u origin main
   ```
3. In the repository settings, go to **Pages** → **Source** → select branch `main`, folder `/` (root) → **Save**.
4. Your site will be live at `https://YOUR_USERNAME.github.io/recipe-secrets-website/` within a few minutes.

---

## Deploy to Netlify

### Option A — Drag & Drop (fastest)
1. Go to [https://app.netlify.com](https://app.netlify.com) and log in.
2. Drag the entire `Recipe_Website/` folder onto the deploy dropzone.
3. Netlify will assign a random URL instantly (e.g. `https://amazing-recipe-123.netlify.app`).
4. Rename the site under **Site settings → Site name**.

### Option B — Connect to Git
1. Push your code to a GitHub/GitLab/Bitbucket repository.
2. In Netlify, click **Add new site → Import an existing project**.
3. Select your repository.
4. Set **Build command** to *(leave empty)* and **Publish directory** to `/` (or the folder name if it is a subfolder).
5. Click **Deploy site**.

---

## Set Up Formspree (Contact & Reservation Forms)

Both `reservation.html` and `contact.html` submit to Formspree. To activate them:

1. Go to [https://formspree.io](https://formspree.io) and create a free account.
2. Click **+ New Form**, give it a name (e.g. "Reservations"), and copy the endpoint URL — it looks like `https://formspree.io/f/abcdefgh`.
3. Open `reservation.html` and replace:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
   with your actual endpoint.
4. Repeat step 3 in `contact.html` (you can use the same endpoint or create a second one).
5. Remove the `novalidate` attribute from the `<form>` element in `reservation.html` once you have confirmed the form works.
6. Formspree's free tier supports 50 submissions per month. Upgrade for more.

---

## Swap Photos

All hero and card images are loaded from Unsplash via URL. To use your own photos:

1. Host your images anywhere accessible (Cloudinary, GitHub, your own CDN, or alongside the HTML files).
2. Replace the `src` attribute of any `<img>` tag with your image path.
3. Update the `alt` attribute to describe the new image accurately.

Example — replacing a hero background:
```html
<!-- Before -->
<img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80" ... />

<!-- After -->
<img src="images/my-restaurant-hero.jpg" ... />
```

---

## Swap Restaurant Text

All restaurant details are hardcoded in the HTML files. Search-and-replace the following across all files:

| Placeholder | Replace with your value |
|---|---|
| `Recipe Secrets Restaurant` | Your restaurant name |
| `12 Orchard Lane, Singapore 238888` | Your address |
| `+65 6123 4567` | Your phone number |
| `hello@recipesecrets.sg` | Your email |
| `Marcus Koh` | Your chef's name |

A global find-and-replace in VS Code (`Ctrl+Shift+H`) works well for this.

---

## Customise Colours

All brand colours are defined as CSS variables in `css/styles.css` under `:root`. Change them once to update the whole site:

```css
:root {
  --bg: #FFF9F3;        /* Page background */
  --surface: #FFFFFF;   /* Card / panel background */
  --primary: #E07A5F;   /* Buttons, accents, highlights */
  --secondary: #A8C3A0; /* CTA banner background */
  --accent: #F4D6CC;    /* Soft tinted backgrounds */
  --text: #3D3A36;      /* Body text */
  --muted: #7A746D;     /* Secondary / helper text */
}
```

---

## Browser Support

Tested and functional in:
- Chrome 110+
- Firefox 110+
- Safari 15+
- Edge 110+

Uses `IntersectionObserver`, CSS Grid, CSS custom properties, and `fetch()` — all supported natively in every modern browser listed above. No polyfills required.

---

## Credits

- Photography: [Unsplash](https://unsplash.com) (free to use)
- Fonts: [Google Fonts](https://fonts.google.com) — Playfair Display, Nunito
- Form backend: [Formspree](https://formspree.io)
- Icons: Inline SVG (no external dependency)
