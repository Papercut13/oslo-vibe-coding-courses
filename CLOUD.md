# Codex Cloud Environment

Repository: https://github.com/Papercut13/oslo-vibe-coding-courses

## Setup

Create a cloud environment selecting this repository only. Keep environment access private unless the owner changes it. Use Node.js 22 or later and run:

```sh
bash scripts/setup-cloud.sh
```

The setup needs package-manager access for npm and Playwright browser dependencies. No AI keys or other secrets are required for the build, tests or offline examples. Do not copy local Claude or Codex credentials into the repository or cloud environment.

Run npm run verify, npm run verify:project and npm run verify:session2. Review the setup result, then publish the environment. Start a cloud task with CLOUD-HANDOFF.md; opening this repository locally does not start remote work.

Official setup reference checked 14 October 2026: https://learn.chatgpt.com/docs/environments/cloud-environments

## Status

Checked on 14 October 2026: the public GitHub repository exists. The authenticated Codex CLI lists only an unrelated older environment, not one for this repository. No course cloud task has been submitted or verified running.

The installed CLI supports submitting work to an existing environment with `codex cloud exec --env ENV_ID --branch main`, but has no environment-creation command. A one-time environment setup remains required. Do not run this repository's work in an unrelated environment or copy credentials to work around setup.

Once the dedicated environment exists, launch from this repository:

```sh
codex cloud exec --env YOUR_CONFIRMED_ENVIRONMENT_ID --branch main "Read AGENTS.md and CLOUD-HANDOFF.md. Continue the authorized course-series work, verify results, and open a pull request without merging."
```

Then check the returned task with `codex cloud status TASK_ID`. Record the actual environment/task link here only after submission. A setup script or GitHub Actions run is not proof of a running Codex Cloud agent.
