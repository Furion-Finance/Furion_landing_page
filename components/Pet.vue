<style lang="scss" scoped>
.pet {
  @apply fixed right-80px text-[#C0C7D5] cursor-pointer;
  ::v-deep {
    .el-popover {
      background: #212657;
      border-color: #212657;
      color: #c0c7d5;
      @apply absolute bottom-90px left-40px text-12px;
      padding: 8px 8px;
      width: 120px !important;
      min-width: unset !important;
      word-break: break-all;
      line-height: 16px !important;
    }
    .el-popper[x-placement^="top"] .popper__arrow {
      border-color: transparent;
    }
    .el-popper[x-placement^="top"] .popper__arrow::after {
      border-top-color: #212657;
      bottom: -1px;
    }
    .underline {
      text-decoration: underline;
      color: #ffffff;
    }
  }
}

.box {
  @apply w-206px h-266px  fixed right-220px  text-[#FCFFFD];
  background: url("@/assets/images/pet/bg.png");
}

.box2 {
  @apply w-248px h-150px  fixed right-220px text-[#FCFFFD];
  background: url("@/assets/images/pet/bg2.png");
}

.lv {
  width: 21px;
  height: 21px;
  background: #343e73;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  position: absolute;
  left: 24px;
  bottom: 184px;
  color: #fa6be1;
  font-weight: 900;
  font-size: 15px;
  @apply flex items-center justify-center;
}

.exp {
  background: #343e73;
  border-radius: 50px;
  height: 137px;
  width: 8px;
  position: absolute;
  left: 30px;
  bottom: 40px;
  overflow: hidden;
  @apply flex items-end justify-center;
  .bar {
    border-radius: 50px;
    background: linear-gradient(
      360deg,
      #fa6be1 0%,
      #fa6be1 58.85%,
      #31c2c7 100%
    );
    width: 100%;
  }
}

.p {
  font-weight: 700;
  font-size: 12px;
  color: #ffd0f7;
  position: absolute;
  left: 15px;
  bottom: 20px;
}

.msg {
  top: 77px;
  width: 100%;
  text-align: center;
  font-weight: 600;
  font-size: 12px;
  line-height: 10px;
  text-transform: uppercase;
  color: #fcfffd;
  text-shadow: 1px 1px 0 #ffb5f2;
}
</style>

<template>
  <div
    class="z-1001"
    :class="{ 'el-dialog__wrapper': show }"
    v-if="showInfo.showPet"
  >
    <!-- <div class="pet center-y mt-100px z-100" @click="$router.push('/petNFT')"> -->
    <div class="pet mt-200px z-100" @click="$router.push('/petNFT')">
      <div
        class="el-popover el-popper el-popover--plain"
        x-placement="top-end"
        v-if="textIndex == 0"
      >
        Welcome to Furion!! Tap me and check your NFT pass!
        <div x-arrow="" class="popper__arrow" style="left: 10px"></div>
      </div>
      <div
        class="el-popover el-popper el-popover--plain"
        x-placement="top-end"
        v-if="textIndex == 1"
      >
        Fuuuuuuuuuuuuuwa~ Nice to meet you!
        <div x-arrow="" class="popper__arrow" style="left: 10px"></div>
      </div>
      <div
        class="el-popover el-popper el-popover--plain"
        x-placement="top-end"
        v-if="textIndex == 2"
      >
        Wanna know more about Furion? I can show you
        <div
          class="underline inline-block"
          x-placement="top-end"
          @click.stop="
            clickopen(
              'https://medium.com/@project.furion/furion-the-first-all-in-one-nft-liquidity-platform-ffa4e3becb60'
            )
          "
        >
          this
        </div>
        <div class="inline-block" x-placement="top-end">
          to know more about us.
        </div>
        <div x-arrow="" class="popper__arrow" style="left: 10px"></div>
      </div>
      <div
        class="el-popover el-popper el-popover--plain"
        x-placement="top-end"
        v-if="textIndex == 3"
      >
        What are the differences between storing and locking? Here is the
        <div
          class="underline inline-block"
          x-placement="top-end"
          @click="
            clickopen(
              'https://medium.com/@project.furion/furion-pedia-fractionalize-your-nft-through-locking-or-storing-cf6747d2b513'
            )
          "
        >
          answer.
        </div>
        <div x-arrow="" class="popper__arrow" style="left: 10px"></div>
      </div>
      <div
        class="el-popover el-popper el-popover--plain"
        x-placement="top-end"
        v-if="textIndex == 4"
      >
        Wondering how to aggregate liquidity? Let me show you how to

        <div
          class="underline inline-block"
          x-placement="top-end"
          @click="
            clickopen(
              'https://medium.com/@project.furion/furion-pedia-concentrated-liquidity-in-aggregate-pool-14cea811804e'
            )
          "
        >
          mint your index token.
        </div>
        <div x-arrow="" class="popper__arrow" style="left: 10px"></div>
      </div>
      <div
        class="el-popover el-popper el-popover--plain"
        x-placement="top-end"
        v-if="textIndex == 5"
      >
        FUR is our native utility token. You should know more about it

        <div
          class="underline inline-block"
          x-placement="top-end"
          @click="clickopen('https://docs.furion.io/token/fur')"
        >
          here
        </div>
        <div class="inline-block" x-placement="top-end">!</div>
        <div x-arrow="" class="popper__arrow" style="left: 10px"></div>
      </div>

      <div
        class="el-popover el-popper el-popover--plain"
        x-placement="top-end"
        v-if="textIndex == 6"
      >
        veFUR holders can share the revenue from Furion. To learn more about
        veFUR, press
        <div
          class="underline inline-block"
          x-placement="top-end"
          @click="clickopen('https://docs.furion.io/token/vefur')"
        >
          this
        </div>
        <div class="inline-block" x-placement="top-end">!</div>
        <div x-arrow="" class="popper__arrow" style="left: 10px"></div>
      </div>
      <div
        class="el-popover el-popper el-popover--plain"
        x-placement="top-end"
        v-if="textIndex == 7"
      >
        Does Furion incur any fee?

        <div
          class="underline inline-block"
          x-placement="top-end"
          @click="
            clickopen(
              'https://docs.furion.io/governance/fees-and-income-sharing'
            )
          "
        >
          Here
        </div>
        <div class="inline-block" x-placement="top-end">
          are the details of the fee structure.
        </div>
        <div x-arrow="" class="popper__arrow" style="left: 10px"></div>
      </div>
      <div
        class="el-popover el-popper el-popover--plain"
        x-placement="top-end"
        v-if="textIndex == 8"
      >
        Let me know if you have any questions - just DM me at
        <div
          class="underline inline-block"
          x-placement="top-end"
          @click="clickopen('https://discord.com/invite/qMWmvceFTx')"
        >
          Discord
        </div>
        <div class="inline-block" x-placement="top-end">!</div>
        <div x-arrow="" class="popper__arrow" style="left: 10px"></div>
      </div>
      <div
        class="el-popover el-popper el-popover--plain"
        x-placement="top-end"
        v-if="textIndex == 9"
      >
        Fuuuuuuuuuuuuwa~ Have you joined our
        <div
          class="underline inline-block"
          x-placement="top-end"
          @click="clickopen('https://discord.com/invite/qMWmvceFTx')"
        >
          Discord
        </div>
        <div class="inline-block" x-placement="top-end">!</div>
        <div x-arrow="" class="popper__arrow" style="left: 10px"></div>
      </div>
      <div
        class="el-popover el-popper el-popover--plain"
        x-placement="top-end"
        v-if="textIndex == 10"
      >
        Fuwa Fuwa~
        <div x-arrow="" class="popper__arrow" style="left: 10px"></div>
      </div>

      <img
        src="@/assets/images/pet/pointer.png"
        class="absolute right-10px bottom-0 blink vivify infinite duration-3000"
        v-if="!show"
      />

      <img src="@/assets/images/pet/pet.png" alt="" />
    </div>

    <!-- 第一个弹窗 -->
    <!-- <div class="box relative center-y mt-20px mr-20px" v-if="show && !dialog">
      <div
        class="absolute w-10px h-10px right-23px top-25px cursor-pointer"
        @click="dialog = true"
      ></div>
      <div class="pl-24px"> -->
    <!-- 左上角Portfolio部分 -->
    <!-- <div
          class="flex items-center pt-20px pb-9px"
          style="border-bottom: 1px solid #2e305c"
        >
          <img src="@/assets/images/pet/Cat.svg" alt="" />
          <div class="font-600 text-14px mr-4px">Portfolio</div> -->

    <!-- popover做问号的弹出框 -->
    <!-- <el-popover
            placement="bottom"
            title=""
            trigger="hover"
            :visible-arrow="false"
            popper-class="el-tip"
          >
            <div class="text-center text-[#0B1A3B]">
              <div>text...</div>
            </div>
            <img
              src="@/assets/images/pet/q.svg"
              class="cursor-pointer mb-3px"
              slot="reference"
            />
          </el-popover>
        </div>
      </div> -->
    <!-- //test NFT左侧布局 -->
    <!-- 1.如果有nft ta g就是徽章-->
    <!-- <template v-if="!empty">
        <div class="grid grid-cols-2 absolute right-10px top-60px z-10">
          <img src="@/assets/images/pet/tag.png" class="" width="30" />
          <img src="@/assets/images/pet/tag2.png" class="" width="30" />
          <img src="@/assets/images/pet/tag3.png" class="" width="30" />
          <img src="@/assets/images/pet/tag.png" class="" width="30" />
        </div>

        <img
          src="@/assets/images/pet/pet2.png"
          class="absolute center-x bottom-45px"
        />

        <div class="lv">1</div>

        <div class="exp">
          <div class="bar" :style="{ height: '70%' }"></div>
        </div>

        <div class="p w-40px text-center">70%</div>

        <div class="flex items-center absolute center-x bottom-20px">
          <img src="@/assets/images/pet/lock.svg" alt="" />
          <div class="ml-4px font-600 text-12px">#0001</div>
        </div>
      </template> -->
    <!-- 2.如果没有nft -->
    <!-- <template v-else>
        <div class="msg absolute center-x">You don't have a cat yet!</div> -->
    <!-- //test 虚线轮廓猫 -->
    <!-- <img
          src="@/assets/images/pet/pet0.png"
          class="absolute center-x bottom-60px"
        />
        <div
          class="absolute center-x w-1/1 flex items-center justify-center bottom-20px"
        >
          <div class="btn2 mr-14px" @click="empty = false">MINT</div>
          <div class="btn2">QUIT</div>
        </div>
      </template>
    </div> -->
    <!-- 第2个弹窗:退出提示 -->
    <!-- <div v-if="show && dialog" class="box2 relative center-y mt-20px mr-20px">
      <img
        src="@/assets/images/pet/tip.png"
        class="absolute center-x top-12px"
      />
      <div class="msg absolute center-x mt-4px !text-14px">ARE YOU SURE?</div>
      <div
        class="absolute center-x w-1/1 flex items-center justify-center bottom-20px"
      >
        <div class="btn2 mr-14px !h-24px" @click="close">YES</div>
        <div class="btn2 !h-24px" @click="dialog = false">NO</div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
import { PetInfo, InitPetInfo } from "@/config/pet/nft_pass";
export default {
  props: {},
  components: {},
  computed: {
    ...mapState(["showInfo"]),
    ...mapState(["userInfo"]),
  },
  data() {
    return {
      textList: [
        "Welcome to Furion!! Tap me and check your NFT pass!",
        "Fuuuuuuuuuuuuuwa~ Nice to meet you!",
        "Wanna know more about Furion? I can show you this to know more about us.",
        "What are the differences between storing and locking? Here is the answer.",
        "Wondering how to aggregate liquidity? Let me show you how to mint your index token.",
        "FUR is our native utility token. You should know more about it here!",
        "veFUR holders can share the revenue from Furion. To learn more about veFUR, press this!",
        "Does Furion incur any fee? Here are the details of the fee structure.",
        "Let me know if you have any questions - just DM me at Discord!",
        "Fuuuuuuuuuuuuwa~ Have you joined our Discord yet?",
        "Fuwa Fuwa~",
      ],
      textIndex: 0,
      timer: null,
      show: false,
      empty: true,
      dialog: false,
      pet: PetInfo,
      initPet: false,
    };
  },
  async mounted() {
    setInterval(() => {
      this.textIndex++;
      if (this.textIndex >= this.textList.length) {
        this.textIndex = 0;
      }
    }, 4500);
  },
  destroyed() {
    clearInterval(this.timer);
  },
  methods: {
    // test 初始化宠物信息 如果有宠物，那么empty就为false 展示第1个NFT界面
    async initPetInfo() {
      let account = this.userInfo.userAddress;
      this.pet = await InitPetInfo(this.pet, account);
      if (this.pet.cat.balance > 0) {
        this.empty = false;
      }
    },
    clickopen(url) {
      window.open(url);
    },
    clickPet() {
      // this.show = true;
      if (!this.initPet) {
        this.initPetInfo();
      }
    },
    close() {
      this.dialog = false;
      this.show = false;
    },
  },
};
</script>
