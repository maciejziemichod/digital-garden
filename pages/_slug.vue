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
  margin: 40px auto;
  display: block;
}
</style>