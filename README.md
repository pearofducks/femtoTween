> femtoTween

femtoTween's goal is to provide just enough tweening functionality to cover basic use cases.
Through this primary goal, it should also be one of the smallest tweening libraries (less than 1k un-minified even).

```
yarn add femtotween
import { tween } from 'femtotween'
```

- Minimal API can be grok'd in seconds
- Supports a `done` callback - especially useful for [Vue.js transitions via JS hooks](https://vuejs.org/v2/guide/transitions.html#JavaScript-Hooks)
- Supports and provides additional easing functions

##### more

[see site for example and API](https://pearofducks.github.io/femtoTween/)

##### bundling & production

If you're shipping to es5 environments, you'll need to either:

- source the es5-browser-build :: e.g. `import { tween } from 'femtotween/dist/femtoTween.umd.js'`
- or enable transpiling of `.esm.js` files in your bundler

This module ships es6 module _and_ code in the `femtoTween.esm.js` file - both for convenience to those shipping more modern builds, as well as to ensure the smallest (and least opinionated) final build.
