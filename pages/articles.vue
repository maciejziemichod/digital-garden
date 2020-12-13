<template>
  <div class="articles">
    <article v-for="article in articles" :key="article.title">
      <div v-if="article.thumbnail">
        <a :href="article.path">
          <img :src="article.thumbnail" />
        </a>
      </div>
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
.articles {
  padding-top: 2rem;
}

article {
  padding-bottom: 3rem;
}

img {
  max-width: 100%;
  margin: 40px auto;
  display: block;
}
</style>