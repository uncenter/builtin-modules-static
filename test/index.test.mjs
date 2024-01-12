import { createRequire } from 'node:module';

import { expect, test } from 'vitest';

import builtinModules from '../src/index.js';

const require = createRequire(import.meta.url);

test('builtin modules should exist', () => {
	for (const module of builtinModules) {
		if (module === 'trace_events') continue;
		expect(() => {
			require(module);
		}).not.toThrowError();
	}

	expect(builtinModules.includes('fs')).toBe(true);
	expect(Array.isArray(builtinModules)).toBe(true);
});
