const fs=require('node:fs'),path=require('node:path'),{root,readEntries}=require('./content.cjs');
const id=process.argv[2];if(!id)throw Error('After reviewing the source and wiki page, pass its ID (or --all).');
const file=path.join(root,'wiki/manifest.json'),manifest=JSON.parse(fs.readFileSync(file));
const current=readEntries({verify:false});if(id!=='--all'&&!current.some(e=>e.id===id))throw Error('Unknown page ID');
manifest.entries=manifest.entries.map(e=>{if(id!=='--all'&&e.id!==id)return e;const x=current.find(x=>x.id===e.id);return {...e,sourceHash:x.sourceHash,wikiHash:x.wikiHash};});
fs.writeFileSync(file,JSON.stringify(manifest,null,2)+'\n');console.log('Recorded review hashes. This is not a semantic fact check.');
