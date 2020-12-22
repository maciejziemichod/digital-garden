<template>
  <main>
    <article class="markdown">
      <h1>{{ page.title }}</h1>
      <nuxt-content :document="page" />
    </article>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const page = await $content(params.slug).fetch();

    return {
      page,
    };
  },
};
</script>

<style>
h1 {
  font-size: 3rem;
  padding-bottom: 3rem;
}

.markdown img {
  max-width: 100%;
  margin: 20px auto 40px;
  display: block;
}
.markdown h2 {
  padding-left: 1.5rem;
  margin-left: -1.5rem;
  padding-top: 2rem;
}
.markdown h2 a {
  position: relative;
}
.markdown h2:hover a::before {
  content: "#";
  color: var(--special-font-color);
  font-weight: 400;
  margin-left: -1.25rem;
  padding-right: 0.5rem;
  position: absolute;
}
</style>