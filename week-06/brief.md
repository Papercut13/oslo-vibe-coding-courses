# Week 06: Brief an agent on your site

Course 2, session 1 of 5: How to use AI agents to help you code.

## Outcome

A verified code map and one tested project instruction.

## Start

Continue with: Your website repository and the instructions added in Course 01.

Use the included local reference and fixtures for the demonstration. Your coding agent may need its own account. No credential sharing is required. Live integrations are participant work in an authorized environment, not something this bundle has already configured.

## First request

```text
Read the relevant project files before changing code.
Ask an agent to locate search, wiki and tests without editing. Check three file references yourself. Add one useful instruction and test it in a fresh session.
Keep existing features working and secrets server-side.
Show the plan and affected files before implementation.
Do not publish, enable spending or change accounts without approval.
```

## Next change

```text
Test this case: The agent cites a nonexistent function or attempts an unapproved edit.
Expected: Incorrect references are rejected; actual tool permissions limit unauthorized actions.
Make the smallest necessary change. Keep the original checks.
Rerun the relevant tests and inspect the result.
Report actual evidence, failures and what is still untested.
```

## Your build

Ask an agent to locate search, wiki and tests without editing. Check three file references yourself. Add one useful instruction and test it in a fresh session.

## Acceptance checks

- [ ] The change matches the requested artifact
- [ ] The failure case was tried and recorded
- [ ] Existing behavior still works
- [ ] Evidence and remaining limits are documented

## Evidence to keep

Save the original request, the relevant diff, an actual screenshot or output, and what remains untested. Do not claim a local fixture is a live agent, MCP connection, payment, cloud deployment, or production safeguard.

## References

- [AI coding workflow](https://code.claude.com/docs/en/best-practices)
- [Codex project instructions](https://developers.openai.com/codex/guides/agents-md)
