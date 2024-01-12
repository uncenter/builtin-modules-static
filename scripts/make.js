const { writeFileSync } = require('node:fs');
const { builtinModules } = require('node:module');
const { join } = require('node:path');

const IGNORE_LIST = ['sys'];

const modules = (builtinModules || []).filter(
	(x) =>
		!/^_|^v8\/|^node-inspect\//.test(x) &&
		!new RegExp(`^${IGNORE_LIST.join('|')}$`).test(x),
);

writeFileSync(
	join(__dirname, '../src/builtin-modules.json'),
	JSON.stringify(modules, undefined, '\t') + '\n',
);
