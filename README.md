# Node Package Development Starter

Minimal kit for Node package development - structure the code and modify the build process as needed.

The main motivation is to emphasize BDD patterns and provide a foundation for rapid development in Node.

- [Babel](#) to keep things up to date (ES6)
- [Gulp](#) watches and runs tests on file changes
- [Mocha](#) and [should](#) drive tests
  - All files that end with `.spec.js` are included in the tests so you can keep them bundled with components

### Getting started

Make sure to have mocha installed globally
```bash
npm i -g mocha
```

Install the dependencies
```bash
npm i
```

Start hacking
```bash
gulp
# or
npm start
```
