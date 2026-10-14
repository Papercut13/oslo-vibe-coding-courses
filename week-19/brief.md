# Week 19: Trust only verified events

Course 4, session 4 of 5: How to let AI agents run your systems.

## Outcome

A signed-event verification and duplicate-handling exercise.

## Start

Continue with: Incident tracking and the approval workflow.

Use the included local reference and fixtures for the demonstration. Your coding agent may need its own account. No credential sharing is required. Live integrations are participant work in an authorized environment, not something this bundle has already configured.

## First request

```text
Read the relevant project files before changing code.
Build a GitHub webhook handler with raw-body HMAC verification and delivery-ID duplicate handling. Use local fixture secrets. Keep any agent response to triage only.
Keep existing features working and secrets server-side.
Show the plan and affected files before implementation.
Do not publish, enable spending or change accounts without approval.
```

## Next change

```text
Test this case: Send a bad signature, a repeated delivery and out-of-order messages.
Expected: Invalid input is rejected before effects; duplicates do not repeat the action.
Make the smallest necessary change. Keep the original checks.
Rerun the relevant tests and inspect the result.
Report actual evidence, failures and what is still untested.
```

## Your build

Build a GitHub webhook handler with raw-body HMAC verification and delivery-ID duplicate handling. Use local fixture secrets. Keep any agent response to triage only.

## Acceptance checks

- [ ] The change matches the requested artifact
- [ ] The failure case was tried and recorded
- [ ] Existing behavior still works
- [ ] Evidence and remaining limits are documented

## Evidence to keep

Save the original request, the relevant diff, an actual screenshot or output, and what remains untested. Do not claim a local fixture is a live agent, MCP connection, payment, cloud deployment, or production safeguard.

## References

- [Validating GitHub webhook deliveries](https://docs.github.com/en/webhooks/using-webhooks/validating-webhook-deliveries)
