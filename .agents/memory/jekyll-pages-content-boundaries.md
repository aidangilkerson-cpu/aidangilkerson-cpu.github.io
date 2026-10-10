---
name: Jekyll Pages content boundaries
description: GitHub Pages' bundled Jekyll plugins can publish root Markdown docs that lack front matter.
---

When building a Jekyll site with the GitHub Pages bundle, explicitly exclude root-level project and collaborator documents that are not intended for the public site. The optional-front-matter behavior can make files such as `replit.md` render as pages even when they were written only as internal instructions.

**Why:** A successful build can silently publish repository documentation as an extra site page.

**How to apply:** Add non-site Markdown documents to `_config.yml`'s `exclude` list and verify the generated `_site` contains only intended pages and assets.

Exclude Replit metadata directories from Jekyll's development watcher as well.

**Why:** Watching workflow logs can cause a self-triggered rebuild loop, and platform skill symlinks can cause duplicate-directory watch errors.

**How to apply:** Keep platform metadata outside Jekyll's watched content; serving the actual root-level Jekyll site is sufficient for preview and does not require a separate application.
