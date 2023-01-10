<style lang="scss" scoped>
.order {
  height: 19px;
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  background: linear-gradient(273.69deg, #5df3c3 -12.38%, #fc64d9 96.07%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

.desc {
  color: rgba(252, 255, 253, 0.5);
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
}
</style>

<template>
  <div>
    <div class="absolute center text-center">
      <img src="@/assets/images/error.png" class="mb-20px" />

      <div class="text-30px font-700 text-center mb-15px">Transaction Failed</div>
      <div class="order mb-30px">ORDER #2039</div>

      <div class="desc mb-50px">Your transaction is falled. Piease try again</div>

      <div class="flex items-center">
        <img
          src="@/assets/images/cart/btn2.svg"
          class="hover:opacity-80 cursor-pointer mr-30px"
          @click="$router.push('/')"
        />
        <div class="btn_border h-52px">
          <el-button type="primary" class="!w-220px !h-46px">
            <span class="font-900 text-15px">Try again</span>
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ store, $axios, app, query }) {},
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
