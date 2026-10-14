const { test } = require('node:test');
const assert = require('node:assert/strict');
const filter = require(process.env.FILTER_MODULE || './filter.cjs');
const projects = [{ id: 'form', category: 'Type' }, { id: 'blue', category: 'Composition' }, { id: 'open', category: 'Type' }];
test('All retains every project', () => assert.equal(filter(projects, 'All').length, 3));
test('Type shows only the two type projects', () => assert.deepEqual(filter(projects, 'Type').map(p => p.id), ['form', 'open']));
