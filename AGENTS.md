# Oslo Vibe Coding Courses

Read rules.md, context.md, planning/opus-review.md and RELEASES.md before changing course content. This is the canonical public repository for the five-course, 25-session AI 101 series.

## Non-negotiable requirements

- Brand: Oslo Vibe Coding; AI 101; AI for All. AI for Good. Exact course name and Course NN / Session NN of 05 on each poster and presentation.
- Build first, explain afterward. Each session extends a specific artifact and has a practical exercise, a failure case, checks and sources. No facilitator timing slides, portraits or Welcome Week branding.
- Preserve the approved Course 1 Session 2 at sessions/website-v2/. It is the 15 October 2026 follow-on, not the old visual-design lesson.
- Never invent future event dates, venue, price or donation instructions. Only confirmed sessions may be marked ready to send. Future posters are review drafts.
- Distinguish deterministic local exercises, mocked model tests, participant implementations and verified live integrations. Do not imply a live agent or production deployment from a fixture.
- Keep all required assets local so HTML decks open from the folder. Do not add personal filesystem paths, credentials, chat transcripts or private attachments.
- Edit source data and generators, then regenerate. Do not repair only generated HTML. Keep the short changelog and release status current.

## Commands

- npm ci
- npm --prefix sessions/website-v2/site-chat ci --ignore-scripts
- npm run build
- npm test
- npx playwright install --with-deps chromium
- npm run verify
- npm run verify:project
- npm run verify:session2

Read package.json for current scripts. Browser checks must inspect all slides and both poster export sizes, offline assets, keyboard navigation, clipping, overlap and working interactions. Visually inspect contact sheets as well as checking geometry. Use a codex/ branch and a pull request for follow-up work; do not auto-merge or change access settings.
