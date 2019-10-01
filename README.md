# docz-test

This is a barebones repository to help test [a problem with Docz's build process](https://github.com/doczjs/docz/issues/1118) using `style-loader`.

```shell
yarn install
yarn build
```

This should show an error like this:

```shell
  105 |
  106 | function insertStyleElement(options) {
> 107 |   var style = document.createElement('style');
      | ^
  108 |
  109 |   if (typeof options.attributes.nonce === 'undefined') {
  110 |     var nonce = typeof __webpack_nonce__ !== 'undefined' ? __webpack_nonce__ : null;


  WebpackError: ReferenceError: document is not defined

  - injectStylesIntoStyleTag.js:107 insertStyleElement
    node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js:107:1

  - injectStylesIntoStyleTag.js:219 addStyle
    node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js:219:1

  - injectStylesIntoStyleTag.js:94 addStylesToDom
    node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js:94:1

  - injectStylesIntoStyleTag.js:251 ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js.module.exports
    node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js:251:1

  - style.scss?00aa:12 Object.../src/style.scss
    src/style.scss?00aa:12:94
```
