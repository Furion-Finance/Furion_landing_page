<style lang="scss" scoped>
.drawer-wrap {
  border: 0.8px solid rgba(255, 255, 255, 0.1);
  width: 420px;
  // height: 943px;
  height: calc(100vh - 80px);
  position: fixed;
  top: 80px;
  right: 14px;
  transform: translateX(434px);
  transition: 0.3s transform;
  background: rgba(28, 42, 79, 1);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  overflow: hidden;
  &.isShow {
    transform: translateX(0);
  }

  .drawer-header {
    height: 80px;
    background: #1c2a4f;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.3);

    .header-tab {
      color: rgba(252, 255, 253, 0.6);
      position: relative;

      &.active {
        color: #ff88eb;
        font-weight: 700;
        background: linear-gradient(0deg,
            rgba(110, 101, 168, 0.4) -61.36%,
            rgba(110, 101, 168, 0) 95.45%);

        &::after {
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          background: #f181de;
          position: absolute;
          left: 0;
          bottom: 0;
        }
      }
    }
  }

  .wrap-bg-top {
    @apply absolute left-0 top-0 w-420px h-944px;
    background: url(@/assets/images/drawer/border_top2.png) -1px -1px/ 422px 944px no-repeat;
  }

  .wrap-bg-bottom {
    @apply absolute left-0 bottom-0 w-420px h-944px;
    background: url(@/assets/images/drawer/border_bottom2.png) -1px 1px/ 422px 944px no-repeat;
  }

  .drawer-scroll-wrap {
    height: calc(100vh - 160px - 40px);
    margin-left: -2px;
  }

  .section {
    background: rgba(1, 17, 41, 0.4);
    border-radius: 12px;
    padding: 12px 24px 20px;
  }

  .section-title {
    font-size: 14px;
    color: rgba(252, 255, 253, 0.6);
    font-weight: 500;
    line-height: 28px;
  }

  .form-item {
    @apply flex items-center cursor-pointer;

    .icon-wrap {
      @apply w-30px h-30px flex items-center justify-center mr-19px bg-[rgba(109, 121, 139, 0.4)] rounded-8px;
    }

    .label {
      color: rgba(252, 255, 253, 0.8);
      font-size: 15px;
      //line-height: 28px;
      font-weight: 600;
    }
  }

  .form-item2 {
    color: rgba(252, 255, 253, 0.8);
    @apply cursor-pointer flex items-center justify-between font-600 text-16px;

    .icon {
      @apply w-34px h-34px mr-14px;
    }
  }

  .notification-item {
    padding: 9px 16px 12px 14px;
    background: rgba(1, 17, 41, 0.4);
    border-radius: 12px;
    margin-bottom: 14px;
    @apply flex items-center;

    .icon-wrap {
      @apply w-34px h-34px flex items-center justify-center mr-16px rounded-8px bg-[rgba(217, 217, 217, 0.26)] flex-shrink-0;
    }
  }

  .close-btn {
    opacity: 0.3;
    @apply absolute top-18px right-18px cursor-pointer z-10;

    &:hover {
      opacity: 1;
    }
  }

  .more {
    color: rgba(252, 255, 253, 0.8);
    font-weight: 600;
    font-size: 13px;
    line-height: 20px;
    width: 110px;
    height: 32px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    line-height: 30px;
    text-align: center;
    border-radius: 30px;
    cursor: pointer;
    @apply mx-auto;
  }
}
.type_box {
  background: transparent;
  border-bottom: 2px solid #2d4682;
  padding: 4px 0;
  font-weight: 500;
  font-size: 14px;
  color: #7d8599;
  &::placeholder {
    font-weight: 500;
    font-size: 16px;
    color: #7d8599;
  }
}
.btnn2 {
  border-radius: 10px;

  @apply flex justify-center items-center cursor-pointer;

  .icon {
    display: block;
  }

  .icon2 {
    display: none;
  }

  &:hover {
    color: #02193a;
    background: #fa6be1;
    border: none;
    text-shadow: none;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1),
      inset 0px -1px 1px rgba(0, 0, 0, 0.4), inset 0px 1px 0.6px #ffb7f3;

    .icon {
      display: none;
    }

    .icon2 {
      display: block;
    }
  }
}
</style>

<template>
  <div>
    <img id="avatar-icon" class="cursor-pointer" src="@/assets/images/index/avatar.svg" @click="!isShow ? toggle() : ''" />
    <div v-click-outside="hide" class="drawer-wrap" :class="{ isShow }">
      <div class="wrap-bg-top"></div>
      <div class="wrap-bg-bottom"></div>
      <img class="close-btn" src="@/assets/images/drawer/close_active.svg" @click.stop="closeAccount()" />

      <!-- header for tab switch -->
      <div class="drawer-header flex pt-17px cursor-pointer">
        <div class="header-tab flex flex-1 items-center justify-center w-1/1" :class="{ active: tab === 'account' }"
          @click="changeTab('account')">
          <img v-if="tab === 'account'" src="@/assets/images/drawer/avatar_pink.svg" />
          <img v-else src="@/assets/images/drawer/avatar.svg" />
          <p class="ml-5px mt-3px">Account</p>
        </div>
        <!--div class="header-tab flex flex-1 items-center justify-center w-1/1"
          :class="{ active: tab === 'notification' }" @click="changeTab('notification')">
          <img v-if="tab === 'notification'" src="@/assets/images/drawer/bell_pink.svg" />
          <img v-else src="@/assets/images/drawer/bell.svg" />
          <p class="ml-5px">Notifications</p>
        </div-->
      </div>


      <div class="py-35px px-12px overflow-hidden">
        <el-scrollbar class="drawer-scroll-wrap overflow-hidden w-401px">

          <!-- account view -->
          <div v-if="tab === 'account'">
            <div class="section mb-15px">
              <p class="section-title mb-20px">Connected wallet</p>
              <div class="flex items-center justify-between mb-25px">
                <div class="flex items-center">
                  <img class="mr-15px" src="@/assets/images/drawer/case.svg" />
                  <p class="text-[rgba(252,255,253,0.9)] font-600 text-16px cursor-pointer" @click="clickaddress(showUserAddress())">
                    {{ showUserAddress() }}
                  </p>
                </div>
                <img class="cursor-pointer" src="@/assets/images/drawer/copy.svg" @click="copy" />
              </div>
              <!--div>
                <div style="float:left"
                class="text-[rgba(252,255,253,0.4)] font-500 text-13px"
                >Connected with MetaMask</div>
                <div style="float:right"
                class="text-[#FF7AE8] font-500 text-13px"
                >Change provider</div>
              </div-->
            </div>
            <!-- <div>
              <div style="float:left"
              class="text-[rgba(252,255,253,0.4)] font-500 text-13px"
              >Connected with MetaMask</div>
              <div style="float:right"
              class="text-[#FF7AE8] font-500 text-13px"
              @click="changeProvider()"
              >Change provider</div>
              </div>
            </div> -->

            <!-- my profile -->
            <div class="section mb-15px" v-show="isShowProfile">
              <p class="section-title mb-20px">My profile</p>
              <div class="ml-16px">





                <div class="form-item mb-22px">
                  <div class="icon-wrap">
                    <img src="@/assets/images/drawer/email.svg" />
                  </div>
                  <div class="form-item" v-if="!type_email">
                    <p class="label" >{{this.user_info.info_list.email}}</p>
                    <div class="icon-wrap" @click="click_email(true)">
                      <img id="type" src="@/assets/images/drawer/pencil.png" />
                    </div>
                  </div>
                  <div class="form-item" v-if="type_email">
                    <input
                        id="content_email"
                        type="email"
                        class="block type_box mb-5px"
                        maxLength="64"
                        placeholder="Add your Email..."
                      />
                    <div class="btnn2 ml-6px" @click="email_confirm()">
                      <img  id="type" src="@/assets/images/drawer/confirm_dark.svg" width="40" class="icon"/>
                      <img  id="type" src="@/assets/images/drawer/confirm_light.svg" width="40" class="icon2"/>
                    </div>
                    <div class="btnn2 ml-6px" @click="click_email(false)">
                      <img  id="type" src="@/assets/images/drawer/cancel_dark.svg" width="40" class="icon"/>
                      <img  id="type" src="@/assets/images/drawer/cancel_light.svg" width="40" class="icon2"/>
                    </div>
                  </div>
                </div>



                <div class="form-item mb-22px">
                  <div class="icon-wrap">
                    <img src="@/assets/images/drawer/nick_name.svg" />
                  </div>
                  <div class="form-item" v-if="!type_nick_name">
                    <p class="label" >{{this.user_info.info_list.nick_name}}</p>
                    <div class="icon-wrap" @click="click_nick_name(true)">
                      <img id="type" src="@/assets/images/drawer/pencil.png" />
                    </div>
                  </div>
                  <div class="form-item" v-if="type_nick_name">
                    <input
                      id="content_nick_name"
                      type="text"
                      class="block type_box mb-5px"
                      placeholder="Add a Nick Name..."
                    />
                    <div class="btnn2 ml-6px" @click="nick_name_confirm()">
                      <img  id="type" src="@/assets/images/drawer/confirm_dark.svg" width="40" class="icon"/>
                      <img  id="type" src="@/assets/images/drawer/confirm_light.svg" width="40" class="icon2"/>
                    </div>
                    <div class="btnn2 ml-6px" @click="click_nick_name(false)">
                      <img  id="type" src="@/assets/images/drawer/cancel_dark.svg" width="40" class="icon"/>
                      <img  id="type" src="@/assets/images/drawer/cancel_light.svg" width="40" class="icon2"/>
                    </div>
                  </div>
                </div>


                <div class="form-item mb-22px">
                  <div class="icon-wrap">
                    <img src="@/assets/images/drawer/bell2.svg" />
                  </div>
                  <p class="label">Notification Preferences</p>
                </div>
                <div class="flex mb-22px">
                  <div class="form-item flex-1" @click="comment_alert()">
                    <div class="icon-wrap">
                      <img v-if="this.user_info.info_list.comment" src="@/assets/images/drawer/checkbox_checked.svg" />
                      <img v-else src="@/assets/images/drawer/checkbox_empty.svg" />
                    </div>
                    <p class="label">Comment</p>
                  </div>
                  <div class="form-item flex-1" @click="liquidation_alert_alert()">
                    <div class="icon-wrap">
                      <img v-if="this.user_info.info_list.liquidation_alert" src="@/assets/images/drawer/checkbox_checked.svg" />
                      <img v-else src="@/assets/images/drawer/checkbox_empty.svg" />
                    </div>
                    <p class="label">Liquidation alert</p>
                  </div>
                </div>
                <div class="flex mb-22px">
                  <div class="form-item flex-1" @click="hot_news_alert()">
                    <div class="icon-wrap">
                      <img v-if="this.user_info.info_list.hot_news" src="@/assets/images/drawer/checkbox_checked.svg" />
                      <img v-else src="@/assets/images/drawer/checkbox_empty.svg" />
                    </div>
                    <p class="label">Hot News</p>
                  </div>
                  <div class="form-item flex-1" @click="showProfile(false)">
                    <div class="icon-wrap">
                      <img src="@/assets/images/drawer/all.svg" />
                    </div>
                    <p class="label">All</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- quick links -->
            <div class="section mb-15px" v-show="!isShowProfile">
              <p class="section-title mb-20px">Quicklinks</p>
              <div class="ml-16px">
                <div class="flex mb-14px">
                  <div class="form-item flex-1" @click="go('/myWallet')">
                    <div class="icon-wrap">
                      <img src="@/assets/images/drawer/wallet.svg" width="20px" />
                    </div>
                    <p class="label">My Wallet</p>
                  </div>
                  <!--div class="form-item flex-1" @click="go('/liquidity/furion_swap/swap')">
                    <div class="icon-wrap">
                      <img src="@/assets/images/drawer/swap.svg" width="20px" />
                    </div>
                    <p class="label">Furion Swap</p>
                  </div-->
                </div>
                <!--div class="flex mb-14px">
                  <div class="form-item flex-1">
                    <div class="icon-wrap">
                      <img src="@/assets/images/drawer/nft.svg" />
                    </div>
                    <p class="label">My NFTs</p>
                  </div>
                  <div class="form-item flex-1">
                    <div class="icon-wrap">
                      <img src="@/assets/images/drawer/lock.svg" />
                    </div>
                    <p class="label">My Locking</p>
                  </div>
                </div>
                <div class="flex mb-14px">
                  <div class="form-item flex-1" @click="showProfile(true)">
                    <div class="icon-wrap">
                      <img src="@/assets/images/drawer/profile.svg" />
                    </div>
                    <p class="label">My profile</p>
                  </div>
                  <div class="form-item flex-1">
                    <div class="icon-wrap">
                      <img src="@/assets/images/drawer/market.svg" />
                    </div>
                    <p class="label">Money Market</p>
                  </div>
                </div>
                <div class="flex mb-30px">
                  <div class="form-item flex-1">
                    <div class="icon-wrap">
                      <img src="@/assets/images/drawer/farming.svg" />
                    </div>
                    <p class="label">Token Farming</p>
                  </div>
                  <div class="form-item flex-1">
                    <div class="icon-wrap">
                      <img src="@/assets/images/drawer/governance.svg" />
                    </div>
                    <p class="label">Governance</p>
                  </div>
                </div-->
              </div>
            </div>

            <div class="section mb-15px">
              <p class="section-title mb-20px">Wallet balances</p>
              <div v-for="(item, index) in tokens" class="form-item2 mb-24px">
                <div class="flex items-center">
                  <img class="icon" :src="item.image" />
                  <p>{{ item.symbol }}</p>
                </div>
                <p class="mr-8px">{{ item.balance }}</p>
              </div>
            </div>
          </div>

          <!-- notification view -->
          <div v-if="tab === 'notification'" class="pb-20px">
            <ul>
              <li class="notification-item" v-for="(item, index) in showNotifications" :key="index">
                <div class="icon-wrap">
                  <img src="@/assets/images/drawer/case2.svg" />
                </div>
                <div>
                  <div class="flex items-center justify-between">
                    <p class="title font-600 leading-28px text-[rgba(252,255,253,0.8)] mb-3px">
                      {{ item.title }}
                    </p>
                  </div>
                  <div class="content text-[rgba(252,255,253,0.4)] font-500 text-13px leading-17px">
                    {{ item.content }}
                  </div>
                </div>
              </li>
            </ul>

            <div class="more" @click.stop="more" v-if="showMore">Show more</div>
          </div>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
import { mapState } from 'vuex';
import { fromWei, _showUserAddressText, getNativeTokenAmountRaw, tokenBalance, trimDecimals, fromUnit } from "@/utils/common";
import { getContract } from "@/utils/common";
import {
  user_info,
  inituserinfo,
  renew_user_email,
  renew_user_nick_name,
  renew_user_comment,
  renew_user_liquidation_alert,
  renew_user_hot_news
} from "@/config/user_info/profile";
import Vue from "vue";
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard);

import {getFurionTokenABI, getAddress} from "@/utils/common/contractABI";

export default {
  props: {},
  components: {},
  computed: {
    ...mapState('admin', ['connectStatus']),
    ...mapState(['userInfo']),
    ...mapState(['showInfo']),
  },
  data() {
    return {
      isShow: false,
      isShowProfile: false,
      tab: "account", // account notification
      logdata: true,
      user_info: user_info,
      type_email: false,
      type_nick_name: false,
      showNotifications: [],
      showMore: true,
      tokens: [
        { symbol: "ETH", address: "", balance: "", image: require("@/assets/images/liquidity/tokens/ETH.png") },
        { symbol: "FUR", address: "0x167873d27d6f16C503A694814a3895215344B601", balance: "", image: require("@/assets/images/liquidity/tokens/FUR.png") },
        { symbol: "FFT-BAYC", address: "0x4c711efa05b78582f07D9d960B1dAdDe95688166", balance: "", image: require("@/assets/images/liquidity/tokens/ETH.png") },
        { symbol: "FFT-BLUECHIP", address: "0x53c85C8f5dA3B098DF30204C0eA460602eC2BFC1", balance: "", image: require("@/assets/images/liquidity/tokens/ETH.png") },
        { symbol: "FFT-DARKHORSE", address: "0xce8791504fb07A10c82216C3366BdF7130fB24Ac", balance: "", image: require("@/assets/images/liquidity/tokens/ETH.png") },
      ],
      notifications: [
        {
          title: "Comment",
          belong: "Comment",
          time: "now",
          content:
            "@Furion replying to you: Nice collections!",
        },
        {
          title: "Like",
          belong: "Comment",
          time: "now",
          content:
            "@Furion likes your comment: Fuwa Fuwa, Furion!",
        },
        {
          title: "New Follower",
          belong: "Comment",
          time: "now",
          content:
            "@Furion follows you",
        },
        {
          title: "To be liquidated",
          belong: "Liquidation_Alert",
          time: "now",
          content:
            "Your F-BAYC position is close to being liquidated; to avoid this, please repay part of your loan and make sure that the loan is back to the healthy level.",
        },
        {
          title: "Liquidated",
          belong: "Liquidation_Alert",
          time: "now",
          content:
            "Part of your collateral has been liquidated, and your debts are now back to a healthy status.",
        },
        {
          title: "24h Liquidation protection",
          belong: "Liquidation_Alert",
          time: "now",
          content:
            "You can buy back your F-BAYC within 24 hours from now on.",
        },
        {
          title: "Alpha Breaking",
          belong: "Hot_News",
          time: "now",
          content:
            "F-PUNK that you follow has an increase of 128% in 24 hours!",
        },
      ],
      profile: {
        comment: true,
        alert: true,
        news: true,
      },
    };
  },
  directives: {
    ClickOutside,
  },
  async mounted() {
    this.showNotifications = this.notifications.slice(0, 3);
    setTimeout(()=>{
      this.getBalance();
    }, 500)
  },
  methods: {
    closeAccount() {
      this.isShow = false;
      this.$store.dispatch('setShowBoth', !this.isShow);
    },
    clickaddress(address){
      window.open('https://goerli.etherscan.io/address/'+this.userInfo.userAddress);
    },
    displayFormat(num, decimals = 18, trim = 3) {
      return trimDecimals(fromUnit(num, decimals), trim);
    },
    async comment_alert() {
      this.user_info.info_list.comment = !this.user_info.info_list.comment
      this.user_info = await renew_user_comment(this.network,this.userInfo.userAddress,this.user_info.info_list.comment);
    },
    async liquidation_alert_alert() {
      this.user_info.info_list.liquidation_alert = !this.user_info.info_list.liquidation_alert
      this.user_info = await renew_user_liquidation_alert(this.network,this.userInfo.userAddress,this.user_info.info_list.liquidation_alert);
    },
    async hot_news_alert() {
      this.user_info.info_list.hot_news = !this.user_info.info_list.hot_news
      this.user_info = await renew_user_hot_news(this.network,this.userInfo.userAddress,this.user_info.info_list.hot_news);
    },
    async email_confirm() {
      let text = document.getElementById("content_email").value;
      if(text.indexOf('@') == -1){
        this.$message({
          message: 'Please enter a valid email address',
          type: 'error'
        });
        return
      }
      this.type_email = false;
      this.user_info = await renew_user_email(this.network,this.userInfo.userAddress,text);
    },
    async nick_name_confirm() {
      this.type_nick_name = false;
      let text = document.getElementById("content_nick_name").value;
      this.user_info = await renew_user_nick_name(this.network,this.userInfo.userAddress,text);
    },
    click_email(flag){
      this.type_email = flag;
    },
    click_nick_name(flag){
      this.type_nick_name = flag;
    },
    showUserAddress() {
      return _showUserAddressText(this.userInfo);
    },
    showWalletType() {
      return this.walletType
    },
    changeProvider() {
      console.log('changeProvider')
    },
    more() {
          this.showNotifications = this.notifications;
          this.showMore = false;
      },
    async toggle() {
        await this.getBalance();
        if(this.userInfo.isConnect){
          if(this.logdata){
          this.user_info = await inituserinfo(this.network, this.userInfo.userAddress);
          this.logdata = false;
        }else{
          return;
        }
      }
    },
    hide(e) {
      if (e.target.id === "avatar-icon"&this.userInfo.isConnect) {
        this.isShow = !this.isShow;
        this.$store.dispatch('setShowBoth', !this.isShow);
      }else if(e.target.id ==="type"){
        this.isShow = true;
        this.$store.dispatch('setShowBoth', !this.isShow);
      }else{
        if(this.isShow == true){
          if (e.target.id === "wallet-icon"){
            this.isShow = false;
            return;
          };
          this.isShow = false;
          this.$store.dispatch('setShowBoth', !this.isShow);
        }
      }
    },
    changeTab(tab) {
      console.log(tab);
      this.tab = tab;
    },
    copy() {
      this.$copyText(this.userInfo.userAddress);
      this.$message({
        message: 'Address Copied',
        type: 'success',
        center: true,
      });
      this.isShow = true;
      this.$store.dispatch('setShowBoth', !this.isShow);
    },
    go(url) {
      this.$router.push(url);
      this.isShow = false;
      this.$store.dispatch('setShowBoth', !this.isShow);
    },
    showProfile(flag) {
      this.isShowProfile = flag;
    },
    async getBalance(){
      if(!this.userInfo.isConnect){
        return
      }

      const account = this.userInfo.userAddress;

      for (let token of this.tokens) {
        if (token.symbol == "ETH") {
          token.balance = this.displayFormat(await getNativeTokenAmountRaw(account));
        } else {
          try {
            token.balance = trimDecimals(await tokenBalance(token.address, account), 3);
          } catch (e) {
            console.log(e);
            token.balance = 0;
          }
        }
      }
    }
  },
};
</script>
