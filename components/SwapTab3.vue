<style lang="scss" scoped>
.box-wrap {
  background: linear-gradient(
    180deg,
    rgba(51, 53, 114, 0.16) -9.52%,
    rgba(51, 53, 114, 0.2) 109.52%
  );
  border: 0.8px solid rgba(255, 255, 255, 0.1);
  border-radius: 82px;

  .text {
    font-weight: 600;
    font-size: 18px;
    line-height: 120%;
    display: flex;
    align-items: center;
    text-align: center;
    color: rgba(252, 255, 253, 0.6);
    justify-content: center;
    cursor: pointer;
    // transition: 0.3s color, 0.3s font-weight;
  }

  .active {
    font-weight: 800;
    border-radius: 82px;
    color: #fa6be1;
    border: 0.8px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 0 3px #fa6be1, 0 0 0 6px #364666;
  }
}
</style>

<template>
  <div class="w-300px h-42px relative box-wrap">
    <div class="w-300px flex h-42px relative -top-2px -left-2px">
      <div class="flex-1 text" :class="{ active: value == 1 }" @click="$emit('input', 1)">Add</div>
      <div class="flex-1 text" :class="{ active: value == 2 }" @click="$emit('input', 2)">Remove</div>
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
  methods: {},
};
</script>
