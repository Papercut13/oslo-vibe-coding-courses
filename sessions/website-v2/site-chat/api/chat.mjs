import answer from '../server/answer.cjs';
import fs from 'node:fs';
const documents=JSON.parse(fs.readFileSync(new URL('../knowledge.json',import.meta.url),'utf8'));
export default {fetch:answer.createHandler({documents})};
