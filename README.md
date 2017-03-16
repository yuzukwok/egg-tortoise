# egg-tortoise

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-tortoise.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-tortoise
[travis-image]: https://img.shields.io/travis/eggjs/egg-tortoise.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-tortoise
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-tortoise.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-tortoise?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-tortoise.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-tortoise
[snyk-image]: https://snyk.io/test/npm/egg-tortoise/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-tortoise
[download-image]: https://img.shields.io/npm/dm/egg-tortoise.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-tortoise

<!--
Description here.
-->

https://github.com/CompassPHS/tortoise 

## Install

```bash
$ npm i egg-tortoise --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.tortoise = {
  enable: true,
  package: 'egg-tortoise',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.tortoise = {
  client: {
        uri: 'amqp://kwok:kwok@localhost'
      },
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/yuzukwok/egg-tortoise/issues).

## License

[MIT](LICENSE)
