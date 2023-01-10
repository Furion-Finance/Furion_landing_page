<style lang="scss" scoped>
// .indicator-list {
//   height: 10px;
//   .indicator {
//     transition: 0.3s background;
//     @apply w-9px h-9px rounded-1/2 mr-12px bg-[rgba(217,217,217,0.4)] cursor-pointer;
//     &.active {
//       width: 10px;
//       height: 10px;
//       background: #fa6be1;
//       border: 2.14286px solid #364666;
//       box-sizing: content-box;
//       // box-shadow: 0px 2.85714px 8.57143px rgba(0, 0, 0, 0.1),
//       //   inset 0px -0.428571px 0.428571px rgba(0, 0, 0, 0.4),
//       //   inset 0px 0.428571px 0.428571px #ffb7f3;
//     }
//     &:nth-last-of-type(1) {
//       margin-right: 0;
//     }
//   }
// }
.slide-item {
  width: 540px !important;
  overflow: hidden;
  display: flex;
  justify-content: center;
}

.swiper-pagination {
  left: 40%;
  bottom: 12%;
}

.icon-arrow-left-filling {
  color: #fa6be1;
  font-size: 20px;
}
.icon-arrow-left-filling.icon-arrow-left-filling-disable {
  color: #667181;
}
.icon-arrow-right-filling {
  color: #fa6be1;
  font-size: 20px;
}
.icon-arrow-right-filling.icon-arrow-right-filling-disable {
  color: #667181;
}
</style>

<template>
  <div class="">
    <div style="height: 630px; width: 540px">
      <client-only>
        <swiper
          ref="swiper"
          :options="swiperOption"
          @slide-change="slideChange"
          :list="list"
          class="mySwiper"
        >
          <swiper-slide
            class="slide-item cursor-pointer"
            v-for="(item, index) in list"
            :key="index"
          >
            <slot :item="item"></slot>
          </swiper-slide>
        </swiper>

        <div
          class="swiper-pagination absolute w-100px flex justify-around"
          style="bottom: 10%"
        >
          <span
            class="iconfont icon-arrow-left-filling"
            :class="disableLeft ? 'icon-arrow-left-filling-disable' : ''"
            @click="turnLeft"
          ></span
          >{{ kvIndex + 1 }}/{{ list.length }}
          <span
            class="iconfont icon-arrow-right-filling"
            :class="disable ? 'icon-arrow-right-filling-disable' : ''"
            @click="turnRight"
          ></span>
        </div>
      </client-only>
    </div>
  </div>
</template>

<script>
// import { Pagination, Navigation } from "swiper";
// import Swiper from "swiper/swiper-bundle.min";
// import "swiper/swiper-bundle.min.css";
import "@/assets/icon/iconfont.css";
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  components: {},
  computed: {},
  data() {
    return {
      swiperOption: {
        pagination: {
          type: "fraction",
        },
        navigation: true,
        direction: "horizontal",
        slidesPerView: 1,
        spaceBetween: 3,
      },
      kvIndex: 0,
      disable: false,
      disableLeft: " ",
    };
  },
  mounted() {},
  methods: {
    slideChange() {
      this.kvIndex = this.$refs.swiper.$swiper.realIndex;
      console.log("this.kvIndex", this.kvIndex);
    },
    selectIndicator(index) {
      this.kvIndex = index;
      this.$refs.swiper.$swiper.slideTo(index);
    },
    turnLeft() {
      const swiper = this.$refs.swiper.$swiper;
      console.log("swiper", swiper);
      swiper.slidePrev();
      if (this.kvIndex == 0) {
        this.disableLeft = true;
        this.disable = false;
      }
    },
    turnRight() {
      const swiper = this.$refs.swiper.$swiper;
      console.log("swiper", swiper);
      swiper.slideNext();
      if (this.kvIndex == this.list.length - 1) {
        this.disable = true;
        this.disableLeft = false;
      } else {
        this.disable = false;
        this.disableLeft = false;
      }
    },
    goto(item) {
      this.$emit("goto", item);
    },
  },
};
</script>
