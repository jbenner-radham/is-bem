is-bem 
======
[![npm version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]

Determine if a class name is valid BEM.

Installation
------------
```sh
$ npm install --save is-bem
```

Usage
-----
```js
var isBem = require('is-bem');

isBem('block'); // True
isBem('block__element_modifier'); // True
isBem('block--element--modifier'); // False
```

Testing
-------
```sh
$ npm test
```

License
-------
The MIT License (Expat). See the [license file](LICENSE) for details.

[npm-image]: https://img.shields.io/npm/v/is-bem.svg
[npm-url]: https://npmjs.org/package/is-bem
[travis-image]: https://travis-ci.org/jbenner-radham/is-bem.svg?branch=master
[travis-url]: https://travis-ci.org/jbenner-radham/is-bem
[daviddm-image]: https://david-dm.org/jbenner-radham/is-bem.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/jbenner-radham/is-bem
