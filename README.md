# generator-ts [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Generator to start with TypeScript

## Installation

First, install [Yeoman](http://yeoman.io) and generator-ts using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-ts
```

Then generate your new project:

```bash
yo ts
```

Commands:

All commands are npm tasks in package.json:

* npm run test -> execute tests with Karma + Coverage + PhantomJS
* npm run live -> show app with livereload thank to live-server
* npm run pro -> prepare app for production in dist folder
* npm run clean -> delete build folder
* npm run compile -> compile TypeScript to JavaScript
* npm run compile-w -> compile TypeScript to JavaScript when files change
* npm run lint -> show syntax error when files change
* npm run plato -> execute complexity analysis with plato in report folder



## Getting To Know Yeoman

Yeoman has a heart of gold. He&#39;s a person with feelings and opinions, but he&#39;s very easy to work with. If you think he&#39;s too opinionated, he can be easily convinced. Feel free to [learn more about him](http://yeoman.io/).

## License

 © [Rubén Aguilera]()


[npm-image]: https://badge.fury.io/js/generator-ts.svg
[npm-url]: https://npmjs.org/package/generator-ts
[travis-image]: https://travis-ci.org/raguilera82/generator-ts.svg?branch=master
[travis-url]: https://travis-ci.org/raguilera82/generator-ts
[daviddm-image]: https://david-dm.org/raguilera82/generator-ts.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/raguilera82/generator-ts
[coveralls-image]: https://coveralls.io/repos/raguilera82/generator-ts/badge.svg
[coveralls-url]: https://coveralls.io/r/raguilera82/generator-ts
