<template>
  <div>
    <article v-for="article in articles" :key="article.title">
      <img v-if="article.thumbnail" :src="article.thumbnail" />
      <a :href="article.path">
        <h2>
          {{ article.title }}
        </h2>
      </a>
      <p>
        {{ article.description }}
      </p>
      <a :href="article.path">Read more</a>
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content().fetch();

    return {
      articles,
    };
  },
};
</script>

<style scoped>
article {
  padding-bottom: 3rem;
}

img {
  max-width: 100%;
  margin: 40px auto;
  display: block;
}

a h2 {
  color: var(--main-font-color);
}
</style>