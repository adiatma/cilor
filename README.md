# cilor

⚡️ Simple CLI to compile react project.

## List Features

+ [x] support module hot replacement.
+ [x] support flow.
+ [x] support styled-components.
+ [x] support url-loader and file-loader
+ [x] support svgr/webpack loader
+ [ ] support alias import.
+ [ ] support eslint in develoment mode.
+ [ ] support monitoring assets.

> First, please install `react` and `react-dom`.

## Example.

```bash
mkdir react-project
cd react-project
```

## Install with yarn
```bash
yarn add -D cilor
yarn add react react-dom
```
## Install with npm

```bash
npm install --save-dev cilor
npm install react react-dom
```

Create file `cilor.config.js` in your directory.

```js
// cilor.config.js
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'output'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'output'),
  },
  htmlConfig: {
    title: 'Type your title here!',
    elementID: 'app', // default root
  }
}
```

Create file `index.js`.

```js
// index.js
import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  return (
    <div>
      <h1>Hello, ReactJS</h1>
      <p>Lorem ipsume sit amet dolor</p>
    </div>
  )
}

const mountElement = document.getElementById('app')
ReactDOM.render(<App />, mountElement)
```

Open your `package.json`, and add this command below.
```json
// package.json
{
  "scripts": {
    "start": "cilor cilor.config.js",
    "build": "cilor cilor.config.js build"
  }
}
```

And start with `yarn start` or `npm start` to running development server.

## How to add testing environment.
Create `.babelrc.js`.
```js
const babelConfig = require('cilor/src/babel-config')
module.exports = babelConfig('__test__')
```

## License

![NPM](https://img.shields.io/npm/l/@adiatma2019/cilor)
