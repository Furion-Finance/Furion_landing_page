<style lang="scss" scoped>
.item {
  border: 1.5px solid #1a2a42;
  border-radius: 4px;
  @apply text-12px w-18px h-18px flex items-center justify-center text-[#8A92A2] cursor-pointer;
  
  &.active.A {
    background: #23cba0;
    color: #ffffff;
  }
  &.active.B {
    background: #3e94fc;
    color: #ffffff;
  }
  &.active.C {
    background: #e3723f;
    color: #ffffff;
  }
}
</style>

<template>
  <div class="flex">
    <div
      class="item"
      :class="{
        active: value.includes(item),
        [item]: true, //todo 这里的item是一个变量，所以要加中括号吗
        'mr-18px': !readonly,
      }"
      @click="select(item)"
      v-for="item in list"
      :key="item"
      v-if="!readonly || value.includes(item)"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  //

  props: {
    value: {
      type: [Array, String],
      default() {
        return [];
      },
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    table: {
      type: String,
      default: "supplies",
    },
  },
  components: {},
  computed: {},
  data() {
    return {
      list: ["A", "B", "C"],
      board: -1,
    };
  },
  // mounted() {
  //   switch (this.table) {
  //     case "supplies":
  //       this.board = 0;
  //       break;
  //     case "borrows":
  //       this.board = 1;
  //       break;
  //     case "assetsSupply":
  //       this.board = 2;
  //       break;
  //     case "assetsBorrow":
  //       this.board = 3;
  //       break;
  //     default:
  //       break;
  //   }
  // },
  methods: {
    // sendItem(item) {
    //   this.$emit("sendItem", item);
    // },
    select(item) {
      if (this.readonly) {
        return;
      }
      const i = this.value.findIndex((item2) => {
        return item == item2; //item2就是遍历this.value里面的一个个元素 如果没有满足的元素 就返回-1
      });
      if (i != -1) {
        let arr = this.value;
        arr.splice(i, 1);
        this.$emit("input", arr);
      } else {
        let arr = this.value;
        arr.push(item);
        this.$emit("input", arr);
      }
    },
  },
};
</script>
