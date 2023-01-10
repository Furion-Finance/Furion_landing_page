<style lang="scss" scoped>
.cart-icon-wrap {
  @apply fixed left-45px top-200px rounded-1/2 w-52px h-52px rounded-16px  cursor-pointer flex items-center justify-center z-999 opacity-0;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 15.8261px;
  background-image: url(@/assets/images/index/cart_border.png);
  background-position: 1px 0px;
  background-repeat: no-repeat;
  background-size: 99%;
  &.isShow {
    @apply opacity-100;
  }
  &:hover {
    background-color: #fa6be1;
  }
  .count {
    position: absolute;
    background-color: #f56c6c;
    border-radius: 10px;
    color: #fff;
    display: inline-block;
    font-size: 12px;
    height: 18px;
    line-height: 18px;
    padding: 0 6px;
    text-align: center;
    white-space: nowrap;
    border: 1px solid #fff;
    top: -5px;
    right: -10px;
  }
}
</style>

<template>
  <div
    ref="cartIconRef"
    class="cart-icon-wrap"
    :class="{ isShow }"
    @mousedown="onMouseDown"
    @click="click"
    v-if="showInfo.showCart"
  >
    <img src="@/assets/images/cart3.svg" />
    <div class="count" v-if="cart.length > 1">{{ cart.length - 1 }}</div>
  </div>
</template>

<script>
import store from "store";
import { mapState } from 'vuex';
export default {
  name: "CartIcon",
  props: {},
  components: {},
  computed: {

    icon() {
      return this.$refs.cartIconRef;
    },
    cart() {
      return this.$store.state.user.cart;
    },
    ...mapState(['showInfo']),
  },
  data() {
    return {
      x: 0,
      y: 0,
      startX: 0,
      startY: 0,
      isShow: false,
      isMove: false,
    };
  },
  mounted() {
    try {
      this.getPos();
    } catch (error) {
      this.$router.push('/');
      console.error(error);
    }
  },
  methods: {
    getPos() {
      const pos = store.get("furionPos");
      if (pos) {
        this.x = pos.x != null ? window.innerWidth * pos.x : window.innerWidth - 52 - 45;
        this.y =
          pos.y != null ? window.innerHeight * pos.y : window.innerHeight - 52 - 75;
      } else {
        this.x = window.innerWidth - 52 - 45;
        this.y = window.innerHeight - 52 - 75;
      }
      this.icon.style.left = this.x + "px";
      this.icon.style.top = this.y + "px";
      this.isShow = true;
    },
    click() {
      if (!this.isMove) {
        this.$router.push("/cart");
      }
    },
    onMouseDown(event) {
      const box = this.icon;
      event.preventDefault();
      // console.log(e.pageX, e.pageY);
      let innerX = event.clientX - box.offsetLeft;
      let innerY = event.clientY - box.offsetTop;

      const onMouseMove = (event) => {
        this.isMove = true;
        box.style.left = event.clientX - innerX + "px";
        box.style.top = event.clientY - innerY + "px";

        if (box.offsetLeft < 0) {
          box.style.left = 0 + "px";
        }

        if (box.offsetTop < 0) {
          box.style.top = 0 + "px";
        }
        // console.log(box.offsetLeft + box.offsetWidth, window.innerWidth);
        if (box.offsetLeft + box.offsetWidth > window.innerWidth) {
          box.style.left = window.innerWidth - box.offsetWidth + "px";
        }

        if (box.offsetTop + box.offsetHeight > window.innerHeight) {
          box.style.top = window.innerHeight - box.offsetHeight + "px";
        }
      };
      const onMouseUp = (event) => {
        setTimeout(() => {
          this.isMove = false;
        }, 100);
        // // console.log('up',e.pageX);
        const pos = {
          x: box.offsetLeft / window.innerWidth,
          y: box.offsetTop / window.innerHeight,
        };
        console.log(pos);
        // this.x = e.pageX - diffX;
        // this.y = e.pageY - diffY;
        // // console.log(pos.x, pos.y);
        store.set("furionPos", pos);
        document.documentElement.removeEventListener("mousemove", onMouseMove);
        document.documentElement.removeEventListener("mouseup", onMouseUp);
      };

      document.documentElement.addEventListener("mousemove", onMouseMove, false);
      document.documentElement.addEventListener("mouseup", onMouseUp, false);
    },
  },
};
</script>
