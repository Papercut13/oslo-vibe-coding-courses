# Week 05: Launch with a way back

Course 1, session 5 of 5: Build and publish your first website with AI.

## Outcome

A release checklist, release notes and a rollback rehearsal.

## Start

Continue with: Your site, search, knowledge folder and GitHub checks.

Use the included local reference and fixtures for the demonstration. Your coding agent may need its own account. No credential sharing is required. Live integrations are participant work in an authorized environment, not something this bundle has already configured.

## First request

```text
Read the relevant project files before changing code.
Review a Vercel preview, publish only with approval, and verify the URL from another device. Rehearse a visible mistake and manual rollback on a disposable preview.
Keep existing features working and secrets server-side.
Show the plan and affected files before implementation.
Do not publish, enable spending or change accounts without approval.
```

## Next change

```text
Test this case: Remove AI configuration in the preview and rehearse a failed release.
Expected: Site-only search remains usable; recovery is verified against the original symptom.
Make the smallest necessary change. Keep the original checks.
Rerun the relevant tests and inspect the result.
Report actual evidence, failures and what is still untested.
```

## Your build

Review a Vercel preview, publish only with approval, and verify the URL from another device. Rehearse a visible mistake and manual rollback on a disposable preview.

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
