---
layout: default
title: Testing Configuration
parent: Advanced
---

Please create `.babelrc.js` in root project.

```js
const babelConfig = require('cilor/src/babel-config')
module.exports = babelConfig('__test__')
```
