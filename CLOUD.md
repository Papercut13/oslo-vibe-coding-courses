# Codex Cloud Environment

Repository: https://github.com/Papercut13/oslo-vibe-coding-courses

## Setup

Create a cloud environment selecting this repository only. Keep environment access private unless the owner changes it. Use Node.js 22 or later and run:

```sh
bash scripts/setup-cloud.sh
```

The setup needs package-manager access for npm and Playwright browser dependencies. No AI keys or other secrets are required for the build, tests or offline examples. Do not copy local Claude or Codex credentials into the repository or cloud environment.

Run npm run verify, npm run verify:project and npm run verify:session2 where the browser supports local files. Review the setup result, then publish the environment. Start a cloud task with CLOUD-HANDOFF.md; opening this repository locally does not start remote work. Do not disable a managed browser policy to make offline tests run.

Official setup reference checked 14 October 2026: https://learn.chatgpt.com/docs/environments/cloud-environments

## Status

Checked on 14 October 2026: the public GitHub repository is published. A dedicated cloud environment named oslo-vibe-coding-courses has been created, tested, saved and published through the signed-in cloud UI. It selects this repository only and remains private to the owner. No model credentials or other secrets were added.

Cloud onboarding reported a passing build, all 63 tests, syntax/content checks, and local HTTP browser search/API checks on Node 24. Repository files were unchanged. Full file-based browser verification was blocked by the managed Chromium policy. This does not invalidate the separate local offline evidence, but must not be reported as a cloud offline-browser pass. The saved startup instructions preserve this limitation and prohibit bypassing the policy.

The installed codex-cli 0.153.0 supports `codex cloud exec --env ENV_ID --branch main`, but did not recognize this newly published environment by its configuration identifier or exact name. Its available environment list contained only an unrelated older environment. The UI is the verified route for this environment; do not send course work to the old environment as a workaround. CLI compatibility remains unresolved.

Use New chat, Cloud, and select oslo-vibe-coding-courses, then continue the work in CLOUD-HANDOFF.md. Keep changes on a codex/ branch and review the pull request rather than automatically merging.

A research and implementation continuation was submitted through the published environment and verified Working on 14 October 2026. The cloud chat began reading the repository instructions through GitHub while its fresh machine started. Its prompt requires the CLOUD-HANDOFF.md work order, tested examples, updated teaching material and a reviewable pull request without automatic merging. The owner-only chat link is provided in the originating conversation rather than published here.

This is a verified launch, not a claim that the remaining reference builds or final review are complete. Check the task's latest response and any resulting pull request. A setup script or GitHub Actions run alone is not proof of a running Codex Cloud agent.
