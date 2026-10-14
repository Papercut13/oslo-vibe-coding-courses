# Add One True Answer

Ask: "Which colour options are available?" The initial wiki does not answer it.

1. Inspect core.js. Its palette keys are ember, blue and lime. These are existing choices, not a new policy.
2. Ask your coding agent to add sources/palettes.md and wiki/palettes.md, based on those actual controls. Use the short public fact: "Available colour options are Ember, Blue, and Lime."
3. Add a public entry to wiki/manifest.json with id palettes, title Palette choices, file palettes.md, source sources/palettes.md and the review date. Do not copy private notes.
4. Change the corresponding entry in checks/questions.json to expectSource palettes and mustInclude Ember. Preserve the refund question as unknown.
5. Review the fact and proposed diff yourself. Then run npm run approve-content -- palettes to record the review hashes. This command records a decision; it does not check truth automatically.
6. Run npm run build, npm run check, and npm test. Reopen the page and repeat the question. The source link must open the new FAQ. Existing download/save questions still work.
7. Review a GitHub pull request and Vercel preview before release.

The search tests include a before/after version of this example. A hash mismatch detects a changed file, not a lie. Keep the approval step meaningful.
