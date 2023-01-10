<style lang="scss" scoped>
.foote-wrap {
  border-top: 1px solid rgba(76, 53, 139, 0.14);
}
.menu-item {
  @apply flex items-center text-15px font-700  text-[rgba(252,2553,253,0.7)] cursor-pointer;
}
</style>

<template>
  <div class="foote-wrap h-400px w-1/1 flex justify-center items-center bg-[#00173A]">
    <div class="w-1104px flex justify-between mt-0px">
      <div>
        <img class="cursor-pointer -ml-14px" src="@/assets/images/index/logo2.png" height="101" width="251">
        <p class="text-[rgba(252,255,253,0.8)] text-16px font-600 mt-30px">
          All-in-one NFT platform with better liquidity,
        </p>
        <p class="text-[rgba(252,255,253,0.8)] text-16px font-600 mt-10px">
          AMM solution, and price oracle
        </p>

      </div>
      <!--div class="flex relative left-50px">
        <ul v-for="(item, index) in menuList" :key="index">
          <li class="w-168px">
            <p class="text-[rgba(52,248,255,0.8)] font-600 text-16px mb-24px">
              {{ item.title }}
            </p>
            <ul>
              <li
                class="mb-14px text-16px text-[rgba(252,255,253,0.8)] hover:text-[#fff]"
                v-for="(item2, index2) in item.subMenu"
                :key="index2"
              >
                <nuxt-link :to="item2.url">{{ item2.title }}</nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </div-->
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminFooter",
  props: {},
  components: {},
  computed: {},
  data() {
    return {
      menuList: [
        {
          title: "Marketplace",
          subMenu: [
            {
              title: "Furion swap",
              url: "",
            },
            {
              title: "Mine $FUR",
              url: "",
            },
            {
              title: "Provide Liquidity",
              url: "",
            },
          ],
        },
        {
          title: "About",
          subMenu: [
            {
              title: "Help",
              url: "",
            },
            {
              title: "Partners",
              url: "",
            },
            {
              title: "Docs",
              url: "",
            },
            {
              title: "Platform status",
              url: "",
            },
          ],
        },
        {
          title: "Info",
          subMenu: [
            {
              title: "About us",
              url: "",
            },
            {
              title: "Privacy Policies",
              url: "",
            },
            {
              title: "Terms & Conditions",
              url: "",
            },
            {
              title: "Contact us",
              url: "",
            },
          ],
        },
      ],
    };
  },
  mounted() {},
  methods: {

  },
};
</script>
