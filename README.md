# @adiatma2019/cilor

⚡️CLI to compile react project.

## Feature

+ support module hot replacement
+ support flow
+ support styled-components

## How to use?

> Please install `react` and `react-dom` with `@adiatma2019/cilor`.

## Example.

```bash
mkdir react-project
cd react-project
```

## Install with yarn
```bash
yarn add -D @adiatma2019/cilor
yarn add react react-dom
```
## Install with npm

```bash
npm install --save-dev @adiatma2019/cilor
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

Thanks, feel free to contribute!
