<style lang="scss" scoped>
.box-input {
  &::v-deep {
    .el-input__inner {
      height: 60px;
      background: #091a39;
      background: rgba(1, 17, 41, 0.5);
      border: 1px solid #172643 !important;
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25) !important;
      border-radius: 12px !important;
      color: #fcfffd;
      font-size: 18px;
      font-weight: 300;
      text-align: left;
      opacity: 0.8;

      &::-webkit-input-placeholder {
        color: rgba(204, 204, 204, 0.3) !important;
      }
    }
  }
}

.list {
  background: rgba(28, 42, 79, 0.4);
  border-radius: 16px;
  padding: 16px 14px;
}

.item {
  background: rgba(17, 19, 90, 0.2) 100%;
  border-radius: 8px;
  height: 55px;
  @apply flex items-center justify-between pl-18px pr-42px mb-10px;
  cursor: pointer;

  &:hover {
    background: rgba(51, 53, 114, 0.8) 0%;
  }
}
</style>

<template>
  <el-dialog title="NFT Contract Address:" :visible.sync="DialogVisible" width="35%" :close-on-click-modal="true"
    append-to-body custom-class="el-dialog-dark" :before-close="DialogClose" @close="closeDialog">
    <div slot="title" class="flex items-center font-800 text-24px">
      <div class="pb-2px">&nbsp;&nbsp;Select a token</div>
      &nbsp;&nbsp;
      <el-tooltip effect="light" :content="text" placement="bottom">
        <img src="@/assets/images/q.svg" alt="" class="!w-18px !h-26px" />
      </el-tooltip>
    </div>

    <el-input 
      class="box-input" 
      placeholder="Search asset by symbol" 
      style="width:100%" 
      v-model="value"
      @input="search"
    >
    </el-input>

    <br /><br /><br />
    <div class="h-340px mb-20px">
      <el-scrollbar class="h-1/1">
        <div class="list">
          <div class="item" v-for="item in token_list" v-on:click="SelectToken(item)">
            <div class="items-center flex">
              <img :src="item.image" width="35px" />
              <div class="font-500 text-18px text-[rgba(252,255,253,0.8)]">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ item.symbol }}</div>
              <span style="float: right;"></span>
            </div>
          </div>
        </div>
      </el-scrollbar>
    </div>
  </el-dialog>
</template>

<script>
import { token_info } from '@/config/furion_swap/swap';
export default {
  props: ['DialogVisible', 'DialogClose', 'SelectToken'],
  data() {
    return {
      Loading: false,
      text: 'Find a token by searching for its name or symbol, or by pasting its address below.',
      value: '',
      token_list: token_info
    };
  },
  methods: {
    search() {
      if (this.value == '') {
        this.token_list = token_info;
        return;
      }
      this.token_list = this.token_list.filter(token => token.symbol.includes(this.value.toUpperCase()));
    },
    closeDialog() {
      this.value = '';
      this.token_list = token_info;
    }
  },
};
</script>

<style lang="scss">
</style>
