<style lang="scss" scoped>
.header-wrap {
  background: linear-gradient(
    180deg,
    rgba(193, 99, 226, 0.162) 0%,
    rgba(51, 53, 114, 0.3) 113.94%
  );
  border-bottom: 1px solid rgba(76, 53, 139, 0.14);
}
.menu-item {
  @apply flex items-center justify-center text-15px font-700  text-[rgba(252,2553,253,0.7)] cursor-pointer relative h-1/1;
  &.active,
  &:hover {
    color: #f181de;
    &::after {
      content: "";
      width: 75px;
      height: 20px;
      background: rgba(255, 101, 222, 0.5);
      filter: blur(30px);
      position: absolute;
      top: 30px;
    }
  }
  .highlight {
    // left: -50%;
  }
  .submenu-list-wrap {
    width: 162px;
    height: 90px;
    background: url(@/assets/images/index/menu_bg.png);
    background-position: -20px -11px;
    position: absolute;
    top: 70px;
    left: -5px;
    transition: opacity 0.4s ease-in;
    padding: 15px 20px;
    z-index: 99;
    visibility: hidden;
    opacity: 0;
    box-sizing: border-box;
    // visibility: visible;
    // opacity: 1;
    .submenu-item {
      font-weight: 600;
      font-size: 14px;
      line-height: 28px;
      color: rgba(252, 255, 253, 0.7);
      &:hover {
        color: #fff;
      }
      a {
        display: block;
      }
    }
  }
  &.has-child {
    &:hover {
      .submenu-list-wrap {
        visibility: visible;
        opacity: 1;
      }
    }
  }
}
.search-wrap ::v-deep {
  border-radius: 8px;
  .search-icon {
    margin-top: 8px;
    margin-left: 15px;
  }
  .el-input__inner {
    border-color: transparent;
    background: rgba(255, 255, 255, 0.1);
    padding-left: 54px;
    color: rgba(252, 2553, 253, 0.7);
    border-radius: 8px;
    &::-webkit-input-placeholder {
      color: rgba(255, 255, 255, 0.3);
      font-size: 13px;
    }
  }
}
</style>

<template>
  <div
    class="header-wrap w-1/1 h-80px flex justify-center items-center fixed left-0 right-0 top-0 z-100"
  >
    <div class="w-1176px h-1/1 flex justify-center items-center justify-between">
      <div class="flex items-center h-1/1">
        <img
          class="cursor-pointer"
          src="@/assets/images/home/logo.png"
          @click="$router.push('/')"
        />
        <ul class="flex items-center h-1/1">
          <li
            class="menu-item ml-50px"
            :class="{ active: activeMenu === '/explore' }"
            @click="$router.push('/explore')"
          >
            <span>Explore</span>
          </li>
          <li
            class="menu-item ml-40px"
            :class="{ active: activeMenu === '/collection' }"
            @click="$router.push('/collection/separate_pools')"
          >
            <span>Collection</span>
          </li>
          <li
            class="menu-item has-child ml-30px"
            :class="{ active: activeMenu === '/liquidity' }"
          >
            <span>Liquidity</span>
            <img class="ml-7px" src="@/assets/images/index/arrow.svg" />
            <div class="submenu-list-wrap">
              <ul class="submenu-list">
                <li class="submenu-item">
                  <nuxt-link to="/liquidity/borrow">Borrow & Lendind</nuxt-link>
                </li>
                <li class="submenu-item">
                  <nuxt-link to="/liquidity/swap">Furine Swap</nuxt-link>
                </li>
              </ul>
              <div class="shadow-top"></div>
            </div>
          </li>
          <li
            class="menu-item has-child ml-38px"
            :class="{ active: activeMenu === '/mining' }"
          >
            <span>Mining</span>
            <img class="ml-7px" src="@/assets/images/index/arrow.svg" />
            <div class="submenu-list-wrap">
              <ul class="submenu-list">
                <li class="submenu-item">
                  <nuxt-link to="/mining/token_farming">Token farming</nuxt-link>
                </li>
                <li class="submenu-item">
                  <nuxt-link to="/mining/staking">Staking</nuxt-link>
                </li>
              </ul>
              <div class="shadow-top"></div>
            </div>
          </li>
          <li
            class="menu-item ml-50px"
            :class="{ active: activeMenu === '/dashboard' }"
            @click="$router.push('/dashboard')"
          >
            <span>Dashboard</span>
          </li>
          <li
            class="menu-item has-child ml-36px"
            :class="{ active: activeMenu === '/more' }"
          >
            <span>More</span>
            <img class="ml-7px" src="@/assets/images/index/arrow.svg" />
            <div class="submenu-list-wrap">
              <ul class="submenu-list">
                <li class="submenu-item">
                  <nuxt-link to="/comingsoon">Coming soon</nuxt-link>
                </li>
                <li class="submenu-item">
                  <nuxt-link to="/governmance">Governmance</nuxt-link>
                </li>
              </ul>
              <div class="shadow-top"></div>
            </div>
          </li>
        </ul>
      </div>
      <div class="flex items-center">
        <el-input
          style="width: 170px"
          v-if="showShotSearch"
          clearable
          placeholder="Search"
          class="search-wrap mr-25px"
          v-model="searchKey"
          @keyup.enter.native="onSearch"
        >
          <img class="search-icon" src="@/assets/images/index/search.svg" slot="prefix" />
        </el-input>
        <el-input
          style="width: 300px"
          v-if="showLongSearch"
          clearable
          placeholder="Search by token or pair"
          class="search-wrap mr-25px"
          v-model="searchKey"
          @keyup.enter.native="onSearch"
        >
          <img class="search-icon" src="@/assets/images/index/search.svg" slot="prefix" />
        </el-input>
        <el-input
          style="width: 300px"
          v-if="showLongSearch2"
          clearable
          placeholder="search by name, symbol, address"
          class="search-wrap mr-25px"
          v-model="searchKey"
          @keyup.enter.native="onSearch"
        >
          <img class="search-icon" src="@/assets/images/index/search.svg" slot="prefix" />
        </el-input>

        <DrawerAccount></DrawerAccount>
        <DrawerWallet class="ml-20px"></DrawerWallet>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  components: {},
  computed: {
    showShotSearch() {
      return ["/collection/separate_pools", "/collection/aggregated_pools"].includes(
        this.$route.path
      );
    },
    showLongSearch() {
      return ["/liquidity/borrow_list"].includes(this.$route.path);
    },
    showLongSearch2() {
      return ["/mining/token_farming"].includes(this.$route.path);
    },
    activeMenu() {
      return this.$store.state.admin.activeMenu;
    },
  },
  data() {
    return {
      searchKey: "",
    };
  },
  mounted() {},
  methods: {
    onSearch() {},
  },
};
</script>
