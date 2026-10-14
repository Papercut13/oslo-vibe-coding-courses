# Week 21: See what your agent reads

Course 5, session 1 of 5: How to contextualize so your AI understands.

## Outcome

An inventory of instructions, facts, decisions and history.

## Start

Continue with: Your wiki, specifications, evaluation notes and runbooks.

Use the included local reference and fixtures for the demonstration. Your coding agent may need its own account. No credential sharing is required. Live integrations are participant work in an authorized environment, not something this bundle has already configured.

## First request

```text
Read the relevant project files before changing code.
List the files your client actually loads. Separate instructions from public facts, identify duplicate rules and remove irrelevant context without losing sources.
Keep existing features working and secrets server-side.
Show the plan and affected files before implementation.
Do not publish, enable spending or change accounts without approval.
```

## Next change

```text
Test this case: An instruction file and an old wiki note contradict one another.
Expected: The conflict is identified and resolved using current approved evidence.
Make the smallest necessary change. Keep the original checks.
Rerun the relevant tests and inspect the result.
Report actual evidence, failures and what is still untested.
```

## Your build

List the files your client actually loads. Separate instructions from public facts, identify duplicate rules and remove irrelevant context without losing sources.

## Acceptance checks

- [ ] The change matches the requested artifact
- [ ] The failure case was tried and recorded
- [ ] Existing behavior still works
- [ ] Evidence and remaining limits are documented

## Evidence to keep

Save the original request, the relevant diff, an actual screenshot or output, and what remains untested. Do not claim a local fixture is a live agent, MCP connection, payment, cloud deployment, or production safeguard.

## References

- [Context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
- [Codex project instructions](https://developers.openai.com/codex/guides/agents-md)
