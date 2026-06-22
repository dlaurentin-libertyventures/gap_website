You are a senior product designer and frontend engineer. Build a polished, production-ready single-page website for the Global Accreditation Project, abbreviated as GAP.

The website must feel editorial, authoritative, modern, human, and institutionally credible. It must not look like a generic SaaS landing page. The visual direction should combine an academic journal, a sophisticated nonprofit annual report, and a contemporary policy institution.

Technology

Use:

* Next.js 15+ with App Router
* TypeScript
* Tailwind CSS
* Framer Motion for restrained animations
* Lucide React for temporary icons
* next/font for typography
* Semantic HTML
* Accessible components
* Responsive, mobile-first implementation

Do not use a heavy component library unless necessary. Build reusable components directly with Tailwind.

Fonts

Use:

* Literata, weight 700, for major headlines, quotes, statistics, names, and important editorial statements.
* Inter for body text, navigation, buttons, labels, forms, and supporting information.

Load both fonts using next/font/google.

Create CSS variables:

--font-display: "Literata";
--font-sans: "Inter";

Brand colors

Create the following CSS variables and Tailwind tokens:

--forest-green: #1b4332;
--dark-green: #0f2f24;
--terra-cotta: #bf6e46;
--clay: #e6a07a;
--pine: #667f72;
--cloud: #e6e4de;
--ivory: #faf9f4;
--sandstone: #aaa096;
--graphite: #56524c;

Color rules:

* Ivory is the primary page background.
* Forest Green is the primary brand color and primary headline color on light backgrounds.
* Dark Green is used for the footer and major dark sections.
* Graphite is used for body copy.
* Terra Cotta is an accent on light backgrounds.
* Never place Terra Cotta text or graphics directly on Forest Green.
* Use Clay as the accent color over Forest Green or Dark Green.
* Use Pine and Sandstone for secondary text, borders, dividers, and icons.
* Maintain WCAG AA contrast.

Design principles

The visual system should include:

* Generous whitespace.
* Strong editorial typography.
* Asymmetric grids.
* Thin horizontal rules.
* Large statistics.
* Flat surfaces rather than elevated SaaS cards.
* Minimal shadows.
* Small corner radii between 4px and 8px.
* Restrained motion.
* An approximately 1280px maximum content width.
* Responsive horizontal padding.
* A consistent 12-column desktop grid.
* Clear section rhythm using alternating Ivory, Cloud, Forest Green, and Dark Green backgrounds.

Avoid:

* Generic SaaS gradients.
* Glassmorphism.
* Large drop shadows.
* Excessive pill-shaped components.
* Neon colors.
* 3D illustrations.
* Stock university photography.
* Decorative animations that run continuously.
* Excessively centered layouts.

Global layout

Create a single-page brochure-style website with the following sections:

1. Sticky header
2. Hero
3. Editorial statement
4. The Problem
5. Traditional accreditation comparison
6. The Opportunity
7. Our Vision
8. About GAP
9. Roadmap
10. Leadership
11. State of Accreditation report CTA
12. Closing support and newsletter CTA
13. Footer

Each section must have an ID for anchor navigation.

Header

Create a responsive sticky header.

Desktop content:

* GAP logo placeholder or a text-based logo lockup.
* About
* The Problem
* Our Approach
* Leadership
* “Support the work” button

Behavior:

* Transparent over the initial hero.
* When the user scrolls, transition to an Ivory background with subtle backdrop blur and a thin Cloud border.
* Add smooth anchor scrolling.
* Show the active section in the navigation.
* On mobile, show the GAP monogram and an accessible menu button.
* The mobile navigation should open as a clean full-screen or large drawer menu.

The primary CTA should link to a configurable GiveButter URL stored in a constants file.

Hero section

Create an editorial split-layout hero with a minimum height close to the viewport height.

Left column:

Eyebrow:
“Global Accreditation Project”

Headline:
“Unlocking an Era of Innovation and Accountability in Higher Education”

Right column:

Body:
“Accreditation determines which institutions can exist, award degrees, and access federal aid. Today, it rewards compliance over outcomes and incumbency over innovation. GAP is building a new path.”

Primary button:
“Support the work”

Secondary text link:
“Explore our approach”

At the bottom of the hero, show:

“Lean · Transparent · Rigorous”

Add a large, low-opacity GAP monogram as an abstract background graphic. It should be partially cropped and should not reduce text readability.

Use Literata Bold for the main headline. The desktop headline should use a fluid size between approximately 72px and 92px. Use a mobile size between approximately 44px and 54px.

Editorial statement

Create a Cloud background section with a large editorial statement:

“Want real change in higher education?
We first need real change in accreditation.”

Use a two-line or staggered composition. Highlight a limited phrase in Terra Cotta. Add a thin horizontal rule and a small GAP monogram.

The Problem

Use an Ivory background.

Eyebrow:
“The problem”

Headline:
“Accreditation is the choke-point for innovation in higher education.”

Supporting copy:

“This complex and burdensome set of practices and regulations determines which institutions can exist, award degrees, and access federal aid. It rewards compliance over outcomes and incumbency over new ideas.”

“New entrants face expensive, multi-year, and uncertain approval processes, while existing institutions rarely face meaningful consequences for poor performance.”

“The result is a system that limits entry, fails to enforce exit, and sends weak signals about what actually adds value for students.”

On desktop, use a sticky headline on the left and scrolling content on the right.

Below the copy, create an oversized statistic:

“4”

Label:
“New colleges per year earn accreditation.”

The numeral should use Literata Bold and should be visually dominant.

Add a small abstract visualization made from repeated marks or institutional blocks, with only four visually emphasized.

Add an editorial quote:

“Accreditation is a long and winding road.”

Style the quote as a graphic editorial element rather than a testimonial card.

Traditional accreditation comparison

Create a structured comparison between traditional accreditation and the model institutions need.

Rows:

* Compliance → Outcomes
* Seat time → Competency
* Generalist reviews → Practice-specific expertise
* Opaque processes → Transparent evidence
* 5–7 years → Clear staged pathways
* Compliance monitor → Developmental partner

On desktop, present this as a refined editorial table with clear column headers.

On mobile, transform every row into a stacked comparison card.

Use Forest Green, Graphite, Pine, Sandstone, and restrained Terra Cotta accents.

The Opportunity

Use a Forest Green background.

Eyebrow in Clay:
“The opportunity”

Headline in Ivory:
“A rare window for transformational change.”

Add three equal but responsive content blocks:

1. Federal momentum
    “A historic shift in the federal regulatory environment.”
2. State experimentation
    “Growing state-level appetite for new accreditation pathways.”
3. Institutional demand
    “Demand for accreditation that is less burdensome and more value-adding.”

Do not use white floating cards. Integrate the cards into the green background with Pine borders, Clay numbering, and Ivory text.

Use labels “01”, “02”, and “03”.

Our Vision

Use an Ivory background.

Eyebrow:
“Our vision”

Headline:
“A new accreditor for the next era of higher education.”

Add a responsive six-item grid:

1. Pluralism, Not Conformity
    “Institutions define their own mission and model, then demonstrate results.”
2. Outcomes Over Inputs
    “Evaluate student learning, completion, and long-term success instead of procedural compliance.”
3. Lean but Effective Quality Assurance
    “Reduce institutional burden while strengthening meaningful accountability.”
4. Lower Barriers for New Institutions
    “Create transparent, staged pathways that allow strong new ideas to launch and prove themselves.”
5. Global Interoperability
    “Enable cross-border recognition, credit transfer, and alignment with workforce needs.”
6. Replicable Model & Toolset
    “Create a playbook and resources that other emerging accreditors can adopt.”

Each item must include:

* A two-digit number.
* A simple line icon.
* A Literata title.
* A concise Inter description.
* A thin Sandstone top border.

Do not make these look like generic SaaS feature cards.

About GAP

Use a Dark Green background.

Center a large editorial statement:

“GAP is an international, independent accreditation initiative that recognizes and certifies institutions not just for meeting minimum thresholds, but for leading in creativity, resilience, and measurable impact.”

Highlight “creativity, resilience, and measurable impact” using either Literata emphasis or Clay, while preserving accessible contrast.

Below it, display:

“Target launch”

and an oversized:

“Summer 2028”

The year “2028” may appear as a large background or editorial graphic.

Add a Clay button with Dark Green text:

“Support the work”

Add a small supporting line:

“GAP ensures that innovation and rigor go hand in hand.”

Roadmap

Use a Cloud or Ivory background.

Title:
“A clear path to launch.”

Create a responsive timeline with the following phases:

* 2026 — Build infrastructure
* 2026 — Activate externally
* 2027 — Pilot process and prepare petition
* 2027 — Submit for federal review
* 2028 — Launch and expand membership
* 2029 — Activate internationally

Desktop:

* Horizontal timeline.
* Nodes connected by a thin Forest Green or Pine line.
* Active milestone highlighted in Terra Cotta.

Mobile:

* Vertical timeline.
* Accessible reading order.
* No horizontal overflow.

The timeline content should come from a typed data array.

Leadership

Use a Cloud background.

Eyebrow:
“Leadership”

Headline:
“Built by people who know the system—and know what must change.”

Create reusable profile cards using rectangular images, not circular avatars.

Each profile card should contain:

* Rectangular image with an editorial crop.
* A short Terra Cotta line below the image.
* Name in Literata.
* Role in Inter.
* Short biography.
* Optional accessible “Read biography” interaction.

Start with these profiles:

Gerard O’Sullivan
Role:
“Executive Director”

Biography:
“Gerard is a higher education leader with more than thirty-five years of experience. He has served as faculty, dean, Vice President of Academic Affairs, and Provost, with deep expertise in accreditation, finance, and institutional transformation.”

Pano Kanelos
Role:
“Principal Consultant”

Biography:
“Pano was the founding president of the University of Austin and former president of St. John’s College. He advises educational leaders and philanthropists on founding, reform, and long-term institutional sustainability.”

Chad Thevenot
Role:
“Principal Consultant”

Biography:
“Chad is the former Executive Director of the Institute for Humane Studies and a founding leader of the University of Austin. He advises leaders building and renewing institutions that advance a free and flourishing society.”

Store profiles in a typed data object so more team members and board members can be added later without changing the components.

Use local placeholder images and clearly document where production headshots should be placed.

Report CTA

Create a visually distinct report section on an Ivory or Cloud background.

Text:

“The State of Accreditation”

Supporting copy:

“A closer look at the system constraining innovation—and the path toward a better model.”

Button:

“Download the report”

The report URL must be configurable from a constants file.

Add a simple report-cover placeholder composed with the GAP colors and typography. Do not create an exaggerated 3D mockup.

Optionally support a future email-gated download, but the initial version should use a direct external link.

Closing CTA

Use a Dark Green background and generous vertical spacing.

Headline:

“Join us in building the future of higher education.”

Body:

“We have a plan and we are ready to activate. But we can’t do it alone.”

Buttons:

* “Support GAP”
* “Contact us”

The Contact button should link to mailto:info@globalaccredit.org or scroll to an accessible contact form.

Add a newsletter form with:

Label:
“Stay in the loop”

Fields:

* Email address
* Submit button

Add client-side validation, loading, success, and error states. Use a mock submit handler with a clear TODO for connecting an email platform.

Add the text:

“We’re grateful for your interest in our work and we’d be delighted to include you in our circle.”

Footer

Use Dark Green or an even darker variation.

Include:

* GAP logo lockup.
* “Lean · Transparent · Rigorous”
* Navigation links.
* Email: info@globalaccredit.org
* Privacy.
* Copyright with dynamic year.

Use Clay only for small accents and active states.

Components

Create reusable components such as:

* SiteHeader
* MobileMenu
* SectionEyebrow
* PrimaryButton
* TextLink
* EditorialQuote
* LargeStatistic
* ComparisonTable
* OpportunityCard
* VisionPrinciple
* Roadmap
* LeadershipCard
* ReportCTA
* NewsletterForm
* SiteFooter

Use typed props for all components.

Content architecture

Store repeated content in:

src/data/site-content.ts

Store external URLs and contact information in:

src/config/site.ts

Include:

* GiveButter URL placeholder.
* Report URL placeholder.
* Contact email.
* Social links placeholder.

Do not hardcode repeated data inside multiple components.

Motion

Use Framer Motion sparingly.

Allowed animations:

* Fade and translate upward by 16–24px when entering the viewport.
* Horizontal divider expansion.
* Gentle stagger for grid items.
* Subtle parallax on the hero monogram.
* Arrow movement on button hover.
* Number reveal for the “4” statistic.

Requirements:

* Respect prefers-reduced-motion.
* Do not animate every paragraph.
* No continuous decorative animation.
* Keep durations between approximately 0.4 and 0.8 seconds.
* Avoid springy or playful motion.

Accessibility

Ensure:

* WCAG AA contrast.
* Keyboard-accessible navigation.
* Visible focus states.
* Semantic heading hierarchy.
* Descriptive button and link labels.
* Form labels, not placeholders alone.
* Accessible mobile menu dialog.
* Reduced-motion support.
* Alt text for meaningful images.
* Decorative images marked appropriately.
* Minimum 44px interactive target size.
* No important information communicated only through color.

SEO

Add metadata for:

Title:
“Global Accreditation Project | Accrediting the Future”

Description:
“GAP is building a lean, transparent, and rigorous accreditation model that advances innovation, accountability, and institutional pluralism in higher education.”

Include:

* Open Graph metadata.
* Twitter card metadata.
* Favicon placeholder.
* Canonical URL placeholder.
* Organization JSON-LD.
* Meaningful page title structure.

Responsive behavior

The final implementation must be carefully designed at:

* 375px
* 768px
* 1024px
* 1440px

Requirements:

* No horizontal scrolling.
* Fluid typography using clamp().
* Editorial grids collapse intentionally rather than simply stacking everything.
* Mobile content order must remain logical.
* Buttons should become full-width only when useful.
* Maintain comfortable mobile spacing.
* Comparison and roadmap components must have dedicated mobile layouts.

File structure

Use a clean structure similar to:

src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    layout/
    sections/
    ui/
  config/
    site.ts
  data/
    site-content.ts
  lib/
    utils.ts
public/
  images/
  logos/

Deliverables

Produce:

1. The full page implementation.
2. All reusable components.
3. Responsive navigation.
4. Typed content data.
5. CSS variables and Tailwind theme.
6. Accessible newsletter form with mock behavior.
7. Placeholder assets with clear replacement instructions.
8. A concise README explaining:
    * How to run the project.
    * Where to replace the GAP logo.
    * Where to add leadership headshots.
    * Where to set the GiveButter URL.
    * Where to set the report URL.
    * How to connect the newsletter form.
9. No TypeScript errors.
10. No ESLint errors.
11. No broken imports.
12. A polished result, not merely a wireframe.

Before finishing, inspect the page at mobile, tablet, laptop, and large desktop widths. Correct typography wrapping, inconsistent spacing, inaccessible contrast, and horizontal overflow.