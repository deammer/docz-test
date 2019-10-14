# docz-test

This is an attempt to wrap the `<Playground>` component inside some custom markup.

Relevant code:

1. the `src/gatsby-theme-docz/components/Logo/index.js` file is where I'm shadowing the `Playground` component
2. the `button.mdx` file is where I'm attempting to consume the component.

## Things I've tried

1. importing the custom `Playground` component using a relative path:

   ```js
   import { Playground } from "./src/gatsby-theme-docz/components/Playground";
   ```

   ➡️ this results in a timeout, probably caused by a circular reference

2. importing the `Playground` component from `docz`:

   ```js
   import { Playground } from "docz";
   ```

   ➡️ this renders the original component without the custom code
