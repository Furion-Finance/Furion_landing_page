<style lang="scss" scoped>
.item:hover {
  transform: translateY(-10px);
  transition: all 0.6s;
}
</style>

<template>
  <div class="mb-65px mt-100px">
    <div class="Orbitron font-700 text-32px text-center mb-100px">
      <span class="text-[#FA6BE1]">Furion:</span>
      All-in-one NFT Marketplace
    </div>

    <div class="w-1178px mx-auto flex justify-between items-start">
      <div class="relative item">
        <img src="@/assets/images/home/item.png" />

        <img src="@/assets/images/home/item1.png" class="absolute center-x" />

        <div class="absolute text-center top-163px w-234px center-x">
          <div class="text-[#E77DD8] Orbitron font-900 text-16px mb-14px">
            Separate & Aggregate Pools
          </div>
          <div style="color: rgba(255, 255, 255, 0.7)" class="text-14px leading-22px">
            After storing or locking NFTs in separate pools, users can further combine their liquidity in an index-like aggregate pool.
          </div>
        </div>
      </div>
      <div class="relative item">
        <img src="@/assets/images/home/item.png" />

        <img src="@/assets/images/home/item2.png" class="absolute center-x  -top-5px" />

        <div class="absolute text-center top-163px w-234px center-x">
          <div class="text-[#E77DD8] Orbitron font-900 text-16px mb-14px">
            Furion Swap
          </div>
          <div style="color: rgba(255, 255, 255, 0.7); margin: 40px auto; " class="text-14px leading-22px">
            Swap liquidity at ease with the AMM mechanism.
          </div>
        </div>
      </div>
      <div class="relative item">
        <img src="@/assets/images/home/item.png" />

        <img src="@/assets/images/home/item3.png" class="absolute center-x -top-15px" />

        <div class="absolute text-center top-163px w-234px center-x">
          <div class="text-[#E77DD8] Orbitron font-900 text-16px mb-14px">Farming</div>
          <div style="color: rgba(255, 255, 255, 0.7); margin: 25px;" class="text-14px leading-22px">
            Farm FUR tokens by storing/locking your NFTs and providing liquidity.
          </div>
        </div>
      </div>
      <div class="relative item">
        <img src="@/assets/images/home/item.png" alt="" />

        <img src="@/assets/images/home/item4.png" class="absolute center-x -top-5px" />

        <div class="absolute text-center top-163px w-234px center-x">
          <div class="text-[#E77DD8] Orbitron font-900 text-16px mb-14px">
            Money Market (Phase2)
          </div>
          <div style="color: rgba(255, 255, 255, 0.7)" class="text-14px leading-22px">
            Furion separates all NFT assets into three categories to better secure the
            borrow and lending process.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  components: {},
  computed: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
