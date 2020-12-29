<template>
  <div class="articles">
    <article v-for="article in articles" :key="article.title">
      <div v-if="article.thumbnail">
        <NuxtLink :to="article.path">
          <img :src="article.thumbnail" />
        </NuxtLink>
      </div>
      <NuxtLink :to="article.path">
        <h2>
          {{ article.title }}
        </h2>
      </NuxtLink>
      <p>
        {{ article.description }}
      </p>
      <NuxtLink :to="article.path"> Read more </NuxtLink>
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content()
      .only(["path", "title", "description", "updatedAt", "thumbnail"])
      .sortBy("updatedAt", "desc")
      .fetch();

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