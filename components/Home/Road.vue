<style lang="scss" scoped>
li {
  position: relative;
  padding-left: 22px;
  color: rgba(255, 255, 255, 0.6);
  &:before {
    content: "•";
    position: absolute;
    left: 4px;
  }
}
</style>

<template>
  <div class="mb-135px">
    <div class="Orbitron font-700 text-32px flex items-center justify-center mb-76px">
      On the Road
    </div>

    <div class="relative w-1185px mx-auto">
      <el-image :src="road" lazy class="select-none"></el-image>

      <div class="absolute top-172px left-23px">
        <div class="Orbitron text-white font-900 text-18px mb-10px">Nov, 2022</div>
        <div class="Orbitron text-[#E77DD8] font-900 text-24px leading-30px mb-5px">
          Testnet Launch
        </div>
        <ul class="leading-24px text-16px">
          <li>NFT Pass reveal</li>
          <li>
            Launch NFT Pool, Swap and<br />
            Money Market Features
          </li>
        </ul>
      </div>

      <div class="absolute top-462px left-23px">
        <div class="Orbitron text-white font-900 text-18px mb-10px">Q1, 2023</div>
        <div class="Orbitron text-[#E77DD8] font-900 text-24px leading-30px mb-5px">
          Furion Pricing Oracle <br />
          Launch
        </div>
        <ul class="leading-24px text-16px">
          <li>Fair pricing for all NFTs</li>
          <li>
            Decentralized price feed for<br />
            community
          </li>
        </ul>
      </div>

      <div class="absolute top-220px left-704px">
        <div class="Orbitron text-white font-900 text-18px mb-10px">Dec, 2022</div>
        <div class="Orbitron text-[#E77DD8] font-900 text-24px leading-30px mb-5px">
          Mainnet Launch
        </div>
        <ul class="leading-24px text-16px">
          <li>Launch Permissionless NFTS</li>
          <li>Launch Incentive program</li>
        </ul>
      </div>

      <div class="absolute top-510px left-704px">
        <div class="Orbitron text-white font-900 text-18px mb-10px">Nov, 2022</div>
        <div class="Orbitron text-[#E77DD8] font-900 text-24px leading-30px mb-5px">
          Aggregrated Pool <br />
          Launch
        </div>
        <ul class="leading-24px text-16px">
          <li>Concentrated liquidity for all NFTs</li>
          <li>Stabilized Borrowing / Lending</li>
        </ul>
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
      road: require("@/assets/images/home/road.png"),
    };
  },
  mounted() {},
  methods: {},
};
</script>
