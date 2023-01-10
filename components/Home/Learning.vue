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
</style>

<template>
  <div>
    <div class="mb-135px">
      <div
        class="Orbitron font-700 text-32px flex items-center justify-center h-60px mb-60px"
      >
        Learning With&nbsp;<span class="text-[#FA6BE1]">Furion</span>
      </div>
      <ul
        class="category-list w-1300px mx-auto flex justify-between mb-140px cursor-pointer"
      >
        <li
          v-for="(item, index) in categoryList"
          :key="index"
          class="w-376px h-290px rounded-16px overflow-hidden border-3px border-[rgba(255,255,255,0.1)] bg-[rgba(23,37,72,0.8)] relative"
          @click="clickCategoryList(item.url)"
        >
          <div class="img-wrap h-220px rounded-16px overflow-hidden relative">
            <img class="w-1/1 h-1/1 object-cover swiper-img" :src="item.img" />
            <div class="img-float absolute w-1/1 h-80px left-0 bottom-0"></div>
          </div>
          <p class="font-500 text-16px text-[#fcfffd] text-center mt-26px">
            {{ item.remark1 }}
          </p>
        </li>
      </ul>
      <!-- <div class="flex justify-center text-center">
        <div class="relative mr-23px">
          <img src="@/assets/images/home/learning1.png" alt="" />

          <div class="text-16px font-500 absolute top-230px w-full leading-28px">
            How to split your NFT into ERC-20 tokens?
          </div>
        </div>

        <div class="relative mr-23px">
          <img src="@/assets/images/home/learning2.png" alt="" />
          <div class="text-16px font-500 absolute top-230px w-full leading-28px">
            How to set up MetaMask wallet in Furion?
          </div>
        </div>

        <div class="relative">
          <img src="@/assets/images/home/learning3.png" alt="" />
          <div class="text-16px font-500 absolute top-230px w-full leading-28px">
            How can different collections aggregate their liquidity?
          </div>
        </div>
      </div> -->
    </div>

    <div class="Orbitron font-700 text-32px flex items-center justify-center mb-30px">
      Furion Avatars and Badges
    </div>

    <div class="text-20px text-center mb-90px" style="color: rgba(252, 255, 253, 0.8)">
      Furion Avatars are the four-level NFT that can be upgraded by Badges. <br>With the limited supply of 2000, it is an identity symbol for Furion supporters and unlocks exclusive benefits.
    </div>

    <img src="@/assets/images/home/cardbox.png" class="block mx-auto mb-135px" />
  </div>
</template>

<script>
import { nft_info, initNftInfo } from "@/config/collection/nft_info";
import $ from "jquery";
export default {
  async asyncData({ store, $axios, app, query }) {
    store.commit("update", ["admin.activeMenu", "/"]);
  },
  layout: "blank",
  props: {},
  components: {},
  computed: {},
  data() {
    return {
      network: "goerli",
      dialogVisible: false,
      asset: "default text",
      nft_info: nft_info,
      option: {},
      ready: false,
      showAnimation: false,
      categoryList: [
        {
          img: require("@/assets/images/index/category4.png"),
          remark1: "How to split your NFT into ERC-20 tokens?",
          url: "https://medium.com/@project.furion/furion-pedia-fractionalize-your-nft-through-locking-or-storing-cf6747d2b513",
        },
        {
          img: require("@/assets/images/index/category2.jpg"),
          remark1: "Introducing Furion",
          url: "https://medium.com/@project.furion/furion-the-first-all-in-one-nft-liquidity-platform-ffa4e3becb60",
        },
        {
          img: require("@/assets/images/index/category1.jpg"),
          remark1: "NFT-Fi Trilemma",
          url: "https://medium.com/@project.furion/the-nft-fi-trilemma-f1f86b045ed8",
        },
      ],
    };
  },
  async mounted() {
    this.showAnimation = true;
    this.nft_info = await initNftInfo(this.network);
    this.ready = true;
    $(".loading-wrapper").fadeOut(500);
  },
  methods: {
    clickSwiperItem(collection) {
      this.$router.push(
        "/collection/separate_pools/nft_pool?collection=" + collection
      );
    },
    clickDropItem(twitter) {
      window.open("https://twitter.com/" + twitter, "_blank");
    },
    clickListItem(url) {
      window.open("https://docs.furion.io/function/" + url, "_blank");
    },
    clickLearnmoreaboutFurion() {
      window.open("https://docs.furion.io/", "_blank");
    },
    clickCategoryList(url) {
      window.open(url, "_blank");
    },
    clicklinkListItem(url) {
      window.open(url, "_blank");
    },
  },
};
</script>
