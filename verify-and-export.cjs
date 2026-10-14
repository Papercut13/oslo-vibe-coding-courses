const fs = require('node:fs');
const path = require('node:path');
const {pathToFileURL, fileURLToPath} = require('node:url');
const {createRequire} = require('node:module');
const assert = require('node:assert/strict');
const runtime = process.env.CODEX_NODE_MODULES;
const deps = runtime ? createRequire(path.join(runtime, 'package.json')) : require;
const {chromium} = deps('playwright');
const sharp = deps('sharp');
const labs = require('./labs/core.js');
const root = __dirname;
const maps = require('./slide-map.json');
const qa = path.join(root, 'qa');
fs.mkdirSync(qa, {recursive:true});
const url = relative => pathToFileURL(path.join(root, relative)).href;
const report = {date:new Date().toISOString(), scope:'Offline Chromium; native HTML, local fixtures, no remote services', slides:0, posters:0, interactions:0, errors:[], layouts:[], viewports:[]};
const num = n => String(n).padStart(2, '0');
async function ready(page) { await page.evaluate(() => document.fonts.ready); }
async function sheet(files, out, columns, width, height) {
  const tiles = [];
  for (let i=0;i<files.length;i++) {
    const input = await sharp(files[i]).resize(width,height,{fit:'contain',background:'#26232d'}).png().toBuffer();
    tiles.push({input,left:(i%columns)*width,top:Math.floor(i/columns)*height});
  }
  await sharp({create:{width:columns*width,height:Math.ceil(files.length/columns)*height,channels:3,background:'#26232d'}}).composite(tiles).png().toFile(out);
}
async function geometry(page, week, slide, viewport) {
  const issues = await page.evaluate(() => {
    const section=Reveal.getCurrentSlide(), frame=section.querySelector('.frame');
    const main=frame.querySelector('main'), header=frame.querySelector('header'), footer=frame.querySelector('footer');
    const m=main.getBoundingClientRect(), h=header.getBoundingClientRect(), f=footer.getBoundingClientRect(), s=section.getBoundingClientRect();
    const problems=[];
    for (const el of main.querySelectorAll('h1,h2,h3,p,pre,.source-list,.checks,.actions,.step,.concept')) {
      const r=el.getBoundingClientRect();
      if(r.top<h.bottom-1||r.bottom>f.top+1||r.left<s.left-1||r.right>s.right+1) problems.push({type:'outside-content',element:el.tagName,text:el.textContent.slice(0,70),box:[r.x,r.y,r.width,r.height]});
      if(el.scrollWidth>el.clientWidth+2)problems.push({type:'horizontal-overflow',text:el.textContent.slice(0,70)});
    }
    if(m.top<h.bottom-1||m.bottom>f.top+1)problems.push({type:'main-frame-collision'});
    const heading=main.querySelector('h2'), after=heading?.nextElementSibling;
    if(after&&heading.getBoundingClientRect().bottom>after.getBoundingClientRect().top+1)problems.push({type:'heading-overlap'});
    const brand=header.querySelector('.brand').getBoundingClientRect(), chapter=header.querySelector('.chapter').getBoundingClientRect();
    if(brand.right>chapter.left)problems.push({type:'header-overlap'});
    for(const img of section.querySelectorAll('img'))if(!img.complete||!img.naturalWidth)problems.push({type:'missing-image',src:img.src});
    return problems;
  });
  if(issues.length)report.layouts.push({week,slide,viewport,issues});
}
async function localLinks(page, label) {
  const links=await page.locator('[href],[src]').evaluateAll(elements=>elements.map(el=>el.href||el.src).filter(x=>typeof x==='string'&&x.startsWith('file:')));
  for(const link of links) {
    const pathname=fileURLToPath(new URL(link));
    if(!fs.existsSync(pathname))report.errors.push(`${label}: missing ${pathname}`);
  }
}
(async()=>{
  const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
  const ctx=await browser.newContext({viewport:{width:1600,height:900},reducedMotion:'reduce',offline:true});
  const page=await ctx.newPage();
  page.on('pageerror',err=>report.errors.push(err.message));
  try {
    if (!process.argv.includes('--decks-only')) {
    // Screenshots are captured from the working local lab, never mocked.
    await page.setViewportSize({width:1280,height:960});
    for(const key of Object.keys(labs.definitions)) {
      await page.goto(url('labs/index.html')+'?lab='+key); await ready(page);
      await page.screenshot({path:path.join(root,'shared/screens',key+'.png')});
      for(let i=0;i<labs.definitions[key].cases.length;i++) {
        await page.selectOption('#case',String(i));await page.click('#run');
        assert.deepEqual(JSON.parse(await page.textContent('#output')),labs.run(key,i));report.interactions++;
      }
    }
    console.log('Captured and exercised all 16 local lab modes.');
    const hi=await browser.newContext({viewport:{width:1080,height:1350},deviceScaleFactor:2,offline:true});
    const poster2=await hi.newPage();
    await page.setViewportSize({width:1080,height:1350});
    for(const m of maps) {
      const folder=`week-${num(m.week)}`;
      await page.goto(url(folder+'/poster.html'));await ready(page);
      const gaps=await page.evaluate(()=>{
        const q=s=>document.querySelector(s).getBoundingClientRect();
        return {promiseToSchedule:q('.schedule').top-q('.promise').bottom,scheduleToFooter:q('footer').top-q('.schedule').bottom};
      });
      for(const [name,gap] of Object.entries(gaps))if(gap<12)report.layouts.push({week:m.week,poster:name,gap});
      await page.screenshot({path:path.join(root,folder,'poster-1080.png')});
      await poster2.goto(url(folder+'/poster.html'));await ready(poster2);
      await poster2.screenshot({path:path.join(root,folder,'poster-2160.png')});report.posters++;
    }
    await hi.close();
    await sheet(maps.map(m=>path.join(root,`week-${num(m.week)}/poster-1080.png`)),path.join(root,'poster-overview.png'),5,270,338);
    console.log('Exported 25 posters at both sizes.',JSON.stringify(report.layouts));
    }
    await page.setViewportSize({width:1600,height:900});
    for(const m of maps) {
      const folder=`week-${num(m.week)}`; const out=path.join(qa,folder);fs.mkdirSync(out,{recursive:true});
      await page.goto(url(folder+'/index.html'));await page.waitForFunction(()=>window.Reveal?.isReady());await ready(page);
      assert.equal(await page.locator('.slides>section').count(),m.slides.length);
      const shots=[];
      for(let i=0;i<m.slides.length;i++) {
        assert.equal(await page.evaluate(()=>Reveal.getIndices().h),i);
        await page.waitForFunction(id=>Reveal.getCurrentSlide().id===id,m.slides[i].id);
        await geometry(page,m.week,m.slides[i].id,'1600x900');
        const screenshot=path.join(out,`${num(i+1)}-${m.slides[i].id}.png`);
        await page.screenshot({path:screenshot});shots.push(screenshot);report.slides++;
        if(i<m.slides.length-1)await page.keyboard.press('ArrowRight');
      }
      for(let i=m.slides.length-2;i>=0;i--){await page.keyboard.press('ArrowLeft');assert.equal(await page.evaluate(()=>Reveal.getIndices().h),i);}
      await localLinks(page,folder);
      if(m.special){await sheet(shots,path.join(qa,folder+'-contact.png'),4,400,225);continue;}
      await page.evaluate(()=>Reveal.slide(3));await page.click('[data-copy="first-prompt"]');
      await page.waitForFunction(()=>document.querySelector('#first-request .copy-state').textContent.length>0);
      assert.equal(await page.locator('#first-request .copy-state').textContent(),'Copied');
      await page.keyboard.press('ArrowRight');assert.equal(await page.evaluate(()=>Reveal.getIndices().h),4);
      const key=await page.getAttribute('body','data-lab');
      for(let i=0;i<labs.definitions[key].cases.length;i++) {
        await page.selectOption('#scenario',String(i));await page.click('#run-lab');
        assert.deepEqual(JSON.parse(await page.textContent('#lab-output')),labs.run(key,i));report.interactions++;
      }
      await page.focus('#scenario');await page.keyboard.press('ArrowRight');assert.equal(await page.evaluate(()=>Reveal.getIndices().h),4);
      await page.evaluate(()=>document.activeElement.blur());await page.evaluate(()=>Reveal.slide(7));await page.click('[data-copy="next-prompt"]');
      await page.waitForFunction(()=>document.querySelector('#next-change .copy-state').textContent.length>0);
      assert.equal(await page.locator('#next-change .copy-state').textContent(),'Copied');
      await page.evaluate(()=>Reveal.slide(9));
      for(const check of await page.locator('.checks input').all())await check.check();
      assert.equal(await page.textContent('.check-counter'),'4 / 4 checked');
      await page.click('#contents-open');assert.equal(await page.locator('#contents').evaluate(e=>e.open),true);
      await page.click('#contents a[href="#/understand"]');await page.waitForFunction(()=>Reveal.getCurrentSlide().id==='understand');
      assert.equal(await page.locator('#contents').evaluate(e=>e.open),false);
      await page.reload();await page.waitForFunction(()=>window.Reveal?.isReady());assert.equal(await page.evaluate(()=>Reveal.getCurrentSlide().id),'understand');
      report.interactions+=10;
      await sheet(shots,path.join(qa,folder+'-contact.png'),4,400,225);
      console.log(`Week ${num(m.week)}: 13 slides, arrows both ways, copy, scenario, checklist, contents, deep link.`);
    }
    for(const viewport of [{width:1280,height:720},{width:390,height:844}]) {
      await page.setViewportSize(viewport);
      for(const m of maps){await page.goto(url(`week-${num(m.week)}/index.html`));await page.waitForFunction(()=>window.Reveal?.isReady());await ready(page);
        for(let i=0;i<m.slides.length;i++){await page.evaluate(i=>Reveal.slide(i),i);await geometry(page,m.week,m.slides[i].id,`${viewport.width}x${viewport.height}`);}
      }
      await page.goto(url('index.html'));await ready(page);await localLinks(page,'library');
      assert.equal(await page.locator('.week-row:visible').count(),25);
      for(let i=1;i<=5;i++){await page.click(`[data-course="${i}"]`);assert.equal(await page.locator('.week-row:visible').count(),5);}
      await page.click('[data-course="all"]');assert.equal(await page.locator('.week-row:visible').count(),25);
      assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
      await page.screenshot({path:path.join(qa,`library-${viewport.width}.png`)});
      await page.goto(url('resources.html'));await localLinks(page,'resources');
      assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
      report.viewports.push(viewport);
    }
    // Check every library thumbnail after its lazy-load trigger.
    await page.goto(url('index.html'));
    for(const img of await page.locator('.thumb img').all()){await img.scrollIntoViewIfNeeded();await img.evaluate(el=>el.decode());assert.ok(await img.evaluate(el=>el.naturalWidth===1080));}
    await page.setViewportSize({width:1600,height:900});await page.goto(url('week-01/index.html'));await page.waitForFunction(()=>window.Reveal?.isReady());
    await page.click('#fullscreen');assert.ok(await page.evaluate(()=>!!document.fullscreenElement));await page.click('#fullscreen');assert.ok(await page.evaluate(()=>!document.fullscreenElement));
  } catch(err) {report.errors.push(err.stack);console.error(err);} finally {
    await browser.close();
    fs.writeFileSync(path.join(qa,'report.json'),JSON.stringify(report,null,2));
    console.log(JSON.stringify(report,null,2));
    if(report.errors.length||report.layouts.length)process.exitCode=1;
  }
})();
