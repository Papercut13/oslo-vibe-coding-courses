# Oslo Vibe Coding Courses

**AI 101 / AI for All. AI for Good.**

Five courses, five sessions each. This is the dedicated, canonical repository for the course presentations, posters, participant briefs and practical examples.

## Review the materials

Open index.html from the downloaded folder. Keep the complete folder together; the slides, fonts, images and examples work offline.

- Each week-NN folder contains the presentation, editable poster, 1080/2160-pixel PNGs, brief and send-message.md.
- Week numbers are file-order identifiers, not confirmed calendar dates.
- Course 01 Session 02 links to the approved Your Website, Version 2 material in sessions/website-v2/.
- Future sessions are review drafts. Confirm event details and practical readiness before sending invitations.
- No emails or attendee invitations are sent by this repository.

## Course progression

1. Build and publish your first website with AI.
2. How to use AI agents to help you code.
3. Building better and more efficient AI agents.
4. How to let AI agents run your systems.
5. How to contextualize so your AI understands.

Read weekly-outline.md for the incremental session sequence and RELEASES.md for readiness. The same participant website develops through the courses, rather than starting a new unrelated project every week.

## Edit and verify

Use Node.js 22 or newer.

```sh
npm ci
npm --prefix sessions/website-v2/site-chat ci --ignore-scripts
npm run build
npm test
npx playwright install --with-deps chromium
npm run verify
npm run verify:project
npm run verify:session2
```

session-updates.mjs is the current editorial source. curriculum.mjs combines it with the original curriculum's references and local labs. build.mjs generates the library, decks, posters, briefs and messages. poster.mjs and shared/course-brand.css hold the series presentation rules. The approved Session 02 has its own generator under sessions/website-v2/.

All assets needed for rebuilding are in this repository. No parent presentation folder or personal machine paths are required. CHROMIUM_PATH can select an already-installed browser for local checks.

## Honest demo boundaries

The portfolio and no-key site search are working local implementations. The optional server-side AI endpoint is mock-tested, not connected to a live service. Other labs demonstrate deterministic logic. They are not live agents, production authorization, monitoring, payment or cloud integrations.

The revised later-session exercises are teaching drafts. The reference builds and live rehearsals listed in RELEASES.md are still required before those sessions are called delivery-ready.

## Review and cloud work

The requested Opus 5.5 curriculum review is saved in planning/opus-review.md. Its implementation decisions and limits are in planning/decisions.md.

A GitHub Actions template is prepared in .github/workflow-templates/course-materials.yml. Activation is pending GitHub workflow permission; see .github/README.md. No remote CI run is claimed. CLOUD.md describes the environment setup and CLOUD-HANDOFF.md defines the remaining research and reference-build work.

Changes belong in small codex/ branches and reviewed pull requests. Keep event confirmations, release status and CHANGELOG.md current. The older oslo-vibe-coding-context repository remains a historical context reference, not a second editable copy of this series.
