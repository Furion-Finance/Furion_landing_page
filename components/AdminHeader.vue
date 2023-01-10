<style lang="scss" scoped>
.light-left {
  @apply absolute left-0 w-800px;
}
.header-wrap {
  background: linear-gradient(
      180deg,
      rgba(193, 99, 226, 0.162) 0%,
      rgba(51, 53, 114, 0.3) 113.94%
    ),
    rgba(1, 19, 46, 0.8);
  border-bottom: 1px solid rgba(76, 53, 139, 0.14);
}
.test {
  border-radius: 40px;
  height: 45px !important;
  color: #88ffff !important;
  font-size: 14px;
  font-weight: 500 !important;
}
.menu-item {
  @apply flex items-center justify-center text-15px font-700  text-[rgba(252,2553,253,0.7)] cursor-pointer relative h-1/1;
  &.active,
  &:hover {
    color: #f181de;
    &::after {
      content: "";
      width: 75px;
      height: 20px;
      background: rgba(255, 101, 222, 0.5);
      filter: blur(30px);
      position: absolute;
      top: 30px;
    }
  }
  .highlight {
    // left: -50%;
  }
  .submenu-list-wrap {
    width: 162px;
    height: 90px;
    background: url(@/assets/images/index/menu_bg.png);
    background-position: -20px -11px;
    position: absolute;
    top: 80px;
    left: 0px;
    transition: opacity 0.4s ease-in;
    padding: 15px 20px;
    z-index: 99;
    visibility: hidden;
    opacity: 0;
    box-sizing: border-box;
    // visibility: visible;
    // opacity: 1;
    .submenu-item {
      font-weight: 600;
      font-size: 14px;
      line-height: 28px;
      color: rgba(252, 255, 253, 0.7);
      &:hover {
        color: #fff;
      }
      a {
        display: block;
      }
    }
    .submenu-item-more {
      font-weight: 600;
      font-size: 14px;
      line-height: 22px;
      color: rgba(252, 255, 253, 0.7);
      &:hover {
        color: #fff;
      }
      a {
        display: block;
      }
    }
  }
  &.has-child {
    &:hover {
      .submenu-list-wrap {
        visibility: visible;
        opacity: 1;
      }
    }
  }
}
.search-wrap ::v-deep {
  border-radius: 8px;
  .search-icon {
    margin-top: 8px;
    margin-left: 15px;
  }
  .el-input__inner {
    border-color: transparent;
    background: rgba(255, 255, 255, 0.1);
    padding-left: 54px;
    color: rgba(252, 2553, 253, 0.7);
    border-radius: 8px;
    &::-webkit-input-placeholder {
      color: rgba(255, 255, 255, 0.3);
      font-size: 13px;
    }
  }
}
.box2 {
  background: rgba(52, 62, 115, 0.12);
  box-shadow: 0px 1px 9px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
}
.reward {
  color: rgba(252, 255, 253, 0.7);
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  .item {
    width: 140px;
    text-align: center;
  }
  .card {
    height: 140px;
    width: 140px;
    background: url(@/assets/images/miserybox/card.png);
    @apply flex items-center justify-center mb-15px;
  }
}

.custom-btn2 {
  border: 3px solid #364666;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 3px rgba(0, 0, 0, 0.8);
  border-radius: 12px;
}
</style>

<template>
  <div
    class="header-wrap w-1/1 h-80px flex justify-center items-center fixed left-0 right-0 top-0 z-100"
    v-if="ready"
  >
    <img
      src="@/assets/images/light_left_bg.png"
      class="light-left pointer-events-none"
    />
    <div
      class="w-1176px h-1/1 flex justify-center items-center justify-between"
    >
      <div class="flex items-center h-1/1">
        <img
          class="cursor-pointer"
          src="@/assets/images/index/logo.svg"
          @click="$router.push('/')"
        />
        <ul class="flex items-center h-1/1">
          <li
            class="menu-item ml-50px"
            @click="$router.push('/')"
          >
            <span>Welcome</span>
          </li>
          <!-- <li
            class="menu-item ml-50px"
            @click="$router.push('/collection/aggregate_pools')"
          >
            <span>Liquidity</span>
          </li> -->
          <!-- <li
            class="menu-item ml-50px"
            @click="$router.push('/liquidity/furion_swap/swap')"
          >
            <span>Swap</span>
          </li>
          <li
            class="menu-item ml-50px"
            @click="$router.push('/mysterybox')"
          >
            <span>Tasks</span>
          </li> -->
          <!--li
            class="menu-item ml-50px"
            :class="{ active: activeMenu === '/explore' }"
            @click="$router.push('/')"
          >
            <span>Explore</span>
          </li>
          <li
            class="menu-item ml-40px"
            :class="{ active: activeMenu === '/collection' }"
            @click="$router.push('/collection/separate_pools')"
          >
            <span>Collection</span>
          </li>
          <li
            class="menu-item has-child ml-30px"
            :class="{ active: activeMenu === '/liquidity' }"
          >
            <span>Liquidity</span>
            <img class="ml-7px" src="@/assets/images/index/arrow.svg" />
            <div class="submenu-list-wrap">
              <ul class="submenu-list">
                <li class="submenu-item">
                  <nuxt-link to="/liquidity/money_market/my_overview"
                    >Money Market</nuxt-link
                  >
                </li>
                <li class="submenu-item">
                  <nuxt-link to="/liquidity/furion_swap/swap"
                    >Furion Swap</nuxt-link
                  >
                </li>
              </ul>
              <div class="shadow-top"></div>
            </div>
          </li>
          <li
            class="menu-item has-child ml-38px"
            :class="{ active: activeMenu === '/mining' }"
          >
            <span>Mining</span>
            <img class="ml-7px" src="@/assets/images/index/arrow.svg" />
            <div class="submenu-list-wrap">
              <ul class="submenu-list">
                <li class="submenu-item">
                  <nuxt-link to="/mining/token_farming"
                    >Token Farming</nuxt-link
                  >
                </li>
                <li class="submenu-item">
                  <nuxt-link to="/mining/staking">Staking</nuxt-link>
                </li>
              </ul>
              <div class="shadow-top"></div>
            </div>
          </li>
          <li
            class="menu-item ml-26px"
            :class="{ active: activeMenu === '/dashboard' }"
            @click="$router.push('/dashboard/dashboard')"
          >
            <span>Dashboard</span>
          </li>
          <li
            class="menu-item has-child ml-36px"
            :class="{ active: activeMenu === '/more' }"
          >
            <span>More</span>
            <img class="ml-7px" src="@/assets/images/index/arrow.svg" />
            <div class="submenu-list-wrap">
              <ul class="submenu-list">
                <li class="submenu-item-more">
                  <nuxt-link to="/comingsoon">Coming Soon</nuxt-link>
                </li>
                <li class="submenu-item-more">
                  <nuxt-link to="/dashboard/dashboard">Dashboard</nuxt-link>
                </li>
                <li class="submenu-item-more">
                  <nuxt-link to="/governance">Governance</nuxt-link>
                </li>
              </ul>
              <div class="shadow-top"></div>
            </div>
          </li>
          <li
            class="menu-item ml-40px"
            :class="{ active: activeMenu === '/dashboard' }"
            @click="$router.push('/dashboard/dashboard')"
          >
            <span>Dash Board</span>
          </li-->
        </ul>
      </div>
      <!-- <el-button plain class="!w-160px !h-56px test" @click="claimToken">
        Test Tokens</el-button
      > -->
      <div class="flex items-center">
        <!-- <el-input
          style="width: 170px"
          v-if="showShotSearch"
          clearable
          placeholder="Search"
          class="search-wrap mr-25px"
          v-model="searchKey"
          @keyup.enter.native="onSearch"
        >
          <img
            class="search-icon"
            src="@/assets/images/index/search.svg"
            slot="prefix"
          />
        </el-input>
        <el-input
          style="width: 300px"
          v-if="showLongSearch"
          clearable
          placeholder="Search by token or pair"
          class="search-wrap mr-25px"
          v-model="searchKey"
          @keyup.enter.native="onSearch"
        >
          <img
            class="search-icon"
            src="@/assets/images/index/search.svg"
            slot="prefix"
          />
        </el-input> -->
        <!-- <el-input
          style="width: 300px"
          v-if="showLongSearch2"
          clearable
          placeholder="search by name, symbol, address"
          class="search-wrap mr-25px"
          v-model="searchKey"
          @keyup.enter.native="onSearch"
        >
          <img class="search-icon" src="@/assets/images/index/search.svg" slot="prefix" />
        </el-input> -->

        <!-- <CartIcon></CartIcon> -->
        <!-- <Pet></Pet> -->
        <DrawerAccount></DrawerAccount>
        <DrawerWallet class="ml-20px mt-5px"></DrawerWallet>
      </div>
    </div>
    <el-dialog
      class = "dialog"
      title="Furion Testnet Notification"
      :visible.sync="claimSuccess"
      width="700px"
      :close-on-click-modal="true"
      custom-class="el-dialog-pet"
      append-to-body
    >
      <div class="box2 h-328px mb-30px pt-40px">
        <div class="flex items-center justify-center mb-40px">
          <div class="mx-20px text-center">
            <div class="font-600 text-20px mb-6px" style="color: #fcfffd">
              You have claimed
            </div>
          </div>
        </div>

        <div class="reward flex justify-around">
          <div class="item">
            <div class="card">
              <img src="@/assets/images/test_claim/BAYC.png" alt="" />
            </div>
            <div class="text-16px">1 BAYC</div>
          </div>

          <div class="item">
            <div class="card">
              <img :src="require(`@/assets/images/test_claim/${rand_nft}.png`)" alt="" />
            </div>
            <div class="text-16px">1 {{ nft_symbols[rand_nft] }}</div>
          </div>

          <div class="item">
            <div class="card">
              <img src="@/assets/images/test_claim/FUR.png" alt="" />
            </div>
            <div class="text-16px">1000 FUR</div>
          </div>

        </div>
      </div>
      <div class="font-500 text-18px text-center" style="color: rgba(252, 255, 253, 0.8)">
          Start doing tasks to earn Mystery Boxes!
      </div>
    </el-dialog>
    <ProceedingDetails :DialogInfo="dialogue_info" />
  </div>
</template>

<script>
import { getContract, getTxURL } from "@/utils/common";
import { getTestClaimABI } from "@/utils/common/contractABI";
import { addToken } from "@/utils/web3/wallet"
import { mapState } from "vuex";
import { connect_info } from "@/config/user_info/profile";
import $ from "jquery";
import ProceedingDetails from "@/components/Dialog/ProceedingDetails.vue";
import {
  DialogInfo,
  initDialog,
  closeDialog,
  openDialog,
  stepDialog,
  ProcessInfo,
} from "@/config/loading_info";
export default {
  props: {},
  components: { ProceedingDetails },
  computed: {
    ...mapState(['effect_init','userInfo']),
    showShotSearch() {
      return [
        //"/collection/separate_pools",
        //"/collection/aggregate_pools",
      ].includes(this.$route.path);
    },
    showLongSearch() {
      return [].includes(this.$route.path);
    },
    showLongSearch2() {
      return ["/mining/token_farming"].includes(this.$route.path);
    },
    activeMenu() {
      return this.$store.state.admin.activeMenu;
    },
  },
  data() {
    return {
      ready: false,
      searchKey: "",
      test_claim: "",
      dialogue_info: DialogInfo,
      claimSuccess: false,
      nft_symbols: ["MAYC", "OTHR", "BAKC", "PUNKS", "AZUKI", "DOODLES", "MEEBITS", "GHOST", "CATDDLE", "SHHANS"],
      rand_nft: 0,
    };
  },
  async mounted() {
    if (!this.$store.state.effect_init) {
      this.$options.methods.clickEffect();
      this.$store.dispatch("setEffectInit", true);
    }
    $(".header-wrap").attr("style", "display:none;");
    this.ready = true;
    await this.initTestClaim();
    $(".header-wrap").fadeIn(500);
  },
  methods: {
    openClaimDialog() {
      this.claimSuccess = true;
    },
    closeClaimDialog() {
      this.claimSuccess = false;
    },
    async initTestClaim() {
      const test_claim_contract = await getContract(
        await getTestClaimABI(),
        ""
      );
      // console.log('This is test claim contract', test_claim_contract);
      this.test_claim = test_claim_contract;
    },

    async _addToken(address, symbol, decimals = 18, img = "") {
      await addToken({
        tokenAddress: address,
        tokenSymbol: symbol,
        tokenDecimals: decimals,
        tokenImage: img
      });
    },

    async addAll() {
      // 设置IO阻塞否则metamask无法弹窗
      await this._addToken("0xCD989B3af99DaD62aEc047a50cDE5EEd051e3202", "FUR");
      for(var s = +new Date(); s + 800 > +new Date();){}
      await this._addToken("0x40Ca6FA86cd53C75Ab6837A70D4bB94B5EEfdd65", "FFT-YUGA");
      for(var s = +new Date(); s + 800 > +new Date();){}
      await this._addToken("0x328a02643b1197411401E03f14413398C8001E70", "FFT-BLUE");
      for(var s = +new Date(); s + 800 > +new Date();){}
      await this._addToken("0xDa23D99DDB4B175FFEA9756d82bFb781555C2D91", "FFT-DARK");
      for(var s = +new Date(); s + 800 > +new Date();){}
      await this._addToken("0x5A6732E790E812Ce990454A0e81b701dcFc19918", "BAYC", 0);
    },

    async claimToken() {
      // console.log('User info', connect_info);
      const account = this.userInfo.userAddress;
      try {
        if (account == "" || account == undefined) {
          console.warn("User not connected");
          this.errorMessage("Please connect wallet first");
          return;
        }
      } catch (e) {
        console.warn(e);
        this.errorMessage("Please connect wallet first");
        return;
      }
      
      let claimed = await this.test_claim.methods.claimed(account).call();
      if (claimed) {
        this.errorMessage("Already claimed");
        return;
      }
      await openDialog(this.dialogue_info, [ProcessInfo.CLAIM_TEST_TOKEN]);
      
      try {
        const claimCounter = await this.test_claim.methods.counter().call();
        this.rand_nft = claimCounter % 10;
        let tx_result = await this.test_claim.methods
          .claimTest()
          .send({ from: account });
        this.successMessage(tx_result, "Cliamed test NFTs successfully");
        stepDialog(this.dialogue_info);
      } catch (e) {
        console.warn(e);
        this.errorMessage("Claim failed");
        closeDialog(this.dialogue_info);
        return;
      }

      closeDialog(this.dialogue_info);
      this.openClaimDialog();
    },
    successMessage(receipt, title) {
      const txURL = getTxURL(receipt.transactionHash);
      this.$notify({
        title: title,
        dangerouslyUseHTMLString: true,
        message: txURL,
        type: "success",
      });
    },
    errorMessage(title) {
      this.$notify.error({
        title: title,
        message: "",
        dangerouslyUseHTMLString: true,
      });
    },
    /***************************** Effect functions *****************************/

    clickEffect() {
      let balls = [];
      let longPressed = false;
      let longPress;
      let multiplier = 0;
      let width, height;
      let origin;
      let normal;
      let ctx;
      const colours = [
        "rgba(148,0,211,0.4)",
        "rgba(65,105,225,0.5)",
        "rgba(255,20,147,0.3)",
        "rgba(186,85,211,0.4)",
        "rgba(255,0,255,0.5)",
      ];
      const canvas = document.createElement("canvas");
      document.body.appendChild(canvas);
      canvas.setAttribute(
        "style",
        "width: 100%; height: 100%; top: 0; left: 0; z-index: 99999; position: fixed; pointer-events: none;"
      );
      const pointer = document.createElement("span");
      pointer.classList.add("pointer");
      document.body.appendChild(pointer);

      if (canvas.getContext && window.addEventListener) {
        ctx = canvas.getContext("2d");
        updateSize();
        window.addEventListener("resize", updateSize, false);
        loop();
        window.addEventListener(
          "mousedown",
          function (e) {
            pushBalls(randBetween(2, 4), e.clientX, e.clientY);
            document.body.classList.add("is-pressed");
            longPress = setTimeout(function () {
              document.body.classList.add("is-longpress");
              longPressed = true;
            }, 500);
          },
          false
        );
        window.addEventListener(
          "mouseup",
          function (e) {
            clearInterval(longPress);
            if (longPressed == true) {
              document.body.classList.remove("is-longpress");
              pushBalls(
                randBetween(
                  2 + Math.ceil(multiplier),
                  10 + Math.ceil(multiplier)
                ),
                e.clientX,
                e.clientY
              );
              longPressed = false;
            }
            document.body.classList.remove("is-pressed");
          },
          false
        );
        window.addEventListener(
          "mousemove",
          function (e) {
            let x = e.clientX;
            let y = e.clientY;
            pointer.style.top = y + "px";
            pointer.style.left = x + "px";
          },
          false
        );
      } else {
        console.log("canvas or addEventListener is unsupported!");
      }

      function updateSize() {
        canvas.width = window.innerWidth * 2;
        canvas.height = window.innerHeight * 2;
        canvas.style.width = window.innerWidth + "px";
        canvas.style.height = window.innerHeight + "px";
        ctx.scale(2, 2);
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        origin = {
          x: width / 2,
          y: height / 2,
        };
        normal = {
          x: width / 2,
          y: height / 2,
        };
      }
      class Ball {
        constructor(x = origin.x, y = origin.y) {
          this.x = x;
          this.y = y;
          this.angle = Math.PI * 2 * Math.random();
          if (longPressed == true) {
            this.multiplier = randBetween(14 + multiplier, 15 + multiplier);
          } else {
            this.multiplier = randBetween(6, 12);
          }
          this.vx =
            (this.multiplier + Math.random() * 0.5) * Math.cos(this.angle);
          this.vy =
            (this.multiplier + Math.random() * 0.5) * Math.sin(this.angle);
          this.r = randBetween(8, 12) + 3 * Math.random();
          this.color = colours[Math.floor(Math.random() * colours.length)];
        }
        update() {
          this.x += this.vx - normal.x;
          this.y += this.vy - normal.y;
          normal.x = (-2 / window.innerWidth) * Math.sin(this.angle);
          normal.y = (-2 / window.innerHeight) * Math.cos(this.angle);
          this.r -= 0.2;
          this.vx *= 0.9;
          this.vy *= 0.9;
        }
      }

      function pushBalls(count = 1, x = origin.x, y = origin.y) {
        for (let i = 0; i < count; i++) {
          balls.push(new Ball(x, y));
        }
      }

      function randBetween(min, max) {
        return Math.floor(Math.random() * max) + min;
      }

      function loop() {
        ctx.fillStyle = "rgba(255, 255, 255, 0)";
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < balls.length; i++) {
          let b = balls[i];
          if (b.r < 0) continue;
          ctx.fillStyle = b.color;
          ctx.beginPath();
          ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2, false);
          ctx.fill();
          b.update();
        }
        if (longPressed == true) {
          multiplier += 0.2;
        } else if (!longPressed && multiplier >= 0) {
          multiplier -= 0.4;
        }
        removeBall();
        requestAnimationFrame(loop);
      }

      function removeBall() {
        for (let i = 0; i < balls.length; i++) {
          let b = balls[i];
          if (
            b.x + b.r < 0 ||
            b.x - b.r > width ||
            b.y + b.r < 0 ||
            b.y - b.r > height ||
            b.r < 0
          ) {
            balls.splice(i, 1);
          }
        }
      }
    },
  },
};
</script>
