#!/usr/bin/env bash
set -euo pipefail
node --version
npm ci
npx playwright install --with-deps chromium
npm --prefix sessions/website-v2/site-chat ci --ignore-scripts
npm run build
npm test
