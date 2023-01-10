<style lang="scss" scoped>
.network_dialog_body {
  font-size: 12pt;
}

.step-title {
  font-size: 14pt;
  font-weight: 800 !important;
  text-align: left;
  color: #ffffff;
  opacity: 1.2;
  position: relative;
  display: inline-block;
  vertical-align: middle;
}

.step-body {
  font-size: 12pt;
  text-align: center;
  color: #ffffff;
  font-weight: 400;
  padding-left: 8%;
  padding-right: 8%;
}

.step-img {
  margin-left: -1%;
  margin-right: 3%;
  width: 33px;
  z-index: 9999 !important;
  display: inline-block;
  vertical-align: middle;
}

.loading-img {
  text-align: center;
}

.loading-img-text{
  text-align: center;
  margin-left: 3%;
}
</style>

<template>
  <el-dialog title="Complete the process" footer append-to-body custom-class="el-dialog-dark"
    :close-on-click-modal="false" :visible.sync="DialogInfo.DialogVisible" @close="closeDialog">
    <div class="text-[#FCFFFD] font-400 leading-30px text-14px">
      <p>
        Please do not close the pop-up windows until you finish the whole
        transaction
      </p>
      <br />
    </div>
    <div class="dialog-table">
      <el-table :data="DialogInfo.StepsInfo" class="process" style="width: 100%" :show-header="false" row-key="step"
        :expand-row-keys="[DialogInfo.Step]">
        <el-table-column type="expand">
          <template slot-scope="props">
            <div class="loading-img">
              <img src="@/assets/images/loading/loading.gif" width="80" />

            </div>
            <br />
            <div class="loading-img-text">
              <img src="@/assets/images/loading/loading-text.png" width="80" />
            </div>
            <div class="step-body text-[#FCFFFD] font-400 leading-7" style="word-break: break-word">
              <br />
              {{ props.row.detail }}
              <br />
            </div>
          </template>
        </el-table-column>
        <el-table-column label="intro" prop="intro">
          <template slot-scope="props">
            <div class="step-img">
              <img :src="DialogInfo.ImgOptions[props.row.step]" width="54" />
            </div>
            <div class="step-title">{{ props.row.intro }} <br /></div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-dialog>
</template>

<script>
import {
  closeDialog,
} from '../../config/loading_info';
export default {
  props: ['DialogInfo'],

  data() {
    return {};
  },
  methods: {
    closeDialog() {
      closeDialog(this.DialogInfo);
    },
  },
};
</script>


