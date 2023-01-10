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
    transition: all 0.4s;

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
    --pos: "0";
    position: absolute;
    left: -2px;
    height: 65px;
    width: 200px;
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
    transition: 0.4s ease;
  }
}
</style>

<template>
  <!-- //test nft和badges的跳转 -->
  <div class="w-400px h-66px relative box">
    <div class="w-400px flex h-66px relative -top-2px -left-2px">
      <div
        class="flex-1 text"
        :class="{ active: value == 1 }"
        @click="$emit('input', 1)"
      >
        My Overview
      </div>
      <div
        class="flex-1 text"
        :class="{ active: value == 2 }"
        @click="$emit('input', 2)"
      >
        Markets
      </div>
      <span class="glider" :style="`--pos: ${translateTo}`"></span>
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
          return "0";
        case 2:
          return "100%";
      }
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
