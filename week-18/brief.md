# Week 18: Let AI propose, you approve

Course 4, session 3 of 5: How to let AI agents run your systems.

## Outcome

A proposed fix with evidence, risk and a rollback plan.

## Start

Continue with: A health-check issue and your PR review workflow.

Use the included local reference and fixtures for the demonstration. Your coding agent may need its own account. No credential sharing is required. Live integrations are participant work in an authorized environment, not something this bundle has already configured.

## First request

```text
Read the relevant project files before changing code.
Ask an agent to draft a fix PR from an incident. Bind review to the exact commit and test whether a later change requires fresh approval.
Keep existing features working and secrets server-side.
Show the plan and affected files before implementation.
Do not publish, enable spending or change accounts without approval.
```

## Next change

```text
Test this case: An approved proposal changes before execution.
Expected: The changed proposal needs a new approval; old approval is not reused.
Make the smallest necessary change. Keep the original checks.
Rerun the relevant tests and inspect the result.
Report actual evidence, failures and what is still untested.
```

## Your build

Ask an agent to draft a fix PR from an incident. Bind review to the exact commit and test whether a later change requires fresh approval.

## Acceptance checks

- [ ] The change matches the requested artifact
- [ ] The failure case was tried and recorded
- [ ] Existing behavior still works
- [ ] Evidence and remaining limits are documented

## Evidence to keep

Save the original request, the relevant diff, an actual screenshot or output, and what remains untested. Do not claim a local fixture is a live agent, MCP connection, payment, cloud deployment, or production safeguard.

## References

- [GitHub protected branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)
- [AI coding workflow](https://code.claude.com/docs/en/best-practices)
