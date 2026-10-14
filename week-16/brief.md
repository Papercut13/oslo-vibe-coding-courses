# Week 16: Watch your website

Course 4, session 1 of 5: How to let AI agents run your systems.

## Outcome

A timestamped health report for your website.

## Start

Continue with: Your published site and its no-key search fallback.

Use the included local reference and fixtures for the demonstration. Your coding agent may need its own account. No credential sharing is required. Live integrations are participant work in an authorized environment, not something this bundle has already configured.

## First request

```text
Read the relevant project files before changing code.
Check response status, latency and expected content on a local test server first. With permission, run the same checks against your own URL.
Keep existing features working and secrets server-side.
Show the plan and affected files before implementation.
Do not publish, enable spending or change accounts without approval.
```

## Next change

```text
Test this case: A page returns status 200 but contains an error screen or stale data.
Expected: The report separates observed facts from guesses about the cause.
Make the smallest necessary change. Keep the original checks.
Rerun the relevant tests and inspect the result.
Report actual evidence, failures and what is still untested.
```

## Your build

Check response status, latency and expected content on a local test server first. With permission, run the same checks against your own URL.

## Acceptance checks

- [ ] The change matches the requested artifact
- [ ] The failure case was tried and recorded
- [ ] Existing behavior still works
- [ ] Evidence and remaining limits are documented

## Evidence to keep

Save the original request, the relevant diff, an actual screenshot or output, and what remains untested. Do not claim a local fixture is a live agent, MCP connection, payment, cloud deployment, or production safeguard.

## References

- [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status)
- [GitHub Actions](https://docs.github.com/en/actions/get-started/understand-github-actions)
