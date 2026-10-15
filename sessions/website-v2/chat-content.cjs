// [id, title, type, data, note]. Chapters start at "where-facts" and "update" (see build-site-chat.cjs).
module.exports = [
  ["result", "One question. One useful answer.", "demo", null,
    "A visitor asks: \"How do I download a poster?\" The site shows the instructions and their source."],
  ["route", "Today you build three things", "steps", [
    ["Ask", "A search box that answers from your own FAQ."],
    ["Organize", "One reviewed wiki page with a source."],
    ["Maintain", "One fact updated, tested and checked."]
  ], "Three labs. Each one ends with something you can show the room."],
  ["lab-setup", "Lab 0: Get ready", "lab", {
    time: "5 min",
    goal: "Open the working example and see one answer with its source.",
    steps: [
      "Open last week's website folder in your coding agent, or download the example from Workshop files.",
      "Open site-chat/index.html in your browser.",
      "Click \"Ask this site\" and type: How do I download a poster?",
      "Click the source link under the answer."
    ],
    done: "You see the 900 x 1125 PNG answer and its source page opens."
  }],
  ["search-flow", "Start with your own content", "flow", ["Visitor asks", "Search your FAQ", "Show text + source"],
    "Site-only search runs without an AI key. It does not search the internet."],
  ["try-search", "Try a question", "search", null,
    "This is the working site-only search. It matches words; it is not an AI model."],
  ["predict", "Predict first, then press", "predict", [
    "How do I download a poster?",
    "export png",
    "How do I get a PNG?",
    "Which color options are available?",
    "Do you offer refunds?"
  ], "Every important word must appear in an approved FAQ. \"get\" and the US spelling \"color\" are not in this one."],
  ["unknown", "No source? Do not guess.", "compare", [
    "Question", "Do you offer refunds?",
    "Answer", "I couldn't find that information on this website."
  ], "The same rule applies when we add AI."],
  ["build-search", "Lab 1: Add \"Ask this site\"", "prompt",
    "Add an Ask this site box to my existing website.\nSearch only my approved public FAQ content.\nShow the matching text and its source link.\nIf nothing matches, say so. Keep existing features working."],
  ["lab-search", "Lab 1: Build it on your site", "lab", {
    time: "15 min",
    goal: "Your own website answers three questions from your own facts.",
    steps: [
      "Paste the request into your coding agent. Ask for its plan in three lines before it edits.",
      "Give it three real facts from your site, each with the page it came from.",
      "Ask one known question, one unknown question and one with different wording.",
      "Open last week's features again: filters, editor, saved draft."
    ],
    done: "Known gives an answer + source. Unknown says so. Nothing else broke."
  }],
  ["build-check", "Checkpoint: review what the agent built", "checks", [
    "It searches only my FAQ, not the internet",
    "Every answer shows a source link that opens",
    "A question with no match says so",
    "Last week's features still work"
  ], "Something failed? Give the agent the exact question and what you saw. Fix one thing at a time."],
  ["ai-choice", "AI can help write the answer", "compare", [
    "Site-only search", "Finds matching text and shows it as written.",
    "Hosted AI answer", "Uses selected site content to write a response."
  ], "Both need good source material. AI can still get an answer wrong."],
  ["server", "Your server keeps the key", "architecture", null,
    "The browser sends a question. Only the server calls the AI service."],
  ["leak", "Spot the leak", "leak", [
    ["app.js (runs in the browser)", "fetch(aiUrl, {\n  headers: {\n    Authorization: 'Bearer ' + MY_KEY\n  }\n})", "Leak", "Anyone can open the browser's developer tools and copy the key."],
    ["api/chat.mjs (runs on Vercel)", "const key =\n  process.env.AI_GATEWAY_API_KEY;", "Safe", "The key is read on the server from Vercel settings. Visitors never receive it."],
    ["A Git commit", "git add .env.local\ngit commit -m \"setup\"\ngit push", "Leak", "The key is now in GitHub history. Rotate it, then add .env.local to .gitignore."]
  ], "Decide for each card first. Then open it to check."],
  ["key", "Never put an API key in the page", "compare", [
    "Server only", "AI_GATEWAY_API_KEY\nStored in Vercel settings.",
    "Never public", "Not in HTML, browser JavaScript, GitHub, or a screenshot."
  ], "The key lets the website use your AI account. Visitors do not need to see it."],
  ["vercel", "Connect the optional AI on Vercel", "steps", [
    ["Import the project", "Connect your GitHub repository and open a preview."],
    ["Add server settings", "Store the key and selected model in Environment Variables."],
    ["Enable and check", "Set limits, redeploy, and test a real answer."]
  ], "Use the included setup guide. The hosted AI path still needs your credentials and a live check."],
  ["selected-context", "Send the useful facts, not everything", "flow", ["One question", "Relevant FAQ text", "AI response + source"],
    "Do not send private documents. Accept only source links from the pages the server selected."],
  ["launch", "Before other people use the AI", "checks", [
    "Limit question and answer length",
    "Set a shared request limit and spending budget",
    "Handle errors without inventing an answer",
    "Check answers against their source pages"
  ]],
  ["where-facts", "Good answers need clear notes", "compare", [
    "Before", "Facts scattered across pages and old notes.",
    "After", "A small, reviewed knowledge folder for this website."
  ], "Start with the FAQ you already used. Add structure only when it helps."],
  ["karpathy", "Karpathy's LLM Wiki idea", "wiki-idea", null,
    "An idea file by Andrej Karpathy, not an app you install. Our example is a small adaptation."],
  ["wiki-file", "One page, one clear fact", "wiki-page", null,
    "Keep a source and review date. A model can draft the page; a person checks it."],
  ["wiki-anatomy", "Follow one fact through the folder", "files", [
    ["1 / sources/editor.md", "The editor lets a visitor\nchange the headline and\npalette. The Export PNG\nbutton downloads the\ncurrent design as a\n900 x 1125 pixel PNG.\nImplemented in app.js,\nposter.js and index.html."],
    ["2 / wiki/download.md", "Open a poster from\nSelected work, change the\nheadline or palette, then\nchoose Export PNG. Your\ncurrent design downloads\nas a 900 x 1125 pixel PNG."],
    ["3 / wiki/manifest.json", "{\n  \"id\": \"download\",\n  \"title\": \"Download a poster\",\n  \"file\": \"download.md\",\n  \"source\": \"sources/editor.md\",\n  \"verifiedOn\": \"2026-10-14\",\n  \"public\": true\n}"]
  ], "Raw fact, then the short visitor answer, then the approval record. Only public manifest entries reach the search."],
  ["readers", "Two readers. Different information.", "compare", [
    "Visitor chat", "Reads approved public facts from wiki/.",
    "Your coding agent", "Reads AGENTS.md to understand how to work on the project."
  ], "Keep private instructions out of the public chat. Instructions guide an agent; permissions and checks limit what it can do."],
  ["wiki-prompt", "Ask AI to organize, then review", "prompt",
    "Read my existing pages and the relevant source notes.\nDraft a short wiki page with a source and review date.\nFlag missing or conflicting facts. Do not invent answers.\nShow the change for approval before publishing it."],
  ["lab-wiki", "Lab 2: Write one wiki page", "lab", {
    time: "15 min",
    goal: "One question visitors really ask, answered from a source you can point to.",
    steps: [
      "Pick a real question about your site: opening hours, prices, how to contact you.",
      "Write where the fact comes from in sources/your-topic.md.",
      "Paste the request. Let the agent draft wiki/your-topic.md.",
      "Read every sentence against the source. Delete anything it added."
    ],
    done: "One short answer, one source, one review date with your name."
  }],
  ["wiki-template", "Template for your own page", "prompt", {
    head: "Copy this into wiki/your-topic.md",
    text: "# How can I contact the studio?\nEmail hello@example.com. We reply within two working days.\n\nSource: sources/contact.md (footer of the home page)\nReviewed: 15 October 2026 by <your name>"
  }],
  ["update", "Add one useful answer", "live-update", null,
    "Simulated here so you can see the effect. In Lab 3 you make the real change in the files."],
  ["lab-update", "Lab 3: Make the real change", "lab", {
    time: "15 min",
    goal: "\"Which colour options are available?\" gets a sourced answer, and nothing else changes.",
    steps: [
      "Check the truth first: core.js lists ember, blue and lime.",
      "Ask the agent to add sources/palettes.md, wiki/palettes.md and a manifest entry.",
      "Update checks/questions.json so the colour question expects palettes.",
      "Review the diff yourself, then run: npm run approve-content -- palettes",
      "Run build, check and test. Ask the question again."
    ],
    done: "The colour answer cites Palette choices. The refund question is still unknown."
  }],
  ["update-diff", "What the change looks like", "files", [
    ["wiki/manifest.json / add", "{\n  \"id\": \"palettes\",\n  \"title\": \"Palette choices\",\n  \"file\": \"palettes.md\",\n  \"source\": \"sources/palettes.md\",\n  \"verifiedOn\": \"2026-10-15\",\n  \"public\": true\n}"],
    ["checks/questions.json / change", "{\n  \"question\":\n    \"Which colour options are available?\",\n- \"expectSource\": null\n+ \"expectSource\": \"palettes\",\n+ \"mustInclude\": \"Ember\"\n}"]
  ], "approve-content adds the review hashes for you. Never type them by hand."],
  ["answer-checks", "Keep a few questions as checks", "table", [
    ["Download a poster?", "Instructions + a source"],
    ["Do you offer refunds?", "No answer invented"],
    ["Which colour options?", "New FAQ appears after the update"],
    ["Which color options? (US spelling)", "Still no match. Decide: add the word, or accept it"]
  ], "Check the source and meaning, not the exact wording of an AI response."],
  ["run-checks", "Run the checks yourself", "commands", {
    cmds: "cd site-chat\nnpm ci --ignore-scripts\nnpm run build\nnpm run check\nnpm test",
    ok: "ℹ tests 36\nℹ pass 36\nℹ fail 0",
    note: "Example run, 15 October 2026, before Lab 3. Your count changes when you add tests."
  }],
  ["break-it", "Break it on purpose", "files", [
    ["You do", "echo \"Downloads are free.\" \\\n  >> wiki/download.md\n\nnpm run check"],
    ["You see", "Error: Content changed:\nreview download and\napprove it before building."],
    ["Undo", "git checkout wiki/download.md\nnpm run check"]
  ], "The check noticed an unreviewed edit. It cannot tell whether \"free\" is true. That part is your review."],
  ["security", "Keep the website and key safe", "steps", [
    ["Secrets", "Keep keys out of Git. Rotate an exposed key."],
    ["Dependencies", "Review updates and security alerts."],
    ["Permissions", "The visitor chat can answer. It cannot edit or run tools."]
  ], "AI can help review a change. Automated checks and AI review are not a complete security audit."],
  ["ci", "GitHub repeats your checks", "flow", ["Propose a change", "Run checks", "Review the result"],
    "This is CI: continuous integration. Tests check search, source links, errors, and existing features."],
  ["release", "Preview first. Publish after review.", "flow", ["GitHub branch", "Vercel preview", "Human approval", "Production"],
    "Require checks and reviews in GitHub settings. A workflow file alone does not block an unsafe merge."],
  ["maintain", "When something goes wrong", "steps", [
    ["Reproduce", "Save the question and the incorrect result."],
    ["Repair", "Fix the source or code. Add a check."],
    ["Recover", "Return to a known-good release if needed."]
  ], "Review logs without exposing keys or private questions. Verify the published website after every release."],
  ["your-turn", "Build time: pick your track", "steps", [
    ["Starter", "Use the Studio Launch example. Do Lab 3 and show the before and after."],
    ["Builder", "Add Ask this site to your own website with three facts and sources."],
    ["Stretch", "Add wiki/ and checks/ to your site. Open a pull request and review the preview."]
  ], "Stuck for more than five minutes? Ask your neighbour first, then a mentor. No one codes alone."],
  ["showcase", "Show us in 60 seconds", "checks", [
    "One useful answer with its source",
    "One honest \"I couldn't find that\"",
    "One fact you updated and tested",
    "Where your facts live and who approves changes"
  ]],
  ["next", "A starting point for the next classes", "steps", [
    ["Coding agents", "Give better tasks and review their work."],
    ["Agent systems", "Add useful tools with clear permissions."],
    ["Context engineering", "Maintain deeper project knowledge."]
  ], "Today: one website, a small knowledge folder, and a repeatable update process."],
  ["questions", "Questions & thanks", "close", null, "No one codes alone."]
];
