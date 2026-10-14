# Sources and Scope

Checked 14 October 2026. The workshop adapts official documentation and practitioner ideas. It does not claim a benchmark improvement or production deployment.

## Website search and AI

- [MiniSearch documentation](https://lucaong.github.io/minisearch/): the 7.2.0 library powers the offline full-text search. Exact-word matching has limitations; this is not semantic search or an on-device LLM.
- [Vercel Node.js Functions](https://vercel.com/docs/functions/runtimes/node-js): a root api/chat.mjs Web Request handler, separate from static output.
- [Environment variables](https://vercel.com/docs/environment-variables): server-side configuration and separate deployment environments.
- [AI Gateway setup](https://vercel.com/docs/ai-gateway/getting-started): optional API-key setup; the workshop does not create keys or spend Gateway credits.
- [Chat Completions compatibility](https://vercel.com/docs/ai-gateway/sdks-and-apis/openai-chat-completions): REST endpoint, bearer authentication and request format.
- [Current model catalog](https://ai-gateway.vercel.sh/v1/models): select and verify a currently available compatible model; no model ID is hard-coded in the website.
- [WAF rate limiting](https://vercel.com/docs/vercel-firewall/vercel-waf/rate-limiting): shared endpoint protections. Availability and configuration must be checked for the actual hosting plan.

## Context

- [Andrej Karpathy: LLM Wiki](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f): an idea file describing a maintained, linked Markdown knowledge layer over original sources. It is not a complete application or a security guarantee. Our tiny reviewed FAQ is an introduction to that pattern.
- The prior Studio Launch implementation supplies the actual project, editor, palette and storage facts. An obsolete statement appears only in a test fixture; it is intentionally not a real claim or published knowledge.

## Maintenance

- [GitHub Node.js CI](https://docs.github.com/en/actions/tutorials/build-and-test-code/nodejs): repeatable installs and checks. Workflow files alone do not enforce branch protection.
- [Repository rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets): required checks/reviews need separate configuration.
- [Secret scanning](https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning): supported credential detection, not a guarantee that every secret is caught.
- [Dependabot alerts](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-alerts): review known dependency issues.
- [Vercel GitHub integration](https://vercel.com/docs/git/vercel-for-github): previews and production-branch deployment.
- [Vercel rollback](https://vercel.com/docs/instant-rollback): restoring a deployment is separate from reverting external data.

## Planning and Evidence

The user requested Opus 5.5. After login and CLI compatibility were resolved, a successful claude-opus-5-5 planning review was obtained through a temporary CLI. Its recommendations and Codex review decisions are in planning/opus-review-notes.md. The review did not browse sources or test the code.

The website's search and mock server tests were run locally. The model endpoint is implemented but no live website-model request, public deployment, GitHub CI run, WAF policy or budget was configured. Local screenshots are genuine captures of the deterministic site-only mode, not generated model-output mockups. See qa/chat-report.json for the actual browser verification scope.

