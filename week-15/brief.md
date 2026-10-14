# Week 15: Faster, cheaper, still useful

Course 3, session 5 of 5: Building better and more efficient AI agents.

## Outcome

A quality, latency and usage comparison for one change.

## Start

Continue with: Your fixed evaluation set and bounded harness.

Use the included local reference and fixtures for the demonstration. Your coding agent may need its own account. No credential sharing is required. Live integrations are participant work in an authorized environment, not something this bundle has already configured.

## First request

```text
Read the relevant project files before changing code.
Record provider usage, measured latency and calls for each case. Change one variable, such as prompt size or tool layout. Compare quality before claiming an improvement.
Keep existing features working and secrets server-side.
Show the plan and affected files before implementation.
Do not publish, enable spending or change accounts without approval.
```

## Next change

```text
Test this case: The faster version loses honest unknowns or reports character counts as tokens.
Expected: Quality regressions are visible; estimates are not presented as measured usage.
Make the smallest necessary change. Keep the original checks.
Rerun the relevant tests and inspect the result.
Report actual evidence, failures and what is still untested.
```

## Your build

Record provider usage, measured latency and calls for each case. Change one variable, such as prompt size or tool layout. Compare quality before claiming an improvement.

## Acceptance checks

- [ ] The change matches the requested artifact
- [ ] The failure case was tried and recorded
- [ ] Existing behavior still works
- [ ] Evidence and remaining limits are documented

## Evidence to keep

Save the original request, the relevant diff, an actual screenshot or output, and what remains untested. Do not claim a local fixture is a live agent, MCP connection, payment, cloud deployment, or production safeguard.

## References

- [Evaluating agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents)
- [AI SDK token usage](https://ai-sdk.dev/docs/reference/ai-sdk-core/generate-text)
