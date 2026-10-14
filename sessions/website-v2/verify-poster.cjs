'use strict';
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { pathToFileURL } = require('node:url');
const { chromium } = require('playwright');
const sharp = require('sharp');

const root = __dirname;
const report = { checkedAt: new Date().toISOString(), scope: 'Offline poster content, fonts, geometry and PNG exports', exports: [], issues: [] };

(async () => {
  const browser = await chromium.launch({ headless: true, ...(process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH } : {}) });
  try {
    for (const scale of [1, 2]) {
      const context = await browser.newContext({ offline: true, viewport: { width: 1080, height: 1350 }, deviceScaleFactor: scale });
      const page = await context.newPage();
      page.on('pageerror', error => report.issues.push(error.message));
      page.on('requestfailed', request => report.issues.push('Failed resource: ' + request.url()));
      await page.goto(pathToFileURL(path.join(root, 'poster.html')).href);
      await page.evaluate(() => document.fonts.ready);
      const text = await page.locator('.poster').innerText();
      for (const required of [/AI 101/, /AI for All\. AI for Good\./, /Course 01.*Session 02 of 05/i, /Build and publish your first website with AI/, /Your website,\s+version 2/, /search and an AI help chat/, /LLM wiki/, /GitHub CI\/CD/, /THURSDAY/, /16:00.*18:00/, /15 October 2026/, /Spaces Stortorvet.*Oslo/, /oslovibecoding.tech/]) {
        assert.match(text, required);
      }
      assert.doesNotMatch(text, /HANDS-ON WORKSHOP|shortlists|useful export|Welcome Week/);
      assert.equal(new Date('2026-10-15T12:00:00Z').getUTCDay(), 4);
      const geometry = await page.evaluate(() => {
        const issues = [];
        const poster = document.querySelector('.poster');
        const children = [...poster.children];
        const bounds = children.map(el => ({ tag: el.className || el.tagName, top: el.getBoundingClientRect().top, bottom: el.getBoundingClientRect().bottom }));
        for (let i = 1; i < bounds.length; i++) {
          if (bounds[i].top < bounds[i - 1].bottom - 1) issues.push('Block overlap: ' + bounds[i].tag);
        }
        for (const el of poster.querySelectorAll('*')) {
          if (el.scrollWidth > el.clientWidth + 1 && getComputedStyle(el).display !== 'inline') issues.push('Horizontal overflow: ' + el.className);
          for (const node of el.childNodes) {
            if (node.nodeType !== Node.TEXT_NODE || !node.textContent.trim()) continue;
            const range = document.createRange();
            range.selectNodeContents(node);
            for (const rect of range.getClientRects()) {
              if (rect.left < 71 || rect.right > 1009 || rect.top < 50 || rect.bottom > 1306) issues.push('Text outside safe area: ' + node.textContent.trim());
            }
          }
        }
        for (const selector of ['header', '.details', 'footer', '.weekly-outcomes li']) {
          for (const row of poster.querySelectorAll(selector)) {
            const columns = [...row.children].map(el => el.getBoundingClientRect());
            for (let i = 1; i < columns.length; i++) if (columns[i].left < columns[i - 1].right) issues.push('Column overlap: ' + selector);
          }
        }
        for (const font of ['700 44px Space', '500 32px Space', '400 23px Geist', '400 22px Mono']) {
          if (!document.fonts.check(font)) issues.push('Missing font: ' + font);
        }
        if (poster.scrollHeight > poster.clientHeight + 1) issues.push('Vertical overflow');
        return { bounds, issues };
      });
      report.issues.push(...geometry.issues);
      if (scale === 1) report.blocks = geometry.bounds;
      const filename = 'poster-' + (1080 * scale) + '.png';
      const output = path.join(root, filename);
      await page.locator('.poster').screenshot({ path: output });
      const metadata = await sharp(output).metadata();
      assert.equal(metadata.width, 1080 * scale);
      assert.equal(metadata.height, 1350 * scale);
      const stats = await sharp(output).stats();
      assert.ok(stats.channels.slice(0, 3).some(channel => channel.stdev > 20), 'Poster must not be blank');
      report.exports.push({ file: filename, width: metadata.width, height: metadata.height });
      await context.close();
    }
    fs.mkdirSync(path.join(root, 'qa'), { recursive: true });
    fs.writeFileSync(path.join(root, 'qa/poster-report.json'), JSON.stringify(report, null, 2) + '\n');
    assert.deepEqual(report.issues, []);
    console.log(JSON.stringify(report, null, 2));
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
