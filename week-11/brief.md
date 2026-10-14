# Week 11: Give your helper one tool

Course 3, session 1 of 5: Building better and more efficient AI agents.

## Outcome

A one-tool agent-loop exercise with a readable trace.

## Start

Continue with: Your optional AI help endpoint from Course 01.

Use the included local reference and fixtures for the demonstration. Your coding agent may need its own account. No credential sharing is required. Live integrations are participant work in an authorized environment, not something this bundle has already configured.

## First request

```text
Read the relevant project files before changing code.
Build a harness where a model can request search_site. Use a scripted mock first, log each step, then optionally try a real model with your own key and budget.
Keep existing features working and secrets server-side.
Show the plan and affected files before implementation.
Do not publish, enable spending or change accounts without approval.
```

## Next change

```text
Test this case: The model answers without retrieving facts or requests an unavailable tool.
Expected: Unsupported tools are rejected and unsupported answers fail evaluation.
Make the smallest necessary change. Keep the original checks.
Rerun the relevant tests and inspect the result.
Report actual evidence, failures and what is still untested.
```

## Your build

Build a harness where a model can request search_site. Use a scripted mock first, log each step, then optionally try a real model with your own key and budget.

## Acceptance checks

- [ ] The change matches the requested artifact
- [ ] The failure case was tried and recorded
- [ ] Existing behavior still works
- [ ] Evidence and remaining limits are documented

## Evidence to keep

Save the original request, the relevant diff, an actual screenshot or output, and what remains untested. Do not claim a local fixture is a live agent, MCP connection, payment, cloud deployment, or production safeguard.

## References

- [Long-running agent harnesses](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)
- [Context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
