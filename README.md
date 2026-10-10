# Aidan Gilkerson — Personal Portfolio

A static Jekyll site for the GitHub user site
[`aidangilkerson-cpu.github.io`](https://aidangilkerson-cpu.github.io). Pages
are written in Markdown with YAML front matter and published directly from the
repository root.

## Update the site

- Edit `index.md`, `about.md`, `work-experience.md`, or `contact.md` to change
  page copy. Keep the YAML front matter at the top of each file.
- Shared page structure is in `_layouts/default.html` and `_includes/`.
- Styles are in `assets/css/site.css`; the theme button behavior is in
  `assets/js/theme.js`.
- Replace the LinkedIn placeholder in `contact.md` with a verified profile URL
  if you want to publish one. No email address is currently displayed.
- Update the page descriptions in front matter when changing page content.
- Keep `baseurl` empty in `_config.yml` for the `aidangilkerson-cpu.github.io`
  user site.

## Preview locally

Install Ruby and Bundler, then run:

```sh
bundle install
bundle exec jekyll serve
```

Open the local address printed by Jekyll, usually `http://127.0.0.1:4000`.
Stop the server with `Ctrl+C`.

## Publish with GitHub Pages

1. Create or use the repository named `aidangilkerson-cpu.github.io`.
2. Commit the site files to the `main` branch at the repository root.
3. In the repository’s **Settings → Pages**, choose **Deploy from a branch**,
   then select `main` and `/(root)`.
4. Save. GitHub Pages will build and publish the Jekyll site; no separate
   application build or deployment workflow is required.

The Jekyll configuration sets the site URL to
`https://aidangilkerson-cpu.github.io` and leaves `baseurl` empty. Internal page
and asset links use Jekyll’s `relative_url` filter.

## Run Lighthouse

With the local preview running, open it in Chrome, open DevTools, select the
**Lighthouse** panel, and generate a report for Performance, Accessibility,
Best Practices, and SEO. Also check the deployed site after GitHub Pages has
published it. Scores depend on the browser and environment; the desired target
is 90 or higher in each category.

## Technical choices and assumptions

- Content is kept in Markdown; the shared layout and includes provide the
  semantic page shell, navigation, footer, and SEO metadata.
- The GitHub Pages–supported `jekyll-seo-tag` and `jekyll-sitemap` plugins
  provide metadata and the sitemap.
- The light/dark toggle follows the visitor’s system preference until they
  choose a theme; a manual choice is saved in local browser storage.
- No experience dates, detailed accomplishments, email address, or LinkedIn
  URL were supplied. None are invented; the LinkedIn entry is labeled as a
  placeholder.
- Lighthouse scores have not been claimed in advance; run the check above and
  use actual results to guide any follow-up tuning.
