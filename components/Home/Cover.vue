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
  <div class="flex justify-center items-center relative z-1 h-626px">
    <div class="flex justify-between items-center w-1182px mt-150px">
      <div class="pt-0px">
        <!--div
          class="flex items-center mb-17px"
          @click="clickLearnmoreaboutFurion()"
        >
          <img
            class="mr-13px cursor-pointer"
            src="@/assets/images/index/video.svg"
          />
          <p class="text-16px text-[#FF7AE8] font-700 cursor-pointer">
            Learn more about Furion
          </p>
        </div-->
        <p class="text-44px font-500 mb-10px">At Furion, you can...</p>
        <div class="mb-25px w-540px">
          <vue-typer
            :text="[
              'Buy NFT',
              'Sell NFT',
              'Explore NFT',
              'Unleash NFTLiquidity.',
            ]"
            :shuffle="false"
            :repeat="0"
            initial-action="typing"
            :pre-type-delay="100"
            :type-delay="100"
            :pre-erase-delay="1800"
            :erase-delay="80"
            erase-style="backspace"
            :erase-on-complete="false"
            caret-animation="blink"
            v-if="ready"
          ></vue-typer>
        </div>
        <div
          class="text-[rgba(252,255,253,0.6)] font-400 leading-32px text-20px"
        >
          <p>All-in-one NFT platform with better liquidity,</p>
          <p>price oracle, and AMM solutions.</p>
        </div>
        <div class="mt-30px">
          <div class="flex items-center">
            <div 
              class="custom-btn2 mr-25px" 
              @click="clicklearn()"
            >
              learn more
            </div>
            <div class="custom-btn2 mr-25px" @click="clickTutorial()">Testnet tutorial</div>
          </div>
        </div>
        <!--mark 推特、dc等多个小图标跳转链接可以用ul li配合数组 -->
        <ul class="w-200px flex mb-20px mt-20px ml-10px">
          <li
            v-for="(item, index) in linkList"
            :key="index"
            @click="clicklinkListItem(item.url)"
            class="cursor-pointer mr-30px"
          >
            <img :src="item.img" />
          </li>
        </ul>
      </div>
      <div class="cover-bg">
        <div>
          <div
            class="cover-img-wrap w-460px h-420px mb-18px overflow-hidden rounded-20px"
          >
            <img
              class="cover-img w-1/1 h-1/1 -ml-1px"
              src="@/assets/images/cover3.gif"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="flex justify-between pt-180px px-130px mb-65px">
    <div class="pt-66px">
      <div class="flex items-center mb-17px cursor-pointer">
        <img class="mr-13px" src="@/assets/images/index/video.svg" />
        <p class="text-16px text-[#FF7AE8] font-700">Learn more about Furion</p>
      </div>

      <div class="Orbitron text-48px font-800 leading-60px mb-5px">
        Discover, collect and <br />sell your NFT
      </div>

      <div class="text-22px leading-34px mb-46px" style="color: rgba(252, 255, 253, 0.6)">
        - All-in-one NFT platform for better liquidity,<br />
        AMM solution, and price oracle
      </div>
      <div class="flex">
        <div class="btn_border mr-35px">
          <el-button type="primary" class="!w-250px !h-56px Orbitron">
            <span class="text-18px">Enter APP</span>
          </el-button>
        </div>
        <div class="btn_border">
          <el-button
            type="primary"
            plain
            class="!w-250px !h-56px Orbitron"
            style="background: rgba(252, 255, 253, 0.06) !important"
          >
            <span class="text-18px">Get My NFT Pass</span>
          </el-button>
        </div>
      </div>
    </div>

    <div class="w-484px h-500px relative">
      <img
        src="@/assets/images/home/cover.jpg"
        class="rounded-20px block mx-auto mb-18px"
      />

      <div class="flex justify-between items-center relative z-2 px-15px">
        <div class="flex items-center">
          <img class="cursor-pointer mr-12px" src="@/assets/images/index/avatar2.svg" />
          <div class="mt-3px Orbitron text-14px">
            <p class="text-white font-600">CLONEX-XTAKASHI</p>
            <p class="text-[#34f8ff] font-600 mt-3px">Azuki</p>
          </div>
        </div>
        <img class="cursor-pointer mr-18px" src="@/assets/images/index/about.svg" />
      </div>

      <img src="@/assets/images/home/card.png" class="absolute bottom-0 left-0" />
    </div>
  </div> -->
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
      dropList: [
        {
          img: require("@/assets/images/index/drop1.jpg"),
          name: "Thunderbrawl Royalty",
          description:
            "Thunder Brawl is a P2E economy revolves around $THB, and Royalty NFTs!",
          description2: "      ",
          twitter: "THB_crypto",
        },
        {
          img: require("@/assets/images/index/drop2.jpg"),
          name: "MEGAMI",
          description: "MEGAMI is a collection of 10,000 PFPs designed by",
          description2: "illustrator and YouTuber Naoki Saito",
          twitter: "MEGAMINFT",
        },
        {
          img: require("@/assets/images/index/drop3.jpg"),
          name: "Saphire",
          description: "777 Genesis; 80% of profits are invested in the",
          description2: "utilities for this project",
          twitter: "SaphireNFT",
        },
      ],
      linkList: [
        {
          img: require("@/assets/images/index/twitter.png"),
          url: "https://twitter.com/ProjectFurion?s=20&t=ZJNt4qEB9JuLaVMfwyaYbw",
        },
        {
          img: require("@/assets/images/index/medium.png"),
          url: "https://medium.com/@project.furion",
        },
        {
          img: require("@/assets/images/index/discord.png"),
          url: "https://discord.com/invite/qMWmvceFTx",
        },
      ],
      List: [
        {
          tital: "Instant Liquidity",
          remark1: "Lock or store your NFT into our",
          remark2: "separate pools to get the instant liquidity",
          remark3: "",
          docs_url: "furion-pools/furion-separate-pools",
        },
        {
          tital: "Aggregating Liquidity",
          remark1: "Get your market-driven index tokens",
          remark2: "by joining our aggregate pools",
          remark3: "",
          docs_url: "furion-pools/furion-aggregate-pools",
        },
        {
          tital: "Swapping",
          remark1: "Swap any tokens that you want in our",
          remark2: "automated market maker protocol",
          remark3: "",
          docs_url: "furion-swap",
        },
        {
          tital: "Borrowing & Lending",
          remark1: "Borrow & lend your ERC-20 tokens and",
          remark2: "NFTs via peer-to-pool methods",
          remark3: "",
          docs_url: "furion-money-market",
        },
      ],
      swiperList: [
        {
          collection: "Cool%20Cats",
          img: require("@/assets/images/index/swiper1.jpg"),
          avatar: require("@/assets/images/index/avatar1.jpg"),
          name: "Cool Cats NFT",
          description: "CoolCatsContract",
          question: "Some cats are cooler than others",
        },
        {
          collection: "Invisible%20Friends",
          img: require("@/assets/images/index/swiper2.jpg"),
          avatar: require("@/assets/images/index/avatar2.jpg"),
          name: "Invisible Friends",
          description: "RandomCharacterCollective",
          question: "5000 animated invisible characters",
        },
        {
          collection: "World%20Of%20Women",
          img: require("@/assets/images/index/swiper3.jpg"),
          avatar: require("@/assets/images/index/avatar3.jpg"),
          name: "World of Women",
          description: "WorldofWomen",
          question: "Celebrate inclusivity & equal opportunities",
        },
      ],
      categoryList: [
        {
          img: require("@/assets/images/index/category1.jpg"),
          remark1: "NFT-Fi Trilemma",
          url: "https://medium.com/@project.furion/the-nft-fi-trilemma-f1f86b045ed8",
        },
        {
          img: require("@/assets/images/index/category2.jpg"),
          remark1: "Introducing Furion",
          url: "https://docs.furion.io",
        },
        {
          img: require("@/assets/images/index/category3.jpg"),
          remark1: "NFT News of the Week",
          url: "https://twitter.com/ProjectFurion/status/1561278693103652864?s=20&t=KMuIrzivXA4M9eemZKK9Jg",
        },
      ],
      collectionList: new Array(4).fill({
        floorPrice: 1344.6,
        currentPrice: 1344.9232,
        percent: 23,
        avatar: require("@/assets/images/avatar1.svg"),
        name: "",
      }),
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
    clicklearn() {
      window.open('https://docs.furion.io/')
    },
    clickTutorial() {
      window.open('https://medium.com/@project.furion/furion-testnet-tutorial-5dc4de0901f3')
    },
  },
};
</script>
