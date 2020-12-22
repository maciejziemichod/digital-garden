<template>
  <span>
    <SearchButton @click.native="showSearchModalTrue" />
    <div v-if="showSearchModal" class="searchModal">
      <div class="toolbar">
        <button @click="showSearchModalFalse">
          <span> CLOSE <FaIcon icon="times" class="fa-sm" /> </span>
        </button>
      </div>
      <div class="container">
        <label for="search">Search for desired content</label>
        <input v-model="query" type="search" autocomplete="off" id="search" />
        <article v-for="article in articles" :key="article.title">
          <span @click="showSearchModalFalse">
            <NuxtLink :to="article.path" @click="showSearchModalFalse">
              <h2>
                {{ article.title }}
              </h2>
            </NuxtLink>
          </span>
          <span @click="showSearchModalFalse">
            <NuxtLink :to="article.path"> Read this article </NuxtLink>
          </span>
        </article>
      </div>
    </div>
  </span>
</template>

<script>
import SearchButton from "./SearchButton.vue";
export default {
  components: { SearchButton },
  data() {
    return {
      articles: [],
      showSearchModal: false,
      query: "",
    };
  },
  async fetch() {
    const fetchedArticles = await this.$content().fetch();
    this.articles = fetchedArticles;
  },
  watch: {
    async query(query) {
      if (!query) {
        this.articles = await this.$content().fetch();
      }

      this.articles = await this.$content().search(query).fetch();
    },
    showSearchModal: function (newValue) {
      if (newValue) {
        window.addEventListener("keyup", this.onEscapeKeyUp);
      } else {
        window.removeEventListener("keyup", this.onEscapeKeyUp);
      }
    },
  },
  methods: {
    showSearchModalTrue() {
      this.showSearchModal = true;
    },
    showSearchModalFalse() {
      this.showSearchModal = false;
    },
    onEscapeKeyUp(event) {
      if (event.which === 27) {
        this.showSearchModalFalse();
      }
    },
  },
};
</script>

<style scoped>
.searchModal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--background-color);
  z-index: 1000;
  overflow-y: scroll;
}

.toolbar {
  display: flex;
  justify-content: flex-end;
  padding: 1rem 2rem 2rem 0;
}
.toolbar button {
  background: none;
  border: none;
}
.toolbar button:hover {
  color: var(--special-font-color);
}

.container {
  max-width: 700px;
}
.container input {
  display: block;
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 2rem;
}

.container article {
  padding-bottom: 1.5rem;
}
</style>