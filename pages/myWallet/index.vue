<style lang="scss" scoped>
.item {
  width: 210px;
  height: 265px;
  background: rgba(23, 37, 72, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  cursor: pointer;
  box-sizing: border-box;
  float: left;
  margin-right: 12px;
  margin-bottom: 15px;
  position: relative;

  &:hover .el-image {
    transition: all 0.3s;
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  }

  .icon {
    .icon1 {
      display: block;
    }

    .icon2 {
      display: none;
    }

    &:hover {
      .icon2 {
        display: block;
      }

      .icon1 {
        display: none;
      }
    }
  }
}

.type {
  font-weight: 500;
  font-size: 15px;
  color: #667181;
  cursor: pointer;

  img {
    margin-right: 10px;
  }

  &.active {
    color: #fff;
  }

  &+.type {
    margin-left: 35px;
  }
}

.locked {
  opacity: 0.6;
}

.section {
  background: rgba(23, 37, 72, 0.6);
  border-radius: 12px;
  padding: 27px;
  padding-bottom: 3px;

  .form-item2 {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: rgba(252, 255, 253, 0.8);
    font-weight: 700;
    font-size: 17px;
    margin-bottom: 24px;

    .icon {
      @apply w-34px h-34px mr-14px;
    }
  }
}

.punkImages {
  image-rendering: pixelated;
}
</style>

<template>
  <div class="!w-1160px">
    <div class="px-30px mb-28px flex justify-between pt-36px">
      <div class="flex items-center">
        <el-input placeholder="Search by token ID or symbol" v-model="searchKey" class="search !w-300px" clearable @input="search">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>

        <div 
            v-if="reload_nft && reload_nft.length > 0"
            class="custom-btn3 !text-13px !w-300px !h-40px !leading-40px cursor-pointer ml-30px" 
            @click="reload_nft.length > 0 ? reloadPool() : ''"
          >
            <span>Press me to reload failed images!</span>
          </div>
      </div>

      <div class="flex flex-1 items-center justify-end">
        <div class="flex items-center type" :class="{ active: type == 1 }" @click="type = 1; display_nft = wallet_nft;">
          <img src="@/assets/images/mywallet/icon1s.svg" alt="" v-if="type == 1" />
          <img src="@/assets/images/mywallet/icon1.svg" alt="" v-else />
          <div>My Wallet</div>
        </div>
        <!--div class="flex items-center type" :class="{ active: type == 2 }"
          @click="ready ? type = 2 : type = 1; display_nft = locked_nft;">
          <img src="@/assets/images/mywallet/icon2s.svg" alt="" v-if="type == 2" />
          <img src="@/assets/images/mywallet/icon2.svg" alt="" v-else />
          <div>Locked In Pool</div>
        </div-->
        <div class="flex items-center type" :class="{ active: type == 3 }" @click="balance_ready ? type = 3 : type = 1">
          <img src="@/assets/images/mywallet/icon3s.svg" alt="" v-if="type == 3" />
          <img src="@/assets/images/mywallet/icon3.svg" alt="" v-else />
          <div>My Furion Tokens</div>
        </div>
      </div>
    </div>

    <Loader v-if="!ready && type === 1" />

    <div v-if="type === 1 && !ready && balance_ready" class="flex justify-center text-16px mt-40px opacity-80 pb-100px">
      Check your token balances at<span class="text-[#f181de]">&nbsp; My Furion Token &nbsp;</span> now!
    </div>

    <div v-if="(type == 1 || type == 2) && ready" class="pl-30px pb-100px clearfix">
      <div class="item" :class="{ locked: type === 2 }" v-for="(item, index) in display_nft" :key="index">
        <div class="flex items-center justify-center mt-4px mb-15px">
          <el-image 
            :src="item.image_url" 
            class="w-200px h-200px rounded-12px" 
            :class="{ punkImages: item.name == 'CryptoPunks' }" 
            :lazy="true"
            @error="reload_nft.push(index); item.image_url = require('@/assets/images/placeholder.png')"
          >
            <img src="@/assets/images/placeholder.png" alt="" slot="placeholder" />
          </el-image>
        </div>
        
        <div class="px-15px">
          <div class="flex justify-between items-center">
            <div>
              <div class="flex items-center mb-5px">
                <div class="opacity-40 text-13px w-170px line-clamp-1 overflow-ellipsis !block">
                  {{ item.name }}
                </div>
              </div>

              <div class="flex items-center justify-between text-13px">
                <div class="font-600 flex-1 mr-10px flex w-110px">
                  <span class="line-clamp-1 overflow-ellipsis !block mr-4px">
                    {{ item.symbol }}
                  </span>
                  <span class="flex-shrink-0">#{{ item.token_id }}</span>
                </div>
              </div>
            </div>

            <img src="@/assets/images/icon_eth.svg" class="w-100px" />
          </div>
        </div>

        <!--div class="h-36px bg-opacity-60 bg-[#01132E] w-1/1 absolute bottom-0 left-0 px-15px flex items-center rounded-bl-12px rounded-br-12px">
          <div v-if="type === 2" class="mx-auto flex items-center">
            <img src="@/assets/images/locked.png" class="w-14px h-16px mr-10px" />
            <p class="text-14px font-600 text-[#6D788A]">Locked Until {{ unixToDate(item.lock_info.release_time) }}</p>
          </div>
          <div class="flex justify-between w-1/1" v-else>
            <img src="@/assets/images/icon_eth.svg" />
            <div class="flex items-center">
              <div class="w-24px h-24px flex items-center justify-center rounded-full hover:bg-[#1F2E48] icon">
                <img src="@/assets/images/Vector.svg" class="w-12px icon1" />
                <img src="@/assets/images/Vector2.svg" class="w-12px icon2" />
              </div>
              <div class="opacity-40 text-13px">{{ item.like }}</div>
            </div>
          </div>
        </div-->
      </div>
    </div>

    <div v-if="type === 3" class="section">
      <div v-for="(item, index) in tokens" :key="index" class="form-item2">
        <div class="flex items-center">
          <img class="icon" :src=item.image />
          <p>{{ item.symbol }}</p>
        </div>
        <p>{{ item.balance }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { getAddress } from '@/utils/common/contractABI';
import { getSeparatePools, getAggregatePools } from '@/utils/common/poolAddress';
import { query_user_locked } from '@/config/user_info/locked_nft';
import { getNftHolding, initTokenImage } from '@/config/my_wallet/wallet';
import { reloadImage } from '@/config/collection/aggregate_pools';
import { trimDecimals, fromUnit, getNativeTokenAmountRaw, tokenBalance } from "@/utils/common";
import Loader from '@/components/Loader.vue';

export default {
  props: {},
  components: { Loader },
  computed: {
    ...mapState('admin', ['connectStatus']),
    ...mapState(['userInfo']),
    account() {
      return this.userInfo.userAddress;
    },
    filterNft() {
      if (this.searchKey != "") {
        let filtered = [];

        for (let i = 0; i < this.display_nft.length; i++) {
          if (this.searchKey == this.display_nft[i].token_id) {
            filtered.push(this.display_nft[i]);
          }
        }

        return filtered;
      }

      return this.display_nft;
    }
  },
  data() {
    return {
      network: 'goerli',
      display_nft: [],
      wallet_nft: [],
      locked_nft: [],
      reload_nft: [],
      collections: [
        { name: "BAYC", symbol: "BAYC", address: getAddress()['BAYC'] },
        { name: "MAYC", symbol: "MAYC", address: getAddress()['MAYC'] },
        { name: "Otherdeed", symbol: "OTHR", address: getAddress()['Otherdeed'] },
        { name: "BAKC", symbol: "BAKC", address: getAddress()['BAKC'] },
        { name: "CryptoPunks", symbol: "PUNKS", address: getAddress()['CryptoPunks'] },
        { name: "Azuki", symbol: "AZUKI", address: getAddress()['Azuki'] },
        { name: "Doodles", symbol: "DOODLES", address: getAddress()['Doodles'] },
        { name: "Meebits", symbol: "Meebit", address: getAddress()['Meebits'] },
        { name: "Weirdo Ghost Gang", symbol: "GHOST", address: getAddress()['Weirdo Ghost Gang'] },
        { name: "Catddle", symbol: "CAT", address: getAddress()['Catddle'] },
        { name: "Mimic Shhans", symbol: "SHHANS", address: getAddress()['Mimic Shhans'] },
      ],
      tokens: [
        { symbol: "ETH", address: "", balance: "", image: require("@/assets/images/liquidity/tokens/ETH.png") },
        { symbol: "FUR", address: "0x167873d27d6f16C503A694814a3895215344B601", balance: "", image: require("@/assets/images/liquidity/tokens/FUR.png") },
        { symbol: "FFT-BAYC", address: "0x4c711efa05b78582f07D9d960B1dAdDe95688166", balance: "", image: require("@/assets/images/liquidity/tokens/ETH.png") },
        { symbol: "FFT-BLUECHIP", address: "0x53c85C8f5dA3B098DF30204C0eA460602eC2BFC1", balance: "", image: require("@/assets/images/liquidity/tokens/ETH.png") },
        { symbol: "FFT-DARKHORSE", address: "0xce8791504fb07A10c82216C3366BdF7130fB24Ac", balance: "", image: require("@/assets/images/liquidity/tokens/ETH.png") },
      ],
      searchKey: "",
      type: 1,
      balance_ready: false,
      ready: false,
      image_ready: false,
    };
  },
  async mounted() {
    setTimeout(async () => {
      // console.log('Account info', this.account);
      await this.initBalance();
      this.balance_ready = true;
      await this.initUserNft();
    }, 1000);

  },
  methods: {

    /*************************************** Utils ***************************************/

    displayFormat(num, decimals = 18, trim = 3) {
      return trimDecimals(fromUnit(num, 18), 3)
    },
    unixToDate(unixInSeconds) {
      const milli = unixInSeconds * 1000;
      const date = new Date(milli).toLocaleString().split(',');
      return date[0];
    },

    /************************************ Init state ************************************/

    async initUserNft() {
      this.display_nft = await getNftHolding(this.collections, this.account);
      this.ready = true;

      this.reload_nft = await initTokenImage(this.display_nft);
      this.wallet_nft = this.display_nft;
      this.image_ready = true;
    },
    async initBalance() {
      const account = this.userInfo.userAddress;

      for (let token of this.tokens) {
        if (token.symbol == "ETH") {
          token.balance = this.displayFormat(await getNativeTokenAmountRaw(account));
        } else {
          token.balance = trimDecimals(await tokenBalance(token.address, account), 3);
        }
      }
    },

    search () {
      if (!this.image_ready) {
        return;
      } 

      if (this.searchKey == "") {
        this.display_nft = this.wallet_nft;
        return;
      }

      this.display_nft = this.wallet_nft.filter(nft => String(nft.token_id).includes(this.searchKey) || nft.symbol.includes(this.searchKey.toUpperCase()));
    },

    async reloadPool() {
      const maxTries = 3;
      let tries = 1; 
      while (tries <= maxTries && this.reload_nft.length != 0) {
        this.reload_nft = await reloadImage(this.wallet_nft, this.reload_nft);
      }
      this.display_nft = this.wallet_nft;
    },
  },
};
</script>
