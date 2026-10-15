'use strict';
Reveal.initialize({width:1600,height:900,margin:0,minScale:.1,maxScale:2,hash:true,history:true,controls:true,controlsTutorial:false,progress:true,slideNumber:'c/t',center:false,view:'slide',scrollActivationWidth:null,transition:matchMedia('(prefers-reduced-motion: reduce)').matches?'none':'fade',transitionSpeed:'fast',keyboardCondition:e=>!document.querySelector('dialog[open]')&&!e.target.closest('input,textarea,select,[contenteditable="true"]')});
document.querySelectorAll('[data-copy]').forEach(button=>button.addEventListener('click',async()=>{const text=document.getElementById(button.dataset.copy).textContent;let ok=false;try{await navigator.clipboard.writeText(text);ok=true;}catch{const field=document.createElement('textarea');field.value=text;field.style.cssText='position:fixed;left:-9999px';document.body.append(field);field.select();try{ok=document.execCommand('copy');}catch{}field.remove();button.focus();}button.parentElement.querySelector('.copy-state').textContent=ok?'Copied':'Select text to copy';}));
const dialog=document.querySelector('#contents');
document.querySelector('#contents-open').addEventListener('click',()=>dialog.showModal());
document.querySelector('#contents-close').addEventListener('click',()=>dialog.close());
dialog.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>dialog.close()));
document.querySelector('#fullscreen').addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{}});
const demoSiteBase=new URL('site-chat/',document.currentScript.src);
const search=SiteSearch.createSearch(SiteKnowledge),output=document.querySelector('#demo-answer');
function answer(){
 const docs=search(document.querySelector('#demo-question').value);output.replaceChildren();
 const p=document.createElement('p');p.textContent=docs[0]?.text||"I couldn't find that information on this website.";output.append(p);
 if(docs[0]){const words=document.createElement('p');words.className='matched';words.textContent='Matched words: '+docs[0].terms.join(', ');output.append(words);const a=document.createElement('a');a.textContent='Source: '+docs[0].title;a.href=new URL(docs[0].url,demoSiteBase).href;a.target='_blank';a.rel='noopener';output.append(a);}
}
// Before/after preview of adding one wiki fact. Participants make the real change in their own files.
const paletteFact={id:'palettes',title:'Palette choices',text:'Available colour options are Ember, Blue, and Lime.',url:'help.html',verifiedOn:'2026-10-15'};
const toggle=document.querySelector('#update-toggle'),updateOut=document.querySelector('#update-answer');
let updateSearch=search;
function updateAnswer(){
 const docs=updateSearch(document.querySelector('#update-question').value);updateOut.replaceChildren();
 const tag=document.createElement('span');tag.className='eyebrow';tag.textContent=toggle.getAttribute('aria-pressed')==='true'?'After':'Before';
 const p=document.createElement('p');p.textContent=docs[0]?.text||"I couldn't find that information on this website.";updateOut.append(tag,p);
 if(docs[0]){const s=document.createElement('p');s.className='matched';s.textContent='Source: '+docs[0].title;updateOut.append(s);}
}
toggle.addEventListener('click',()=>{const on=toggle.getAttribute('aria-pressed')!=='true';toggle.setAttribute('aria-pressed',String(on));toggle.querySelector('span').textContent=on?'Remove wiki/palettes.md':'Add wiki/palettes.md';updateSearch=on?SiteSearch.createSearch([...SiteKnowledge,paletteFact]):search;updateAnswer();});
document.querySelector('#update-demo').addEventListener('submit',event=>{event.preventDefault();updateAnswer();});
updateAnswer();
document.querySelector('#search-demo').addEventListener('submit',event=>{event.preventDefault();answer();});
answer();lucide.createIcons();
