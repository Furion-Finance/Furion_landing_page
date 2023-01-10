<style lang="scss" scoped>
.light-left {
  position: absolute;
  left: 0;
  width: 800px;
}
</style>
<template>
  <div class="relative text-[#FCFFFD]">
    <img src="@/assets/images/light_left_bg.png" class="light-left pointer-events-none" />
    <AdminHeader></AdminHeader>
    <nuxt />
  </div>
</template>

<script>
export default {
  head: {
    meta: [
      {
        hid: 'viewport',
        name: 'viewport',
        content: 'width=1440,user-scalable=no',
      },
    ],
  },
  computed: {
    // transparent() {
    //   let list = ['/faq', '/governance', '/governance/detail'];
    //   return list.includes(this.$route.path);
    // },
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>