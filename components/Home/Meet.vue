<style lang="scss" scoped>
.member:hover {
  transform: translateY(-10px);
  transition: all 0.6s;
}

.member::v-deep .el-image {
  width: 338px;
  height: 146px;
}

.avatar {
  width: 160px;
  text-align: center;
  font-family: "Orbitron";
  font-weight: 900;
  font-size: 18px;
  line-height: 23px;
  &::v-deep .el-image {
    width: 128px;
    height: 108px;
    margin-bottom: 15px;
  }
  &:hover {
    transform: scale(1.1);
    transition: all 0.6s;
  }
}
</style>

<template>
  <div class="mb-230px">
    <div class="Orbitron font-700 text-32px flex items-center justify-center mb-70px">
      Meet the Furion Family!
    </div>

    <div class="Orbitron font-700 text-24px text-[#FA6BE1] text-center mb-66px relative">
      Advisory Board

      <div
        class="overflow-hidden top-88px absolute center-x w-1423px pointer-events-none"
      >
        <img src="@/assets/images/home/circle.png" width="1440" class="select-none" />
      </div>
    </div>

    <div class="flex justify-center mb-66px">
      <div class="relative mr-88px member">
        <el-image :src="member1" lazy></el-image>
        <div class="absolute top-22px left-24px text-white text-14px">
          <div class="Orbitron text-18px font-900 mb-8px">Peter Yang</div>
          <div class="Orbitron text-[#E77DD8] font-900 mb-8px">Advisor</div>
          <div>MD, Fenbushi Capital</div>
        </div>
      </div>

      <div class="relative mr-88px member">
        <el-image :src="member2" lazy></el-image>
        <div class="absolute top-22px left-24px text-white text-14px">
          <div class="Orbitron text-18px font-900 mb-8px">Prof. Kani Chan</div>
          <div class="Orbitron text-[#E77DD8] font-900 mb-8px">Advisor</div>
          <div class="leading-16px">
            Director, Crypto-Fintech<br />
            Labs & Financial Math<br />
            Department
          </div>
        </div>
      </div>

      <div class="relative member">
        <el-image :src="member21" lazy></el-image>
        <div class="absolute top-22px left-24px text-white text-14px">
          <div class="Orbitron text-18px font-900 mb-8px">Vic</div>
          <div class="Orbitron text-[#E77DD8] font-900 mb-8px">Advisor</div>
          <div class="leading-16px">Advisor, Oasis network</div>
        </div>
      </div>
    </div>

    <div class="flex justify-center mb-62px">
      <div class="relative mr-88px member">
        <el-image :src="member3" lazy></el-image>
        <div class="absolute top-22px left-24px text-white text-14px">
          <div class="Orbitron text-18px font-900 mb-8px">Raccoon</div>
          <div class="Orbitron text-[#E77DD8] font-900 mb-8px">Advisor</div>
          <div class="leading-16px">Founder, Buji DAO</div>
        </div>
      </div>

      <div class="relative mr-88px member">
        <el-image :src="member4" lazy></el-image>
        <div class="absolute top-22px left-24px text-white text-14px">
          <div class="Orbitron text-18px font-900 mb-8px">Mr. Block</div>
          <div class="Orbitron text-[#E77DD8] font-900 mb-8px">Advisor</div>
        </div>
      </div>

      <div class="relative member">
        <el-image :src="member5" lazy></el-image>
        <div class="absolute top-22px left-24px text-white text-14px">
          <div class="Orbitron text-18px font-900 mb-8px">Chaoren</div>
          <div class="Orbitron text-[#E77DD8] font-900 mb-8px">Advisor</div>
          <div class="leading-16px">Head of community <br />manager and operation</div>
        </div>
      </div>
    </div>

    <div class="Orbitron font-700 text-24px text-[#FA6BE1] text-center mt-107px mb-97px">
      Supporting Communities
    </div>

    <div class="flex justify-around mb-50px">
      <div class="avatar">
        <el-image :src="avatar1" lazy></el-image>
        <div>Gametaverse</div>
      </div>

      <div class="avatar">
        <el-image :src="avatar2" lazy></el-image>
        <div>Zeeverse</div>
      </div>

      <div class="avatar">
        <el-image :src="avatar3" lazy></el-image>
        <div>Metabox</div>
      </div>

      <div class="avatar">
        <el-image :src="avatar4" lazy></el-image>
        <div>Apeiron</div>
      </div>
    </div>

    <div class="flex justify-around mb-50px">
      <div class="avatar">
        <el-image :src="avatar5" lazy></el-image>
        <div>Mimic Shhans</div>
      </div>

      <div class="avatar">
        <el-image :src="avatar6" lazy></el-image>
        <div>Catddle</div>
      </div>

      <div class="avatar">
        <el-image :src="avatar7" lazy></el-image>
        <div>Battle Saga</div>
      </div>

      <div class="avatar">
        <el-image :src="avatar12" lazy></el-image>
        <div>OKX</div>
      </div>
    </div>

    <div class="flex justify-around mb-30px">
      <div class="avatar">
        <el-image :src="avatar8" lazy></el-image>
        <div>MR. BLOCK</div>
      </div>

      <div class="avatar">
        <el-image :src="avatar9" lazy></el-image>
        <div>CryptoWilson</div>
      </div>

      <div class="avatar">
        <el-image :src="avatar10" lazy></el-image>
        <div>Investman Sky</div>
      </div>

      <div class="avatar">
        <el-image :src="avatar11" lazy></el-image>
        <div>Raccoon</div>
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
      member1: require("@/assets/images/home/member1.png"),
      member2: require("@/assets/images/home/member2.png"),
      member21: require("@/assets/images/home/member21.png"),
      member3: require("@/assets/images/home/member3.png"),
      member4: require("@/assets/images/home/member4.png"),
      member5: require("@/assets/images/home/member5.png"),
      avatar1: require("@/assets/images/home/avatar1.png"),
      avatar2: require("@/assets/images/home/avatar2.png"),
      avatar3: require("@/assets/images/home/avatar3.png"),
      avatar4: require("@/assets/images/home/avatar4.png"),
      avatar5: require("@/assets/images/home/avatar5.png"),
      avatar6: require("@/assets/images/home/avatar6.png"),
      avatar7: require("@/assets/images/home/avatar7.png"),
      avatar8: require("@/assets/images/home/avatar8.png"),
      avatar9: require("@/assets/images/home/avatar9.png"),
      avatar10: require("@/assets/images/home/avatar10.png"),
      avatar11: require("@/assets/images/home/avatar11.png"),
      avatar12: require("@/assets/images/home/avatar12.png"),
    };
  },
  mounted() {},
  methods: {},
};
</script>
