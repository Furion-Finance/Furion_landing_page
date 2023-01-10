<style lang="scss" scoped>
.member:hover {
  transform: translateY(-10px);
  transition: all 0.6s;
}

.avatar {
  width: 160px;
  text-align: center;
  font-family: "Orbitron";
  font-weight: 900;
  font-size: 18px;
  line-height: 23px;
  img {
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

    <!-- <div class="flex justify-center mb-66px">
      <div class="relative mr-88px member">
        <img src="@/assets/images/home/member1.png" alt="" />
        <div class="absolute top-22px left-24px text-white text-14px">
          <div class="Orbitron text-18px font-900 mb-8px">Peter Yang</div>
          <div class="Orbitron text-[#E77DD8] font-900 mb-8px">Advisor</div>
          <div>MD, Fenbushi Capital</div>
        </div>
      </div>

      <div class="relative member">
        <img src="@/assets/images/home/member2.png" alt="" />
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
    </div> -->

    <div class="flex justify-center mb-62px">
      <div class="relative mr-88px member">
        <img src="@/assets/images/home/member3.png" alt="" />
        <div class="absolute top-22px left-24px text-white text-14px">
          <div class="Orbitron text-18px font-900 mb-8px">Raccoon</div>
          <div class="Orbitron text-[#E77DD8] font-900 mb-8px">Advisor</div>
          <div class="leading-16px">Founder, Buji DAO</div>
        </div>
      </div>

      <div class="relative mr-88px member">
        <img src="@/assets/images/home/member4.png" alt="" />
        <div class="absolute top-22px left-24px text-white text-14px">
          <div class="Orbitron text-18px font-900 mb-8px">Mr. Block</div>
          <div class="Orbitron text-[#E77DD8] font-900 mb-8px">Advisor</div>
        </div>
      </div>

      <div class="relative member">
        <img src="@/assets/images/home/member5.png" alt="" />
        <div class="absolute top-22px left-24px text-white text-14px">
          <div class="Orbitron text-18px font-900 mb-8px">Chaoren</div>
          <div class="Orbitron text-[#E77DD8] font-900 mb-8px">Advisor</div>
          <div class="leading-16px">Head of community <br />manager and operation</div>
        </div>
      </div>
    </div>

    <div class="flex justify-center mb-62px">
      <div class="relative mr-88px member">
        <img src="@/assets/images/home/member1.png" alt="" />
        <div class="absolute top-22px left-24px text-white text-14px">
          <div class="Orbitron text-18px font-900 mb-8px">Peter Yang</div>
          <div class="Orbitron text-[#E77DD8] font-900 mb-8px">Advisor</div>
          <div>MD, Fenbushi Capital</div>
        </div>
      </div>

      <div class="relative mr-88px member">
        <img src="@/assets/images/home/member2.png" alt="" />
        <div class="absolute top-22px left-24px text-white text-14px">
          <div class="Orbitron text-18px font-900 mb-8px">Prof. Kani Chan</div>
          <div class="Orbitron text-[#E77DD8] font-900 mb-8px">Advisor</div>
          <div>
            Director, Crypto-Fintech<br />
            Labs & Financial Math<br />
            Department
          </div>
        </div>
      </div>

      <div class="relative member">
        <img src="@/assets/images/home/member6.png" alt="" />
        <div class="absolute top-22px left-24px text-white text-14px">
          <div class="Orbitron text-18px font-900 mb-8px">Vic Talk</div>
          <div class="Orbitron text-[#E77DD8] font-900 mb-8px">Advisor</div>
          <div class="leading-16px">Advisor, Oasis network</div>
        </div>
      </div>
    </div>

    <div class="Orbitron font-700 text-24px text-[#FA6BE1] text-center mt-107px mb-97px">
      Supporting Communities
    </div>

    <div class="flex justify-around mb-60px">
      <div class="avatar">
        <img src="@/assets/images/home/avatar1.png" alt="" />
        <div>Gametaverse</div>
      </div>

      <div class="avatar">
        <img src="@/assets/images/home/avatar2.png" alt="" />
        <div>Zeeverse</div>
      </div>

      <div class="avatar">
        <img src="@/assets/images/home/avatar3.png" alt="" />
        <div>Metabox</div>
      </div>

      <div class="avatar">
        <img src="@/assets/images/home/avatar4.png" alt="" />
        <div>Apeiron</div>
      </div>
    </div>

    <div class="flex justify-around mb-60px">
      <div class="avatar">
        <img src="@/assets/images/home/avatar5.png" alt="" />
        <div>Mimic Shhans</div>
      </div>

      <div class="avatar">
        <img src="@/assets/images/home/avatar6.png" alt="" />
        <div>Catddle</div>
      </div>

      <div class="avatar">
        <img src="@/assets/images/home/avatar7.png" alt="" />
        <div>Battle Saga</div>
      </div>

      <div class="avatar">
        <img src="@/assets/images/home/avatar12.png" alt="" />
        <div>OKX</div>
      </div>
    </div>

    <!-- <div class="flex justify-around mb-30px">
      <div class="avatar">
        <img src="@/assets/images/home/avatar5.png" alt="" />
        <div>Mimic Shhans</div>
      </div>

      <div class="avatar mx-200px">
        <img src="@/assets/images/home/avatar6.png" alt="" />
        <div>Catddle</div>
      </div>

      <div class="avatar">
        <img src="@/assets/images/home/avatar7.png" alt="" />
        <div>Battle Saga</div>
      </div>

      <div class="avatar">
        <img src="@/assets/images/home/avatar7.png" alt="" />
        <div>Battle Saga</div>
      </div>
    </div> -->

    <div class="flex justify-around mb-30px">
      <div class="avatar">
        <img src="@/assets/images/home/avatar8.png" alt="" />
        <div>MR. BLOCK</div>
      </div>

      <div class="avatar">
        <img src="@/assets/images/home/avatar9.png" alt="" />
        <div>CryptoWilson</div>
      </div>

      <div class="avatar">
        <img src="@/assets/images/home/avatar10.png" alt="" />
        <div>Investman Sky</div>
      </div>

      <div class="avatar">
        <img src="@/assets/images/home/avatar11.png" alt="" />
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
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
