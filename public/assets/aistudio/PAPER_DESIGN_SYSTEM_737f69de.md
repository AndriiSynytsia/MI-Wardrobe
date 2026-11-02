# MI Wardrobe Paper design system

## Context and goals

Present MI Wardrobe as a considered piece of furniture with a helpful built-in assistant, using the tactility and restraint of a printed product catalogue.

Paper owns the visual system. Agentic contributes interaction clarity inside the assistant example. The product remains an explicitly labelled concept.

## Design tokens and foundations

Use semantic CSS tokens with a single neutral family. The Paper skill's ink is #111111, surface is #FFFFFF and body text is #111827. Add #F6F5F1 for the paper canvas, #EAE8E1 for inset areas and #5D625F for secondary text. Add #858A86 for form boundaries. Validate every foreground/background pair that renders.

Use Roboto for body and controls, Montserrat for display and PT Mono for small section markers. The fallback stacks are Arial, sans-serif and Courier New, monospace. Load only 400, 500 and 600 weights actually used. Local fallback must remain readable without a network connection.

Follow the Paper scale of 14, 16, 18, 24, 32 and 40px, expressed in rem. Use 40px for the main title, 32px for section headings, 24px for card headings, 18px for leads, 16px for body and 14px for captions. Descend by semantic heading level. Keep line-height unitless at 1.2 for headings and 1.6 for body.

Use 4, 8, 12, 16, 24 and 32px spacing tokens. Compose section padding from multiples of 32px. Cap text paragraphs at 65ch and the page container at 1248px. Use at least 24px mobile gutters.

Paper texture must be decorative and subtle. Put no essential text over product photographs. Use near-square corners, gentle surface changes and occasional structural rules rather than repeated floating cards.

Do use ink for the primary action. Do not add a second bright filled CTA beside it. The secondary violet in the Paper skill is optional and omitted because the page does not need another semantic role.

## Component rules

### Hero and CTA pair

Use a small wordmark within the hero, one h1, one short lead, two links and the wardrobe image. Contact sales is filled ink; Visit us has an ink outline. Both targets are at least 44px high. Allow labels and the row to wrap.

Default states must be legible. Hover may darken or change the surface only on hover-capable pointers. Focus-visible uses a 3px ink outline with 4px offset on light surfaces. Active uses a static surface change. These links have no loading or error state because they navigate within the page.

### Product media

Keep the full wardrobe silhouette visible in the hero. Use object-fit contain where cropping would remove product details. Caption generated visuals as concept renders. The source sketch is engineering concept evidence, not a picture of completed production hardware.

Use native video controls and preload metadata. Never autoplay. Provide a text explanation outside the video. Do not claim captions or a transcript exist unless they have been prepared from the recording.

### Assistant example

Show a fixed illustrative request and outcome, with a visible concept label. A small selection control can change which example is shown. Use native buttons with explicit selected state and an adjacent text result. Do not imply a real AI service is running.

The finite examples respond immediately, so no fabricated loading state is needed. Any missing-media state must explain how to recover.

### Model cards

Use two equal sections with native text and capacity definitions by rail. Stack on narrow screens. Both use the same visual treatment, since no model preference is established. Price reads Pricing to be announced. Model links can select the matching model in the local enquiry form.

### Visit block

Display Expo details coming soon until the address and date are known. Offer a clear route to register interest. Do not show a fake map or invented opening hours.

### Enquiry form

Associate every label with its input. Name and email are required; interest, model and message follow the roadmap. Use 16px input text and 3:1 input boundaries. Validate on submit with native browser validation. Do not disable submit before validity is known.

In this local prototype, label the action Preview enquiry and disclose before the fields that nothing is sent or stored. A successful preview shows the entered details with textContent in an inline live status and keeps editing available. There is no loading state because no request runs. In Google Sites, replace the entire form with a real Google Form.

### Footer

Keep company/project information and an original prototype privacy explanation. Do not include dead policy links, copied Square licence labels or unearned certification badges.

## Accessibility requirements and acceptance criteria

- Use one main landmark, a coherent heading outline and a visible skip link on focus.
- Reach every action by keyboard and retain visible focus at each stop.
- Body and control text must reach 4.5:1 contrast. Meaningful controls and focus indicators must reach 3:1.
- At 320px width and 200% text sizing, all content and controls remain reachable without page-wide horizontal scrolling.
- Use controls at least 44px high and enough clearance to avoid overlapping touch targets.
- No autoplay, moving backgrounds or essential animation. Smooth scroll, if used, is gated by reduced-motion preference.
- Announce the enquiry preview with a stable live region. Never insert user content through innerHTML.
- Test keyboard and browser reflow separately from source checks. Record screen-reader testing as unverified if not performed.

## Content and tone standards

Use MI Wardrobe, Mini, Pro, digital collection, outfit suggestions and collection opening consistently. Prefer Browse your collection to Manage your fashion ecosystem.

Use Contact sales and Visit us in the hero. Use prototype language where implementation is unconfirmed. Avoid promises of sizing accuracy, weather integration, voice control or automatic care.

## Anti-patterns and migration notes

- Use native text blocks for copy. Do not bake headings or CTA labels into artwork.
- Use the requested Paper system. Do not mix in Agentic's orange palette or Playfair typeface.
- Use generous grouping. Do not place every sentence inside a rounded card.
- Use honest demo labels. Do not display Message sent when the local form only previews an enquiry.
- For Google Sites, recreate layout with native blocks. A full HTML file cannot be imported as an editable native Sites page.
- Match font roles and spacing as closely as the Sites editor allows. Retain readability when exact CSS controls are unavailable.

## QA checklist

Check hero destinations, model selection, form validation, form preview accuracy, video playback and disclosure controls. Inspect 1440, 768, 390 and 320px layouts, 200% text sizing, reduced motion and keyboard focus. Measure colour pairs. Record missing Google Form, venue and policy inputs as release dependencies.
