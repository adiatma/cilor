# @adiatma2019/cilor

⚡️CLI to compile react project.

## How to use?

> Please download `react` and `react-dom` before using `@adiatma2019/cilor`.

Please see the [example](https://github.com/adiatma/example-use-cilor).

## Example.
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
    htmlElement: 'app', // default root
  }
}
```

Create file `index.js`.

```js
// index.js
import React from 'react'
import ReactDOM from 'react'

const App = () => <div>App build with, ReactJS</div>
const mountElement = document.getElementById('app)
ReactDOM.render(<App />, mountElement)
```

Open your `package.json`, and add this command below.
```json
// package.json
{
  "scripts": {
    "start": "cilor cilorConfig.js",
    "build": "cilor cilorConfig.js prod"
  }
}
```

Thanks, feel free to contribute!
