<style lang="scss" scoped>
.box {
  border-radius: 12px;
  z-index: 1;

  .text {
    font-weight: 600;
    font-size: 17px;

    background-color: #1e194d;
    border: 1px solid #2b2353;
    margin-top: 3px;
    height: 70px;
    padding: 15px;

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
    background: #323472 !important;
    transform: scaleX(1.1);
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
  <div class="w-160px h-70px relative box top-100px">
    <div class="w-160px flex flex-col h-70px relative top-10px right-2px">
      <div
        class="flex-1 text"
        style="text-align: end"
        :class="{ active: value == 1 }"
        @click="$emit('input', 1)"
      >
        <span class="relative" style="left: -15px">NFT</span>
      </div>
      <div
        class="flex-1 text"
        style="text-align: end"
        :class="{ active: value == 2 }"
        @click="$emit('input', 2)"
      >
        Badges
      </div>
      <!-- <span class="glider" :style="`--pos: ${translateTo}`"></span> -->
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
