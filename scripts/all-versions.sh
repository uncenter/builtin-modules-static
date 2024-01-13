#!/usr/bin/env bash
set -Eeuo pipefail

rm -rf ./lib/
mkdir ./lib/

for version in 10 12 14 16 18 20; do
	fnm use --install-if-missing "$version"
	node ./scripts/make.js
done

echo "const v10 = require('./v10');
const v12 = require('./v12');
const v14 = require('./v14');
const v16 = require('./v16');
const v18 = require('./v18');
const v20 = require('./v20');

module.exports = {
	v10: v10,
	v12: v12,
	v14: v14,
	v16: v16,
	v18: v18,
	v20: v20,
};" > ./lib/index.js
