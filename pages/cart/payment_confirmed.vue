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
      <img src="@/assets/images/success.png" class="mb-20px" />

      <div class="text-30px font-700 text-center mb-15px">Payment Confirmed</div>
      <div class="order mb-30px">ORDER #2039</div>

      <div class="desc mb-50px">
        Your payment is well-received! Check your wallet for your <br />
        newly-purchased NFTs!
      </div>

      <img
        src="@/assets/images/cart/btn.svg"
        class="hover:opacity-80 cursor-pointer"
        @click="$router.push('/collection/separate_pools')"
      />
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
