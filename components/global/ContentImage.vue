<template>
  <img :src="src" />
</template>

<script>
export default {
  props: {
    image: {
      required: true,
      type: String,
    },
  },
  computed: {
    src() {
      return require("@/assets/" + this.image);
    },
  },
};
</script>
