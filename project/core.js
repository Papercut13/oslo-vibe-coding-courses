(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.Studio = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  const projects = [
    { id: 'form', title: 'Form & Rhythm', category: 'Type', number: '01', headline: 'MAKE SOME THING', palette: 'ember', description: 'A typographic poster study in warm color and repeating forms.' },
    { id: 'blue', title: 'Blue Hour', category: 'Composition', number: '02', headline: 'AFTER HOURS', palette: 'blue', description: 'An architectural composition with a quieter blue palette.' },
    { id: 'open', title: 'Open Studio', category: 'Type', number: '03', headline: 'GOOD IDEAS START HERE', palette: 'lime', description: 'A bright studio poster built around generous, oversized type.' }
  ];
  const palettes = { ember: { bg: '#ff643d', ink: '#16151c', accent: '#fbf7f0' }, blue: { bg: '#b6d6fa', ink: '#203d80', accent: '#f7f8fd' }, lime: { bg: '#daef93', ink: '#263b24', accent: '#f8f8ed' } };
  function filterProjects(category) { return category === 'All' ? projects : projects.filter(p => p.category === category); }
  function normalizeDraft(input) {
    if (!input || typeof input !== 'object' || Array.isArray(input)) return null;
    if (!projects.some(p => p.id === input.projectId)) return null;
    if (typeof input.headline !== 'string' || !Object.hasOwn(palettes, input.palette)) return null;
    return { projectId: input.projectId, headline: input.headline.trim().slice(0, 45), palette: input.palette };
  }
  function readDraft(storage) {
    try { return { draft: normalizeDraft(JSON.parse(storage.getItem('studio-launch:draft'))), error: null }; }
    catch { return { draft: null, error: 'Saved draft could not be read. Your current work is unchanged.' }; }
  }
  function saveDraft(storage, input) {
    const draft = normalizeDraft(input);
    if (!draft) return { ok: false, message: 'This draft could not be saved.' };
    try { storage.setItem('studio-launch:draft', JSON.stringify(draft)); return { ok: true, message: 'Saved on this device.' }; }
    catch { return { ok: false, message: 'Storage unavailable. Your design is still here; you can export it.' }; }
  }
  return { projects, palettes, filterProjects, normalizeDraft, readDraft, saveDraft };
});
