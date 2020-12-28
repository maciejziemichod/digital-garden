---
title: Choosing the Dark
description: Implementing dark mode using Nuxt Color Mode
thumbnail: choosing-the-dark_thumbnail.png
---

![moon](/choosing-the-dark_thumbnail.png)

As you have probably seen, this website has theme button in the top right corner. In my opinion having dark mode is a necessity, no matter if it is a website or an app. I'm including it in every project, lets respect people's eyes 👀

I've done dark mode both in pure Vue and Nuxt. I thought it was easy, but then I discovered [Nuxt Color Mode](https://color-mode.nuxtjs.org/) module, which made me aware that I did not know what "easy" means.

## Features

- super easy
- auto detect system color-mode
- stores user preference in local storage
- sync chosen mode between tabs

## My implementation

I added dependency to my project

```
npm install --save-dev @nuxtjs/color-mode
```

Then I added `@nuxtjs/color-mode` to the `buildModules` in `nuxt.config.js`

```js
export default {
  // (...)

  buildModules: ["@nuxtjs/color-mode"],
};
```

Next step was adding proper CSS `.dark-mode` and `.light-mode` classes. I did it in my default layout file (skipped `.light-mode`)

```css
:root {
  --main-font-color: #354951;
  --main-faded-font-color: #354951a5;
  --special-font-color: #29c29e;
  --code-background-color: #e3e3e3;
  --background-color: #f3f3f3;
  --hover-background-color: #3b8070;
  --hover-font-color: #f3f3f3;
  --footer-line-color: rgba(19, 20, 21, 0.2);
}

.dark-mode {
  --main-font-color: #f3f3f3;
  --main-faded-font-color: #f3f3f3a5;
  --code-background-color: #2d3748;
  --background-color: #0d1b20;
  --footer-line-color: rgba(218, 228, 238, 0.2);
}
```

You need some way to change theme, so I made `ColorModeButton.vue`

```js
<template>
  <button @click="toggleColorMode" title="Switch color modes">
    <FaIcon
      v-if="$colorMode.preference === 'dark'"
      :icon="['far', 'sun']"
      class="fa-lg"
    />
    <FaIcon v-else :icon="['far', 'moon']" class="fa-lg" />
  </button>
</template>

<script>
export default {
  methods: {
    toggleColorMode() {
      if (this.$colorMode.preference === "dark") {
        this.$colorMode.preference = "light";
      } else {
        this.$colorMode.preference = "dark";
      }
    },
  },
};
</script>
```

Remember to change `$colorMode.preference` not `$colorMode.value`. Changing value will cause not saving user's preference about theme, so if the page is refreshed, it will be back to default.

And that's it! So easy and pleasant.

## Connected posts

<nuxt-link to="/hello-world">
More about creating my digital garden
</nuxt-link>
