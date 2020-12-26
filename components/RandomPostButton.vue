<template>
  <nuxt-link :to="link" @click.native="randomLink">random post</nuxt-link>
</template>

<script>
export default {
  data() {
    return {
      link: "",
    };
  },
  methods: {
    async randomLink() {
      const fetchedArticles = await this.$content().only(["path"]).fetch();
      const randomIndex = Math.floor(Math.random() * fetchedArticles.length);
      this.link = fetchedArticles[randomIndex].path;
    },
  },
};
</script>