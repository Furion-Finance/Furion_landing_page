<style lang="scss" scoped></style>

<template>
  <div class="px-40px pb-100px">
    <el-table
      :data="list"
      ref="table"
      @cell-click="cell_click"
      class="custom w-1/1"
    >
      <el-table-column prop="Pool" label="Pool" sortable>
        <template slot-scope="scope">
          <div class="flex items-center py-10px">
            <div class="relative pl-15px mr-5px flex-shrink-0">
              <img src="@/assets/images/token1.png" class="w-46px" />
            </div>
            <div class="relative mr-12px flex-shrink-0">
              <img src="@/assets/images/token2.png" class="w-46px" />
            </div>
            <div>
              <Search-keyword
                :keyword="query.key"
                :text="scope.row.Pool"
              ></Search-keyword>
              <div class="text-13px font-300 mt-10px">ZH9875</div>
            </div>
          </div>
        </template>
      </el-table-column>

      <el-table-column type="expand" width="0">
        <template slot-scope="scope">
          <div>
            <div
              class="flex justify-between items-center mb-24px"
              style="border-bottom: 1px solid rgba(252, 255, 253, 0.1)"
            >
              <div class="w-1/2 font-700 text-18px flex items-center py-15px">
                Manage Position
              </div>
              <img src="@/assets/images/btn.svg" class="cursor-pointer" />
            </div>

            <div class="mb-24px">
              <el-button
                type="primary"
                style="text-transform: initial"
                class="!p-0 !w-180px !h-42px !font-800"
                v-if="scope.row.switch"
              >
                Unstaking
              </el-button>
              <el-button
                type="primary"
                style="text-transform: initial"
                class="!p-0 !w-180px !h-42px !font-800"
                v-else
              >
                Staking
              </el-button>
            </div>

            <div class="flex justify-between mb-15px">
              <div class="flex items-center">
                <el-switch v-model="scope.row.switch" class="mr-24px">
                </el-switch>
                <div class="font-700 text-14px opacity-60">
                  Remove Liquidity
                </div>
              </div>
              <div>
                <el-tag
                  class="w-48px mr-15px"
                  size="medium"
                  type="primary"
                  @click="percent_change(scope.row, 25)"
                >
                  <span>25%</span>
                </el-tag>
                <el-tag
                  class="w-48px mr-15px"
                  size="medium"
                  @click="percent_change(scope.row, 50)"
                >
                  <span>50%</span>
                </el-tag>
                <el-tag
                  class="w-48px mr-15px"
                  size="medium"
                  @click="percent_change(scope.row, 75)"
                >
                  <span>75%</span>
                </el-tag>
                <el-tag
                  class="w-48px"
                  size="medium"
                  @click="percent_change(scope.row, 100)"
                >
                  <span>100%</span>
                </el-tag>
              </div>
            </div>

            <div class="relative mb-24px">
              <el-input-number
                v-model="scope.row.num"
                :precision="1"
                :controls="false"
                class="custom !w-1/1"
                placeholder="0.0"
              ></el-input-number>
              <div
                class="absolute right-0 center-y font-400 text-13px text-right leading-16px pr-24px"
                style="color: rgba(252, 255, 253, 0.4)"
              >
                <div class="mb-5px">LP Token</div>
                <div>=$ 0</div>
              </div>
            </div>

            <el-slider
              v-model="scope.row.percent"
              :max="100"
              :format-tooltip="
                v => {
                  return (v += '%');
                }
              "
              :marks="{
                25: '',
                50: '',
                75: '',
              }"
              @change="percent_change(scope.row)"
            ></el-slider>

            <div class="flex text-center font-700 text-14px text-[#86898C]">
              <div class="flex-1">25%</div>
              <div class="flex-1">50%</div>
              <div class="flex-1">75%</div>
              <div class="flex-1">100%</div>
            </div>

            <div class="mt-32px">
              <el-button
                plain
                v-if="scope.row.switch"
                class="w-1/1 !h-70px !text-18px"
              >
                Unstake
              </el-button>
              <el-button plain v-else class="w-1/1 !h-70px !text-18px">
                ENTER AN AMOUNT
              </el-button>
            </div>
          </div>
        </template>
      </el-table-column>

      <el-table-column prop="TVL" label="TVL" align="center"> </el-table-column>
      <el-table-column prop="Rewards" label="Rewards" align="center">
        <template slot-scope="scope">
          <div class="flex items-center justify-center">
            <div class="mr-5px">
              <img src="@/assets/images/reward1.png" />
            </div>
            <div class="mr-10px">
              <img src="@/assets/images/reward2.png" />
            </div>
            <div class="text-13px font-300">
              <div
                v-for="(item, index) in scope.row.Rewards"
                :class="{ 'mb-5px': index != scope.row.Rewards.length - 1 }"
              >
                {{ item.content }}
              </div>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="APR" label="APR" align="center" width="200">
        <template slot-scope="scope">
          <div class="mb-5px">
            <span class="font-600">{{ scope.row.APR }}</span>
            <el-tooltip effect="dark" content="tip" placement="top">
              <i class="el-icon-question text-[#C4C4C4] cursor-pointer"></i>
            </el-tooltip>
          </div>
          <div class="font-400 text-13px">annualized</div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import _ from 'lodash';
export default {
  async asyncData({ store, $axios, app, query }) {
    store.commit('update', ['admin.activeMenu', '/staking']);
  },
  props: {},
  components: {},
  computed: {
    query() {
      return this.$route.query;
    },
  },
  data() {
    return {
      amount: 200,
      searchKey: '',
      list: [
        {
          Pool: 'Naughty AVAXL',
          Pool_Icon: require('@/assets/images/token.svg'),
          TVL: '$ 1,436,317',
          Rewards: [
            {
              content: '29.18 DEGIS / DAY',
            },
            {
              content: '1.298 HUOBI / DAY',
            },
          ],
          APR: '37.01%',
          switch: true,
          num: undefined,
          percent: 0,
        },
        {
          Pool: 'ABC',
          Pool_Icon: require('@/assets/images/token.svg'),
          TVL: '$ 1,436,317',
          Rewards: [
            {
              content: '29.18 DEGIS / DAY',
            },
            {
              content: '1.298 HUOBI / DAY',
            },
          ],
          APR: '37.01%',
          switch: true,
          num: undefined,
          percent: 0,
        },
      ],
    };
  },
  mounted() {},
  methods: {
    percent_change(item, n) {
      if (n) {
        item.percent = n;
      }
      item.num = (this.amount * item.percent) / 100;
    },
    cell_click(row) {
      this.$refs.table.toggleRowExpansion(row);
    },
  },
};
</script>
