/* eslint-disable unicorn/prefer-node-protocol */
const fs = require('fs');
const { builtinModules } = require('module');
const path = require('path');

const IGNORE_LIST = ['sys'];

const modules = (builtinModules || []).filter(
	(x) =>
		!/^_|^v8\/|^node-inspect\//.test(x) &&
		!new RegExp(`^${IGNORE_LIST.join('|')}$`).test(x),
);

fs.writeFileSync(
	path.join(__dirname, '../lib/', `v${process.versions.node.slice(0, 2)}.js`),
	`module.exports = ${JSON.stringify(modules, undefined, '\t')};\n`,
);
