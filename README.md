# MI Wardrobe: scroll-animated prototype website

A premium, single-page, scroll-driven website for **MI Wardrobe**, a university-project concept for a smart wardrobe. The page is a prototype showcase, not a commercial product page.

The whole site is **one self-contained file**, `site.html`. It uses Three.js, GSAP + ScrollTrigger and Lenis (loaded from cdnjs / jsDelivr with pinned versions), and builds the 3D wardrobe procedurally, so it works on first load even with no images supplied.

## Project structure

```
.
├── site.html     # the entire website (HTML + CSS + JS)
├── README.md     # this file
└── (optional) index.html   # copy of site.html, needed by some hosts
```

Some static hosts expect the entry file to be called `index.html`. If yours does, rename or copy `site.html` to `index.html`.

## What the page contains

1. Hero with the wardrobe and two buttons: Contact sales and Visit us
2. Zoom into the built-in touchscreen and collection opening
3. Exploded-view animation of every part, with labels, reversible by scrolling up
4. Zoom out to three conceptual room scenes
5. Operation walkthrough, interface video and first-time setup
6. Models (Mini and Pro), visit section, contact form and footer

## Configuration

All editable values sit at the top of the `<script>` tag in `site.html`, in two objects.

`CONFIG` holds the brand name, positioning line, venue, address, dates, hours, hall/stand, appointment info, contact email, `formEmbedUrl` (Google Form embed link), privacy and terms URLs, and the map embed URL.

`ASSETS` holds image and video links. Every key is an empty string by default, and the page falls back to procedural or CSS visuals until you fill it in.

| Key | What it is |
| --- | --- |
| `mechanismPhoto` | Real conveyor / mechanism photograph |
| `sketch` | Technical sketch ("Concept sketch") |
| `heroRender` | Concept render, used as poster and fallback |
| `roomStudio` | Studio apartment scene |
| `roomDressing` | Dressing room scene |
| `roomBoutique` | Boutique / styling space scene |
| `uiScreens` | Array of interface screenshots |
| `videoEmbedUrl` | YouTube embed URL of the interface recording |
| `videoPoster` | Poster image for the video |
| `glb` | Optional GLB 3D model, off by default |

Every placeholder is visibly marked on the page and in code comments (`TODO`) until you replace it.

## Adding images

Images must be public https URLs. Do not embed them as base64.

1. Upload the image to Google Drive.
2. Share it as **Anyone with the link**.
3. Copy the file ID from the share link (the part between `/d/` and `/view`).
4. Use `https://lh3.googleusercontent.com/d/FILE_ID` as the value in `ASSETS`.

Any other public image host also works.

## Adding the video

Upload the recording to YouTube, click Share, then Embed, and copy the `src` URL of the iframe (it looks like `https://www.youtube.com/embed/VIDEO_ID`). Paste it into `ASSETS.videoEmbedUrl`.

## Adding the contact form

1. Create a Google Form with these fields: Name (required), Email (required), Interest (home use / business use / expo demonstration / other), Model (Mini / Pro / not sure), Message (optional), Company (optional), Phone (optional).
2. Do not ask for body photos or measurements. Keep any marketing opt-in as a separate, unchecked question.
3. Set the submit label to **Send enquiry** and the confirmation message to: "Thank you. We have received your enquiry and will contact you using the details provided."
4. In Google Forms choose Send, then the `<>` Embed tab, and copy the iframe `src` (it ends in `embedded=true`).
5. Paste it into `CONFIG.formEmbedUrl`.

## Hosting

### Option A: GitHub Pages (free)

1. Create a repository and upload `site.html` (rename to `index.html`).
2. Go to Settings, then Pages.
3. Under Build and deployment, choose Deploy from a branch, select `main` and `/ (root)`, and save.
4. Your site appears at `https://USERNAME.github.io/REPOSITORY/` after a minute or two.

### Option B: Netlify (free)

1. Sign in at netlify.com and open Add new site, then Deploy manually.
2. Drag the folder containing `index.html` into the upload area.
3. Netlify gives you a public link immediately. You can rename it in Site settings.

### Option C: Cloudflare Pages (free)

1. Sign in at dash.cloudflare.com and open Workers & Pages, then Create, then Pages.
2. Choose Upload assets, name the project and upload the folder containing `index.html`.
3. Deploy, and the site goes live on a `pages.dev` address.

### Option D: Embed in Google Sites

Use this only if you need it inside a Google Site. Insert, then Embed, then Embed code, paste the full contents of `site.html`, set the embed to full page, hide the Sites header, and publish. Test while signed out and on a phone. Scrolling happens inside the embed's own frame. You can also host the file on one of the services above and embed that link instead.

## Testing checklist

Open the site in current Chrome, Safari and Firefox, and on a phone. Check that both hero buttons scroll to the right headings, that the explosion plays smoothly and reverses when you scroll up, that the conveyor rails move, that there are no console errors, and that the page still loads with `CONFIG` and `ASSETS` empty. Run a Lighthouse accessibility check.

## Honesty rules

This is a concept prototype, and the content follows these rules.

Concept renders and simulated interfaces are labelled next to the media. Do not add invented prices, physical dimensions, certifications, addresses, dates, testimonials, logos, statistics, voice control, weather integration, body measurement or delivery timing. The AI outfit preview is a concept and must never promise accurate fit or sizing. Pricing is shown as "Pricing to be announced".

## Browser support and accessibility

Works in current Chrome, Safari and Firefox. If WebGL is unavailable, or the visitor prefers reduced motion, the page shows static labelled images with the same text content. The page uses semantic landmarks, one `h1`, alt text, visible focus states and an `aria-live` form status.

## Licence

University project prototype. Add your licence or copyright notice here.