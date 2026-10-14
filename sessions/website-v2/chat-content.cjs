module.exports = [
  [
    "result",
    "One question. One useful answer.",
    "demo",
    null,
    "A visitor asks: \"How do I download a poster?\" The site shows the instructions and their source."
  ],
  [
    "route",
    "Three upgrades for your website",
    "steps",
    [
      [
        "Ask",
        "Find answers in your own pages."
      ],
      [
        "Organize",
        "Keep the facts clear and current."
      ],
      [
        "Maintain",
        "Check changes before publishing."
      ]
    ]
  ],
  [
    "search-flow",
    "Start with your own content",
    "flow",
    [
      "Visitor asks",
      "Search your FAQ",
      "Show text + source"
    ],
    "Site-only search runs without an AI key. It does not search the internet."
  ],
  [
    "build-search",
    "Add \"Ask this site\"",
    "prompt",
    "Add an Ask this site box to my existing website.\nSearch only my approved public FAQ content.\nShow the matching text and its source link.\nIf nothing matches, say so. Keep existing features working."
  ],
  [
    "try-search",
    "Try a question",
    "search",
    null,
    "This is the working site-only search. It matches words; it is not an AI model."
  ],
  [
    "unknown",
    "No source? Do not guess.",
    "compare",
    [
      "Question",
      "Do you offer refunds?",
      "Answer",
      "I couldn't find that information on this website."
    ],
    "The same rule applies when we add AI."
  ],
  [
    "ai-choice",
    "AI can help write the answer",
    "compare",
    [
      "Site-only search",
      "Finds matching text and shows it as written.",
      "Hosted AI answer",
      "Uses selected site content to write a response."
    ],
    "Both need good source material. AI can still get an answer wrong."
  ],
  [
    "server",
    "Your server keeps the key",
    "architecture",
    null,
    "The browser sends a question. Only the server calls the AI service."
  ],
  [
    "vercel",
    "Connect the optional AI on Vercel",
    "steps",
    [
      [
        "Import the project",
        "Connect your GitHub repository and open a preview."
      ],
      [
        "Add server settings",
        "Store the key and selected model in Environment Variables."
      ],
      [
        "Enable and check",
        "Set limits, redeploy, and test a real answer."
      ]
    ],
    "Use the included setup guide. The hosted AI path still needs your credentials and a live check."
  ],
  [
    "key",
    "Never put an API key in the page",
    "compare",
    [
      "Server only",
      "AI_GATEWAY_API_KEY\nStored in Vercel settings.",
      "Never public",
      "Not in HTML, browser JavaScript, GitHub, or a screenshot."
    ],
    "The key lets the website use your AI account. Visitors do not need to see it."
  ],
  [
    "selected-context",
    "Send the useful facts, not everything",
    "flow",
    [
      "One question",
      "Relevant FAQ text",
      "AI response + source"
    ],
    "Do not send private documents. Accept only source links from the pages the server selected."
  ],
  [
    "launch",
    "Before other people use the AI",
    "checks",
    [
      "Limit question and answer length",
      "Set a shared request limit and spending budget",
      "Handle errors without inventing an answer",
      "Check answers against their source pages"
    ]
  ],
  [
    "where-facts",
    "Good answers need clear notes",
    "compare",
    [
      "Before",
      "Facts scattered across pages and old notes.",
      "After",
      "A small, reviewed knowledge folder for this website."
    ],
    "Start with the FAQ you already used. Add structure only when it helps."
  ],
  [
    "karpathy",
    "Karpathy's LLM Wiki idea",
    "wiki-idea",
    null,
    "An idea file by Andrej Karpathy, not an app you install. Our example is a small adaptation."
  ],
  [
    "wiki-file",
    "One page, one clear fact",
    "wiki-page",
    null,
    "Keep a source and review date. A model can draft the page; a person checks it."
  ],
  [
    "readers",
    "Two readers. Different information.",
    "compare",
    [
      "Visitor chat",
      "Reads approved public facts from wiki/.",
      "Your coding agent",
      "Reads AGENTS.md to understand how to work on the project."
    ],
    "Keep private instructions out of the public chat. Instructions guide an agent; permissions and checks limit what it can do."
  ],
  [
    "wiki-prompt",
    "Ask AI to organize, then review",
    "prompt",
    "Read my existing pages and the relevant source notes.\nDraft a short wiki page with a source and review date.\nFlag missing or conflicting facts. Do not invent answers.\nShow the change for approval before publishing it."
  ],
  [
    "update",
    "Add one useful answer",
    "update",
    null,
    "Question: \"Which colour options are available?\" Add the existing Ember, Blue, and Lime options to the FAQ."
  ],
  [
    "answer-checks",
    "Keep a few questions as checks",
    "table",
    [
      [
        "Download a poster?",
        "Instructions + a source"
      ],
      [
        "Do you offer refunds?",
        "No answer invented"
      ],
      [
        "Which colour options?",
        "New FAQ appears after the update"
      ]
    ],
    "Check the source and meaning, not the exact wording of an AI response."
  ],
  [
    "security",
    "Keep the website and key safe",
    "steps",
    [
      [
        "Secrets",
        "Keep keys out of Git. Rotate an exposed key."
      ],
      [
        "Dependencies",
        "Review updates and security alerts."
      ],
      [
        "Permissions",
        "The visitor chat can answer. It cannot edit or run tools."
      ]
    ],
    "AI can help review a change. Automated checks and AI review are not a complete security audit."
  ],
  [
    "ci",
    "GitHub repeats your checks",
    "flow",
    [
      "Propose a change",
      "Run checks",
      "Review the result"
    ],
    "This is CI: continuous integration. Tests check search, source links, errors, and existing features."
  ],
  [
    "release",
    "Preview first. Publish after review.",
    "flow",
    [
      "GitHub branch",
      "Vercel preview",
      "Human approval",
      "Production"
    ],
    "Require checks and reviews in GitHub settings. A workflow file alone does not block an unsafe merge."
  ],
  [
    "maintain",
    "When something goes wrong",
    "steps",
    [
      [
        "Reproduce",
        "Save the question and the incorrect result."
      ],
      [
        "Repair",
        "Fix the source or code. Add a check."
      ],
      [
        "Recover",
        "Return to a known-good release if needed."
      ]
    ],
    "Review logs without exposing keys or private questions. Verify the published website after every release."
  ],
  [
    "your-turn",
    "Try it on your own website",
    "checks",
    [
      "Add one Ask this site box",
      "Use three approved facts and source links",
      "Try a known question and an unknown question",
      "Update one fact, run checks, and review the preview"
    ]
  ],
  [
    "next",
    "A starting point for the next classes",
    "steps",
    [
      [
        "Coding agents",
        "Give better tasks and review their work."
      ],
      [
        "Agent systems",
        "Add useful tools with clear permissions."
      ],
      [
        "Context engineering",
        "Maintain deeper project knowledge."
      ]
    ],
    "Today: one website, a small knowledge folder, and a repeatable update process."
  ],
  [
    "questions",
    "Questions & thanks",
    "close",
    null,
    "No one codes alone."
  ]
];
