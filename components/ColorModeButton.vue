<template>
  <button @click="toggleColorMode">
    <FaIcon
      v-if="$colorMode.value === 'dark'"
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
      if (this.$colorMode.value === "dark") {
        this.$colorMode.value = "light";
      } else {
        this.$colorMode.value = "dark";
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