const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

export function renderPoster(session, brand) {
  const num = number => String(number).padStart(2, '0');
  const event = session.week === 1
    ? { label: 'Session materials', date: '8 October 2026', detail: 'Course 01 / Session 01' }
    : { label: 'Upcoming course session', date: 'Date to be announced', detail: 'Venue to be confirmed' };
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=1080,initial-scale=1">
<title>AI 101 / Course ${num(session.course)} / Session ${num(session.session)}</title>
<link rel="stylesheet" href="../shared/poster.css"></head><body>
<main class="poster" ${session.title.length > 39 ? 'data-long-title' : ''}>
<header><span class="series-label">AI 101</span>${brand}</header>
<p class="mission">AI for <span>All.</span> AI for <span>Good.</span></p>
<div class="course-meta">Course ${num(session.course)} &middot; Session ${num(session.session)} of 05</div>
<div class="course-name">${escape(session.courseTitle)}</div>
<h1>${escape(session.title)}</h1><p class="subtitle">${escape(session.subtitle)}</p>
<ol class="weekly-outcomes">${session.poster.map((topic, i) => `<li><span aria-hidden="true">${num(i + 1)}</span><div>${escape(topic)}</div></li>`).join('')}</ol>
<p class="promise">${session.week === 1 ? 'YOUR FIRST STEP. BUILD SOMETHING REAL.' : 'KEEP BUILDING. ONE USEFUL STEP AT A TIME.'}</p>
<div class="schedule"><div class="date-label">${event.label}</div><div class="details"><strong>${event.date}</strong><span class="venue">${event.detail}</span></div></div>
<footer><span>No one codes alone.</span><span>oslovibecoding.tech</span></footer>
</main></body></html>`;
}
