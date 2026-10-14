# Week 10: Ship through a pull request

Course 2, session 5 of 5: How to use AI agents to help you code.

## Outcome

A reviewable feature PR, preview and release note.

## Start

Continue with: Your search-link feature and reusable review procedure.

Use the included local reference and fixtures for the demonstration. Your coding agent may need its own account. No credential sharing is required. Live integrations are participant work in an authorized environment, not something this bundle has already configured.

## First request

```text
Read the relevant project files before changing code.
Have the agent prepare a focused PR with actual test results. Inspect CI, the hosted preview and the diff before deciding whether to merge.
Keep existing features working and secrets server-side.
Show the plan and affected files before implementation.
Do not publish, enable spending or change accounts without approval.
```

## Next change

```text
Test this case: CI is green but the preview has missing configuration.
Expected: The review catches the difference; no merge is justified by test status alone.
Make the smallest necessary change. Keep the original checks.
Rerun the relevant tests and inspect the result.
Report actual evidence, failures and what is still untested.
```

## Your build

Have the agent prepare a focused PR with actual test results. Inspect CI, the hosted preview and the diff before deciding whether to merge.

## Acceptance checks

- [ ] The change matches the requested artifact
- [ ] The failure case was tried and recorded
- [ ] Existing behavior still works
- [ ] Evidence and remaining limits are documented

## Evidence to keep

Save the original request, the relevant diff, an actual screenshot or output, and what remains untested. Do not claim a local fixture is a live agent, MCP connection, payment, cloud deployment, or production safeguard.

## References

- [GitHub Actions](https://docs.github.com/en/actions/get-started/understand-github-actions)
- [Vercel and GitHub](https://vercel.com/docs/git/vercel-for-github)
- [GitHub protected branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)
