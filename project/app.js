'use strict';
const editor = document.querySelector('#editor');
const input = document.querySelector('#headline');
const preview = document.querySelector('#editor-canvas');
const status = document.querySelector('#editor-status');
let current = Studio.projects[0], palette = current.palette, lastTrigger;
const storage = { getItem: key => localStorage.getItem(key), setItem: (key, value) => localStorage.setItem(key, value) };
function redraw() {
  document.querySelector('#char-count').textContent = `${input.value.length} / 45`;
  preview.setAttribute('aria-label', `${current.title} poster: ${input.value || 'Your next idea'}, ${palette} palette`);
  document.querySelectorAll('[data-palette]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.palette === palette)));
  drawPoster(preview, current, input.value, palette);
}
function openProject(id, draft) {
  current = Studio.projects.find(p => p.id === id) || Studio.projects[0];
  lastTrigger = document.activeElement;
  document.querySelector('#editor-title').textContent = current.title;
  input.value = draft?.headline ?? current.headline; palette = draft?.palette ?? current.palette;
  status.textContent = ''; redraw(); editor.showModal();
}
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  const ids = Studio.filterProjects(button.dataset.filter).map(p => p.id);
  document.querySelectorAll('[data-filter]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
  document.querySelectorAll('[data-project]').forEach(p => { p.hidden = !ids.includes(p.dataset.project); });
  document.querySelector('#project-count').textContent = String(ids.length).padStart(2, '0');
  document.querySelector('#filter-status').textContent = `${ids.length} projects shown.`;
}));
document.querySelectorAll('[data-open]').forEach(button => button.addEventListener('click', () => openProject(button.dataset.open)));
document.querySelectorAll('[data-palette]').forEach(button => button.addEventListener('click', () => { palette = button.dataset.palette; status.textContent = ''; redraw(); }));
input.addEventListener('input', () => { status.textContent = ''; redraw(); });
document.querySelector('#editor-form').addEventListener('submit', event => event.preventDefault());
document.querySelector('#close-editor').addEventListener('click', () => editor.close());
editor.addEventListener('close', () => lastTrigger?.focus());
document.querySelector('#reset').addEventListener('click', () => { input.value = current.headline; palette = current.palette; redraw(); status.textContent = 'Original design restored. Saved draft is unchanged.'; });
document.querySelector('#save').addEventListener('click', () => {
  const result = Studio.saveDraft(storage, { projectId: current.id, headline: input.value, palette });
  status.textContent = result.message;
  if (result.ok) document.querySelector('#resume').hidden = false;
});
document.querySelector('#resume').addEventListener('click', () => {
  const result = Studio.readDraft(storage);
  if (result.draft) openProject(result.draft.projectId, result.draft);
  else { openProject(current.id); status.textContent = result.error || 'No valid saved draft was found.'; }
});
document.querySelector('#export').addEventListener('click', async () => {
  await document.fonts.ready; redraw();
  preview.toBlob(blob => {
    if (!blob) { status.textContent = 'Export failed. Your design is unchanged.'; return; }
    const url = URL.createObjectURL(blob); const link = document.createElement('a');
    link.href = url; link.download = `studio-launch-${current.id}.png`; document.body.append(link); link.click(); link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 10000); status.textContent = 'PNG export ready.';
  }, 'image/png');
});
const about = document.querySelector('#about');
document.querySelector('#about-open').addEventListener('click', () => about.showModal());
document.querySelector('#about-close').addEventListener('click', () => about.close());
document.fonts.ready.then(() => {
  document.querySelectorAll('[data-project]').forEach(el => {
    drawPoster(el.querySelector('canvas'), Studio.projects.find(p => p.id === el.dataset.project));
    el.querySelector('.project-caption>span').append(el.querySelector('.open-corner'));
  });
  if (Studio.readDraft(storage).draft) document.querySelector('#resume').hidden = false;
  lucide.createIcons();
});
