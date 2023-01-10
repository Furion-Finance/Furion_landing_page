<style lang="scss" scoped>
.drawer-wrap {
  width: 420px;
  height: 320px;
  position: fixed;
  top: 80px;
  right: 14px;
  transform: translateX(434px);
  transition: 0.3s transform;
  background-color: rgba(28, 42, 79, 1);
  // rgba(28, 42, 79, 1);
  // background: rgba(28, 42, 79, 1);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  overflow: hidden;

  // position: relative;
  .wrap-bg-top {
    @apply absolute left-0 top-0 w-420px h-512px;
    background: url(@/assets/images/drawer/border_top.png) -1px -1px/ 422px 512px no-repeat;
  }

  .wrap-bg-bottom {
    @apply absolute left-0 top-0 w-420px h-512px;
    background: url(@/assets/images/drawer/border_bottom.png) -1px 1px/ 422px 512px no-repeat;
  }

  &.isShow {
    transform: translateX(0);
  }

  .drawer-header {
    height: 66px;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.3);
  }

  .section {
    background: rgba(1, 17, 41, 0.4);
    border-radius: 12px;
    padding: 24px 20px;
    margin: 0 12px;
  }

  .form-item {
    color: rgba(252, 255, 253, 0.8);
    @apply text-14px flex justify-between items-center font-600;
  }

  .tab-btn {
    @apply text-14px font-700 flex justify-center items-center w-80px h-26px rounded-12px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1), inset 0px -1px 1px rgba(0, 0, 0, 0.4);
  }

  .close-btn {
    opacity: 0.3;
    @apply absolute top-15px right-18px cursor-pointer z-10;

    &:hover {
      opacity: 1;
    }
  }
}
</style>

<template>
  <div>
    <img id="wallet-icon" class="cursor-pointer" src="@/assets/images/index/wallet.svg" @click="toggle" />
    <div v-click-outside="hide" class="drawer-wrap isShow" v-show="isShow">
      <div class="wrap-bg-top pointer-events-none"></div>
      <div class="wrap-bg-bottom pointer-events-none"></div>
      <img class="close-btn" src="@/assets/images/drawer/close_active.svg" @click="closeWallet" />
      <div class="drawer-header flex pt-17px cursor-pointer">
        <div class="flex items-center ml-26px">
          <img class="mr-12px" src="@/assets/images/drawer/avatar2.svg" />
          <p class="font-600 text-[#FCFFFD]">My Wallet</p>
        </div>
      </div>
      <div class="leading-19px text-[rgba(252,255,253,0.5)] font-600 text-13px pt-24px pr-24px pb-20px pl-26px">
        <p>
          Please connect with one of our available
          <span class="text-[#FA6BE1]">wallet</span> providers.
        </p>
      </div>
      <div class="section">
        <div class="form-item cursor-pointer" v-on:click="connectWallet">
          <div class="flex items-center">
            <img class="mr-16px " src="@/assets/images/connect_wallet/metamask.png" width="29px" />
            <p>MetaMask</p>
          </div>
          <div class="tab-btn text-[#B0B7F3] bg-[#614ED3]">Popular</div>
        </div>
        <!--div class="form-item mb-18px cursor-pointer">
          <div class="flex items-center">
            <img class="mr-16px" src="@/assets/images/connect_wallet/walletConnect.png" width="29px" />
            <p>Wallet Connect</p>
          </div>
        </div>
        <div class="form-item mb-18px cursor-pointer">
          <div class="flex items-center">
            <img class="mr-16px" src="@/assets/images/connect_wallet/coinbase.png" width="29px" />
            <p>Coinbase</p>
          </div>
        </div>
        <div class="form-item mb-18px cursor-pointer">
          <div class="flex items-center">
            <img class="mr-16px" src="@/assets/images/connect_wallet/authereum.png" width="29px" />
            <p>Authereum</p>
          </div>
          <div class="tab-btn text-[rgba(176,183,243,0.4)] bg-[#162548]">Salana</div>
        </div>
        <div class="form-item cursor-pointer">
          <div class="flex items-center">
            <img class="mr-16px" src="@/assets/images/connect_wallet/fortmatic.png" width="29px" />
            <p>Fortmatic</p>
          </div>
          <div class="tab-btn text-[rgba(176,183,243,0.4)] bg-[#162548]">Solana</div>
        </div-->
      </div>
      <div class="btn_border w-310px mt-26px mx-auto">
        <el-button type="primary" :disabled="!userInfo.isConnect" plain class="!w-304px !h-48px" @click="disconnectWallet">
          <span class="text-14px font-700">{{ userInfo.isConnect ? "Disconnect your wallet" : "Please connect wallet" }}</span>
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
import { mapState } from 'vuex';
import { connectMetamask } from '@/utils/web3/wallet';
import { connect_info } from "@/config/user_info/profile";
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
      isShow: true,
      connected: false,
      toDisconnect: false,
    };
  },
  watch:{
    userInfo(newInfo, oldInfo) {
      if (newInfo.isConnect) {
        this.closeWallet();
      }
    }
  },
  directives: {
    ClickOutside,
  },
  async mounted() {
    setTimeout(() => {
      // console.log('User connected?', this.userInfo)
      if (!this.userInfo.isConnect) {

        this.isShow = true;
        this.$store.dispatch('setShowBoth', !this.isShow);
      } else {
        this.closeWallet();
      }
      // if (this.$route.path.length < 2) {
      //   return
      // }
      connect_info.address = this.userInfo.userAddress;
      // console.timeLog('Connect info', connect_info)
    }, 0)

    // await this.connectWallet();
  },
  methods: {
    async getAlreadyConnectAccount() {
      try {
        if (this.walletType == 'Metamask') {
          ethereum.request({ method: 'eth_accounts' }).then(async accounts => {
            if (accounts.length != 0) {
              let userInfo = {
                isConnect: true,
                userAddress: accounts[0],
              };
              connect_info.address = account[0];
              this.$store.dispatch('setUserInfo', userInfo);
            } else {
              // console.log('The user is not connected');
              this.$store.commit('update', ['admin.connectDialog', 'simple']);
              console.log('user address:', this.userInfo.userAddress);
            }
          });
        }
      } catch (error) {
        console.log(error);
      }
    },

    async disconnectWallet() {
      let userInfo = {
        isConnect: false,
        userAddress: null,
      };
      this.$store.commit('SET_USER_INFO', userInfo);
      this.$store.commit('update', ['admin.connectStatus', 'disconnected']);
    },
    async connectWallet() {
      try {
        console.log('user connected:', this.userInfo.isConnect);
        if (this.userInfo.isConnect == true) {
          try {
            // console.log('user address:', this.userInfo.userAddress);
            await this.getAlreadyConnectAccount();
            this.$store.commit('update', ['admin.connectStatus', 'connected']);


          } catch (error) {
            console.log(error);
          }
        } else {
          // console.log('Currently not connected');

          if (!window.ethereum) {
            this.$message({
              message: 'Please install metamask',
              type: 'warning',
            });
            window.location.href = 'https://metamask.app.link/dapp';
          } else {
            await connectMetamask();
          }
        }
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => {
          if (this.userInfo.isConnect) {
            this.isShow = false;
            this.toDisconnect = false;
            this.$store.dispatch('setShowBoth', !this.isShow);
          }
        },2)
      }
      

    },
    toggle() {
      this.isShow = true;
      if (this.userInfo.isConnect) {
        this.toDisconnect = true;
      }
      this.$store.dispatch('setShowBoth', !this.isShow);
    },
    async closeWallet() {
      // console.log(this.userInfo.isConnect)
      if (this.userInfo.isConnect) {
        this.isShow = false;
        this.$store.dispatch('setShowBoth', !this.isShow);
      }
      return

    },
    hide(e) {
      // console.log(e.target.id);
      if (this.userInfo.isConnect) {
        if (e.target.id === "wallet-icon") {
        this.$store.dispatch('setShowBoth', !this.isShow);
      } else {
        if(this.isShow == true){
          if (e.target.id === "avatar-icon"){
            this.isShow = false;
            return;
          };
          this.isShow = false;
          this.$store.dispatch('setShowBoth', !this.isShow);
        }

      }
      }
      return;

    },
    errorMessage(title) {
      this.$notify.error({
        title: title,
        message: "",
        dangerouslyUseHTMLString: true,
      });
    },
  },
};
</script>
