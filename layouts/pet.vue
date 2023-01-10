 <style lang="scss" scoped>
.light-left {
  position: absolute;
  left: 0;
  width: 800px;
}

.custom {
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.5;
}
</style>

<template>
  <div>
    <div class="min-h-100vh bg-[#01132e] text-[#FCFFFD] relative">
      <img src="@/assets/images/pet/page-bg.png" class="custom">
      <img src="@/assets/images/light_left_bg.png" class="light-left pointer-events-none" />

      <Admin-header></Admin-header>
      <nuxt class="min-h-100vh w-1280px relative pt-80px mx-auto" />
    </div>

    <NetworkInformationDialog :DialogVisible="network_visible" :DialogClose="networkClose" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import NetworkInformationDialog from '@/components/Dialog/NetworkInformationDialog.vue';
import { getChainId, getBlockNumber } from '@/utils/web3';
import { watchNetWorkChange, watchAccountChange } from '@/utils/web3/wallet';
export default {
  head: {
    meta: [
      {
        hid: "viewport",
        name: "viewport",
        content: "width=1440,user-scalable=no",
      },
    ],
  },
  components: { NetworkInformationDialog },
  computed: {
    ...mapState(['chainId']),
    ...mapState(['userInfo']),
    // transparent() {
    //   let list = ["/faq", "/governance", "/governance/detail"];
    //   return list.includes(this.$route.path);
    // },
  },
  watch: {
    chainId: {
      handler: 'watchChainId',
      immediate: true,
    },
  },
  data() {
    return {
      network_visible: false,
    };
  },
  async mounted() {
    await this.checkAlreadyConnect();

    // Initialize the chainId
    let chainId = await getChainId();
    this.$store.dispatch('setChainId', chainId);

    // console.log('Chain Id', chainId);

    watchAccountChange();
    watchNetWorkChange();
  },
  methods: {
    networkClose() {
      this.network_visible = false;
    },

    watchChainId(value) {
      console.log('chainId changing to:', value);
      if (value != null) {
        if (value == 5) { //change network update
          this.network_visible = false;
        } else {
          this.network_visible = true;
        }
      }
    },

    async checkAlreadyConnect() {
      try {
        ethereum.request({ method: 'eth_accounts' }).then(async accounts => {
          if (accounts.length != 0) {
            this.$store.dispatch('setWalletType', 'Metamask');
            this.$store.commit('update', ['admin.connectStatus', 'connected']);
            let userInfo = {
              isConnect: true,
              userAddress: accounts[0],
            };
            this.$store.dispatch('setUserInfo', userInfo);
          } else {
            console.warn('User not connected');
            this.$store.commit('update', ['admin.connectDialog', 'simple']);
          }
        });
      } catch (error) {
        console.warn(error);
      }
    },
  },

};
</script>
