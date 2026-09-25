# Tandir Hall (demo)

Restaurant demo for Esanov: a fictional Uzbek restaurant in Tashkent. Built to show owners a website plus the system behind it.

- Five languages with their own URLs: Russian `/`, Uzbek `/uz/`, Kazakh `/kk/`, English `/en/`, Arabic `/ar/` (right-to-left)
- `/menu/?t=7`: QR menu for a table, with cart, waiter and bill buttons; orders reach the kitchen in Russian whatever language the guest used
- `/tables/`: print-ready A6 table cards, one QR per table
- Table booking that ends in a stamped invitation with a QR code, saved as an image or added to the calendar
- Live "kazan status" in the hero (plov served 12:00–15:00 Tashkent time)

## Identity

The kazan fire at dawn, the chekich bread stamp and Rishtan cobalt ceramics. Soot background, ember for actions, cobalt only where ceramics appear. Headlines in El Messiri (covers Arabic, Cyrillic and Latin; Kazakh headlines use condensed IBM Plex Sans because El Messiri lacks some Kazakh letters), body in IBM Plex Sans and IBM Plex Sans Arabic. The stamp ornament is generated in `src/components/Chekich.ts`.

## Content

- UI text for all languages: `src/i18n/ui.ts`
- Dishes and prices: `src/data/menu.ts`
- Photos: `src/assets/img/` (generated with Cloudflare Workers AI, see the studio repo's `scripts/gen-images.mjs`)

The Uzbek, Kazakh and Arabic text should be checked by a native speaker before showing it to clients.

## Run and review

```bash
npm install
npm run dev
node scripts/shoot.mjs http://localhost:4340/ ru
```

`shoot.mjs` saves full-page screenshots at 1440, 768 and 390 widths into `.shots/` and reports horizontal overflow. Adding `?qa` to any URL disables motion.
