---
title: Adding Font Awesome icons with dashes in Nuxt
description:
thumbnail:
---

When I first used Nuxt's [fontawesome module](https://github.com/nuxt-community/fontawesome-module) I wasn't sure how to add icons with dashes in config file, for example: **linkedin-in** icon.

The proper way to do this is adding camelCased icon to nuxt.config.js:

```js
export default {
  /// (...)

  fontawesome: {
    icons: {
      brands: ["faLinkedinIn"],
    },
  },
};
```

Using it looks like this (kebab-case is required):

```html
<font-awesome-icon :icon="['fab', 'linkedin-in']" />
```
