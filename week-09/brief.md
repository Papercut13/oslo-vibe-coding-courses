# Week 09: Reuse your review process

Course 2, session 4 of 5: How to use AI agents to help you code.

## Outcome

A reusable review procedure with a known-defect scorecard.

## Start

Continue with: Your feature diff and regression tests.

Use the included local reference and fixtures for the demonstration. Your coding agent may need its own account. No credential sharing is required. Live integrations are participant work in an authorized environment, not something this bundle has already configured.

## First request

```text
Read the relevant project files before changing code.
Write a tool-neutral review file covering unsafe HTML, secrets, links, accessibility and unrelated edits. Try it against three seeded defects. Package it as a skill only in a client that supports it.
Keep existing features working and secrets server-side.
Show the plan and affected files before implementation.
Do not publish, enable spending or change accounts without approval.
```

## Next change

```text
Test this case: The agent says looks good despite a known unsafe rendering defect.
Expected: The missed defect stays in the scorecard; revise and rerun the procedure.
Make the smallest necessary change. Keep the original checks.
Rerun the relevant tests and inspect the result.
Report actual evidence, failures and what is still untested.
```

## Your build

Write a tool-neutral review file covering unsafe HTML, secrets, links, accessibility and unrelated edits. Try it against three seeded defects. Package it as a skill only in a client that supports it.

## Acceptance checks

- [ ] The change matches the requested artifact
- [ ] The failure case was tried and recorded
- [ ] Existing behavior still works
- [ ] Evidence and remaining limits are documented

## Evidence to keep

Save the original request, the relevant diff, an actual screenshot or output, and what remains untested. Do not claim a local fixture is a live agent, MCP connection, payment, cloud deployment, or production safeguard.

## References

- [Claude Code skills](https://code.claude.com/docs/en/skills)
- [Codex project instructions](https://developers.openai.com/codex/guides/agents-md)
- [OWASP: prompt injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/)
