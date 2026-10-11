# The Enclave — Detached Collection

Independent information and registration site for the detached-home component of The Enclave at 6071 Fourth Line, Milton. Canonical origin: https://theenclavedetached.ca. Detached pricing, lot sizes, and the launch date are coming soon. This site is not the builder's website. www.theenclavedetached.ca redirects to the apex.

## Updating unverified fields

Detached-specific pricing, sizes, lot widths, unit counts, bedroom counts, deposits, incentives, collection names, and the launch date live in `lib/content.ts`.

Do not type a number into the page components. Update the constants in `lib/content.ts` only after the figure has a source and a date, then change the matching "Coming soon" row. Keep the FAQ answers, JSON-LD, and `public/llms.txt` aligned with that same figure.

Town-file facts and the released townhome figures (`$599,990`, 953–2,843 sq ft, occupancy targeted for 2027) are separate from the detached fields. Do not copy townhome prices into the detached rows.

## Scripts

```bash
npm run dev
npm run build
npm run generate:llms
```

`generate:llms` rewrites `public/llms-full.txt` from `lib/content.ts`.
