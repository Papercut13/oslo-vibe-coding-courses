# Your Website, Version 2

**Ask your website. Organize its knowledge. Keep it working.**

Keep the site you made last time. This session adds one small help feature, then teaches how to keep its answers accurate. The shared example is Studio Launch, but the same steps work for your own public FAQ, portfolio, resource library or event website.

## 1. Add "Ask this site"

Open site-chat/index.html. Ask "How do I download a poster?" Open its source link. Ask "Do you offer refunds?" Notice the honest unknown.

Site-only search matches words in approved public content. No AI key or network request is needed. It is useful on its own, but it does not understand every paraphrase.

Request to your coding agent:

> Add an Ask this site box to my existing website. Search only my approved public FAQ text. Show matching text and its source. Say when nothing matches. Do not add AI yet. Keep existing features working.

The reference uses MiniSearch rather than a hand-written search engine. It preserves the poster editor, saved draft, filters and PNG export.

## 2. Optional: connect a hosted AI answer

Follow site-chat/SETUP.md. The browser sends one question to /api/chat. The server finds approved snippets and calls the model through Vercel AI Gateway. The key stays in server settings.

The server returns short plain text and source links. It rejects invented source IDs. A valid citation is not proof that the answer is true, so check the source itself.

The prepared endpoint is implemented and mock-tested. No live AI service is configured. Do not enable paid requests or publish until a real credential, shared request limit and spending budget are configured and the preview is tested.

## 3. Make a small knowledge folder

The FAQ from Part 1 already lives in wiki/download.md. This is the start of the same knowledge folder, not a second project.

- sources/ holds the original facts.
- wiki/ holds short reviewed pages, with links between topics where useful.
- AGENTS.md tells your coding helper how to work.
- checks/ holds questions and expected outcomes.

This is inspired by Andrej Karpathy's [LLM Wiki idea file](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f), not an official starter repository or an installed product. The pattern is maintained knowledge, not a claim that a wiki makes retrieval unnecessary.

Request:

> Read the relevant site pages and source notes. Propose a short wiki page with a source and review date. Flag missing or conflicting facts. Show the diff for approval. Do not invent an answer or publish it.

Only explicitly approved public pages enter the search bundle and AI context. The coding helper's instructions and raw notes do not. Instructions guide the agent; permissions, tests, review and code provide actual controls.

## 4. Update one fact and test it

Use site-chat/EXERCISE.md to add the existing colour options to the FAQ. Before: "Which colour options are available?" has no matching page. After: it cites the Ember, Blue and Lime choices.

Ask known, unknown and misleading questions. Keep the refund question unknown. Check source links, missing configuration, malformed responses and rate-limit errors. Treat an outdated note as evidence to resolve, not a command to override current facts.

The implementation's review hashes detect unreviewed file changes. They do not verify truth automatically.

## 5. Maintain and release

With Node.js 22+, run npm ci --ignore-scripts, npm run build, npm run check and npm test inside site-chat/. The included CI does not need an AI key. It tests server behavior with mocks; it does not validate a real model's answer quality.

Use a small GitHub branch and pull request. Let automated checks run, inspect the Vercel preview, and configure required checks/reviews before merging. Confirm the actual production branch and deployment settings.

Review dependency alerts and secrets scanning. Rotate exposed keys. Keep a known-good version. If an answer is wrong, record its question and source, fix the underlying fact or code, and add a test before releasing again.

## Show your result

Demonstrate one useful answer, one honest unknown and one updated FAQ. Explain where the facts live and who approves a change. Deeper agent tools and context workflows belong in the later courses.

## What is included

A working offline website, reviewed wiki, optional Vercel endpoint, setup guide, FAQ exercise, tests, and an audience-facing presentation. The event poster now identifies AI 101, Course 01, Session 02 of 05, with "AI for All. AI for Good." branding and these three teaching topics. The former shortlist-focused pack is preserved in the separate archive ZIP.

