<style lang="scss" scoped>
.sort {
  background: transparent;
  color: rgba(204, 204, 204, 0.8) !important;
  height: 34px;
  @apply w-90px flex items-center justify-between cursor-pointer;
}
</style>

<template>
  <el-popover
    placement="bottom-start"
    title
    trigger="click"
    popper-class="el-sort not-min-width"
    :visible-arrow="false"
    width="90"
    ref="type"
  >
    <div class="el-sort-item" @click="onSelect('AVAX')">AVAX</div>
    <div class="el-sort-item" @click="onSelect('USDC')">USDC</div>

    <div class="sort no-border" slot="reference">
      <div class="flex items-center" v-if="value=='AVAX'">
        <img class="flex-shrink-0 mr-8px" src="@/assets/images/liquidity/bit.svg" />
        <p class="font-600 text-[rgba(252,255,253,0.8)] text-13px">BNB</p>
      </div>
      <div class="flex items-center" v-else-if="value=='USDC'">
        <img class="flex-shrink-0 mr-8px" src="@/assets/images/liquidity/pointer.svg" />
        <p class="font-600 text-[rgba(252,255,253,0.8)] text-13px">USDC</p>
      </div>
      <div class="flex items-center" v-else>
        <p class="font-600 text-[rgba(252,255,253,0.8)] text-13px ml-20px">Select</p>
      </div>
      <img class="flex-shrink-0" src="@/assets/images/liquidity/arrow_down.svg" />
    </div>
  </el-popover>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: 'AVAX',
    },
  },
  components: {},
  computed: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {
    onSelect(val) {
      this.$refs.type.doClose();
      this.$emit('input', val);
    },
  },
};
</script>
