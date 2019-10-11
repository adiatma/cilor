# @adiatma2019/cilor

⚡️CLI to compile react project.

## How to use?

> Please download `react` and `react-dom` before using `@adiatma2019/cilor`.

Please see the [example](https://github.com/adiatma/example-use-cilor).

## Example.

```bash
mkdir react-project
cd react-project
yarn add -D @adiatma2019/cilor
yarn add react react-dom
```

Create file `cilorConfig.js` in your directory.

```js
// cilorConfig.js
const path = require('path')

module.exports = {
  webpack: {
    entry: path.resolve(__dirname, 'index.js'),
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
    "start": "cilor cilorConfig.js",
    "build": "cilor cilorConfig.js build"
  }
}
```

Thanks, feel free to contribute!
