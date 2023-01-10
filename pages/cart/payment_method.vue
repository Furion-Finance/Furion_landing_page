<style lang="scss" scoped>
.box {
  background: url("~@/assets/images/pay_bg.png") no-repeat;
}

.list {
  background: rgba(28, 42, 79, 0.4);
  border-radius: 16px;
  padding: 16px 14px;
}

.item {
  background: rgba(1, 17, 41, 0.7);
  border-radius: 8px;
  height: 48px;
  @apply flex items-center justify-between pl-18px pr-42px mb-10px;
}
</style>

<template>
  <div>
    <div class="absolute center">
      <div class="pt-80px text-30px font-700 text-center mb-30px">Payment Method</div>

      <div class="mb-40px w-520px mx-auto box h-490px pt-30px">
        <div class="text-[rgba(252,255,253,0.8)] font-600 text-20px pl-32px mb-20px">
          Add Collateral Type
        </div>

        <div
          class="flex items-center justify-between text-14px font-500 text-[rgba(252,255,253,0.4)] mb-8px"
        >
          <div class="pl-32px">Token</div>
          <div class="pr-35px">Safety Ratio</div>
        </div>

        <div class="px-18px">
          <div class="list h-370px">
            <div class="item" v-for="n in 6">
              <div class="flex items-center">
                <img src="@/assets/images/token0.png" class="mr-8px" />
                <div class="font-600 text-14px text-[rgba(252,255,253,0.8)]">WAVAX</div>
              </div>
              <div class="flex items-center">
                <div class="mr-10px font-600 text-13px text-[rgba(252,255,253,0.8)]">
                  1.0476
                </div>

                <el-popover
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
                    src="@/assets/images/q2.svg"
                    class="cursor-pointer"
                    style="vertical-align: -1px"
                    slot="reference"
                  />
                </el-popover>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center">
        <div
          class="btn_border inline-block"
          @click="$router.push('/cart/payment_confirmed')"
        >
          <el-button type="primary" class="!w-160px !-h-56px">
            <span class="font-900 text-20px">PAY</span>
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  components: {},
  computed: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
