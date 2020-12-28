---
title: Adding images to Markdown in Nuxt
description: Ways of including photos when using Nuxt Content
thumbnail:
---

When I first used Nuxt Content, I wasn't sure how to add images in my markdown files. There are more than one way to do this, I'll show here the ones that I'm aware of.

## Static + \!\[\]\(\)

This is the first way I found out and that is used in this site. I'm putting images in my static folder, naming them properly in my own system (optional): `url_with_distinction_using_underscores` and then writing in markdown `![alt text](image-url)`.

All my images on `_slug.vue` page are styled the same, so this way is imo the easiest.

## Static + HTML

You can use HTML directly in your Markdown. Combining this with images in static folder you can embed images like this:

```html

Your markdown

<img src="/image.jpg"></img>

Your markdown
```

## Vue Component

For methods shown in this section you need Nuxt >= v2.13.0 and Nuxt Content >= v1.4.0.

First you need to create `ImageComponent.vue` and put it in `components/global` folder

```js
<template>
  <img :src="src" />
</template>

<script>
export default {
  props: ["imageSource"],
  computed: {
    src() {
      return require("@/assets/" + this.imageSource);
    },
  },
};
</script>
```

Because webpack aliases are executed at compile time you need the `require()` function when `<img>` src is v-binded.

Then put your images in assets folder.

Final step is simply to use custom component in your Markdown. It has to be kebab-cased, so do props and it cannot be `<self-closing />`.

```html
Your markdown

<image-component image-source="image.jpg"></image-component>

Your markdown
```

## Connected posts

<nuxt-link to="/hello-world">
More about creating my digital garden
</nuxt-link>
