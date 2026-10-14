const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const docs=require('../knowledge.json'),{createSearch}=require('../search.js'),search=createSearch(docs);
for(const c of require('../checks/questions.json'))test(c.question,()=>{
 const result=search(c.question);
 if(!c.expectSource)return assert.equal(result.length,0);
 assert.equal(result[0].id,c.expectSource);assert.ok(result[0].text.includes(c.mustInclude));assert.equal(result[0].url,'help.html#'+c.expectSource);
});
test('Blank and stop-word queries give no arbitrary answer',()=>{assert.deepEqual(search('  '),[]);assert.deepEqual(search('how can i'),[]);});
test('Case does not change search',()=>assert.equal(search('DOWNLOAD POSTER')[0].id,'download'));
test('Only reviewed public wiki entries are indexed',()=>{
 assert.equal(docs.length,require('../wiki/manifest.json').entries.length);assert.ok(docs.every(d=>/^help\.html#[a-z-]+$/.test(d.url)));
 assert.doesNotMatch(JSON.stringify(docs),/sync to your account|AGENTS.md|API_KEY/);
});
test('A newly reviewed fact makes an unanswered question searchable',()=>{
 const before=docs.filter(d=>d.id!=='palettes'),updated=createSearch([...before,{id:'palettes',title:'Palette choices',text:'Available colour options are Ember, Blue, and Lime.',url:'help.html#palettes'}]);
 assert.equal(createSearch(before)('Which colour options are available?').length,0);
 assert.equal(updated('Which colour options are available?')[0].id,'palettes');
});
test('Sources and wiki match their recorded review hashes',()=>assert.equal(require('../scripts/content.cjs').readEntries().length,require('../wiki/manifest.json').entries.length));
test('Published knowledge matches the reviewed wiki, not a stale build',()=>{
 const current=require('../scripts/content.cjs').readEntries().map(({id,title,text,url,verifiedOn})=>({id,title,text,url,verifiedOn}));
 assert.deepEqual(docs,current);
});
test('Client sends question only and renders text rather than HTML',()=>{
 const text=fs.readFileSync(path.join(__dirname,'../chat.js'),'utf8');
 assert.match(text,/JSON.stringify\(\{question\}\)/);assert.doesNotMatch(text,/innerHTML|AI_GATEWAY_API_KEY/);
});
