<style lang="scss" scoped></style>

<template>
  <div>
    <div class="mb-135px">
      <div
        class="Orbitron font-700 text-32px flex items-center justify-center h-60px mb-60px"
      >
        Learning With&nbsp;<span class="text-[#FA6BE1]">Furion</span>
        <img src="@/assets/images/home/arrow.png" class="ml-10px" />
      </div>

      <div class="flex justify-center text-center">
        <div class="relative mr-23px">
          <el-image :src="learning1" lazy></el-image>
          <div class="text-16px font-500 absolute top-230px w-full leading-28px">
            How to split your NFT into ERC-20 tokens?
          </div>
        </div>

        <div class="relative mr-23px">
          <el-image :src="learning2" lazy></el-image>
          <div class="text-16px font-500 absolute top-230px w-full leading-28px">
            How to set up MetaMask wallet in Furion?
          </div>
        </div>

        <div class="relative">
          <el-image :src="learning3" lazy></el-image>
          <div class="text-16px font-500 absolute top-230px w-full leading-28px">
            How can different collections aggregate their liquidity?
          </div>
        </div>
      </div>
    </div>

    <div class="Orbitron font-700 text-32px flex items-center justify-center mb-30px">
      Furion NFT Pass
    </div>

    <div class="text-20px text-center mb-90px" style="color: rgba(252, 255, 253, 0.8)">
      words introducingFurion NFT Pass
    </div>

    <div class="block mx-auto mb-135px text-center">
      <el-image :src="cardbox" lazy></el-image>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  components: {},
  computed: {},
  data() {
    return {
      learning1: require("@/assets/images/home/learning1.png"),
      learning2: require("@/assets/images/home/learning2.png"),
      learning3: require("@/assets/images/home/learning3.png"),
      cardbox: require("@/assets/images/home/cardbox.png"),
    };
  },
  mounted() {},
  methods: {},
};
</script>
