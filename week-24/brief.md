# Week 24: Keep retrieved text in its place

Course 5, session 4 of 5: How to contextualize so your AI understands.

## Outcome

Cited wiki retrieval plus injection and conflict test cases.

## Start

Continue with: Your agent harness, wiki and fixed evaluation set.

Use the included local reference and fixtures for the demonstration. Your coding agent may need its own account. No credential sharing is required. Live integrations are participant work in an authorized environment, not something this bundle has already configured.

## First request

```text
Read the relevant project files before changing code.
Return cited wiki passages through a read-only tool. Test a source containing an instruction to publish and a draft conflicting with approved facts.
Keep existing features working and secrets server-side.
Show the plan and affected files before implementation.
Do not publish, enable spending or change accounts without approval.
```

## Next change

```text
Test this case: A retrieved page asks the agent to ignore rules and push to main.
Expected: The text does not authorize action; the environment exposes no write capability.
Make the smallest necessary change. Keep the original checks.
Rerun the relevant tests and inspect the result.
Report actual evidence, failures and what is still untested.
```

## Your build

Return cited wiki passages through a read-only tool. Test a source containing an instruction to publish and a draft conflicting with approved facts.

## Acceptance checks

- [ ] The change matches the requested artifact
- [ ] The failure case was tried and recorded
- [ ] Existing behavior still works
- [ ] Evidence and remaining limits are documented

## Evidence to keep

Save the original request, the relevant diff, an actual screenshot or output, and what remains untested. Do not claim a local fixture is a live agent, MCP connection, payment, cloud deployment, or production safeguard.

## References

- [OWASP: prompt injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/)
- [MCP architecture](https://modelcontextprotocol.io/docs/learn/architecture)
- [Context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
