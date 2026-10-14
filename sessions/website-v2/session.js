'use strict';
Reveal.initialize({width:1600,height:900,margin:0,minScale:.1,maxScale:2,hash:true,history:true,controls:true,controlsTutorial:false,progress:true,slideNumber:'c/t',center:false,view:'slide',scrollActivationWidth:null,transition:matchMedia('(prefers-reduced-motion: reduce)').matches?'none':'fade',transitionSpeed:'fast',keyboardCondition:e=>!document.querySelector('dialog[open]')&&!e.target.closest('input,textarea,select,[contenteditable="true"]')});
document.querySelectorAll('[data-copy]').forEach(button=>button.addEventListener('click',async()=>{const text=document.getElementById(button.dataset.copy).textContent;let ok=false;try{await navigator.clipboard.writeText(text);ok=true;}catch{const field=document.createElement('textarea');field.value=text;field.style.cssText='position:fixed;left:-9999px';document.body.append(field);field.select();try{ok=document.execCommand('copy');}catch{}field.remove();button.focus();}button.parentElement.querySelector('.copy-state').textContent=ok?'Copied':'Select text to copy';}));
const dialog=document.querySelector('#contents');
document.querySelector('#contents-open').addEventListener('click',()=>dialog.showModal());
document.querySelector('#contents-close').addEventListener('click',()=>dialog.close());
dialog.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>dialog.close()));
document.querySelector('#fullscreen').addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{}});
function filterDemo(){const results=Shortlist.select(Studio.projects,{category:document.querySelector('#logic-category').value,query:document.querySelector('#logic-query').value});document.querySelector('#logic-result').textContent=results.length?results.map(p=>p.title).join(' / '):'No projects match both filters.';}
document.querySelector('#logic-category').addEventListener('change',filterDemo);
document.querySelector('#logic-query').addEventListener('input',filterDemo);
filterDemo();
lucide.createIcons();

