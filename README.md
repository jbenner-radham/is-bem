# is-bem [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Determine if a class name is valid BEM.

## Installation

```sh
$ npm install --save is-bem
```

## Usage

```js
var isBem = require('is-bem');

isBem('Rainbow'); // False
isBem('block__element_modifier'); // True
```
## License

MIT © [James Benner](www.jamesbenner.com)


[npm-image]: https://img.shields.io/npm/v/is-bem.svg
[npm-url]: https://npmjs.org/package/is-bem
[travis-image]: https://travis-ci.org/jbenner-radham/is-bem.svg?branch=master
[travis-url]: https://travis-ci.org/jbenner-radham/is-bem
[daviddm-image]: https://david-dm.org/jbenner-radham/is-bem.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/jbenner-radham/is-bem
