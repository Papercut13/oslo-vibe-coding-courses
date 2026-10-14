const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const root=path.join(__dirname,'..');
const hash=text=>crypto.createHash('sha256').update(text).digest('hex');
function readEntries({verify=true}={}){
 const {entries}=JSON.parse(fs.readFileSync(path.join(root,'wiki/manifest.json'),'utf8'));
 const ids=new Set();
 return entries.map(e=>{
  if(!/^[a-z][a-z0-9-]*$/.test(e.id)||ids.has(e.id)||e.public!==true||e.file!==e.id+'.md'||!/^sources\/[a-z-]+\.md$/.test(e.source)||!/^\d{4}-\d{2}-\d{2}$/.test(e.verifiedOn))throw Error('Invalid or private wiki entry');
  ids.add(e.id);
  const source=fs.readFileSync(path.join(root,e.source),'utf8'),text=fs.readFileSync(path.join(root,'wiki',e.file),'utf8').trim();
  if(!text||text.length>4000||!e.title||e.title.length>100)throw Error('Invalid wiki content');
  if(verify&&(e.sourceHash!==hash(source)||e.wikiHash!==hash(text)))throw Error('Content changed: review '+e.id+' and approve it before building.');
  return {...e,text,sourceHash:hash(source),wikiHash:hash(text),url:'help.html#'+e.id};
 });
}
module.exports={root,hash,readEntries};
