# builtin-modules-static

[sindresorhus/builtin-modules](https://github.com/sindresorhus/builtin-modules), but completely static, no polyfill for browsers needed.

## Installation

```sh
npm i builtin-modules-static
pnpm add builtin-modules-static
yarn add builtin-modules-static
bun add builtin-modules-static
```

## Usage

```ts
const builtinModules = require('builtin-modules-static');

builtinModules.includes('fs');
```

## License

[MIT](LICENSE)
