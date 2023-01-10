<style lang="scss" scoped>
.indicator-list {
  height: 10px;
  .indicator {
    transition: 0.3s background;
    @apply w-9px h-9px rounded-1/2 mr-12px bg-[rgba(217,217,217,0.4)] cursor-pointer;
    &.active {
      width: 10px;
      height: 10px;
      background: #fa6be1;
      border: 2.14286px solid #364666;
      box-sizing: content-box;
      // box-shadow: 0px 2.85714px 8.57143px rgba(0, 0, 0, 0.1),
      //   inset 0px -0.428571px 0.428571px rgba(0, 0, 0, 0.4),
      //   inset 0px 0.428571px 0.428571px #ffb7f3;
    }
    &:nth-last-of-type(1) {
      margin-right: 0;
    }
  }
}
</style>

<template>
  <div class="swiper-pc relative">
    <div :style="{ height }">
      <client-only>
        <swiper
          ref="swiper"
          :options="swiperOption"
          @slide-change="slideChange"
        >
          <swiper-slide
            class="slide-item cursor-pointer"
            v-for="(item, index) in list"
            :key="index"
          >
            <slot :item="item"></slot>
          </swiper-slide>
        </swiper>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    height: {
      type: String,
      default: "auto",
    },
  },
  components: {},
  computed: {
    arrowTop() {
      if (this.height === "auto") return "0px";
      return parseInt(this.height) / 2 - 24 + "px";
    },
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        speed: 500,
        direction: "horizontal",
        slidesPerView: 3,
        spaceBetween: 25,
        autoplay: { delay: 600033, disableOnInteraction: false },
      },
      kvIndex: 0,
    };
  },
  mounted() {},
  methods: {
    slideChange() {
      this.kvIndex = this.$refs.swiper.$swiper.realIndex;
    },
    selectIndicator(index) {
      this.kvIndex = index;
      this.$refs.swiper.$swiper.slideTo(index);
    },
    turnLeft() {
      const swiper = this.$refs.swiper.$swiper;
      console.log("swiper", swiper);
      swiper.slidePrev();
    },
    turnRight() {
      const swiper = this.$refs.swiper.$swiper;
      console.log("swiper", swiper);
      swiper.slideNext();
    },
    goto(item) {
      this.$emit("goto", item);
    },
  },
};
</script>
