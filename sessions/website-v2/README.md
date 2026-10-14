# Your Website, Version 2

**Ask your website. Organize its knowledge. Keep it working.**

The simplified follow-on to the previous website session. The active deck now teaches three parts: site-only search with an optional Vercel AI answer, a small reviewed LLM wiki, and maintenance with GitHub checks and preview/release review.

- Open index.html for the 27-slide presentation. Arrow keys navigate.
- Open site-chat/index.html for the working no-key search. Keep the folder together for offline use.
- resources.html links the setup guide, exercise, website ZIP and sources.
- The poster identifies AI 101, Course 01, Session 02 of 05: Build and publish your first website with AI. It prominently carries "AI for All. AI for Good." and the current search/chat, LLM wiki and maintenance topics.
- Event: Thursday, 15 October 2026, 16:00-18:00, Spaces Stortorvet, Oslo.
- planning/opus-review-notes.md records the successful requested Opus 5.5 review and the decisions applied afterward.

## Verification and Limits

All 36 local unit tests pass, including the original nine portfolio tests. The 27 slides passed layout and interaction checks at 1600x900, 1280x720 and 390x844. The working site was checked at 1280, 768 and 390 pixels wide. The slide contact sheet, server diagram and mobile help box were visually inspected. Search works without keys. The optional server-side model path is tested with mock network responses, not a live model. No Vercel deployment or remote GitHub CI execution is claimed.

Run npm ci --ignore-scripts, npm run build, npm run check, and npm test inside site-chat/. Run npm run dev to serve it locally. Follow site-chat/SETUP.md before enabling paid AI.

Run node build.cjs here to regenerate the deck and resource page. This does not modify the poster or reset the website example. Browser verification is in verify-chat.cjs and qa/chat-report.json.

poster.html is the editable source for the current poster. Run node verify-poster.cjs with Playwright and Sharp available to render poster-1080.png and poster-2160.png. An optional PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH selects the local browser. Both exports passed offline content, font and geometry checks, and the 1080-pixel export was visually inspected. See qa/poster-report.json.

## Superseded Material

The previous shortlist/search/export deck and its complete working example are preserved in Your-Website-Version-2-Shortlist-Archive.zip in the presentation workspace. The repository retains historical reference/, starter/, broken-checkpoint/, content.cjs and build-v2.cjs files; the clean download omits them. They do not define the active presentation. Use site-chat/ and chat-content.cjs for current work.

The earlier generic workshop poster is superseded by the course-branded Session 02 poster. The main title and confirmed event details are retained; the topic breakdown now matches the revised presentation.
