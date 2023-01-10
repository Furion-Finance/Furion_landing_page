<style lang="scss" scoped>
.box {
  background: rgba(79, 68, 148, 0.6);
  border: 5px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  z-index: 1;

  .text {
    font-weight: 600;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #86898c;
    border-radius: 12px;
    z-index: 3;
    transition: all 0.3s;

    &:hover {
      color: rgba(252, 255, 253);
    }
  }

  .active {
    font-weight: 800;
    color: #fff;
    z-index: 3;
  }

  .glider {
    --pos: '0';
    position: absolute;
    height: 38px;
    width: 123px;
    background: linear-gradient(
      262.19deg,
      #67d6f5 -22.52%,
      #7853d6 42.29%,
      #f155ff 108.23%,
      #ff48cc 108.23%
    );
    box-shadow: inset 0px -2px 2px rgba(0, 0, 0, 0.12),
      inset 0px 1px 1px rgba(245, 230, 255, 0.6);
    border-radius: 9px;
    z-index: 2;
    transform: translateX(var(--pos));
    transition: 0.25s ease;
  }
}
</style>

<template>
  <div class="pt-70px mb-54px">
    <div class="w-500px h-48px mx-auto relative mb-30px box">
      <div class="flex h-1/1">
        <div
          class="flex-1 text"
          :class="{ active: value == 1 }"
          @click="$emit('input', 1)"
        >
          Borrow
        </div>
        <div
          class="flex-1 text"
          :class="{ active: value == 2 }"
          @click="$emit('input', 2)"
        >
          Repay
        </div>
        <div
          class="flex-1 text"
          :class="{ active: value == 3 }"
          @click="$emit('input', 3)"
        >
          Deposit
        </div>
        <div
          class="flex-1 text"
          :class="{ active: value == 4 }"
          @click="$emit('input', 4)"
        >
          Withdraw
        </div>
        <span class="glider" :style="`--pos: ${translateTo}`"></span>
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
  computed: {
    translateTo() {
      switch (this.value) {
        case 1:
          return '0';
        case 2:
          return '100%';
        case 3:
          return '200%';
        case 4:
          return '300%';
        default:
          return '0';
      }
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
