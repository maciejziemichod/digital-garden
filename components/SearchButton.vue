<template>
  <button title="Search">
    <FaIcon icon="search" class="fa-lg" />
  </button>
</template>

<script>
export default {};
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