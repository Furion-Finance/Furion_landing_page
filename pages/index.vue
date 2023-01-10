<style lang="scss" scoped>
.page {
  min-height: 100vh;
  .page-wrap {
    @apply w-1300px mx-auto relative;
  }
  .cover-bg {
    background: url(@/assets/images/cover_bg.png) center / cover no-repeat;
    @apply w-484px h-512px flex justify-center pt-14px;
  }
  .page-title {
    @apply font-700 text-24px text-[#fcfffd];
  }
  .collection-item {
    margin: 0 24px 24px 0;
    &:nth-of-type(3n) {
      margin-right: 0;
    }
  }
  .float-bg {
    @apply w-max-1440px h-626px absolute top-0 -left-70px flex justify-center;
  }
}
.swiper-item-wrap {
  .float-top {
    background: linear-gradient(
      180deg,
      rgba(253, 136, 255, 0.3) -36.81%,
      rgba(229, 125, 255, 0) 100%
    );
  }
  .float-bottom {
    background: linear-gradient(
      180deg,
      rgba(32, 32, 32, 0.8) 17.01%,
      rgba(46, 46, 46, 0) 100%
    );
    transform: matrix(1, 0, 0, -1, 0, 0);
  }
}
.swiper-item-wrap2,
.category-list {
  .img-wrap {
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  }
  .swiper-img {
    background: #d9d9d9;
    border: 0.8px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    transform: scale(1.01);
  }
  .img-float {
    background: linear-gradient(
      3.88deg,
      rgba(32, 32, 32, 0.5) 15.87%,
      rgba(46, 46, 46, 0) 97.02%
    );
    background: linear-gradient(
      180deg,
      rgba(32, 32, 32, 0.8) 17.01%,
      rgba(46, 46, 46, 0) 100%
    );
    transform: matrix(1, 0, 0, -1, 0, 0);
  }
}

.vue-typer {
  font-weight: 800;
  font-size: 85px;
  line-height: 85px;
  -webkit-text-stroke: 2.5px white; //设置文字边框
  // 设置文本填充为透明
  ::v-deep .custom.char {
    color: rgba(0, 0, 0, 0.08);
  }

  ::v-deep .custom.caret {
    //光标
    background-color: white !important;
    width: 2px;
    margin-left: 5px;
  }
}

.custom-btn2 {
  font-size: 16px;
  width: 210px;
  height: 56px;
  line-height: 56px;
}
.bg {
  background: url(@/assets/images/home/bg.jpg) no-repeat;
  background-size: 100%;
}
</style>

<template>
  <div class="bg-[#140633] text-[#FCFFFD]">
    <div class="loading-wrapper" id="loading-wrapper">
      <div class="loading la-ball-running-dots">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="bg min-h-5600px min-w-1423px">
      <div class="w-1423px mx-auto" v-if="ready">
        <HomeCover></HomeCover>

        <HomeItem></HomeItem>

        <HomePool></HomePool>

        <HomeLearning></HomeLearning>

        <HomeRoad></HomeRoad>

        <HomeMeet></HomeMeet>
      </div>

      <HomeFooter v-if="ready"></HomeFooter>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

import { mapState } from 'vuex';
import { initAvatars, getVolumeItem, NftPrices } from '@/config/collection/aggregate_pools';
// import global from './common.vue'
export default {
  layout: "blank2",
  head: {
    meta: [
      {
        hid: "viewport",
        name: "viewport",
        content: "width=1440,user-scalable=no",
      },
    ],
  },
  computed: {
    ...mapState('admin', ['connectStatus']),
    ...mapState(['userInfo']),
  },
  data() {
    return {
      showAnimation: false,
      network: "goerli",
      ready: false,
      list_global: global.list,
    };
  },
  methods: {},
  async mounted() {
    this.showAnimation = true;
    $(".loading-wrapper").fadeOut(0);
    this.ready = true;
    // global.rational = true;
    // for (let pool of this.list_global) {
    //   const VOI = await getVolumeItem(pool);
    //   pool.volume = VOI.volume;
    //   pool.items = VOI.items;
    //   for (let i = 0; i < pool.collections.length; i++) {
    //     pool.collections[i].staked = VOI.staked[i];
    //   }
    // }
    // global.update_list(this.list_global);
  },
};
</script>
