# Week 17: Schedule useful checks

Course 4, session 2 of 5: How to let AI agents run your systems.

## Outcome

An incident-key policy and a scheduled-check exercise.

## Start

Continue with: Your read-only website health check.

Use the included local reference and fixtures for the demonstration. Your coding agent may need its own account. No credential sharing is required. Live integrations are participant work in an authorized environment, not something this bundle has already configured.

## First request

```text
Read the relevant project files before changing code.
Design a GitHub Actions schedule that checks the site, opens one issue per incident and records recovery. Test duplicate handling before enabling the schedule.
Keep existing features working and secrets server-side.
Show the plan and affected files before implementation.
Do not publish, enable spending or change accounts without approval.
```

## Next change

```text
Test this case: Two failing runs try to create two issues, or runs arrive late.
Expected: Duplicate effects are avoided and the report does not promise exact execution time.
Make the smallest necessary change. Keep the original checks.
Rerun the relevant tests and inspect the result.
Report actual evidence, failures and what is still untested.
```

## Your build

Design a GitHub Actions schedule that checks the site, opens one issue per incident and records recovery. Test duplicate handling before enabling the schedule.

## Acceptance checks

- [ ] The change matches the requested artifact
- [ ] The failure case was tried and recorded
- [ ] Existing behavior still works
- [ ] Evidence and remaining limits are documented

## Evidence to keep

Save the original request, the relevant diff, an actual screenshot or output, and what remains untested. Do not claim a local fixture is a live agent, MCP connection, payment, cloud deployment, or production safeguard.

## References

- [GitHub scheduled workflows](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#schedule)
- [GitHub Actions](https://docs.github.com/en/actions/get-started/understand-github-actions)
