import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {courses,sessions,sources} from '../curriculum.mjs';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),labs=require('../labs/core.js');

test('five courses have five unique, sequential sessions',()=>{
  assert.equal(courses.length,5);assert.equal(sessions.length,25);
  assert.equal(new Set(sessions.map(s=>s.id)).size,25);
  for(let course=1;course<=5;course++)assert.deepEqual(sessions.filter(s=>s.course===course).map(s=>s.session),[1,2,3,4,5]);
  assert.equal(courses[4],'How to contextualize so your AI understands');
});
test('each session has an artifact, continuation, exercise and failure check',()=>{
  const seen=new Set();
  for(const s of sessions){
    for(const key of ['artifact','previous','exercise','failure','expected','explanation'])assert.ok(s[key]?.trim(),`${s.id}: ${key}`);
    assert.equal(s.poster.length,3);assert.equal(s.flow.length,3);
    assert.ok(labs.definitions[s.lab],s.lab);
    for(const id of s.extends)assert.ok(seen.has(id),`${s.id} has a future dependency`);
    for(const ref of s.refs)assert.ok(sources[ref],ref);
    seen.add(s.id);
  }
});
test('future event details cannot be silently invented',()=>{
  for(const s of sessions.filter(s=>s.status==='draft'))for(const key of ['date','time','venue'])assert.equal(s[key],null);
  assert.equal(sessions[1].title,'Your Website, Version 2');
  assert.equal(sessions[1].date,'2026-10-15');
  assert.equal(sessions[1].time,'16:00-18:00');
});
test('generated deliverables carry the brand and course identity',()=>{
  for(const s of sessions){
    const folder=new URL(`../week-${String(s.week).padStart(2,'0')}/`,import.meta.url);
    for(const file of ['poster.html','index.html']){
      const html=fs.readFileSync(new URL(file,folder),'utf8').replace(/<[^>]+>/g,'');
      assert.match(html,/AI for All\. AI for Good\./);
      assert.ok(html.includes(s.courseTitle),`${s.id} missing course name in ${file}`);
      assert.match(html,new RegExp(`Course ${String(s.course).padStart(2,'0')}`));
      assert.match(html,new RegExp(`Session ${String(s.session).padStart(2,'0')} of 05`));
    }
    if(s.status==='draft'){
      const poster=fs.readFileSync(new URL('poster.html',folder),'utf8');
      assert.doesNotMatch(poster,/2026|16:00|Spaces Stortorvet|Donation|Free to join/);
    }
  }
});
