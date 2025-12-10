# Wrapped Ghana Gold Coin (wGGC) Landing

Landing site for the wrapped Ghana Gold Coin (wGGC) token, pegged 1:1 to gold mined in Ghana. This repo hosts the public-facing page for explaining the peg mechanics, transparency, and how to acquire/use wGGC.

> This project is informational only and does not constitute financial advice. Integrations and on-chain contracts should be audited before production use.

## Tech Stack
- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4 (inline config)

## Prerequisites
- Node.js 18.18+ (LTS recommended)
- pnpm (preferred, lockfile included) `npm install -g pnpm`

## Setup
1) Install dependencies
```bash
pnpm install
pnpm approve-builds  # allow vetted packages to run postinstall scripts
```

2) Run locally
```bash
pnpm dev
# http://localhost:3000
```

3) Production build and start
```bash
pnpm build
pnpm start
```

## Scripts
- `pnpm dev`    - Start Next.js dev server.
- `pnpm build`  - Create production build.
- `pnpm start`  - Run the built app.
- `pnpm lint`   - Lint the codebase.

## Project Structure
- `app/page.tsx` - Landing page content.
- `app/layout.tsx` - Global layout and metadata.
- `app/globals.css` - Tailwind and theme tokens.
- `public/` - Static assets (logos, icons).

## What to Include on the Page
- Peg story: 1:1 backing with Ghana-mined gold; how reserves are held and verified.
- Mint/burn flow: how wrapped supply aligns with reserve certificates.
- Transparency: links to audits, proof-of-reserves, and on-chain addresses.
- How to acquire: supported chains, bridges, and liquidity venues.
- Utility: payments, remittances, and settlement use cases.
- Risk notes: custody risk, bridge risk, depeg scenarios.

## Deployment
- Vercel works out of the box: connect repo, set `NEXT_PUBLIC_*` env vars if/when added, and deploy.
- Other hosts: run `pnpm build` and serve `.next/` via any Node-compatible host.

## Contributing
1) Fork and branch from `master`.
2) Make changes with clear commits.
3) Run `pnpm lint` before opening a PR.

## Notes
- Add token contract addresses, reserve attestations, and bridge endpoints once finalized.
- Keep this README in sync with on-chain changes and audit links.
