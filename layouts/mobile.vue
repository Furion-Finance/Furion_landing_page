<style lang="scss"></style>

<template>
  <nuxt />
</template>

<script>
export default {
  head: {
    meta: [
      {
        hid: "viewport",
        name: "viewport",
        content: "width=375,user-scalable=no",
      },
    ],
    bodyAttrs: {
      class: "mobile",
    },
  },
  components: {},
  mounted() {
    if (process.env.DEBUG) {
      let eruda = require("eruda");
      eruda.init();
    }
  },
};
</script>
