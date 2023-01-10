<template>
  <el-dialog title="You Must Change Networks" footer append-to-body custom-class="el-dialog-dark"
    :close-on-click-modal="false" :visible.sync="DialogVisible" @close="DialogClose" style="z-index:99">
    <div class="network_dialog_body text-[rgba(252,255,253,0.6)] font-400 leading-30px text-15px">
      <br />
      <p>
        Please switch your wallet's network to Goerli Testnet for using this Dapp.
      </p>
      <p>* Some wallets may not support changing networks, then you may consider doing that manually.
      </p>
    </div>
    <div slot="footer" class="network_dialog_footer mt-20px">
      <el-button type="primary" :loading="Loading" @click="handleClickChangeNetwork()">Switch Network</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { ETHEREUM_MAINNET_PARAMS, ETHEREUM_TESTNET_PARAMS } from '../../utils/web3';
import { getChainId, getBlockNumber } from '@/utils/web3';
import { watchNetWorkChange, watchAccountChange } from '@/utils/web3/wallet';

export default {
  data() {
    return {
      Loading: false,
      DialogVisible: false,
    };
  },
  watch: {
    chainId: {
      handler: 'watchChainId',
      immediate: true,
    },
  },
  async mounted() {
    await this.checkAlreadyConnect();

    // Initialize the chainId
    let chainId = await getChainId();
    this.watchChainId(chainId);
    this.$store.dispatch('setChainId', chainId);

    // console.log('Chain Id', chainId);

    watchAccountChange();
    watchNetWorkChange();
  },
  methods: {
    DialogClose() {
      this.DialogVisible = false;
    },
    watchChainId(value) {
      console.log('chainId changing to:', value);
      if (value != null) {
        if (value == 5) { //change network update
          this.DialogVisible = false;
        } else {
          this.DialogVisible = true;
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
    async handleClickChangeNetwork() {
      // change network update
      // const ETHEREUM_PARAMS = ETHEREUM_TESTNET_PARAMS;
      const ETHEREUM_PARAMS = ETHEREUM_TESTNET_PARAMS;
      console.log('Switching network', ETHEREUM_PARAMS.chainId);

      try {
        this.Loading = true;
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: ETHEREUM_PARAMS.chainId }],
        });
        this.$store.dispatch('setChainId', ETHEREUM_PARAMS.chainId);
        this.DialogClose();
      } catch (switchErr) {
        if (switchErr == 4902) {
          await ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [ETHEREUM_PARAMS],
          });
        }
      }
    },
  },
};
</script>

<style lang="scss">
</style>
