<style lang="scss" scoped>
.light-left {
  position: absolute;
  left: 0;
  width: 800px;
}

.bg {
  background: url(@/assets/images/miserybox/bg.png) 100% no-repeat;
  background-size: cover;
}
</style>

<template>
  <div class="bg-[#01132e]">
    <div class="min-h-100vh text-[#FCFFFD] relative bg">
      <img
        src="@/assets/images/light_left_bg.png"
        class="light-left pointer-events-none"
      />

      <Admin-header></Admin-header>
      <nuxt class="min-h-100vh w-1280px relative pt-80px mx-auto" />
    </div>
  </div>
</template>

<script>
export default {
  head: {
    meta: [
      {
        hid: "viewport",
        name: "viewport",
        content: "width=1440,user-scalable=no",
      },
    ],
  },
  computed: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
