---
layout: default
title: Getting Started
nav_order: 1
---

for example check at this [project](https://github.com/adiatma/cilor/tree/master/examples)

## Install

```bash
mkdir hello-react
cd hello-react
# using yarn
yarn add -D cilor
yarn add react react-dom 
# or using npm
npm install --save-dev cilor
npm install react react-dom
```

Create file `cilor.config.js`

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

Create file `index.js`

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

Add scripts to start the project in `package.json`

```
// package.json
{
  "scripts": {
    "start": "cilor cilor.config.js",
    "build": "cilor cilor.config.js build"
  }
}
```

finally, for just type `yarn start` to starting the project.
