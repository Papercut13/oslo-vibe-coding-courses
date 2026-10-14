const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const {pathToFileURL} = require('node:url');
const req = process.env.CODEX_NODE_MODULES ? require('node:module').createRequire(path.join(process.env.CODEX_NODE_MODULES,'package.json')) : require;
const {chromium} = req('playwright');
const sharp = req('sharp');
const root = __dirname;
(async()=>{
  const report={date:new Date().toISOString(),offline:true,checks:[],errors:[]};
  const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
  const context=await browser.newContext({viewport:{width:1280,height:900},offline:true,acceptDownloads:true});
  const page=await context.newPage();page.on('pageerror',e=>report.errors.push(e.message));
  try{
    await page.goto(pathToFileURL(path.join(root,'project/index.html')).href);await page.evaluate(()=>document.fonts.ready);
    const pixels=await page.locator('.project canvas').evaluateAll(canvases=>canvases.map(c=>Array.from(c.getContext('2d').getImageData(10,10,1,1).data).join(',')));
    assert.equal(new Set(pixels).size,3);
    for(const [category,count] of [['Type',2],['Composition',1],['All',3]]){await page.click(`[data-filter="${category}"]`);assert.equal(await page.locator('.project:visible').count(),count);}
    report.checks.push('All three canvas artworks render and category counts are 3/2/1.');
    await page.click('[data-open="form"]');await page.fill('#headline','BUILD AND CHECK');await page.click('[data-palette="blue"]');await page.click('#save');
    assert.equal(await page.textContent('#editor-status'),'Saved on this device.');
    await page.reload();await page.evaluate(()=>document.fonts.ready);await page.click('#resume');
    assert.equal(await page.inputValue('#headline'),'BUILD AND CHECK');assert.equal(await page.getAttribute('[data-palette="blue"]','aria-pressed'),'true');
    const waiting=page.waitForEvent('download');await page.click('#export');const download=await waiting;const output=path.join(root,'qa/export-proof.png');await download.saveAs(output);
    const meta=await sharp(output).metadata();assert.equal(meta.width,900);assert.equal(meta.height,1125);
    report.checks.push('Saved headline/palette survive reload and real PNG export is 900 x 1125.');
    await page.evaluate(()=>{Storage.prototype.setItem=()=>{throw new Error('Deliberate storage failure');};});
    await page.fill('#headline','KEEP THIS EDIT');await page.click('#save');assert.match(await page.textContent('#editor-status'),/Storage unavailable/);assert.equal(await page.inputValue('#headline'),'KEEP THIS EDIT');
    await page.keyboard.press('Escape');assert.equal(await page.locator('#editor').isVisible(),false);assert.ok(await page.locator('#resume').evaluate(e=>e===document.activeElement));
    report.checks.push('A failed save preserves the edit; Escape restores focus.');
    for(const [width,height] of [[1280,800],[768,1024],[390,844]]){
      await page.setViewportSize({width,height});await page.reload();await page.evaluate(()=>document.fonts.ready);
      assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
      await page.screenshot({path:path.join(root,`qa/project-${width}.png`),fullPage:true});
      await page.click('[data-open="open"]');assert.ok(await page.locator('#editor').evaluate(e=>e.scrollWidth<=e.clientWidth+2));
      await page.fill('#headline','ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRS');await page.click('[data-palette="lime"]');await page.locator('#export').scrollIntoViewIfNeeded();assert.ok(await page.locator('#export').isVisible());await page.click('#close-editor');
    }
    report.checks.push('Responsive gallery and editor verified at 1280, 768, and 390 pixels.');
    assert.equal(report.errors.length,0);
  }catch(e){report.errors.push(e.stack);process.exitCode=1;}finally{await browser.close();fs.writeFileSync(path.join(root,'qa/project-report.json'),JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));}
})();
