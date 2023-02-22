<style lang="scss" scoped>
.bar {
  background: linear-gradient(
    98.73deg,
    rgba(29, 8, 56, 0.6) 11.09%,
    rgba(70, 31, 113, 0.6) 88.91%
  );
  border-radius: 20px;
  width: 1176px;
  height: 65px;
  color: rgba(252, 255, 253, 0.6);
  background: url(@/assets/images/home/bar.png) 100% 100% no-repeat;
  @apply mx-auto flex items-center pl-17px;
}

.bar2 {
  width: 367px;
  height: 163px;
  background: url(@/assets/images/home/bar2.png) 100% 100% no-repeat;
  color: rgba(252, 255, 253, 0.6);
  @apply flex items-center pl-17px;
}

.nbox {
  width: 29px;
  height: 29px;
  box-sizing: border-box;
  border: 2px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 16px;
  color: #ffffff;
  background: #e77dd8;
  border-radius: 50%;
}
</style>

<template>
  <div class="mb-135px">
    <div class="text-center mb-100px">
      <div class="font-700 text-32px mb-60px Orbitron">Furion Design</div>

      <div class="h-610px relative pl-115px flex Orbitron">
        <div class="flex flex-col relative">
          <img src="@/assets/images/home/design1.png" />
          <img src="@/assets/images/home/design2.png" />
          <div
            class="text-center w-188px font-700 text-16px text-[#E77DD8] absolute left-10px top-40px"
          >
            NFT Holder
          </div>
          <div
            class="text-center w-188px font-700 text-16px text-[#E77DD8] absolute left-10px top-265px"
          >
            NFT Buyer
          </div>
        </div>
        <div class="flex flex-col mx-30px pt-40px">
          <div class="flex items-center justify-center mb-10px">
            <div class="nbox mr-22px">1</div>
            <div class="font-900 text-14px">Lock or store NFT</div>
          </div>
          <img src="@/assets/images/home/arrow0.png" class="mb-10px" />
          <div class="flex items-center justify-center mb-130px">
            <div class="font-900 text-14px">Redeem or buy NFT</div>
          </div>
          <div class="flex items-center justify-center">
            <div class="font-900 text-14px">Buy</div>
          </div>
          <img src="@/assets/images/home/arrow0.png" class="my-10px" />
          <div class="flex items-center justify-center">
            <div class="font-900 text-14px">Sell</div>
          </div>
        </div>
        <div class="relative">
          <img src="@/assets/images/home/design3.png" />
          <div
            class="text-center w-188px font-700 text-16px text-[#E77DD8] absolute left-10px top-50px"
          >
            F-X token
          </div>
        </div>
        <div class="flex flex-col mx-20px pt-30px">
          <div class="flex items-center justify-center pl-10px mb-5px">
            <div class="nbox mr-22px">2</div>
            <div class="font-900 text-14px">Mint</div>
          </div>
          <img src="@/assets/images/home/arrow0.png" />
          <div class="flex items-center justify-center">
            <div class="font-900 text-14px mb-25px">Buy</div>
          </div>
          <div class="flex items-center justify-center pl-10px mb-5px">
            <div class="nbox mr-22px">3</div>
            <div class="font-900 text-14px">Liquidity Provider</div>
          </div>
          <img src="@/assets/images/home/arrow0.png" />
          <div class="flex items-center justify-center">
            <div class="font-900 text-14px mb-25px">Swap</div>
          </div>
          <div class="flex items-center justify-center pl-10px mb-5px">
            <div class="nbox mr-22px">4</div>
            <div class="font-900 text-14px">Borrowing</div>
          </div>
          <img src="@/assets/images/home/arrow0.png" />
          <div class="flex items-center justify-center">
            <div class="font-900 text-14px">Lending</div>
          </div>
        </div>
        <div class="flex flex-col pt-50px relative">
          <img src="@/assets/images/home/text0.png" />
          <img src="@/assets/images/home/text0.png" class="mt-35px" />
          <img src="@/assets/images/home/text0.png" class="mt-35px" />

          <div
            class="text-center w-full font-700 text-16px text-[#E77DD8] absolute left-0 top-70px"
          >
            FFT <br />
            (index token)
          </div>
          <div
            class="text-center w-full font-700 text-16px text-[#E77DD8] absolute left-0 top-194px"
          >
            Swap <br />
            (AMM DEX)
          </div>
          <div
            class="text-center w-full font-700 text-16px text-[#E77DD8] absolute left-0 top-320px"
          >
            Money <br />
            Market
          </div>
        </div>

        <div
          class="flex items-center font-700 text-16px text-[#E77DD8] absolute bottom-100px right-200px"
        >
          <img src="@/assets/images/home/d1.png" class="mr-8px" />
          FUR (Utility token)
          <div class="mx-25px">
            <div class="text-[#ffffff]">Stake</div>
            <img src="@/assets/images/home/arrow-s.png" />
          </div>
          veFUR (Governance Token)
          <div class="relative ml-8px">
            <img src="@/assets/images/home/button.png" />
            <div class="text-[#ffffff] absolute w-full left-16px top-12px">
              FUR as reward
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative">
      <img src="@/assets/images/home/left.png" alt="" />

      <div class="absolute top-75px w-full">
        <div class="text-center mb-100px">
          <div class="font-700 text-32px mb-30px Orbitron">Separate Pool</div>
          <div class="text-20px" style="color: rgba(252, 255, 253, 0.8)">
            Permissionless pools for different NFT collections
          </div>
        </div>

        <div
          class="block mx-auto w-1190px h-236px flex justify-between items-center relative"
        >
          <img src="@/assets/images/home/user.png" class="select-none" />
          <img src="@/assets/images/home/arrow1.png" class="select-none" />
          <img src="@/assets/images/home/pool.png" class="select-none" />

          <div
            class="Orbitron font-900 text-16px text-[#E77DD8] absolute top-33px left-152px"
          >
            USER
          </div>
          <div
            class="Orbitron font-900 text-16px text-[#E77DD8] absolute top-33px right-130px"
          >
            Seperate Pool
          </div>

          <div
            class="Orbitron font-900 text-16px text-[#ffffff] absolute top-23px left-490px flex items-center"
          >
            Store or Lock
            <el-image :src="p1" lazy class="mx-5px"></el-image>
            NFT
          </div>

          <div
            class="Orbitron font-900 text-16px text-[#ffffff] absolute top-168px left-520px flex items-center"
          >
            <el-image :src="p2" lazy class="mr-14px"></el-image>
            F - X Token
          </div>
        </div>

        <div class="bar">
          <div>
            NFT holders can choose to store orlock their NFTs into its relative
            separatepool to get liquidity.
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
    return {
      p1: require("@/assets/images/home/p1.png"),
      p2: require("@/assets/images/home/p2.png"),
    };
  },
  mounted() {},
  methods: {},
};
</script>
