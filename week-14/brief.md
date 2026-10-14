# Week 14: Put limits around the agent

Course 3, session 4 of 5: Building better and more efficient AI agents.

## Outcome

Harness limits for attempts, time and repeated calls.

## Start

Continue with: Your helper harness and evaluation cases.

Use the included local reference and fixtures for the demonstration. Your coding agent may need its own account. No credential sharing is required. Live integrations are participant work in an authorized environment, not something this bundle has already configured.

## First request

```text
Read the relevant project files before changing code.
Enforce step and elapsed-time caps outside the model. Retry only temporary failures. Add repeated-call and timeout cases to the evaluation set.
Keep existing features working and secrets server-side.
Show the plan and affected files before implementation.
Do not publish, enable spending or change accounts without approval.
```

## Next change

```text
Test this case: A temporary error never resolves or the model repeats the same action.
Expected: Execution stops at the configured bound with an explicit reason.
Make the smallest necessary change. Keep the original checks.
Rerun the relevant tests and inspect the result.
Report actual evidence, failures and what is still untested.
```

## Your build

Enforce step and elapsed-time caps outside the model. Retry only temporary failures. Add repeated-call and timeout cases to the evaluation set.

## Acceptance checks

- [ ] The change matches the requested artifact
- [ ] The failure case was tried and recorded
- [ ] Existing behavior still works
- [ ] Evidence and remaining limits are documented

## Evidence to keep

Save the original request, the relevant diff, an actual screenshot or output, and what remains untested. Do not claim a local fixture is a live agent, MCP connection, payment, cloud deployment, or production safeguard.

## References

- [Long-running agent harnesses](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)
