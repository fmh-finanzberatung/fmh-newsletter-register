# Start dev server on port 3000

```
yarn dev
```

I have modified the rollup.config.js file, in order to support multiple builds. I'd like to be able so view multiple components on one page during development. At the same time I'd like to see the changes being made on any of them.

E.g. when using a shared scss module I'd like to see how it affects all components.

# Conforming to Github pages

yarn build

I haven't found a way in rollup.config.js to change the build target folder from "build" to "docs"
in order match github-pages' requirement.

Therefor the "public" folder is simply being copied to the "docs" folder.
