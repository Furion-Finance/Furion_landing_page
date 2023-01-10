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
</style>

<template>
  <div class="mb-135px">
    <div class="relative">
      <img src="@/assets/images/home/left.png" alt="" />

      <div class="absolute top-75px w-full">
        <div class="text-center mb-100px">
          <div class="font-700 text-32px mb-30px Orbitron">Separate Pool</div>
          <div class="text-20px" style="color: rgba(252, 255, 253, 0.8)">
            Permissionless pools for different NFT collections
          </div>
        </div>

        <img src="@/assets/images/home/detail1.png" class="block mx-auto" />

        <div class="bar">
          <div>
            NFT holders can store or lock their NFTs into their corresponding separate pool to get full or partial liquidity correspondingly. 
          </div>
        </div>
      </div>
    </div>

    <div class="relative -mt-4px">
      <img src="@/assets/images/home/right.png" alt="" />

      <div class="absolute top-60px w-full">
        <div class="text-center mb-90px">
          <div class="font-700 text-32px mb-30px Orbitron">Aggregate Pool</div>
          <div class="text-20px" style="color: rgba(252, 255, 253, 0.8)">
            Ground-breaking liquidity aggregating system that maximize NFT liquidity and
            generate market-driven index tokens
          </div>
        </div>

        <img src="@/assets/images/home/detail2.png" class="block mx-auto mb-30px" />

        <div class="flex pl-123px">
          <div class="bar2 mr-40px">
            <div class="text-17px leading-30px" style="letter-spacing: -0.05em">
              After obtaining F-X tokens from storing / locking NFTs, user can choose to stake their F-X tokens in aggregate pools to mint FFT tokens.
            </div>
          </div>
          <div class="bar2">
            <div class="text-17px leading-30px" style="letter-spacing: -0.05em">
              FFT-A tokens represent the value of all F-X tokens staked in aggregate pool-A, which is similar to the index of NFT collections in aggregate pool-A.
            </div>
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
