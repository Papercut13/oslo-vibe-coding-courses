# Vercel Setup: Optional Hosted AI

The site-only search works without this setup. A hosted AI answer sends the current question and selected public text to an external AI provider through Vercel AI Gateway. This is not an on-device model. Review the provider's data handling and budget before enabling it.

## 1. Use a separate workshop repository

Put the contents of site-chat/ into its own GitHub repository. Review every file first. Keep .env.local ignored and never commit an API key. The included workflow assumes this folder is the repository root.

If this remains inside the full course repository, set the Vercel Root Directory to the site-chat folder and adapt GitHub Actions working directories accordingly. Do not copy unrelated private files.

## 2. Create a Vercel preview

Import that GitHub repository into Vercel and choose the correct team. This is a static site with a Node.js function, not a Next.js project. Use the Other framework preset and Node.js 22 or a currently supported compatible version.

The included vercel.json defines:
- Build: npm run build && npm run check && npm test
- Output: dist
- Function: api/chat.mjs

The function stays outside dist; Vercel detects api/ in the project root. The build publishes an explicit list of public assets, not sources/, AGENTS.md, tests, or environment files. Review the preview before using it publicly.

## 3. Add a server-side AI key

Choose AI Gateway in the intended Vercel team. Create a dedicated key and set a spending limit; do not reuse a key for unrelated production work. Do not paste it into a coding-agent conversation, HTML, client JavaScript, a screenshot, or Git.

In the project's Environment Variables, set:
- AI_GATEWAY_API_KEY: your dedicated secret value
- AI_GATEWAY_MODEL: an exact text-model ID from https://ai-gateway.vercel.sh/v1/models
- ENABLE_AI: false initially
- AI_GUARDS_CONFIGURED: false initially

Our endpoint uses the Chat Completions API with JSON output. Check that the selected model supports that request shape and test it. Model availability and pricing change; no model is hard-coded. Preview and Production environments are separate selections in Vercel. Changing environment variables requires a new deployment.

A Claude Code or ChatGPT subscription is not the same configuration as this website's Gateway credential. Do not repurpose the coding agent's authentication files.

## 4. Protect the endpoint before enabling AI

Configure a shared rate-limit rule for /api/chat at the hosting edge (for example Vercel WAF), or an equivalent shared server-side limiter. Set an appropriate key/project spending budget and alerts. Check current plan availability. A counter inside one function instance is not enough across instances and restarts.

The code already bounds questions to 500 characters, request bodies to 4096 bytes, source context to three short pages, model output to 600 tokens, and request duration to ten seconds. It has no tools or write actions and accepts only the question from the client. These are safeguards, not a full security guarantee.

Only after actually configuring the external protections:
- set AI_GUARDS_CONFIGURED=true
- set ENABLE_AI=true
- redeploy

AI_GUARDS_CONFIGURED is an explicit acknowledgement, not a rate limiter or a budget by itself. Never set it just to bypass setup.

## 5. Verify a real request

On the preview URL select Hosted AI answer, then ask "How do I download a poster?" Check:
- A short answer appears.
- Its source opens the correct reviewed page.
- Browser requests contain the question, not the key or private documents.
- The server did not follow an instruction embedded in the question.
- "Do you offer refunds?" stays unknown.
- Budget/rate-limit errors show a useful error, not a made-up answer.

Inspect usage and errors in the provider/hosting logs without exposing keys or private questions. Use non-sensitive questions for the workshop. The app does not persist chat history; hosting and AI providers may retain request information under their settings and policies.

No live request, public Vercel deployment, WAF rule or spending limit was configured during preparation. Unit tests use mocked network responses. Validate the live environment yourself before a public demo.

## 6. Keep the update path controlled

The included GitHub workflow installs from the lockfile, checks syntax/wiki hashes, runs tests, builds and audits dependencies. It contains no AI key. Configure required status checks and reviews in repository rules separately. Enable available secret scanning/push protection and Dependabot alerts.

Git integration can create a preview for a branch and deploy the production branch. Confirm those settings; simply adding CI YAML does not stop deployment or force human review. Use required checks/deployment controls and review the exact version.

If a key leaks, revoke/rotate it first, remove it from public files and history, and redeploy. Deleting the visible line alone does not invalidate the key.

Official sources:
- [Node.js functions](https://vercel.com/docs/functions/runtimes/node-js)
- [Environment variables](https://vercel.com/docs/environment-variables)
- [AI Gateway setup](https://vercel.com/docs/ai-gateway/getting-started)
- [Chat Completions compatibility](https://vercel.com/docs/ai-gateway/sdks-and-apis/openai-chat-completions)
- [WAF rate limiting](https://vercel.com/docs/vercel-firewall/vercel-waf/rate-limiting)

