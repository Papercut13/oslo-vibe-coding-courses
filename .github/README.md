# Verification workflow

The tested local commands are prepared in workflow-templates/course-materials.yml. This is a template, not an active Actions workflow.

The publishing GitHub CLI token does not have the workflow scope, so GitHub rejected the initial push containing .github/workflows/verify.yml. The materials were published without changing account permissions. No remote CI run is claimed.

After the owner authorizes workflow access, move the template to .github/workflows/verify.yml and commit it. It builds and verifies posters, slides, the portfolio and site-chat on main pushes, pull requests and manual dispatch. Then inspect the actual run before claiming CI is passing.
