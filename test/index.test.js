import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

import { test, expect } from 'vitest';

import all from '../lib/index.js';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const versions = ['v10', 'v12', 'v14', 'v16', 'v18', 'v20'];

test('all module lists should be present', () => {
	const files = fs.readdirSync(path.join(__dirname, '../lib/'));

	expect(files.length).toBe(versions.length + 1);
	expect(files.sort()).toStrictEqual(
		[...versions.map((v) => `${v}.js`), 'index.js'].sort(),
	);
});

test('default import should have all versions', () => {
	expect(Object.keys(all)).toStrictEqual(versions);
});

test('list of modules should include correct modules', () => {
	expect(all.v20.includes('zimplogulon')).toBe(false);

	expect(all.v20.includes('fs')).toBe(true);
	expect(all.v20.includes('path')).toBe(true);

	expect(all.v10.includes('fs')).toBe(true);
	expect(all.v10.includes('path')).toBe(true);

	expect(all.v10.includes('fs/promises')).toBe(false);
	expect(all.v14.includes('fs/promises')).toBe(true);
});
