# builtin-modules-static

[sindresorhus/builtin-modules](https://github.com/sindresorhus/builtin-modules), but completely static.

## Installation

```sh
npm i builtin-modules-static
pnpm add builtin-modules-static
yarn add builtin-modules-static
bun add builtin-modules-static
```

## Usage

```ts
// ESM
import all from 'builtin-modules-static';
// CJS
const all = require('builtin-modules-static');

all.v20.includes('fs/promises'); // true
//  ^^^ The list of modules for Node.js v20.
all.v10.includes('fs/promises'); // false
//  ^^^ The list of modules for Node.js v10.
```

Alternatively, you can import just the modules for a specific version.

```ts
// ESM
import { v18 } from 'builtin-modules-static';
// CJS
const { v18 } = require('builtin-modules-static');

v18.includes('path'); // true
v18.includes('zimplogulon'); // false
```

## License

[MIT](LICENSE)
