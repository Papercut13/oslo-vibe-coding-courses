'use strict';
(()=>{
 const dialog=document.querySelector('#ask-dialog'),form=document.querySelector('#ask-form'),input=document.querySelector('#ask-question'),output=document.querySelector('#ask-output'),status=document.querySelector('#ask-status');
 const search=SiteSearch.createSearch(SiteKnowledge);let controller;
 document.querySelector('#ask-open').addEventListener('click',()=>{dialog.showModal();input.focus();});
 document.querySelector('#ask-close').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('close',()=>{controller?.abort();document.querySelector('#ask-open').focus();});
 if(location.protocol==='file:'){document.querySelector('#mode-ai').disabled=true;document.querySelector('#mode-ai').title='Hosted AI needs the server. This folder-open preview uses site-only search.';}
 function add(tag,text,parent=output){const el=document.createElement(tag);el.textContent=text;parent.append(el);return el;}
 function sourceLink(doc,parent=output){if(!/^help\.html#[a-z][a-z0-9-]*$/.test(doc.url))return;const a=add('a','Source: '+doc.title,parent);a.href=doc.url;a.target='_blank';a.rel='noopener';}
 function local(question){
  const results=search(question);output.replaceChildren();
  if(!results.length){add('p',"I couldn't find that information on this website.");return;}
  for(const doc of results){const article=add('article','');add('h3',doc.title,article);add('p',doc.text,article);sourceLink(doc,article);}
 }
 form.addEventListener('submit',async event=>{
  event.preventDefault();const question=input.value.trim();if(!question)return;
  controller?.abort();status.textContent='';
  if(document.querySelector('#mode-search').checked){local(question);status.textContent='Site-only search. No AI call.';return;}
  output.replaceChildren();status.textContent='Finding an AI answer...';
  controller=new AbortController();const current=controller;document.querySelector('#ask-send').disabled=true;
  try{
   const response=await fetch('/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({question}),signal:current.signal});
   const result=await response.json();if(!response.ok)throw Error(result.error||'AI is unavailable.');
   add('p',result.answer);for(const source of result.sources)sourceLink(source);
   status.textContent=result.mode==='no-source'?'No matching source. No AI call.':'Hosted AI answer. Check the source.';
  }catch(error){if(error.name!=='AbortError'){add('p',error.message);status.textContent='Select Site-only search to continue.';}}
  finally{if(controller===current)document.querySelector('#ask-send').disabled=false;}
 });
 document.querySelectorAll('[name="ask-mode"]').forEach(radio=>radio.addEventListener('change',()=>{controller?.abort();output.replaceChildren();status.textContent='';document.querySelector('#ask-send').disabled=false;}));
 document.querySelector('#ask-clear').addEventListener('click',()=>{controller?.abort();input.value='';output.replaceChildren();status.textContent='';document.querySelector('#ask-send').disabled=false;input.focus();});
 lucide.createIcons();
})();
