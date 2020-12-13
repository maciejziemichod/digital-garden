<template>
  <button @click="toggleColorMode">
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

<style scoped>
button {
  background: none;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

button:hover,
button:focus {
  background: var(--hover-background-color);
  color: var(--hover-font-color);
}
</style>