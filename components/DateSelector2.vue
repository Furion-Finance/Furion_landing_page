<style lang="scss" scoped>
.box {
  background: linear-gradient(
    180deg,
    rgba(51, 53, 114, 0.16) 0%,
    rgba(51, 53, 114, 0.2) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;

  .text {
    font-weight: 600;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #86898c;
    border-radius: 12px;
    border: 2px solid transparent;
    border: 0;
    flex-shrink: 0;
    // flex: 1;
    text-align: center;
    height: 30px;
    margin-top: 1px;
  }

  .active {
    font-size: 14px;
    font-weight: 800;
    border-radius: 82px;
    color: #fa6be1;
    border: 0.8px solid rgba(255, 255, 255, 0.1);
    border: 0;
    box-shadow: 0 0 0 1px #fa6be1, 0 0 0 3px #364666;
  }
}
</style>

<template>
  <div class>
    <div class="w-180px h-32px relative box">
      <div class="w-180px flex h-32px relative -top-2px -left-2px">
        <div
          class="text w-60px"
          :class="{ active: time == '1H' }"
          @click="setData('1H')"
        >
          1H
        </div>
        <div
          class="text w-60px"
          :class="{ active: time == '1D' }"
          @click="setData('1D')"
        >
          1D
        </div>
        <div
          class="text w-60px"
          :class="{ active: time == 'ALL' }"
          @click="setData('ALL')"
        >
          ALL
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  provide: {},
  props: {
    time: {
      type: String,
      default: "ALL",
    },
  },
  data() {
    return {
      timeList: ["1H", "1D", "ALL"],
      value: 3,
    };
  },
  computed: {},
  mounted() {},
  methods: {
    setData(time) {
      // console.log(time);
      try {
        this.$emit("update:time", time);
        this.$emit("changeTime", time);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
