# Planning Review: Opus 5.5

Requested model: claude-opus-5-5. Successfully run through a temporary Claude Code 2.1.280 CLI after authentication was refreshed. Tools, MCP servers, hooks, Chrome and session persistence were disabled. Model response reported success and USD 0.135423 total cost. This was a planning review, not external research or implementation testing.

## Recommendations from the review

- Follow one question and one FAQ file through search, reviewed knowledge, and release.
- Use precise labels: site-only search, hosted AI answer, and a model running on a laptop (not covered).
- Name the feature "Ask this site"; keep it single-turn rather than adding conversation memory.
- Make no-key site-only search a complete feature, not a failed AI demo.
- Show known, unknown, and outdated/conflicting-information cases.
- Separate the visitor's public knowledge from the coding helper's AGENTS.md instructions.
- Validate citations against the source IDs actually sent to the model.
- Keep secrets server-side, render answers as plain text, and require shared request limits and a spend budget before public use.
- Teach maintenance with a changed fact, checks, a pull request, a preview and human approval.
- Omit embeddings, vector databases, streaming, tools, scraping, accounts, payments, autonomous actions, and a CI YAML lecture.

The proposed 24-slide structure: result; three upgrades; ask box; meaning of site-only; no-key search; unknown answers; build prompt; optional server-side AI; safe key setup; selected context; launch limits; sources; Karpathy idea file; small wiki; one reviewed page; visitor vs coding-agent context; permissions; expected answers; tests; update one fact; CI/preview; approval; final checklist.

## Review decisions applied by Codex

Accepted the narrative and most boundaries. Use real implementation screenshots, not fabricated AI output or a fake terminal success.

Changed the proposed "add a refund policy" exercise. Studio Launch is not a shop. Instead add a FAQ about the actual Ember, Blue and Lime palettes, sourced from core.js. The refund question stays unknown.

Kept the original draft-storage note as a clearly labeled obsolete test fixture, never published evidence. A wiki file does not automatically override contradictory public facts; a person reviews and resolves a conflict before publication.

Do not claim every merge is human-approved by default. Required checks/reviews must be configured on GitHub; workflow YAML alone cannot enforce this.

Do not claim live AI output or Vercel deployment from mock tests. The site-only path is locally executable; hosted AI requires separate credentials and verification.

Preserve the approved poster unchanged and archive the former shortlist deck.
