# @adiatma2019/cilor

CLI to compile react project.

## How to use?

> Please download `react` and `react-dom` before using `@adiatma2019/cilor`.

Please see the [example](https://github.com/adiatma/example-use-cilor).

## Config
Create file `config.js` in your directory.

```
// config.js
const path = require('path')

module.exports = {
  webpack: {
    entry: path.resolve(__dirname, 'src/index.js'),
  },
  server: {
    port: 4000,
    compress: true,
  }
}
```

## Scripts
Open your file `package.json`.
```
// package.json
{
  ...,
  scripts: {
    "start": "cilor config.js dev",
    "build": "cilor config.js prod"
  }
}
```

Thanks, feel free to contribute!
