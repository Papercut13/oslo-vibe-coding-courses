# Studio Launch

A fictional creative portfolio with three original, editable poster studies. Open `index.html` directly. All fonts, icons, and scripts are local. No dependency installation is needed for the site. The artwork is rendered by the same canvas code used for PNG export.

The page has category filters, a keyboard-accessible modal editor, headline and palette controls, device-local draft saving, and PNG export. There are no accounts, checkout, remote data storage, or AI calls in the website. An AI coding agent helped build the project; the website is ordinary HTML, CSS, and JavaScript.

Run `npm test` with Node 22 or later for contract tests. `npm run check` checks JavaScript syntax. These checks do not replace browser, accessibility, or security testing.

The included GitHub Actions workflow runs these commands. It has not been run on GitHub or connected to a hosting account. Before publishing, review the repository contents, check the current runner's Node version, configure required checks and branch protections, and test the actual hosted site. Git pushes are not automatically gated by the existence of a test file.

Drafts are stored in localStorage, not a cloud database. Private browsing, storage restrictions, clearing browser data, or opening a different origin can change or remove that state. The site reports failed writes and retains the current design.

The workshop bookmark exercise is intentionally not implemented in the reference. Use the BRIEF and PROMPTS to add it with your agent.
