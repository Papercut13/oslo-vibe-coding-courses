# Release Readiness

## Current state

- Course 01 Session 01: delivered on 8 October 2026; the library contains its recap/build path.
- Course 01 Session 02: approved session, confirmed for 15 October 2026. Working offline search and wiki; optional AI endpoint is mock-tested. No live model, Vercel deployment or remote CI result is implied by that demo.
- Course 01 Session 03 through Course 05 Session 05: editorial drafts with updated posters, slides, prompts, failure cases and references. Event details and practical readiness remain unconfirmed.

## Reference builds still required

| Sessions | Missing delivery evidence |
| --- | --- |
| C1S3 | Executable accessibility, alt-text and phone-overflow checks against the personalized site |
| C1S4 | Metadata/share-image checks, real 404 behavior and updated search index |
| C1S5 | Dated hosted preview/release/fallback/rollback rehearsal |
| C2S1 | Actual read-only agent run with verified file references |
| C2S2-C2S3 | Working shareable ?q= search, history, escaping and regression tests |
| C2S4 | Seeded-defect exercise and recorded review results |
| C2S5 | Actual feature PR, CI result and preview review |
| C3S1-C3S2 | One-tool harness, trace schema, mock-model tests and validated tool integration |
| C3S3 | 12+ representative cases, fixed graders, held-out cases and stored results |
| C3S4 | Enforced steps/time/retry caps, repeated-call and timeout tests |
| C3S5 | Usage recorder; measured live usage/latency before making cost claims |
| C4S1 | Health checker against a local server and an authorized live URL |
| C4S2 | Persistent incident deduplication and a real scheduled workflow rehearsal |
| C4S3 | Approval invalidation after a changed commit verified in the real repository |
| C4S4 | Raw-body HMAC verification, invalid-signature and replay fixtures |
| C4S5 | Disposable-preview incident drill and recorded recovery evidence |
| C5S1-C5S2 | Real loaded-context inventory and three reviewed wiki ingestions |
| C5S3 | Executable wiki lint and separate contradiction-review exercise |
| C5S4 | Read-only retrieval integration plus injection/conflict eval cases |
| C5S5 | Fresh clone/cloud handoff completed by another session or participant |

These are work items, not claims of completed integrations. The supplied concept labs can support explanation while the reference builds are prepared.

## Before sending any invitation

1. Confirm the exact date, time, venue and any admission wording.
2. Check poster, deck, brief and message agree on course/session and outcome.
3. Run build, tests and browser verification; inspect the rendered material.
4. Complete the relevant reference build and any promised live rehearsal.
5. Record unresolved limitations; keep no-key/local alternatives available.
6. Review the diff, tag the release and keep a known-good version.
