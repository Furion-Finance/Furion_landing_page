<style lang="scss" scoped>
.go {
  background: linear-gradient(273.69deg, #5df3c3 -12.38%, #fc64d9 96.07%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 600;
  font-size: 16px;
}

.clear-button {
  margin-left: 60%;
}

.tip {
  width: 381px;
  height: 28px;
  background: #36375e;
  opacity: 0.75;
  border-radius: 3px;
  @apply flex items-center justify-center;
}

.bar {
  background: linear-gradient(
    180deg,
    rgba(193, 99, 226, 0.162) 0%,
    rgba(51, 53, 114, 0.3) 113.94%
  );
  color: rgba(154, 163, 173, 0.8);
  font-weight: 400;
  font-size: 14px;
}

.line {
  background: rgba(255, 255, 255, 0.08);
  width: 1px;
  height: 18px;
  margin: 0 20px;
}

.box {
  position: relative;
  display: inline-block;
  width: 910px;
  background: linear-gradient(
    0,
    rgba(250, 107, 225, 0.4) 17.23%,
    rgba(8, 19, 50, 0.4) 100%
  );
  border-radius: 30px;
}

.box-bg {
  position: absolute;
  // background: url("~@/assets/images/cart-bg.png") no-repeat;
  width: 100%;
  height: 225px;
  bottom: 0;
  background-size: 100% 100%;
}

.item {
  float: left;
  width: 212px;
  height: 284px;
  background: #172548;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  cursor: pointer;
  box-sizing: border-box;
  margin-right: 12px;
  margin-bottom: 15px;
  position: relative;

  &:hover .el-image {
    transition: all 0.3s;
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  }
}

.cart {
  max-width: 910px;
}
</style>

<template>
  <div class="!w-full pb-180px">
    <div
      @click="$router.go(-1)"
      class="absolute left-60px cursor-pointer top-100px hover:opacity-80 flex items-center"
    >
      <img src="@/assets/images/icon_back.svg" />
      <div class="go ml-23px">Back to shopping</div>
    </div>

    <!--div class="absolute center-x top-105px tip">Cannot find your metamask wallet</div-->
    <el-button class="absolute clear-button top-150px" @click="clearCart"
      >Clear Cart</el-button
    >
    <div class="pt-80px text-30px font-700 text-center mb-60px">
      Your cart items
    </div>

    <div class="text-center">
      <div class="box">
        <div class="box-bg relative">
          <img
            src="@/assets/images/cart_btn.svg"
            class="absolute center-x -bottom-20px"
          />
        </div>

        <div
          class="pl-12px clearfix cart"
          :class="{ 'pb-30px': cart.length > 4 }"
        >
          <el-scrollbar class="h-330px overflow-hidden">
            <div
              class="item"
              v-for="(item, index) in cart"
              :key="index"
              @click="
                $router.push(
                  `/collection/separate_pools/detail?collection=${item.name}&token_id=${item.token_id}`
                )
              "
            >
              <el-image
                :src="item.image_url"
                class="w-201px h-201px rounded-12px m-4px mb-12px"
                lazy
              >
                <img
                  src="@/assets/images/placeholder.png"
                  alt=""
                  slot="placeholder"
                />
              </el-image>
              <div class="px-15px">
                <div class="flex justify-between items-center mb-10px">
                  <div
                    class="opacity-40 text-12px w-140px line-clamp-1 overflow-ellipsis !block text-left"
                  >
                    {{ item.name }}
                  </div>
                  <div class="text-12px flex items-center">
                    <img src="@/assets/images/icon_eth.svg" class="mr-4px" />
                    <span class="font-600">{{ item.fx_price.toFixed(2) }}</span>
                  </div>
                </div>
                <div class="flex items-center justify-between text-12px">
                  <div class="font-600 flex-1 mr-10px flex w-110px">
                    <span class="line-clamp-1 overflow-ellipsis !block mr-4px">
                      {{ item.symbol }}
                    </span>
                    <span class="flex-shrink-0">#{{ item.token_id }}</span>
                  </div>
                  <div class="btn2" @click.stop="remove(item)">REMOVE</div>
                </div>
              </div>
            </div>
          </el-scrollbar>
        </div>
      </div>
    </div>

    <div
      class="fixed bottom-0 h-80px flex items-center justify-end bar w-1/1 pr-130px"
    >
      <div class="flex items-center">
        <div class="mr-15px">Sub-total:</div>
        <!-- <img src="@/assets/images/icon_eth.svg" class="mr-6px" /> -->
        <div class="text-16px font-600 text-[rgba(255,255,255,0.8)]">
          {{ this.cart.length * 1000 }} F-{{
            this.cart.length > 0 ? this.cart[0].symbol : "X"
          }}
        </div>
      </div>
      <div class="line"></div>
      <div class="flex items-center">
        <div class="mr-15px">Gas fee:</div>
        <img src="@/assets/images/icon_eth.svg" class="mr-6px" />
        <div class="text-16px font-600 text-[rgba(255,255,255,0.8)]">
          0.00374
        </div>
      </div>
      <div class="btn_border ml-40px">
        <el-button
          type="primary"
          class="!w-140px !h-48px"
          :disabled="ids.length == 0"
          @click="buy"
        >
          <span class="font-900 text-16px">Check-out</span>
        </el-button>
      </div>
    </div>

    <ProceedingDetails :DialogInfo="dialogue_info" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import {
  initSeparatePoolContract,
  initFurContract,
} from "@/config/collection/separate_pool";
import {
  _compareInt,
  getTxURL,
  toWei,
  ALLOWANCE_THRESHOLD,
  tokenApprove,
} from "@/utils/common";

import {
  DialogInfo,
  initDialog,
  closeDialog,
  openDialog,
  stepDialog,
  ProcessInfo,
} from "~/config/loading_info";
import ProceedingDetails from "@/components/Dialog/ProceedingDetails.vue";

export default {
  props: {},
  components: { ProceedingDetails },
  computed: {
    ...mapState("admin", ["connectStatus"]),
    ...mapState(["userInfo"]),
    account() {
      return this.userInfo.userAddress;
    },
    nftAddress() {
      return this.$store.state.user.cart[0];
    },
    cart() {
      return this.$store.state.user.cart.slice(1);
    },
    ids() {
      let temp = [];
      for (let nft of this.cart) {
        temp.push(nft.token_id);
      }
      return temp;
    },
    subTotal() {
      let sum = 0;
      for (let nft of this.cart) {
        sum += nft.fx_price;
      }
      return sum;
    },
  },
  data() {
    return {
      pool: {},
      fur: {},
      dialogue_info: DialogInfo,
    };
  },
  async mounted() {},
  methods: {
    remove(item) {
      let temp = [...this.$store.state.user.cart];
      let index = temp.indexOf(item);
      temp.splice(index, 1);

      this.$store.commit("save", ["user.cart", temp, this]);
    },
    clearCart() {
      this.$store.commit("save", ["user.cart", [], this]);
    },
    async approvedFur() {
      const allowance = await this.fur.contract.methods
        .allowance(this.account, this.pool.address)
        .call();

      return _compareInt(allowance, toWei(100 * this.cart.length)) != "smaller"
        ? true
        : false;
    },
    async hasEnoughFur() {
      const balance = await this.fur.contract.methods
        .balanceOf(this.account)
        .call();

      return _compareInt(balance, toWei(100 * this.cart.length)) != "smaller"
        ? true
        : false;
    },
    async hasEnoughFx() {
      const balance = await this.pool.contract.methods
        .balanceOf(this.account)
        .call();

      return _compareInt(balance, toWei(1000 * this.cart.length)) != "smaller"
        ? true
        : false;
    },
    async buy() {
      this.pool = await initSeparatePoolContract(this.nftAddress);
      this.fur = await initFurContract();
      const checkFx = await this.hasEnoughFx();
      const checkFur = await this.hasEnoughFur();
      const approved = await this.approvedFur();
      if (!checkFx) {
        this.errorMessage(`Insufficient FX balance`);
        return;
      }
      if (!checkFur) {
        this.errorMessage("Insufficient FUR balance");
        return;
      }

      // initialize tx window
      let dialog_list = [];
      if (!approved) {
        dialog_list.push(ProcessInfo.APPROVE_FUR);
      }
      dialog_list.push(ProcessInfo.BUY_NFT);
      openDialog(this.dialogue_info, dialog_list);

      if (!approved) {
        try {
          const approve_result = await tokenApprove(
            this.fur.address,
            this.account,
            this.pool.address
          );
          this.successMessage(approve_result, `Approve FUR succeeded`);
          stepDialog(this.dialogue_info);
        } catch (e) {
          console.warn(e);
          this.errorMessage(`Approve FUR failed`);
          closeDialog(this.dialogue_info);
          return;
        }
      }

      try {
        let tx_result = await this.pool.contract.methods
          .buyBatch(this.ids)
          .send({ from: this.account });
        this.successMessage(tx_result, `Purchase succeeded`);
      } catch (e) {
        this.errorMessage(`Purchase failed`);
        closeDialog(this.dialogue_info);
        return;
      }

      closeDialog(this.dialogue_info);
      this.clearCart();
      this.$router.push("/cart/payment_confirmed");
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
  },
};
</script>
