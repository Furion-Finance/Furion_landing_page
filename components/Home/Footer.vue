<style lang="scss" scoped>
.links {
  a {
    margin-right: 13px;
  }
}

.nav ::v-deep {
  a {
    margin-bottom: 15px;
    height: 25px;
    display: inline-block;
    color: rgba(252, 255, 253, 0.8);
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>

<template>
  <div class="bg-[#190741] h-441px relative z-2" style="border-top: 1px solid #463967">
    <div class="w-1130px mx-auto flex justify-between items-center h-full">
      <div>
        <img class="cursor-pointer -ml-14px" src="@/assets/images/index/logo2.png" height="101" width="251">
        <p class="text-[rgba(252,255,253,0.8)] text-16px font-600 mt-30px">
          All-in-one NFT platform with better liquidity,
        </p>
        <p class="text-[rgba(252,255,253,0.8)] text-16px font-600 mt-10px">
          AMM solution, and price oracle
        </p>

      </div>
      <!-- <div>
        <img src="@/assets/images/home/logo2.png" alt="" />
        <div
          style="color: rgba(252, 255, 253, 0.8)"
          class="text-14px font-500 mt-33px leading-16px mb-10px"
        >
          All-in-one NFT marketplace with better liquidity,<br />
          AMM solution and price oracle
        </div>

        <div class="flex links">
          <a href="/">
            <img src="@/assets/images/home/discord.png" alt="" />
          </a>
          <a href="/">
            <img src="@/assets/images/home/twitter.png" alt="" />
          </a>
          <a href="/">
            <img src="@/assets/images/home/telegram.png" alt="" />
          </a>
          <a href="/">
            <img src="@/assets/images/home/medium.png" alt="" />
          </a>
        </div>
      </div> -->

      <!-- <div class="nav flex mt-30px">
        <div class="flex flex-col text-16px font-500 w-170px">
          <div style="color: rgba(52, 248, 255, 0.8)" class="mb-25px font-600">
            Marketplace
          </div>
          <nuxt-link to="/1">Furion swap</nuxt-link>
          <nuxt-link to="/1">Mine $FUR</nuxt-link>
          <nuxt-link to="/1">Provide Liquidity</nuxt-link>
        </div>
        <div class="flex flex-col text-16px font-500 w-170px">
          <div style="color: rgba(52, 248, 255, 0.8)" class="mb-25px font-600">About</div>
          <nuxt-link to="/1">Help</nuxt-link>
          <nuxt-link to="/1">Partners</nuxt-link>
          <nuxt-link to="/1">Docs</nuxt-link>
          <nuxt-link to="/1">Platform status</nuxt-link>
        </div>
        <div class="flex flex-col text-16px font-500">
          <div style="color: rgba(52, 248, 255, 0.8)" class="mb-25px font-600">Info</div>
          <nuxt-link to="/1">About us</nuxt-link>
          <nuxt-link to="/1">Privacy Policies</nuxt-link>
          <nuxt-link to="/1">Terms & Conditions</nuxt-link>
          <nuxt-link to="/1">Contact us</nuxt-link>
        </div>
      </div> -->
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
