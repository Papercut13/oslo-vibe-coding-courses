(function () {
  const { palettes } = Studio;
  function fitText(ctx, text, size, maxWidth) {
    ctx.font = `700 ${size}px Space, sans-serif`;
    while (ctx.measureText(text).width > maxWidth && size > 18) { size -= 2; ctx.font = `700 ${size}px Space, sans-serif`; }
    return size;
  }
  function linesFor(ctx, text, maxWidth, size) {
    ctx.font = `700 ${size}px Space, sans-serif`;
    const words = text.toUpperCase().split(/\s+/).filter(Boolean);
    const lines = []; let line = '';
    for (const word of words) {
      if (line && ctx.measureText(`${line} ${word}`).width > maxWidth) { lines.push(line); line = word; }
      else line = line ? `${line} ${word}` : word;
    }
    if (line) lines.push(line);
    return lines;
  }
  window.drawPoster = function (canvas, project, headline = project.headline, palette = project.palette) {
    const ctx = canvas.getContext('2d');
    canvas.width = 900; canvas.height = 1125;
    const colors = palettes[palette] || palettes.ember;
    ctx.fillStyle = colors.bg; ctx.fillRect(0, 0, 900, 1125);
    ctx.fillStyle = colors.ink; ctx.font = '400 21px Mono, monospace';
    ctx.fillText('STUDIO LAUNCH', 58, 65); ctx.fillText(`STUDY / ${project.number}`, 660, 65);
    ctx.strokeStyle = colors.ink; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(58, 87); ctx.lineTo(842, 87); ctx.stroke();
    if (project.id === 'form') {
      ctx.strokeStyle = colors.ink; ctx.lineWidth = 20;
      for (let n = 0; n < 7; n++) {
        ctx.beginPath(); ctx.arc(450, 270, 100 + n * 33, 0, Math.PI); ctx.stroke();
      }
      ctx.fillStyle = colors.accent; ctx.fillRect(58, 178, 135, 135); ctx.fillRect(708, 178, 135, 135);
    } else if (project.id === 'blue') {
      ctx.fillStyle = colors.ink;
      for (let n = 0; n < 8; n++) { ctx.fillRect(90 + n * 93, 160 + n * 31, 54, 350 - n * 31); }
      ctx.fillStyle = colors.accent; ctx.fillRect(90, 510, 705, 50);
    } else {
      ctx.strokeStyle = colors.ink; ctx.lineWidth = 18;
      for (let n = 0; n < 5; n++) { ctx.strokeRect(126 + n * 55, 164 + n * 30, 626 - n * 110, 362 - n * 60); }
      ctx.fillStyle = colors.accent; ctx.fillRect(361, 278, 178, 136);
    }
    const text = headline.trim() || 'YOUR NEXT IDEA';
    let size = 130, lines = linesFor(ctx, text, 784, size);
    while (lines.length > 3 && size > 60) { size -= 4; lines = linesFor(ctx, text, 784, size); }
    ctx.fillStyle = colors.ink;
    lines.slice(0, 4).forEach((line, n) => { fitText(ctx, line, size, 784); ctx.fillText(line, 54, 736 + n * (size * 0.92)); });
    ctx.font = '400 19px Mono, monospace'; ctx.fillText('AN INDEPENDENT DESIGN EXPERIMENT', 58, 1062);
    ctx.fillText('OSLO / 2026', 58, 1094);
    ctx.fillText('001', 805, 1094);
  };
})();
