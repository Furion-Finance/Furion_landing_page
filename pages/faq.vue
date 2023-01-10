<style lang="scss" scoped>
.bg {
  background: url('@/assets/images/bg.png') 100% 100% no-repeat;
  background-attachment: fixed;
}
.title {
  font-weight: 600;
  font-size: 28px;
  line-height: 28px;
  background: linear-gradient(273.69deg, #5df3c3 -12.38%, #fc64d9 96.07%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

.item {
  margin-bottom: 30px;
  position: relative;
  &::after {
    content: '';
    display: block;
    background: rgba(110, 101, 168, 0.08);
    position: absolute;
    left: -26px;
    width: 6px;
    top: 0;
    height: 100%;
  }
  .q {
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 5px;
    &::after {
      content: '';
      display: block;
      background: #6e65a8;
      position: absolute;
      left: -26px;
      width: 6px;
      top: 0;
      height: 16px;
    }
  }
  .a {
    color: rgba(154, 163, 173, 0.8);
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }
}
</style>

<template>
  <div class="px-100px pb-100px bg min-h-100vh -mt-124px">
    <div class="flex mb-30px pt-124px">
      <span class="title mr-15px">FAQs</span>
      <img src="@/assets/images/hao.svg" class="transform -translate-y-5px" />
    </div>

    <div class="mb-70px">
      <div class="item">
        <div class="q">What is NFT20 in simple terms?</div>
        <div class="a">
          Deposit any NFT on 1 of the
          <span class="text-[#F181DE]">pools</span> available (or create a pool)
          and get tokens for your NFT immediately.
        </div>
      </div>

      <div class="item">
        <div class="q">What to do with the Tokens I receive?</div>
        <div class="a">
          <div>
            Once you deposit NFTs in a pool and you get the equivalent tokens.
            you can do a few things:
          </div>
          <div>1. Speculate on them on Uniswap.</div>
          <div>
            2. Exchange the tokens for another NFT available in the pool.
          </div>
          <div>
            3. Use the tokens to bid on a higher guality nft on auction.
          </div>
          <div>
            4.Add liquidity for those tokens on Uniswap and stake the LP token
            under farm tab to earn daily $muse rewards.
          </div>
        </div>
      </div>

      <div class="item">
        <div class="q">I don't see my project, how to add it?</div>
        <div class="a">
          Anyone can create a pool for their NFT project on the assets page,
          follow this guide for an exact tutorial.
        </div>
      </div>

      <div class="item">
        <div class="q">Does NFT20 have fees?</div>
        <div class="a">
          Every time an NFT is deposited 100 tokens are minted, as of now 5% of
          those tokens goes to the nFT20 protocol and distributed to $MUsE token
          holders.
        </div>
      </div>

      <div class="item">
        <div class="q">Does NFT20 have a token?</div>
        <div class="a">
          NFT20 has the $MUSE token, it can be earned via farming and the
          utility is for it to be burned to get a share of the protocol fees or
          to participate in specific governance votes. read more about it on our
          tokenomics page .
        </div>
      </div>

      <div class="item">
        <div class="q">How does the NFT20 governance work?</div>
        <div class="a">
          NFT20 is governed by holders of the SMUSE token, however our
          governance policy is unique in the crypto world, read more about it
          here.
        </div>
      </div>
    </div>

    <div class="flex">
      <el-button type="primary" size="small" class="!mr-30px">
        Use NFT20
      </el-button>
      <el-button type="primary" size="small">Documentation</el-button>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ store, $axios, app, query }) {
    store.commit('update', ['admin.activeMenu', '/liquidity']);
  },
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

