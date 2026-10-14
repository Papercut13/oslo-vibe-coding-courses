# Week 12: Make tools easy to use

Course 3, session 2 of 5: Building better and more efficient AI agents.

## Outcome

Validated project tools with documented error cases.

## Start

Continue with: The one-tool harness and its trace format.

Use the included local reference and fixtures for the demonstration. Your coding agent may need its own account. No credential sharing is required. Live integrations are participant work in an authorized environment, not something this bundle has already configured.

## First request

```text
Read the relevant project files before changing code.
Add list_projects and get_project with clear descriptions, input schemas and distinct invalid/not-found outcomes. Explain MCP as an optional connection layer, not a replacement backend.
Keep existing features working and secrets server-side.
Show the plan and affected files before implementation.
Do not publish, enable spending or change accounts without approval.
```

## Next change

```text
Test this case: Use empty IDs, oversized input and two confusing tool descriptions.
Expected: Invalid inputs are rejected; traces show tool-choice mistakes without leaking internals.
Make the smallest necessary change. Keep the original checks.
Rerun the relevant tests and inspect the result.
Report actual evidence, failures and what is still untested.
```

## Your build

Add list_projects and get_project with clear descriptions, input schemas and distinct invalid/not-found outcomes. Explain MCP as an optional connection layer, not a replacement backend.

## Acceptance checks

- [ ] The change matches the requested artifact
- [ ] The failure case was tried and recorded
- [ ] Existing behavior still works
- [ ] Evidence and remaining limits are documented

## Evidence to keep

Save the original request, the relevant diff, an actual screenshot or output, and what remains untested. Do not claim a local fixture is a live agent, MCP connection, payment, cloud deployment, or production safeguard.

## References

- [MCP architecture](https://modelcontextprotocol.io/docs/learn/architecture)
