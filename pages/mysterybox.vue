<style lang="scss" scoped>
.back {
  width: 214px;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  background: linear-gradient(273.69deg, #5df3c3 -12.38%, #fc64d9 96.07%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

.tab {
  position: absolute;
  top: 60px;
  right: 0;
  transform: translateX(98%);
  color: #667181;
  font-weight: 500;
  font-size: 18px;
  .item {
    background: linear-gradient(
      180deg,
      rgba(51, 53, 114, 0.16) 11.11%,
      rgba(51, 53, 114, 0.2) 100%
    );
    border: 0.8px solid rgba(255, 255, 255, 0.1);
    width: 120px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    cursor: pointer;
    &.active {
      width: 140px;
      background: linear-gradient(180deg, #333572 11.11%, #333572 100%);
      border: 0.8px solid rgba(255, 255, 255, 0.1);
      color: #ffffff;
    }
  }
}

.title {
  width: 214px;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  background: linear-gradient(273.69deg, #5df3c3 -12.38%, #fc64d9 96.07%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

.color-text {
  width: 197px;
  background: linear-gradient(273.69deg, #5df3c3 -12.38%, #fc64d9 96.07%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

.info {
  border-radius: 20px;
  border: 2px solid #333572;
  background: #122243;
  .item {
    height: 56px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.7);
    border-bottom: 1px solid #25285c;
    @apply flex justify-between  items-center text-16px font-500 px-22px;
  }
}

.b-btn {
  width: 183px;
  height: 48px;
  font-weight: 700;
  font-size: 14px;
  background: url(@/assets/images/miserybox/btn.png);
  @apply flex items-center justify-center cursor-pointer uppercase hover:opacity-80;
}

// 镂空
.b-btn-2 {
  @extend .b-btn;
  background: url(@/assets/images/miserybox/btn2.png);
}

.s-btn {
  width: 84px;
  height: 32px;
  font-weight: 700;
  font-size: 13px;
  background: url(@/assets/images/miserybox/s-btn.png);
  color: #fcfffd;
  text-shadow: 1px 1px 0px #fa6be1;
  filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.4));
  @apply flex items-center justify-center cursor-pointer uppercase ml-5px;
}

.completion {
  width: 100px;
  text-shadow: none;
  border: 1.5px solid #364666;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25), inset 0px 0px 1.5px rgba(0, 0, 0, 0.8);
  border-radius: 6px;
  cursor: unset;
  margin-right: 10px;
}

// 绿色
.finished {
  @extend .s-btn;
  @extend .completion;
  background: #50CD7E;
}

.unfinished {
  @extend .s-btn;
  @extend .completion;
  background: #D35D64;
}

.claimed {
  @extend .s-btn;
  filter: grayscale(80%);
  cursor: unset;

  &:hover {
    opacity: 0.8;
  }
}

.claimable {
  @extend .s-btn;

  &:hover {
    opacity: 0.8;
  }
}

.unclaimable {
  @extend .s-btn;
  filter: grayscale(100%);
  cursor: not-allowed;

  &:hover {
    opacity: 0.8;
  }
}

// 浅绿
.s-btn-3 {
  @extend .s-btn;
  text-shadow: none;
  background: url(@/assets/images/miserybox/s-btn-3.png);
}

// 置灰
.s-btn-4 {
  @extend .s-btn;
  text-shadow: none;
  color: rgba(252, 255, 253, 0.5);
  background: url(@/assets/images/miserybox/s-btn.png);
  @apply hover:opacity-100;
  cursor: not-allowed;
}

.box {
  background: rgba(52, 62, 115, 0.12);
  box-shadow: 0px 1px 9px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  @apply flex items-center justify-center;
}

.box2 {
  background: rgba(52, 62, 115, 0.12);
  box-shadow: 0px 1px 9px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
}
.box3 {
  box-sizing: border-box;

  position: absolute;
  width: 800px;
  height: 445px;

  background: linear-gradient(180deg, #18254B 0%, #151F43 138.44%);
  border: 7px solid rgba(255, 255, 255, 0.05);
  border-radius: 35px;
}

.reward {
  color: rgba(252, 255, 253, 0.7);
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  .item {
    width: 140px;
    text-align: center;
  }
  .card {
    height: 140px;
    width: 140px;
    background: url(@/assets/images/miserybox/card.png);
    @apply flex items-center justify-center mb-15px;
  }
}

.custom-btn3 {
  margin: auto;
  font-size: 16px;
  width: 177px;
  height: 42px;
  line-height: 40px;
}
.custom-btn1 {
  margin: auto;
  filter: grayscale(100%);
}

.code-input {
  width: 150px;
  height: 45px;
  padding: 0 15px;
  border-radius: 8px 0 0 8px;
  background: #1e2442;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
}

.code-button {
  color: #1e2442;
  text-shadow: 0.5px 0.5px black;
  height: 45px;
  font-size: 16px;
  border-radius: 0 8px 8px 0;
  background: rgba(250, 107, 225, 0.8);
  transition: all 0.2s;

  &:hover {
    background: rgba(250, 107, 225);
  }
}
</style>

<template>
  <div class="!w-full pt-190px pb-100px">
    <div
      @click="$router.push('/')"
      class="absolute left-60px cursor-pointer top-120px hover:opacity-80 flex items-center"
    >
      <img src="@/assets/images/icon_back.svg" />
      <div class="back ml-23px">Back to Home</div>
    </div>

    <div class="w-1088px h-643px mx-auto flex justify-between relative">
      <div class="tab">
        <div class="item">NFT</div>
        <div class="item">Badges</div>
        <div class="item active">Mystery Box</div>
      </div>

      <div class="w-469px">
        <div class="relative mb-20px">
          <img src="@/assets/images/miserybox/box.gif" class="absolute center" />
          <img src="@/assets/images/miserybox/pet_box.png" alt="" />
        </div>

        <div class="relative">
          <img src="@/assets/images/miserybox/text_box.png" alt="" />
          <div class="absolute inset-0 flex items-center justify-center">
            <!--img src="@/assets/images/miserybox/lock.svg" class="mr-22px" /-->
            <div class="text-22px font-600">Finish Tasks to Earn Mystery Boxes!</div>
          </div>
        </div>
      </div>

      <div class="relative">
        <img src="@/assets/images/miserybox/info_box.png" alt="" />
        <div class="absolute inset-0 pt-35px px-25px">
          <div class="title pl-12px mb-18px">Testnet Awards</div>

          <div class="mb-10px info">
            <div class="item" style="border-bottom: 2px solid #333572">
              <div class="text-white text-17px font-600">Tasks</div>
            </div>
            <div class="item">
              <div class="flex items-center">
                <div class="mr-5px">store</div>
                <el-popover
                  placement="bottom"
                  title=""
                  trigger="hover"
                  :visible-arrow="false"
                  popper-class="el-tip"
                >
                  <div class="text-center text-[#0B1A3B]">
                    <div>Store NFT to aggregate pool to get FFT</div>
                  </div>
                  <img
                    src="@/assets/images/miserybox/q.png"
                    class="cursor-pointer"
                    slot="reference"
                  />
                </el-popover>
              </div>
              <div class="flex items-center">
                <div :class="{ 'finished': stored, 'unfinished': !stored }">
                  {{ stored ? "FINISHED" : "UNFINISHED" }}
                </div>
                <div 
                  :class="{ 
                    'claimed': store_claimed, 
                    'claimable': stored && !store_claimed, 
                    'unclaimable': !stored && !store_claimed 
                  }"
                  @click="(stored && !store_claimed) ? claimBox('store') : ''"
                >
                  {{ store_claimed ? "CLAIMED" : "CLAIM" }}
                </div>
              </div>
            </div>
            <div class="item">
              <div class="flex items-center">
                <div class="mr-5px">BUY</div>
                <el-popover
                  placement="bottom"
                  title=""
                  trigger="hover"
                  :visible-arrow="false"
                  popper-class="el-tip"
                >
                  <div class="text-center text-[#0B1A3B]">
                    <div>Buy an NFT from aggregate pool</div>
                  </div>
                  <img
                    src="@/assets/images/miserybox/q.png"
                    class="cursor-pointer"
                    slot="reference"
                  />
                </el-popover>
              </div>

              <div class="flex items-center">
                <div :class="{ 'finished': bought, 'unfinished': !bought }">
                  {{ bought ? "FINISHED" : "UNFINISHED" }}
                </div>
                <div 
                  :class="{ 
                    'claimed': buy_claimed, 
                    'claimable': bought && !buy_claimed,
                    'unclaimable': !bought && !buy_claimed 
                  }"
                  @click="(bought && !buy_claimed) ? claimBox('buy') : ''"
                >
                  {{ buy_claimed ? "CLAIMED" : "CLAIM" }}
                </div>
              </div>
            </div>
            <div class="item">
              <div class="flex items-center">
                <div class="mr-5px">Swap</div>
                <el-popover
                  placement="bottom"
                  title=""
                  trigger="hover"
                  :visible-arrow="false"
                  popper-class="el-tip"
                >
                  <div class="text-center text-[#0B1A3B]">
                    <div>Swap among FFTs and ETH</div>
                  </div>
                  <img
                    src="@/assets/images/miserybox/q.png"
                    class="cursor-pointer"
                    slot="reference"
                  />
                </el-popover>
              </div>

              <div class="flex items-center">
                <div :class="{ 'finished': swapped, 'unfinished': !swapped }">
                  {{ swapped ? "FINISHED" : "UNFINISHED" }}
                </div>
                <div 
                  :class="{ 
                    'claimed': swap_claimed, 
                    'claimable': swapped && !swap_claimed ,
                    'unclaimable': !swapped && !swap_claimed
                  }"
                  @click="(swapped && !swap_claimed) ? claimBox('swap') : ''"
                >
                  {{ swap_claimed ? "CLAIMED" : "CLAIM" }}
                </div>
              </div>
            </div>

            <div class="item">
              <div class="flex items-center">
                <div class="color-text">Share to Twitter</div>
                <img src="@/assets/images/index/twitter.png" class="w-26px -ml-28px mr-7px" style="filter: invert(43%) sepia(99%) saturate(680%) hue-rotate(159deg) brightness(100%) contrast(107%);" />
                <el-popover
                  placement="bottom"
                  title=""
                  trigger="hover"
                  :visible-arrow="false"
                  popper-class="el-tip"
                >
                  <div class="text-center text-[#0B1A3B]">
                    <div>Share Furion on Twitter to get 1 Mystery Box (guaranteed!)</div>
                  </div>
                  <img
                    src="@/assets/images/miserybox/q.png"
                    class="cursor-pointer"
                    slot="reference"
                  />
                </el-popover>
              </div>

              <div class="flex items-center">
                <div 
                  class="claimable"
                  @click="shareToTwitter()"
                >
                  {{ shared ? "SHARED" : "SHARE" }}
                </div>
              </div>
            </div>

            <div class="item">
              <div class="flex items-center">
                <div class="mr-7px">Referral</div>
                <el-popover
                  placement="bottom"
                  title=""
                  trigger="hover"
                  :visible-arrow="false"
                  popper-class="el-tip"
                >
                  <div class="text-center text-[#0B1A3B]">
                    <div>Refer 3 friends to get 1 Mystery Box (Capped at 5 Mystery Boxes)</div>
                  </div>
                  <img
                    src="@/assets/images/miserybox/q.png"
                    class="cursor-pointer"
                    slot="reference"
                  />
                </el-popover>
              </div>

              <div  class="normal-case text-white text-align-right">
                You have referred
                <span class="text-[#FA6BE1]"> {{ referral }}</span>
                users
              </div>
            </div>
          </div>
          <!-- <div>
            <div style="float:left"
            class="text-[rgba(252,255,253,0.4)] font-500 text-13px"
            >Connected with MetaMask</div>
            <div style="float:right"
            class="text-[#FF7AE8] font-500 text-13px"
            >Change provider</div>
          </div> -->
          <div class="flex items-center justify-between mt-30px px-10px">
            <!-- <div class="text-17px" style="color: rgba(255,255,255,0.9)">
              Referral Code: <span style="color: #FA6BE1">{{ code }}</span>
            </div> -->
            <div class="text-16px" style="color: rgba(255, 255, 255, 0.7);">
              You have
              <span class="text-[#FA6BE1]">{{ box_num }}</span>
              Mystery Box(es)
            </div>
          </div>

          <div class="flex justify mt-30px px-10px">
            <!-- <div v-if="box_info.referrer == ''">
              <div class="flex">
                <input
                  v-model="referrer_code"
                  type="text"
                  class="code-input"
                  placeholder="Has a referrer?"
                >
                <el-button class="code-button" @click="useCode">USE</el-button>
              </div>

              <div class="text-14px mt-8px" style="color: rgb(191, 191, 191, 0.8)">Referred by someone?</div>
            </div> -->

            <div :v-if="box_info.referral!=''" class="text-17px" style="color: rgba(255,255,255,0.8)">
                Referred By: <span style="color: rgba(255,255,255,0.7); background: rgba(0,0,0,0.2); border-radius: 15px; padding: 10px 15px">{{ (box_info.referrer!='') ? showAddress(box_info.referrer):"No referrer yet" }}</span>
            </div>
          </div>
          <div class="flex justify mt-30px px-10px">
            <div class="text-17px flex items-center" style="color: rgba(255,255,255,0.8)">
              <span>My Referral Link: </span>
              <div style="color: rgba(255,255,255,0.7); background: rgba(0,0,0,0.2); border-radius: 15px; padding: 10px 15px; margin-left: 10px">
                {{ showReferralLink("https://furion.io/mysterybox?code="+code) }}
                <img class="cursor-pointer ml-8px" src="@/assets/images/drawer/copy.svg" @click="copy" />
              </div>
            </div>
          </div>
          
          <!--div class="flex justify-center mt-60px">
            <div class="custom-btn2 ">
              Earn Misery box
            </div>
            <div class="custom-btn1 !w-270px" @click="dialog = true">
              OPEN ALL BOXES
            </div>
          </div-->
          <div 
            style="position: absolute; bottom: 18px; left: 30px; color: rgba(255, 255, 255, 0.5); font-size: 16px;"
          >* Boxes can be opened after the mainnet launch</div>
        </div>
      </div>
    </div>

    <el-dialog
      title="Sorry..."
      :visible.sync="dialogNone"
      :close-on-click-modal="true"
      custom-class="el-dialog-pet"
      append-to-body
    >
      <div class="box h-250px">
        <div class="text-center">
          <img src="@/assets/images/miserybox/none.png" class="mb-20px" width="140px" />
          <div class="text-20px font-600" style="color: rgba(252, 255, 253, 0.8)">
            You did not get a mystery box
          </div>
        </div>
      </div>
    </el-dialog>

    <el-dialog
      title="Congratulations!"
      :visible.sync="dialogSucceed"
      :close-on-click-modal="true"
      custom-class="el-dialog-pet"
      append-to-body
    >
      <div class="box h-250px">
        <div class="text-center">
          <img src="@/assets/images/miserybox/succeed.png" class="mb-20px" width="230px" />
          <div class="text-20px font-600" style="color: rgba(252, 255, 253, 0.8)">
            You earned a mystery box!
          </div>
        </div>
      </div>
      <!--div class="custom-btn2 !text-22px !w-1/1 !h-50px !leading-50px mx-auto" @click="dialogSucceed=false">FUWA!</div-->
    </el-dialog>

    <el-dialog
      title="Congratulations!"
      :visible.sync="referred_success"
      :close-on-click-modal="false"
      @close="$router.push('/')"
      custom-class="el-dialog-pet"
      append-to-body
    >
      <div class="box h-250px">
        <div class="text-center">
          <img src="@/assets/images/miserybox/succeed.png" class="mb-20px" width="230px" />
          <div class="text-20px font-600" style="color: rgba(252, 255, 253, 0.8)">
            You are referred successfully!
          </div>
        </div>
      </div>
      <!--div class="custom-btn2 !text-22px !w-1/1 !h-50px !leading-50px mx-auto" @click="dialogSucceed=false">FUWA!</div-->
      <div
      class="flex justify-center mt-40px"
      >
        <div 
        class="custom-btn2 !w-158px !h-50px !leading-52px" @click="$router.push('/')"
        >
          GOT IT
        </div>
      </div>
    </el-dialog>

    <el-dialog
      title="Sorry..."
      :visible.sync="referred_fail"
      :close-on-click-modal="false"
      @close="$router.push('/')"
      custom-class="el-dialog-pet"
      append-to-body
    >
      <div class="box h-250px">
        <div class="text-center">
          <img src="@/assets/images/miserybox/none.png" class="mb-20px" width="140px" />
          <div class="text-20px font-600" style="color: rgba(252, 255, 253, 0.8)">
            {{note}}
          </div>
        </div>
      </div>
      <div
      class="flex justify-center mt-40px"
      >
        <div 
        class="custom-btn2 !w-158px !h-50px !leading-52px" @click="$router.push('/')"
        >
          GOT IT
        </div>
      </div>
    </el-dialog>

    <el-dialog
      title="Notification"
      :visible.sync="dialogEmpty"
      width="800"
      :close-on-click-modal="false"
      custom-class="el-dialog-pet"
      append-to-body
    >
      <div class="box h-244px">
        <div class="text-center">
          <img src="@/assets/images/miserybox/empty.png" class="mb-30px" />
          <div class="text-18px font-600 mb-15px" style="color: rgba(252, 255, 253, 0.8)">
            <div class="mb-5px">Sorry! there's nothing inside</div>

            Please finish more tasks and try again!
          </div>
        </div>
      </div>
    </el-dialog>

    <el-dialog
      title="Notification"
      :visible.sync="dialog"
      width="800"
      :close-on-click-modal="false"
      custom-class="el-dialog-pet"
      append-to-body
    >
      <div class="box2 h-328px mb-40px pt-40px">
        <div class="flex items-center justify-center mb-40px">
          <img src="@/assets/images/miserybox/fireworks.png" alt="" />
          <div class="mx-20px text-center">
            <div class="font-600 text-18px mb-6px" style="color: #fcfffd">
              Congratulations!!!
            </div>
            <div class="font-500 text-16px" style="color: rgba(252, 255, 253, 0.7)">
              You have now got
            </div>
          </div>
          <img
            src="@/assets/images/miserybox/fireworks.png"
            class="transform !rotate-y-180"
          />
        </div>

        <div class="reward flex justify-around">
          <div class="item">
            <div class="card">
              <img src="@/assets/images/miserybox/item1.png" alt="" />
            </div>
            <div>Furion FUWA</div>
          </div>

          <div class="item">
            <div class="card">
              <img src="@/assets/images/miserybox/item2.png" alt="" />
            </div>
            <div>100 Fur</div>
          </div>

          <div class="item">
            <div class="card">
              <img src="@/assets/images/miserybox/item3.png" alt="" />
            </div>
            <div>100 F-X</div>
          </div>

          <div class="item">
            <div class="card">
              <img src="@/assets/images/miserybox/item4.png" alt="" />
            </div>
            <div>Raccoon NFT</div>
          </div>
        </div>
      </div>
      <div 
        class="custom-btn2 mr-25px mx-auto" 
      >
        CLAIM
      </div>
      <!-- <div class="b-btn-2 mx-auto">
        <span style="color: rgba(252, 255, 253, 0.6)">CLAIM</span>
      </div>
      <div class="b-btn mx-auto">
        <span style="color: rgba(252, 255, 253, 1)">CLAIM</span>
      </div> -->
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import {
  default_box_info,
  initBoxInfo,
  _completeTask,
  _claimBox,
  addBoxNum,
  boxRandom,
  _useCode,
  _getReferrer,
  _getReferred,
  _addReferred,
  getCompletedTask,
} from "@/config/mystery_box/box"
import { _showAddress } from "@/utils/common";
import { connectMetamask } from "@/utils/web3/wallet";
import { into_testnet, into_remain } from "~/config/dashboard";
import NetworkInformationDialog from '@/components/Dialog/NetworkInformationDialog.vue';

export default {
  layout: "default",
  props: {},
  components: {NetworkInformationDialog},
  computed: {
    ...mapState('admin', ['connectStatus']),
    ...mapState(['userInfo']),
    box_num() {
      return this.box_info.box_num;
    },
    stored() {
      return this.box_info.tasks.store.completed;
    },
    store_claimed() {
      return this.box_info.tasks.store.claimed;
    },
    bought() {
      return this.box_info.tasks.buy.completed;
    },
    buy_claimed() {
      return this.box_info.tasks.buy.claimed;
    },
    swapped() {
      return this.box_info.tasks.swap.completed;
    },
    swap_claimed() {
      return this.box_info.tasks.swap.claimed;
    },
    shared() {
      return this.box_info.tasks.share.completed;
    },
    referral() {
      return this.box_info.referred;
    },
    code() {
      return this.box_info.code;
    },
    referred_fail() {
      return this.referred_failed || this.referred_already || this.referred_limited || this.referred_own || this.referred_error;
    }
    // async referrer_code() {
    //   if (this.$route.query.code){
    //     const res = await this.useCode(this.$route.query.code);
    //     if(!res) {
    //       return "";
    //     } else {
    //       this.referred_success = true;
    //       this.$store.commit('update',['referrer_code',this.$route.query.code])
    //       return this.$route.query.code;
    //     }
    //   } else {
    //     return this.$store.state.referrer_code;
    //   }
    // }
  },
  data() {
    return {
      dialogNone: false,
      dialogEmpty: false,
      dialogSucceed: false,
      dialog: false,
      referred_success: false, // successful refer
      referred_already: false,  // this account has already been referred
      referred_failed: false, // failed referred for unknown reason
      referred_error: false, // error referral code
      referred_limited: false, // the referral link has reach the limit
      referred_own: false, // use own referral link
      box_info: default_box_info,
      completed_all: false,
      note: '',
    };
  },
  async mounted() {
    await this.checkAlreadyConnect();
    let account = this.userInfo.userAddress;
    if (this.$route.query.code) {
      if (account == undefined || account == "") {
        await connectMetamask();
        account = this.userInfo.userAddress;
      }
    }
    await initBoxInfo(this.box_info, account);
    console.log(this.box_info.referrer);
    await this.referOrNot();
    const completed = await getCompletedTask(account);
    this.completed_all = completed == 3 ? true : false;
    if(this.completed_all && this.box_info.referrer!=""){
      this.add_referred(account,this.box_info.referrer)
    }
  },
  methods: {
    showAddress(addr) {
      return _showAddress(addr);
    },
    showReferralLink(link) {
      const res = link.substr(0, 15) +
      "..." +
      link.substr(-7);
      return res;
    },
    copy() {
      this.$copyText("https://furion.io/mysterybox?code="+this.code);
      this.successMessage('Referral Link Copied');
    },
    async referOrNot() {
      if (this.$route.query.code) {
        if (this.box_info.referrer == '') {
          const status_code = await this.useCode(this.$route.query.code);
          console.log(status_code)
          switch (status_code) {
          case 0:
            this.referred_success = true;
            break;
          case 4:
            this.referred_error = true;
            this.note = "Invalid referral link, please try another one!"
            break;
          case 5:
            this.referred_own = true;
            this.note = "Cannot use your own referral link!"
            break;
          case 6:
            this.referred_limited = true;
            this.note = "Referrer referral limit reached, please try another link!"
            break;
          default:
            this.referred_failed = true;
            this.note = "Unknown error, check the referral link!"
            break;
        }
        } else {
          this.referred_already = true;
          this.note = "You have already been referred!" 
          return;
        };
        // this.$router.push('/');
        
      }
    },
    async add_referred(referred_address, referrer_address) {
      await _addReferred(referred_address, referrer_address)
      // Will only execute if code is applied successfully without 
      //  function returning in switch statement
      if (await _getReferred(referrer_address) % 3 == 0) {
        await addBoxNum(referrer_address);
      }
    },
    async useCode(referrer_code) {
      const account = this.userInfo.userAddress;

      const res = await _useCode(account, referrer_code);

      switch (res) {
        case 0:
          this.successMessage('Code used');
          break;
        case 4:
          this.errorMessage('Code does not exist');
          return 4;
        case 5:
          this.errorMessage("Cannot use own code");
          return 5;
        case 6:
          this.errorMessage('Code use limit reached');
          return 6;
        default:
          this.errorMessage('Failed to use code');
          return 7;
      }

      this.box_info.referrer = await _getReferrer(account);
      /*
      const num = Math.floor(Math.random() * 100);
      if (num < 100) {
        await addBoxNum(account);
      }
      */
      return 0;
    },

    // Calling condition already checked in HTML code (i.e. finished && !claimed)
    async claimBox(task) {
      const account = this.userInfo.userAddress;

      // Claim box
      await _claimBox(account, task);
      this.box_info.tasks[task].claimed = true;
      await into_remain(this.network, 'no_try', 1, 0);
      const hasBox = await boxRandom(account);

      if (hasBox) {
        this.dialogSucceed = true;
        await addBoxNum(account);
        this.box_info.box_num += 1;
      } else {
        this.dialogNone = true;
        await into_remain(this.network, 'no_try_no_luck', 1, 0);
      }
    },

    async shareToTwitter() {
      window.open(`https://twitter.com/intent/tweet?text=🤩%20Join%20%23Furion%20testnet%20and%20earn%20up%20to%20500000%20FUR%20and%20other%20NFTs%21%0A%0A🎁%20I%20am%20claiming%20my%20Mystery%20Boxes%20on%20%40ProjectFurion%2C%20the%20first%20all-in-one%20liquidity%20platform.%0A%0A😎%20Try%20it%20now!%20%0Ahttps%3A%2F%2Ffurion.io%2Fmysterybox?code=${this.code}`, "_blank");
      // Sharing for the first time
      if (!this.shared) {
        const account = this.userInfo.userAddress;

        // Complete share task
        await _completeTask(account, "share");
        this.box_info.tasks.share.completed = true;

        // Add box number by 1
        await addBoxNum(account);
        this.box_info.box_num += 1;
      }
    },
    successMessage(title) {
      this.$notify({
        title: title,
        type: 'success',
      })
    },
    errorMessage(title) {
      this.$notify.error({
        title: title,
        message: '',
        dangerouslyUseHTMLString: true,
      });
    },
    async checkAlreadyConnect() {
      try {
        const accounts = await ethereum.request({ method: 'eth_accounts' });
        if (accounts.length != 0) {
          this.$store.dispatch('setWalletType', 'Metamask');
          this.$store.commit('update', ['admin.connectStatus', 'connected']);
          let userInfo = {
            isConnect: true,
            userAddress: accounts[0],
          };
          this.$store.dispatch('setUserInfo', userInfo);
        } else {
          console.warn('User not connected');
          this.$store.commit('update', ['admin.connectDialog', 'simple']);
        }
      } catch (error) {
        console.warn(error);
      }
    },
  },
};
</script>
