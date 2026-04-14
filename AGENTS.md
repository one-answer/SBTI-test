# AGENTS.md

## Project Overview
- This repo is a small static-site mirror deployed via Cloudflare Workers.
- The Worker serves files from `.dist/` through the `ASSETS` binding and falls back to `index.html` for extension-less GET routes.
- Source content lives at the repo root in `index.html` and `image/`.

## Key Files
- `index.html`: primary static page source.
- `image/`: static image assets referenced by the page.
- `src/worker.js`: Cloudflare Worker entrypoint.
- `scripts/prepare-assets.mjs`: rebuilds `.dist/` by copying `index.html` and `image/`.
- `wrangler.toml`: Worker config, build command, and asset binding.

## Common Commands
- `npm run prepare:assets`: rebuild `.dist/` from source assets.
- `npm run dev`: prepare assets and start local Wrangler dev server.
- `npm run deploy`: prepare assets and deploy the Worker.

## Working Guidelines
- Keep changes minimal and focused; this repo is intentionally simple.
- Treat `.dist/` as generated output. Prefer editing `index.html`, `image/`, `src/worker.js`, or `scripts/prepare-assets.mjs`, then regenerate `.dist/` when needed.
- Preserve the current static hosting model unless the user explicitly asks for a structural change.
- When changing asset paths or filenames, update both source references and generated output expectations.
- Avoid introducing unnecessary frameworks, build systems, or dependencies.

## Validation
- For Worker or routing changes, run `npm run dev` if the user wants verification.
- For asset pipeline changes, run `npm run prepare:assets` and confirm `.dist/` contains the expected files.

## Notes
- The README is primarily in Chinese; keep existing language and tone unless asked otherwise.
- The deployed site URL in the README may be user-facing documentation, so do not change it without a reason.
