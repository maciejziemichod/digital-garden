---
title: Hello World
description: "Tech I used in this website and problems that stood in my way."
---

Hello World. And hello to everyone reading this, I hope you are having a great day. We don't have time so let's start.

## Tech I used

To build my blog-like site I wanted to try server side rendering for the first time, out of curiosity and to learn more about Vue ecosystem. There were 2 options to consider: Nuxt and Vuepress.

Initially I've tried Vuepress but due to some bugs at the early stages of configuring I gave up. The plan was to do it fast and without struggle. So I switched to Nuxt with some concerns: I've heard it may be an overkill for a simple website.

## Building part

It turned out to be really pleasant to use. Switching to Vue from React felt like a good call and I had similar feelings about Nuxt: Vue on steroids.

Docs are similar to Vue's - purely amazing. I've used **npx create-nuxt-app** and the project was ready to run. So nice and clean, I love it.

Automatic routing seems like a thing that should be a part of Vue itself. Vue Router is not hard, but if it can be automated, it should be. Nuxt is full of that kind of easing.

To create blog-like site Nuxt Content is perfect solution. It's a module that acts as a Git-based Headless CMS. I write posts in Markdown and the Nuxt app fetches it.

## List of dependencies and features

- [auto importing components](https://go.nuxtjs.dev/config-components)
- [Nuxt Content](https://go.nuxtjs.dev/content)
- [Prism material oceanic theme](https://content.nuxtjs.org/configuration/#markdownprismtheme)
- [Font Awesome module](https://github.com/nuxt-community/fontawesome-module)
- [Nuxt Color Mode](https://color-mode.nuxtjs.org/)

## Problems I encountered

There weren't many of them, dev experience was smooth. They were my fault or were caused by just using new technology that I don't know.

First one was adding "linkedin-in" Font Awesome icon.

I also wasn't sure how to include images in my posts.

The last one was my wrong use of color mode module, I wrote **$colorMode.value** instead of **$colorMode.preference** in ColorModeButton's toggling and that caused not saving setting between pages and after refresh.
