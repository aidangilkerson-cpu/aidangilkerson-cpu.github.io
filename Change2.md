# Change 2: Homepage intersection graphic

## Goals

- Add a homepage graphic showing the intersection of technology, business,
  and national security.
- Make the shared intersection clear while preserving the existing homepage
  content and the site's clean, modern appearance.
- Keep the graphic readable on mobile and in light and dark themes.
- Preserve the root-level static Jekyll site without new packages, a framework,
  or additional JavaScript.

## Implementation

- Use an inline SVG with three overlapping circles and readable domain labels.
- Provide an accessible title and description explaining the shared focus.
- Match the graphic to the existing theme and responsive layout.
- Keep this change document in the repository, not on the public website.
- Make the changes on the currently selected `2nd-improvement` branch,
  without changing `main`.

## Completion checks

- [x] Add the graphic to the homepage.
- [x] Confirm it renders at 1280px desktop and 375px mobile widths.
- [x] Confirm it supports light and dark themes.
- [x] Verify the accessible title, description, and three labels.
- [x] Verify `Change2.md` is excluded from the public site.

## Files changed

- `_includes/intersection-graphic.html`: accessible three-circle SVG, with the
  shared focus labeled “Defense-tech strategy & growth.”
- `index.md`: includes the graphic without removing existing homepage content.
- `assets/css/site.css`: responsive diagram styling using the site's theme variables.
- `_config.yml`: excludes `Change2.md` from the public website.
- `Change2.md`: records the goals, implementation, scope, and verification.

## Scope

The graphic illustrates a professional focus, not measured quantities or a
claim about the relative size of each field. Existing biography, navigation,
contact information, and work experience remain unchanged. Publishing and
GitHub push operations are not included in this change.
