# Week 13: Measure agent quality

Course 3, session 3 of 5: Building better and more efficient AI agents.

## Outcome

At least 12 evaluation cases and a fixed scoring rubric.

## Start

Continue with: Your tool-using helper and its traces.

Use the included local reference and fixtures for the demonstration. Your coding agent may need its own account. No credential sharing is required. Live integrations are participant work in an authorized environment, not something this bundle has already configured.

## First request

```text
Read the relevant project files before changing code.
Create routine, unknown, ambiguous and invalid cases. Keep some held out. Store outputs and scores; repeat optional live runs rather than relying on one successful attempt.
Keep existing features working and secrets server-side.
Show the plan and affected files before implementation.
Do not publish, enable spending or change accounts without approval.
```

## Next change

```text
Test this case: An unknown answer is invented, or the scoring rule changes after seeing results.
Expected: Failures remain visible and comparisons use the same cases and rubric.
Make the smallest necessary change. Keep the original checks.
Rerun the relevant tests and inspect the result.
Report actual evidence, failures and what is still untested.
```

## Your build

Create routine, unknown, ambiguous and invalid cases. Keep some held out. Store outputs and scores; repeat optional live runs rather than relying on one successful attempt.

## Acceptance checks

- [ ] The change matches the requested artifact
- [ ] The failure case was tried and recorded
- [ ] Existing behavior still works
- [ ] Evidence and remaining limits are documented

## Evidence to keep

Save the original request, the relevant diff, an actual screenshot or output, and what remains untested. Do not claim a local fixture is a live agent, MCP connection, payment, cloud deployment, or production safeguard.

## References

- [Evaluating agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents)
