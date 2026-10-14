# Week 23: Check your wiki in CI

Course 5, session 3 of 5: How to contextualize so your AI understands.

## Outcome

Wiki lint rules and a human contradiction-review process.

## Start

Continue with: Your reviewed wiki pages and existing GitHub checks.

Use the included local reference and fixtures for the demonstration. Your coding agent may need its own account. No credential sharing is required. Live integrations are participant work in an authorized environment, not something this bundle has already configured.

## First request

```text
Read the relevant project files before changing code.
Check links, required source fields and review dates in code. Separately ask an AI to propose contradictions for human review; do not confuse these two checks.
Keep existing features working and secrets server-side.
Show the plan and affected files before implementation.
Do not publish, enable spending or change accounts without approval.
```

## Next change

```text
Test this case: Two validly formatted pages contain incompatible facts.
Expected: Structural lint may pass; the semantic conflict still requires review.
Make the smallest necessary change. Keep the original checks.
Rerun the relevant tests and inspect the result.
Report actual evidence, failures and what is still untested.
```

## Your build

Check links, required source fields and review dates in code. Separately ask an AI to propose contradictions for human review; do not confuse these two checks.

## Acceptance checks

- [ ] The change matches the requested artifact
- [ ] The failure case was tried and recorded
- [ ] Existing behavior still works
- [ ] Evidence and remaining limits are documented

## Evidence to keep

Save the original request, the relevant diff, an actual screenshot or output, and what remains untested. Do not claim a local fixture is a live agent, MCP connection, payment, cloud deployment, or production safeguard.

## References

- [GitHub Actions](https://docs.github.com/en/actions/get-started/understand-github-actions)
- [Context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
