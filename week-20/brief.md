# Week 20: Practice a safe recovery

Course 4, session 5 of 5: How to let AI agents run your systems.

## Outcome

A tested recovery runbook and an incident review.

## Start

Continue with: Your checks, incident record, approval gate and rollback plan.

Use the included local reference and fixtures for the demonstration. Your coding agent may need its own account. No credential sharing is required. Live integrations are participant work in an authorized environment, not something this bundle has already configured.

## First request

```text
Read the relevant project files before changing code.
Break a disposable preview, detect the failure, prepare a rollback proposal, approve it and verify recovery. Record what did and did not work.
Keep existing features working and secrets server-side.
Show the plan and affected files before implementation.
Do not publish, enable spending or change accounts without approval.
```

## Next change

```text
Test this case: Rollback fails or the original symptom remains afterward.
Expected: Stop and escalate; do not report recovery until the original check passes.
Make the smallest necessary change. Keep the original checks.
Rerun the relevant tests and inspect the result.
Report actual evidence, failures and what is still untested.
```

## Your build

Break a disposable preview, detect the failure, prepare a rollback proposal, approve it and verify recovery. Record what did and did not work.

## Acceptance checks

- [ ] The change matches the requested artifact
- [ ] The failure case was tried and recorded
- [ ] Existing behavior still works
- [ ] Evidence and remaining limits are documented

## Evidence to keep

Save the original request, the relevant diff, an actual screenshot or output, and what remains untested. Do not claim a local fixture is a live agent, MCP connection, payment, cloud deployment, or production safeguard.

## References

- [Vercel and GitHub](https://vercel.com/docs/git/vercel-for-github)
- [GitHub Actions](https://docs.github.com/en/actions/get-started/understand-github-actions)
