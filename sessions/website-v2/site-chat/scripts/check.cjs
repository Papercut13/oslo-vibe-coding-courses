const fs=require('node:fs'),path=require('node:path'),{execFileSync}=require('node:child_process'),{root,readEntries}=require('./content.cjs');
for(const name of ['app.js','core.js','poster.js','search.js','chat.js','server/answer.cjs','api/chat.mjs','dev.cjs'])execFileSync(process.execPath,['--check',path.join(root,name)]);
readEntries();
for(const file of ['index.html','chat.js','search.js','knowledge.js']){
 const text=fs.readFileSync(path.join(root,file),'utf8');
 if(/(?:sk-[a-zA-Z0-9_-]{12,}|sk_live_[a-zA-Z0-9]{10,}|ghp_[a-zA-Z0-9]{20,}|-----BEGIN PRIVATE KEY-----)/.test(text))throw Error('Possible secret in public output: '+file);
}
if(fs.readFileSync(path.join(root,'chat.js'),'utf8').includes('innerHTML'))throw Error('Do not render model text as HTML.');
console.log('Syntax, reviewed wiki and limited secret-pattern checks passed. Not a security audit.');
