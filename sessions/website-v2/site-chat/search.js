(function(root,factory){
 const api=factory(typeof module==='object'&&module.exports?require('minisearch'):root.MiniSearch);
 if(typeof module==='object'&&module.exports)module.exports=api;else root.SiteSearch=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(MiniSearch){
 const stop=new Set('a an and are as at be can could do does for from have how i in is it me my of on or our please the their there these this to us want we what when where which with would you your'.split(' '));
 function createSearch(documents){
  const index=new MiniSearch({fields:['title','text'],storeFields:['title','text','url','verifiedOn'],processTerm:term=>{const t=term.toLowerCase();return stop.has(t)?null:t;},searchOptions:{boost:{title:3},combineWith:'AND'}});
  index.addAll(documents);
  return question=>typeof question==='string'&&question.trim()?index.search(question).slice(0,3):[];
 }
 return {createSearch};
});
