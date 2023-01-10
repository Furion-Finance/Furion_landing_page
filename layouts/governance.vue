<style lang="scss" scoped>
.light-left {
  position: fixed;
  left: 0;
  width: 800px;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(193, 99, 226, 0.162) 0%,
    rgba(51, 53, 114, 0.3) 113.94%
  );
  height: 80px;
  z-index: 100;
  .box {
    height: 100%;
    @apply flex items-center justify-between;
  }
}

.title {
  font-weight: 600;
  font-size: 24px;
  background: linear-gradient(273.69deg, #5df3c3 -12.38%, #fc64d9 96.07%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

.address {
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  height: 34px;
  padding: 4px 15px;
  margin-right: 16px;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  color: rgba(252, 255, 253, 0.7);
}

.aside {
  background: linear-gradient(
    180deg,
    rgba(51, 53, 114, 0) 0%,
    rgba(51, 53, 114, 0.12) 94.81%
  );
  border-radius: 12px;
  padding-top: 40px;
}

::v-deep {
  .el-menu-item,
  .el-submenu__title {
    height: 44px;
    line-height: 44px;
    border-radius: 5px;
    font-size: 16px;
    margin-bottom: 10px;
    padding-left: 30px !important;
    &:hover {
      background: inherit !important;
    }
  }

  .el-menu-item.is-active {
    color: #f181de;
    font-weight: 700;
    background: linear-gradient(
      90deg,
      rgba(110, 101, 168, 0.2) 0%,
      rgba(110, 101, 168, 0) 100%
    ) !important;
    position: relative;
    &::after {
      content: " ";
      display: block;
      position: absolute;
      width: 2px;
      top: 0;
      left: 0;
      height: 100%;
      background: linear-gradient(0deg, #f181de, #f181de);
    }
  }

  .el-submenu__title .el-submenu__icon-arrow {
    // transform: rotateZ(0) !important;
    right: 10px !important;
    font-weight: bold;
    margin-top: -6px;
  }

  .is-active > {
    .icon {
      display: none;
    }
    .icon-active {
      display: inline-block;
    }
  }
}
</style>

<template>
  <div>
    <div class="min-h-100vh bg-[#01132e] text-[#FCFFFD] relative">
      <img
        src="@/assets/images/light_left_bg.png"
        class="light-left pointer-events-none"
      />

      <div class="header">
        <div class="box w-1200px mx-auto">
          <div class="title">snapshot</div>
          <div class="flex">
            <div class="address flex items-center">
              <img src="@/assets/images/icon_eth.png" width="18" class="mr-6px" />
              <div>0xA7A8...7A36</div>
            </div>
            <img src="@/assets/images/ring.svg" class="cursor-pointer" />
          </div>
        </div>
      </div>

      <div class="w-240px fixed center-x top-150px bottom-40px aside -ml-550px">
        <div class="text-center mb-80px">
          <img src="@/assets/images/logo_big.png" class="mb-15px cursor-pointer" @click="$router.push('/')"/>
          <div class="text-13px font-500 text-[#9AA3AD] mb-35px">
            <span class="font-600 text-[#B9C5D2]">250</span>
            members
          </div>
          <img src="@/assets/images/join.svg" class="cursor-pointer hover:opacity-80" />
        </div>

        <el-menu
          class="!border-0 flex-1 !mr-0"
          :default-active="activeMenu"
          background-color="transparent"
          text-color="#86898C"
          router
        >
          <el-menu-item index="/governance">
            <span>Proposal</span>
          </el-menu-item>

          <el-menu-item index="/governance/">
            <span>New proposal</span>
          </el-menu-item>

          <el-menu-item index="/governance/">
            <span>Entrust</span>
          </el-menu-item>

          <el-menu-item index="/governance/">
            <span>About</span>
          </el-menu-item>
        </el-menu>
      </div>

      <div class="pt-80px">
        <nuxt class="min-h-100vh relative w-1000px mx-auto left-100px" />
      </div>
    </div>

  </div>
</template>

<script>
export default {
  head: {
    meta: [
      {
        hid: "viewport",
        name: "viewport",
        content: "width=1440,user-scalable=no",
      },
    ],
  },
  computed: {},
  data() {
    return {
      activeMenu: "/governance",
    };
  },
  methods: {},
  mounted() {},
};
</script>
