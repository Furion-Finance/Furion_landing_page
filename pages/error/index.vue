<style lang="scss" scoped>
.go {
  background: linear-gradient(273.69deg, #5df3c3 -12.38%, #fc64d9 96.07%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 600;
  font-size: 16px;
}

.clear-button {
  margin-left: 60%;
}

.tip {
  width: 381px;
  height: 28px;
  background: #36375e;
  opacity: 0.75;
  border-radius: 3px;
  @apply flex items-center justify-center;
}

.bar {
  background: linear-gradient(
    180deg,
    rgba(193, 99, 226, 0.162) 0%,
    rgba(51, 53, 114, 0.3) 113.94%
  );
  color: rgba(154, 163, 173, 0.8);
  font-weight: 400;
  font-size: 14px;
}

.line {
  background: rgba(255, 255, 255, 0.08);
  width: 1px;
  height: 18px;
  margin: 0 20px;
}

.box {
  position: relative;
  display: inline-block;
  width: 910px;
  background: linear-gradient(
    0,
    rgba(250, 107, 225, 0.4) 17.23%,
    rgba(8, 19, 50, 0.4) 100%
  );
  border-radius: 30px;
}

.box-bg {
  position: absolute;
  // background: url("~@/assets/images/cart-bg.png") no-repeat;
  width: 100%;
  height: 225px;
  bottom: 0;
  background-size: 100% 100%;
}
.custom-btn2 {
  font-size: 16px;
  width: 210px;
  height: 56px;
  line-height: 56px;
}
.text2{
  /* description */

  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;


  color: rgba(252, 255, 253, 0.5);
}
.item {
  float: left;
  width: 212px;
  height: 284px;
  background: #172548;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  cursor: pointer;
  box-sizing: border-box;
  margin-right: 12px;
  margin-bottom: 15px;
  position: relative;

  &:hover .el-image {
    transition: all 0.3s;
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  }
}

.cart {
  max-width: 910px;
}
</style>

<template>
  <div class="!w-full pb-180px">

    
    <div class="pt-80px text-center mt-50px">
      <img src="@/assets/images/error/404.png"/>
    </div>
    <div class="pt-80px text-30px font-700 text-center">
      #404 NotFound
    </div>
    <div class="text2 pt-30px text-30px font-700 text-center">
      Sorry, some error occurred. Please try again!
    </div>

    <div
      class="flex justify-center mt-40px"
      >
      <div 
          class="custom-btn2" 
          @click="clickback()"
        >
          Back to home
        </div>
    </div> 
  </div>
</template>

<script>
import {
  _compareInt,
} from "@/utils/common";

export default {
  props: {},
  components: {},
  computed: {},
  data() {
    return {
    };
  },
  async mounted() {},
  methods: {
    clickback() {
      this.$router.push("/");
    },
  },
};
</script>
