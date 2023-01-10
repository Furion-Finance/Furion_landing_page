<style lang="scss" scoped>
.box {
  background: rgba(79, 68, 148, 0.6);
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;

  .text {
    font-weight: 600;
    font-size: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #86898c;
    border-radius: 12px;
    border: 2px solid transparent;
    &.disabled {
      color: rgba(252, 255, 253, 0.22);
    }
  }

  .active {
    font-weight: 800;
    background: linear-gradient(
      259.84deg,
      #67d6f5 -18.22%,
      #7853d6 43.85%,
      #f155ff 107.01%,
      #ff48cc 107.01%
    );
    color: #ffffff;
    border: 2px solid rgba(255, 255, 255, 1);
  }
}
</style>

<template>
  <div class>
    <div class="w-540px h-66px relative box">
      <div class="w-540px flex h-66px relative -top-2px -left-2px">
        <div class="flex-1 text" :class="{ active: value == 1 }" @click="change(1)">Swap</div>
        <div class="flex-1 text" :class="{ active: value == 2 }" @click="change(2)">Pool</div>
        <div class="flex-1 text disabled" :class="{ active: value == 3 }">
          <div>
            <p class="text-center">Derivative</p>
            <p class="text-center text-13px">-Coming Soon-</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 1,
    },
  },
  components: {},
  computed: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {
    change(val) {
      this.$emit('input', val);
      if (val == 1) {
        this.$router.push('/liquidity/furion_swap/swap');
      } else if (val == 2) {
        this.$router.push('/liquidity/furion_swap/pool');
      }
    },
  },
};
</script>
