<style lang="scss" scoped>
.box {
  background: rgba(79, 68, 148, 0.6);
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  z-index: 1;

  .text {
    font-weight: 600;
    font-size: 17px;
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
    color: #ffffff;
    z-index: 3;
  }

  .glider {
    --pos: '0';
    position: absolute;
    top: -2px;
    left: -2px;
    height: 64px;
    width: 220px;
    padding-top: 3px;
    background: linear-gradient(
      259.84deg,
      #67d6f5 -18.22%,
      #7853d6 43.85%,
      #f155ff 107.01%,
      #ff48cc 107.01%
    );
    border: 2px solid rgba(255, 255, 255, 1);
    border-radius: 12px;
    z-index: 2;
    transform: translateX(var(--pos));
    transition: 0.25s ease;
  }
}
</style>

<template>
  <div class="pt-40px mb-32px">
    <div class="w-660px h-66px mx-auto relative mb-30px box">
      <div class="flex h-1/1">
        <div
          class="flex-1 text"
          :class="{ active: value == 1 }"
          @click="$emit('input', 1)"
        >
          A-Class Assets Pool
        </div>
        <div
          class="flex-1 text"
          :class="{ active: value == 2 }"
          @click="$emit('input', 2)"
        >
          B-Class Assets Pool
        </div>
        <div
          class="flex-1 text"
          :class="{ active: value == 3 }"
          @click="$emit('input', 3)"
        >
          C-Class Assets Pool
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
