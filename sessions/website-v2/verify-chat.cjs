'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),{pathToFileURL,fileURLToPath}=require('node:url'),{spawn,spawnSync,execFileSync}=require('node:child_process');
const {chromium}=require('playwright'),sharp=require('sharp');
const root=__dirname,qa=path.join(root,'qa/chat');fs.mkdirSync(qa,{recursive:true});
const url=p=>pathToFileURL(path.join(root,p)).href,map=require('./slide-map.json');
const report={checkedAt:new Date().toISOString(),slides:map.length,issues:[],viewports:[],scope:'Offline site search and local HTTP; server model calls mocked, no live AI or Vercel deployment'};
for(const args of [['run','build'],['run','check'],['test']]){
 const run=spawnSync('npm',args,{cwd:path.join(root,'site-chat'),encoding:'utf8'});assert.equal(run.status,0,run.stdout+run.stderr);
}
report.unitTests=36;
const zip=path.join(root,'site-chat.zip');if(fs.existsSync(zip))fs.unlinkSync(zip);
execFileSync('zip',['-qr',zip,'site-chat','-x','*/node_modules/*','*/dist/*','*/.env.local','*/.vercel/*','*/.DS_Store'],{cwd:root});
(async()=>{
 const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
 let server;
 try{
  const ctx=await browser.newContext({offline:true,viewport:{width:1280,height:900},reducedMotion:'reduce',acceptDownloads:true});
  const page=await ctx.newPage();page.on('pageerror',e=>report.issues.push({error:e.message}));
  for(const width of [1280,768,390]){
   await page.setViewportSize({width,height:900});await page.goto(url('site-chat/index.html'));await page.evaluate(()=>document.fonts.ready);
   await page.click('#ask-open');assert.equal(await page.locator('#mode-ai').isDisabled(),true);
   await page.fill('#ask-question','How do I download a poster?');await page.click('#ask-send');
   assert.match(await page.textContent('#ask-output'),/900 x 1125/);assert.match(await page.getAttribute('#ask-output a','href'),/help.html#download/);
   assert.match(await page.textContent('#ask-status'),/No AI call/);
   if(width===1280)await page.locator('#ask-dialog').screenshot({path:path.join(root,'shared/screens/site-chat.png')});
   await page.screenshot({path:path.join(qa,'site-'+width+'.png')});
   const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1||document.querySelector('#ask-dialog').scrollWidth>document.querySelector('#ask-dialog').clientWidth+1);
   assert.equal(overflow,false);
   await page.fill('#ask-question','Do you offer refunds?');await page.keyboard.press('Enter');assert.match(await page.textContent('#ask-output'),/couldn't find/);assert.equal(await page.locator('#ask-output a').count(),0);
   await page.fill('#ask-question','<img src=x onerror=alert(1)>');await page.keyboard.press('Enter');assert.equal(await page.locator('#ask-output img').count(),0);
   await page.click('#ask-clear');assert.equal(await page.inputValue('#ask-question'),'');assert.equal(await page.locator('#ask-question').evaluate(e=>e===document.activeElement),true);
   await page.keyboard.press('Escape');assert.equal(await page.locator('#ask-dialog').evaluate(e=>e.open),false);assert.equal(await page.locator('#ask-open').evaluate(e=>e===document.activeElement),true);
   await page.click('[data-filter="Type"]');assert.equal((await page.textContent('#project-count')).trim(),'02');
   await page.click('[data-open="form"]');await page.fill('#headline','ASK THIS SITE');await page.click('#save');await page.keyboard.press('Escape');await page.reload();await page.click('#resume');assert.equal(await page.inputValue('#headline'),'ASK THIS SITE');
   const down=page.waitForEvent('download');await page.click('#export');const png=await down;const meta=await sharp(await png.path()).metadata();assert.equal(meta.width,900);assert.equal(meta.height,1125);await page.keyboard.press('Escape');
  }
  await page.goto(url('site-chat/help.html'));assert.equal(await page.locator('#download').count(),1);assert.match(await page.textContent('#download'),/900 x 1125/);
  for(const [width,height]of [[1600,900],[1280,720],[390,844]]){
   await page.setViewportSize({width,height});await page.goto(url('index.html'));await page.waitForFunction(()=>window.Reveal?.isReady());await page.evaluate(()=>document.fonts.ready);
   for(let i=0;i<map.length;i++){
    await page.evaluate(i=>Reveal.slide(i),i);await page.locator('.present img').evaluateAll(imgs=>Promise.all(imgs.map(img=>img.decode().catch(()=>{}))));
    const issues=await page.evaluate(()=>{
     const s=Reveal.getCurrentSlide(),h=s.querySelector('header').getBoundingClientRect(),f=s.querySelector('footer').getBoundingClientRect(),sr=s.getBoundingClientRect(),out=[];
     for(const el of s.querySelectorAll('main h1,main h2,main h3,main p,main pre,main .flow,main .steps,main .checks,main table,main .server-diagram,main .wiki-example')){
      const r=el.getBoundingClientRect();if(r.top<h.bottom-1||r.bottom>f.top+1||r.left<sr.left-1||r.right>sr.right+1||el.scrollWidth>el.clientWidth+2)out.push({text:el.textContent.slice(0,90),top:r.top,bottom:r.bottom,footer:f.top});
     }
     if(s.querySelector('.brand').getBoundingClientRect().right>s.querySelector('.chapter').getBoundingClientRect().left)out.push('Header overlap');
     for(const img of s.querySelectorAll('img'))if(!img.complete||!img.naturalWidth)out.push('Missing image');
     return out;
    });
    if(issues.length)report.issues.push({slide:map[i].id,width,issues});
    if(width===1600)await page.screenshot({path:path.join(qa,String(i+1).padStart(2,'0')+'.png')});
   }
   report.viewports.push([width,height]);
  }
  await page.setViewportSize({width:1600,height:900});await page.goto(url('index.html')+'#/try-search');await page.waitForFunction(()=>Reveal.getCurrentSlide()?.id==='try-search');
  await page.fill('#demo-question','Do you offer refunds?');await page.press('#demo-question','Enter');assert.match(await page.textContent('#demo-answer'),/couldn't find/);
  await page.keyboard.press('ArrowLeft');assert.equal(await page.evaluate(()=>Reveal.getCurrentSlide().id),'try-search');
  await page.fill('#demo-question','How do I download a poster?');await page.press('#demo-question','Enter');assert.match(await page.textContent('#demo-answer'),/900 x 1125/);
  await page.locator('body').click({position:{x:10,y:10}});await page.keyboard.press('ArrowRight');assert.equal(await page.evaluate(()=>Reveal.getCurrentSlide().id),'unknown');
  await page.keyboard.press('ArrowLeft');assert.equal(await page.evaluate(()=>Reveal.getCurrentSlide().id),'try-search');await page.reload();await page.waitForFunction(()=>Reveal.getCurrentSlide()?.id==='try-search');
  await page.click('#contents-open');assert.equal(await page.locator('#contents').evaluate(e=>e.open),true);await page.keyboard.press('Escape');
  await page.evaluate(()=>Reveal.slide(4));await page.click('[data-copy="build-search-prompt"]');await page.waitForFunction(()=>document.querySelector('#build-search .copy-state').textContent==='Copied');
  await page.evaluate(()=>Reveal.slide(12));await page.locator('#launch input').first().check();assert.equal(await page.locator('#launch input').first().isChecked(),true);
  for(const pathname of ['index.html','resources.html']){
   await page.goto(url(pathname));
   const links=await page.locator('[href],[src]').evaluateAll(nodes=>nodes.map(e=>e.href||e.src).filter(u=>typeof u==='string'&&u.startsWith('file:')));
   for(const link of links)assert.ok(fs.existsSync(fileURLToPath(link)),link);
  }
  // Test the actual HTTP boundary without sending any model request.
  server=spawn(process.execPath,['dev.cjs'],{cwd:path.join(root,'site-chat'),env:{...process.env,PORT:'4193',ENABLE_AI:'false',AI_GATEWAY_API_KEY:'',AI_GATEWAY_MODEL:''},stdio:['ignore','pipe','pipe']});
  await new Promise((resolve,reject)=>{const timer=setTimeout(()=>reject(Error('Server startup timeout')),8000);server.stdout.once('data',()=>{clearTimeout(timer);resolve();});server.once('error',reject);});
  const online=await browser.newContext({viewport:{width:1280,height:900}}),op=await online.newPage();
  await op.goto('http://127.0.0.1:4193');await op.click('#ask-open');await op.check('#mode-ai');await op.fill('#ask-question','How do I download a poster?');await op.click('#ask-send');
  await op.waitForFunction(()=>document.querySelector('#ask-output').textContent.includes('not connected'));
  await op.check('#mode-search');await op.click('#ask-send');assert.match(await op.textContent('#ask-output'),/900 x 1125/);
  const response=await fetch('http://127.0.0.1:4193/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({question:'Do you offer refunds?'})});assert.equal(response.status,200);assert.equal((await response.json()).mode,'no-source');
  assert.equal((await fetch('http://127.0.0.1:4193/.env.local')).status,404);assert.equal((await fetch('http://127.0.0.1:4193/AGENTS.md')).status,404);assert.equal((await fetch('http://127.0.0.1:4193/wiki/manifest.json')).status,404);
  await online.close();
  const tiles=[];for(let i=0;i<map.length;i++)tiles.push({input:await sharp(path.join(qa,String(i+1).padStart(2,'0')+'.png')).resize(400,225).toBuffer(),left:i%4*400,top:Math.floor(i/4)*225});
  await sharp({create:{width:1600,height:Math.ceil(map.length/4)*225,channels:3,background:'#222'}}).composite(tiles).png().toFile(path.join(qa,'contact.png'));
  report.interactions='Offline search/unknown/source links; keyboard focus; plain-text injection input; original editor/save/reload/PNG; slide arrows, hash reload, prompt copy, slide list, checkboxes; local HTTP missing-key/error fallback and private-path exclusions';
 }finally{
  if(server){const exited=new Promise(resolve=>server.once('exit',resolve));server.kill();await exited;}
  await browser.close();fs.writeFileSync(path.join(root,'qa/chat-report.json'),JSON.stringify(report,null,2)+'\n');
 }
 console.log(JSON.stringify(report,null,2));if(report.issues.length)process.exitCode=1;
})().catch(e=>{console.error(e);process.exitCode=1;});
