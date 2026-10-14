# Week 07: Spec one useful feature

Course 2, session 2 of 5: How to use AI agents to help you code.

## Outcome

A specification for a shareable website search link.

## Start

Continue with: Ask this site and your verified code map.

Use the included local reference and fixtures for the demonstration. Your coding agent may need its own account. No credential sharing is required. Live integrations are participant work in an authorized environment, not something this bundle has already configured.

## First request

```text
Read the relevant project files before changing code.
Specify ?q= search links: opening a shared URL restores the query, empty queries are useful, unknown results stay honest and browser Back works.
Keep existing features working and secrets server-side.
Show the plan and affected files before implementation.
Do not publish, enable spending or change accounts without approval.
```

## Next change

```text
Test this case: Use an empty query, special characters and HTML-like text in the URL.
Expected: Text stays text; URLs round-trip correctly and no script executes.
Make the smallest necessary change. Keep the original checks.
Rerun the relevant tests and inspect the result.
Report actual evidence, failures and what is still untested.
```

## Your build

Specify ?q= search links: opening a shared URL restores the query, empty queries are useful, unknown results stay honest and browser Back works.

## Acceptance checks

- [ ] The change matches the requested artifact
- [ ] The failure case was tried and recorded
- [ ] Existing behavior still works
- [ ] Evidence and remaining limits are documented

## Evidence to keep

Save the original request, the relevant diff, an actual screenshot or output, and what remains untested. Do not claim a local fixture is a live agent, MCP connection, payment, cloud deployment, or production safeguard.

## References

- [GitHub Spec Kit](https://github.com/github/spec-kit)
- [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)
