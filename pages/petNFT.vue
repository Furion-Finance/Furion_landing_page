<style lang="scss" scoped>
.title {
  font-weight: 800;
  font-size: 16px;
  background: linear-gradient(273.69deg, #b8a0cf 25.62%, #fc64d9 96.07%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  @apply absolute left-110px top-109px;
}

.mainNFT {
  width: 1080px;
  height: 640px;
  .leftSide {
    width: 470px;
    height: 640px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .leftTop {
      margin-top: -3px;
      background: no-repeat center url("@/assets/images/pet/bg1.png");
      background-size: 100% 100%;
      .pet {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -60%);
      }
    }
    .btnLock {
      background-size: 100% 100%;
      background: no-repeat center url("@/assets/images/pet/bg5.png");
      width: 468px;
      height: 90px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      div {
        width: 130px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 24px;
        font-weight: 600;
        color: #fcfffd;
      }
    }
  }
  .rightSide {
    width: 580px;
    height: 640px;
    background: no-repeat center url("@/assets/images/pet/bg3.png");
    background-size: 100% 100%;

    display: flex;
    align-items: center;
    flex-direction: column;
    .rightTop {
      margin-top: 15px;
      padding: 8px 20px;
      background: no-repeat center url("@/assets/images/pet/bg4.png");
      background-size: 100% 100%;
      .midLayer {
        grid: repeat(2, 220px) / auto-flow 220px;
        justify-content: center;
        align-items: center;
        padding: 25px 0px;

        .midLayerDiv {
          border-radius: 10%;
          background-color: #333572;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;

          .mask {
            position: absolute !important;
            top: 0;
            left: 0;
            background-color: #000000;
            border-radius: 10%;
            filter: Alpha(Opacity=60);
            opacity: 0.6;
            color: #fff;
            display: none;
            height: 100%;
            width: 100%;
            line-height: 180px;
            text-align: center;
          }
          .firstMask {
            position: absolute !important;
            top: 0;
            left: 0;
            background-color: #000000;
            filter: Alpha(Opacity=60);
            opacity: 0.6;
            color: #fff;
            height: 100%;
            width: 100%;
            line-height: 180px;
            text-align: center;
            border-radius: 10%;
          }
        }
      }
    }
    .icon-arrow-left-filling {
      color: #fa6be1;
    }
    .icon-arrow-left-filling.icon-arrow-left-filling-disable {
      opacity: 0.35;
    }
    .icon-arrow-right-filling {
      color: #fa6be1;
    }
  }
}

.main {
  width: 1080px;
  height: 640px;
  .leftSide {
    width: 470px;
    height: 640px;
    .leftTop {
      margin-top: -3px;
      background: no-repeat center url("@/assets/images/pet/bg1.png");
      background-size: 100% 100%;
      .pet {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -60%);
      }
    }
  }
  .rightSide {
    width: 580px;
    height: 640px;
    background: no-repeat center url("@/assets/images/pet/bg3.png");
    background-size: 100% 100%;

    display: flex;
    align-items: center;
    flex-direction: column;
    .rightTop {
      margin-top: 15px;
      background: no-repeat center url("@/assets/images/pet/bg4.png");
      background-size: 100% 100%;
      .midLayer {
        grid: repeat(3, 160px) 165px;
        justify-items: center;
        align-items: center;
        grid-auto-flow: row;
        grid-column-gap: 23px;
        grid-row-gap: 20px;
        margin-top: 20px;
      }

      .containTag {
        background-color: #333572;
        width: 140px;
        height: 140px;
        border-radius: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        img {
          width: 65%;
          height: 65%;
        }
        .mask {
          position: absolute !important;
          top: 0;
          left: 0;
          background-color: #000000;
          filter: Alpha(Opacity=60);
          opacity: 0.6;
          color: #fff;
          display: none;
          height: 100%;
          width: 100%;
          line-height: 140px;
          text-align: center;
          border-radius: 20%;
        }
        .firstMask {
          position: absolute !important;
          top: 0;
          left: 0;
          background-color: #000000;
          filter: Alpha(Opacity=60);
          opacity: 0.6;
          color: #fff;
          height: 100%;
          width: 100%;
          line-height: 140px;
          text-align: center;
          border-radius: 20%;
        }
      }
    }
    .swiper {
      width: 100%;
      height: 100%;
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }

    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>

<template>
  <div class="flex justify-center min-h-100vh h-120vh page">
    <!-- Back to Home -->
    <div class="flex cursor-pointer" @click="$router.push('/')">
      <img
        src="@/assets/images/icon_back.svg"
        class="absolute left-60px cursor-pointer top-100px hover:opacity-80"
      />
      <div class="title">Back to Home</div>
    </div>

    <div class="w-1270px flex justify-end">
      <PetNFTTab
        v-if="active == 1 || active == 2"
        class="mt-50px"
        v-model="active"
      ></PetNFTTab>
    </div>

    <div>
      <!-- NFT -->
      <div
        v-show="active == 1"
        class="absolute top-200px left-100px flex justify-between mx-auto mainNFT"
      >
        <div class="absolute left-0 top-0 leftSide">
          <div class="w-100% h-530px leftTop">
            <img
              src="@/assets/images/pet/level.png"
              class="absolute left-25px top-25px z-10"
              width="70"
            />
            <img
              :src="displayImg"
              class="absolute right-40px top-30px z-10"
              width="70"
            />
            <img :src="displayNFTImg" class="absolute z-10 pet" width="400" />
          </div>

          <div
            class="absolute center-x w-1/1 flex items-center justify-center bottom-0px"
          >
            <div class="btnLock">
              <div>
                <img src="@/assets/images/pet/lock.svg" width="32px" />
                #0001
              </div>
            </div>
          </div>
        </div>
        <div class="absolute right-0 top-0 rightSide z-10">
          <div>
            <!-- 1.如果有nft-->
            <template v-if="!empty">
              <div>
                <div class="rightTop w-540px h-500px z-10">
                  <swiper-tap :list="dropList">
                    <template v-slot="slotProps">
                      <div
                        class="swiper-item-wrap h-570px rounded-20px overflow-hidden"
                        data-aos="fade-up"
                        :data-aos-delay="
                          400 + dropList.indexOf(slotProps.item) * 200
                        "
                      >
                        <div class="w-540px h-500px grid grid-cols-2 midLayer">
                          <template v-for="(i, index) in nftList">
                            <div
                              :key="index"
                              class="w-180px h-180px midLayerDiv"
                              @click="displayNFT(index, slotProps.item.name)"
                            >
                              <img :src="i.imgUrl" class="" width="180" />
                              <!--div
                                class="firstMask"
                                v-if="
                                  index == 0 &&
                                  showFirstMask &&
                                  slotProps.item.name == 1
                                "
                              >
                                Displaying
                              </div-->
                              <div class="mask" ref="nftmask">Displaying</div>
                            </div>
                          </template>
                        </div>
                      </div>
                    </template>
                  </swiper-tap>
                </div>
              </div>
            </template>
            <!-- 2.如果没有nft -->
            <template v-else>
              <div class="flex justify-center">
                <div
                  class="rightTop w-540px h-500px z-10 flex justify-center items-center"
                >
                  <img src="@/assets/images/pet/Empty.png" />
                </div>

                <div
                  class="swiper-pagination absolute w-100px flex justify-around"
                  style="bottom: 10%"
                >
                  <span
                    class="iconfont icon-arrow-left-filling icon-arrow-left-filling-disable"
                  ></span
                  >1/1
                  <span class="iconfont icon-arrow-right-filling"></span>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>

      <!-- badges -->
      <div
        v-show="active == 2"
        class="absolute top-200px left-100px flex justify-between mx-auto main"
      >
        <div class="absolute left-0 top-0 leftSide">
          <!-- Badget左侧布局 -->
          <div class="w-100% h-530px leftTop">
            <img
              src="@/assets/images/pet/level.png"
              class="absolute left-25px top-25px z-10"
              width="70"
            />
            <img
              :src="displayImg"
              class="absolute right-40px top-30px z-10"
              width="70"
            />

            <img :src="displayNFTImg" class="absolute z-10 pet" width="400" />
          </div>

          <div
            class="absolute center-x w-1/1 flex items-center justify-center bottom-20px"
          >
            <div
              class="btn2 !w-245px !h-60px !text-[24px]"
            >
              FREEMINT
            </div>
          </div>
        </div>

        <div class="absolute right-0 top-0 rightSide z-10">
          <div class="rightTop w-540px h-500px">
            <swiper-tap :list="dropList">
              <template v-slot="slotProps">
                <div
                  class="swiper-item-wrap h-570px rounded-20px overflow-hidden relative"
                  data-aos="fade-up"
                  :data-aos-delay="400 + dropList.indexOf(slotProps.item) * 200"
                >
                  <div class="midLayer grid grid-cols-3 w-460px h-450px">
                    <template v-for="(i, index) in tagList">
                      <div
                        @click="displayTag(index, slotProps.item.name)"
                        :key="index"
                        class="containTag"
                      >
                        <img :src="i.imgUrl" />
                        <div
                          class="firstMask"
                          v-if="
                            index == 0 &&
                            showTagFirstMask &&
                            slotProps.item.name == 1
                          "
                        >
                          Displaying
                        </div>
                        <div class="mask" ref="mask">Displaying</div>
                      </div>
                    </template>
                  </div>
                </div>
              </template>
            </swiper-tap>
          </div>
        </div>
      </div>
    </div>
    <div style="clear: both"></div>
  </div>
</template>

<script>
import SwiperTap from "@/components/SwiperTap.vue";
export default {
  layout: "pet",
  props: {},
  components: { SwiperTap },
  computed: {},
  data() {
    return {
      active: 1,
      empty: false,
      dropList: [
        {
          name: "1",
        },
        {
          name: "2",
        },
        {
          name: "3",
        },
      ],
      tagList: [
        { imgUrl: require("@/assets/images/pet/tag.png") },
        { imgUrl: require("@/assets/images/pet/徽章1.png") },
        { imgUrl: require("@/assets/images/pet/徽章3.png") },
        { imgUrl: require("@/assets/images/pet/tag.png") },
        { imgUrl: require("@/assets/images/pet/tag.png") },
        { imgUrl: require("@/assets/images/pet/tag.png") },
        { imgUrl: require("@/assets/images/pet/tag.png") },
        { imgUrl: require("@/assets/images/pet/tag.png") },
        { imgUrl: require("@/assets/images/pet/tag.png") },
      ],
      displayImg: require("@/assets/images/pet/tag.png"),
      displayNFTImg: require("@/assets/images/pet/pet3.png"),
      nftList: [
        { imgUrl: require("@/assets/images/pet/pet3.png") },
        { imgUrl: require("@/assets/images/pet/fengchen 16.png") },
        { imgUrl: require("@/assets/images/pet/fengchen 11.png") },
        { imgUrl: require("@/assets/images/pet/fengchen 9.png") },
      ],
      showFirstMask: true,
      showTagFirstMask: true,
    };
  },
  mounted() {},
  methods: {
    // test 初始化宠物信息 如果有宠物，那么empty就为false 展示第1个NFT界面
    async initPetInfo() {
      let account = this.userInfo.userAddress;
      this.pet = await InitPetInfo(this.pet, account);
      if (this.pet.cat.balance > 0) {
        this.empty = false;
      }
    },
    displayTag(i, page) {
      this.showTagFirstMask = false;
      const index = i + (page - 1) * 9;
      if (this.$refs.mask[index].style.display === "none") {
        for (let i = 0; i < this.$refs.mask.length; i++) {
          this.$refs.mask[i].style.display = "none";
        }
        this.$refs.mask[index].style.display = "block";
        this.displayImg = this.tagList[i].imgUrl;
      } else {
        this.$refs.mask[index].style.display = "none";
      }
    },
    displayNFT(i, page) {
      this.showFirstMask = false;
      const index = i + (page - 1) * 4;
      if (this.$refs.nftmask[index].style.display === "none") {
        for (let i = 0; i < this.$refs.nftmask.length; i++) {
          this.$refs.nftmask[i].style.display = "none";
        }
        this.$refs.nftmask[index].style.display = "block";
        this.displayNFTImg = this.nftList[i].imgUrl;
      } else {
        this.$refs.nftmask[index].style.display = "none";
      }
    },
  },
};
</script>
