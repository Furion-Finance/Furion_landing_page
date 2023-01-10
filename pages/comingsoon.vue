<style lang="scss" scoped></style>

<template>
  <div>
    <div class="absolute center">
      <img src="@/assets/images/comingsoon.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ store, $axios, app, query }) {
    store.commit("update", ["admin.activeMenu", "/more"]);
  },
  props: {},
  components: {},
  computed: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
