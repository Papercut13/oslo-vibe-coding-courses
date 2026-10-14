# Studio Launch: Ask This Site

Open index.html to try site-only search. It works from the folder with no network or API key. Hosted AI is disabled for file URLs.

For local server development with Node.js 22+:

```sh
npm ci --ignore-scripts
npm run build
npm run check
npm test
npm run dev
```

Open http://127.0.0.1:4189. Set PORT to another available port if needed.

- The search library is MiniSearch 7.2.0 (MIT), bundled locally for offline use.
- wiki/ contains reviewed public facts. sources/ keeps evidence. AGENTS.md guides the coding helper, not visitors.
- api/chat.mjs is a Vercel function. It uses the Gateway REST API directly, not an AI SDK or a client-side key.
- AI is off by default. Follow SETUP.md before enabling it. No live AI service or deployment was connected during preparation.
- Tests use mock model responses and do not use credentials or send questions to an AI provider.
- The original filters, poster editor, saved draft and PNG export remain part of the website.

See EXERCISE.md for the FAQ update and ../WORKSHOP.md for the full session. The reference is intentionally small: keyword search is not semantic understanding, and valid source IDs do not prove that every generated sentence is true.
