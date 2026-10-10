# Portfolio site plan

## Goal

Create a responsive, static Jekyll portfolio for the GitHub user site
`aidangilkerson-cpu.github.io`, published from the repository root on `main`.
Keep `baseurl` empty and use Jekyll URL filters for internal links.

## Pages and content

- **Home:** Introduce Aidan as a strategy and growth leader at Wardstone,
  working on defense technology for air and missile defense.
- **About:** Use the supplied background and interests: former U.S. Army
  officer; Defense Innovation Unit work in international technology
  partnerships and defense innovation; MBA candidate at UC Berkeley Haas;
  interests at the intersection of emerging technology, business, and
  national security.
- **Work Experience:** Present Wardstone, U.S. Army, and Defense Innovation
  Unit experience using only supplied facts. Do not invent dates, formal job
  titles, achievements, metrics, clients, or projects.
- **Contact:** Do not publish an email address or mailto link. Mark any
  unsupplied social/profile URL as a placeholder.

## Design and implementation

- Responsive, accessible single-column presentation with light and dark
  themes; clean, modern system typography.
- Shared Jekyll layouts and includes; page copy in Markdown with YAML front
  matter; semantic HTML, plain CSS, and only minimal JavaScript for the theme
  control.
- Include navigation, footer, SEO metadata, sitemap, favicon, and a README
  covering content updates, local preview, GitHub Pages publishing, and
  Lighthouse checks.
- Keep the full publish-ready Jekyll site at the project root. Do not add a
  backend, database, form service, blog, CMS, framework app, or unnecessary
  dependencies.

## Assumptions and verification

- No reference sites were supplied, so the visual direction follows the
  selected clean, modern feel without an external reference.
- No email, LinkedIn URL, experience dates, or additional portfolio projects
  were supplied; these will not be fabricated.
- Verify the root contains `index.md`, `_config.yml`, `_layouts/`, `_includes/`,
  and the website assets; verify root-published GitHub Pages settings, internal
  navigation, and layouts at 375px and 1280px. Check Lighthouse targets of at
  least 90 for Performance, Accessibility, Best Practices, and SEO; report
  actual results rather than claiming unrun scores.
