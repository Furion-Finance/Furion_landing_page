<style lang="scss" scoped>
.collection-item-wrap {
  width: 416px;
  height: 80px;
  background: rgba(23, 37, 72, 0.5);
  border: 0.8px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 0 20px 0 24px;
  @apply flex items-center justify-between text-[rgba(252,255,253,0.5)];
}
.swiper-img {
    background: #d9d9d9;
    border: 0.8px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    transform: scale(1.01);
  }

</style>

<template>
  <div class="collection-item-wrap"
  @click="clickCollectionItem(detail.collection)">
    <div class="flex items-center">
      <div class="no mr-20px text-white text-15px font-600">{{index+1}}</div>
      <div class="avatar-wrap relative mr-10px">
        <img class="w-66px h-66px object-cover"
            :src="detail.avatar" />
        <img class="checked absolute right-0 bottom-0" src="@/assets/images/index/checked.svg" />
      </div>
      <div class="info">
        <p class="text-white font-600 mr-10px mb-5px">{{detail.collection}}</p>
        <div class="flex items-center text-13px">
          <p>Floor price:</p>
          <img class="mx-8px" src="@/assets/images/index/price.svg" />
          <p>{{detail.floor_price}}</p>
        </div>
      </div>
    </div>
    <div class="numbers">
      <p class="text-[#50CD7E] mb-8px text-right text-13px mt-2px">{{detail._24h}}</p>
      <div class="flex items-center text-13px text-right mt-5px">
        <img class="mr-8px" src="@/assets/images/index/price.svg" />
        <p>{{detail.fXprice}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionItem',
  props: {
    index: {
      type: Number,
      default: 0,
    },
    detail: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {},
  computed: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {
    clickCollectionItem(collection) {
        this.$router.push(`/collection/separate_pools/nft_pool?collection=${collection}`);
    }
  },
};
</script>
