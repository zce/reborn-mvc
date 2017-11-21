# reborn

[![Build Status][travis-image]][travis-url]
[![Coverage Status][codecov-image]][codecov-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![NPM Version][version-image]][version-url]
[![License][license-image]][license-url]
[![Dependency Status][dependency-image]][dependency-url]
[![devDependency Status][devdependency-image]][devdependency-url]
[![Code Style][style-image]][style-url]

> A CoC MVC web framework for node.js

## Installation

```sh
$ yarn add reborn

# or npm
$ npm install reborn
```

## Usage

```js
const reborn = require('reborn')
const result = reborn('zce')
console.log(result)
// => 'zce@zce.me'
```

## API

### reborn(name[, options])

#### name

- Type: `string`
- Details: name string

#### options

##### host

- Type: `string`
- Details: host string
- Default: `'zce.me'`

## Contributing

1. **Fork** it on GitHub!
2. **Clone** the fork to your own machine.
3. **Checkout** your feature branch: `git checkout -b my-awesome-feature`
4. **Commit** your changes to your own branch: `git commit -am 'Add some feature'`
5. **Push** your work back up to your fork: `git push -u origin my-awesome-feature`
6. Submit a **Pull Request** so that we can review your changes.

> **NOTE**: Be sure to merge the latest from "upstream" before making a pull request!

## License

[MIT](LICENSE) &copy; zce <w@zce.me> (https://zce.me/)



[travis-image]: https://img.shields.io/travis/zce/reborn.svg
[travis-url]: https://travis-ci.org/zce/reborn
[codecov-image]: https://img.shields.io/codecov/c/github/zce/reborn.svg
[codecov-url]: https://codecov.io/gh/zce/reborn
[downloads-image]: https://img.shields.io/npm/dm/reborn.svg
[downloads-url]: https://npmjs.org/package/reborn
[version-image]: https://img.shields.io/npm/v/reborn.svg
[version-url]: https://npmjs.org/package/reborn
[license-image]: https://img.shields.io/npm/l/reborn.svg
[license-url]: https://github.com/zce/reborn/blob/master/LICENSE
[dependency-image]: https://img.shields.io/david/zce/reborn.svg
[dependency-url]: https://david-dm.org/zce/reborn
[devdependency-image]: https://img.shields.io/david/dev/zce/reborn.svg
[devdependency-url]: https://david-dm.org/zce/reborn?type=dev
[style-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[style-url]: http://standardjs.com
