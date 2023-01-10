<style lang="scss" scoped>
.bg {
  background: url("@/assets/images/detail.png") 100% no-repeat;
  background-size: 100% 100%;
}
.btns {
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  height: 48px;
  width: 184px;
  overflow: hidden;
  .br {
    width: 46px;
    display: flex;
    justify-content: center;
    border-right: 1px solid rgba(255, 255, 255, 0.12);
    &:hover {
      background: rgba(255, 255, 255, 0.12);
    }
  }
  ::v-deep {
    .el-popover__reference {
      height: 46px;
    }
  }
}

.title {
  background: linear-gradient(
    180deg,
    rgba(51, 53, 114, 0.12) 9.68%,
    rgba(51, 53, 114, 0.15) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 0;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  width: calc(100% + 2px);
}

::v-deep {
  .el-table .el-table__header-wrapper {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}

.comments {
  background: linear-gradient(
    180deg,
    rgba(51, 53, 114, 0.16) 11.11%,
    rgba(51, 53, 114, 0.2) 100%
  );
  border: 0.8px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;

  .head {
    background: linear-gradient(
      180deg,
      rgba(51, 53, 114, 0.16) 11.11%,
      rgba(51, 53, 114, 0.2) 100%
    );
    border: 0.8px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 25px 70px;
    display: flex;
    align-items: center;
  }

  .body {
    padding: 52px 66px;
  }
}

.reply {
  background: transparent;
  border-bottom: 2px solid #2d4682;
  padding: 4px 0;
  font-weight: 500;
  font-size: 16px;
  color: #7d8599;
  &::placeholder {
    font-weight: 500;
    font-size: 16px;
    color: #7d8599;
  }
}

.post {
  color: #7d8599 !important;
  border-color: #7d8599 !important;
  &:hover {
    opacity: 1 !important;
    color: #fa6be1 !important;
    border-color: #fa6be1 !important;
  }
}
</style>

<template>
  <div class="!w-1/1 pb-100px">
    <img
      src="@/assets/images/icon_back.svg"
      class="absolute left-60px cursor-pointer top-100px hover:opacity-80"
      @click="$router.go(-1)"
    />

    <div class="w-1150px mx-auto">
      <div class="pt-70px flex mb-32px">
        <img
          src="@/assets/images/cover0.png"
          class="w-400px h-400px rounded-20px mr-30px"
        />
        <div class="flex-1 flex flex-col">
          <div class="flex justify-between mb-80px">
            <div class="pl-30px">
              <div class="text-[#31C2C7] text-20px font-600 mb-20px">Azuki</div>
              <div class="text-32px font-700">Azuki #3957</div>
            </div>
            <div class="flex cursor-pointer btns">
              <div class="br">
                <img src="@/assets/images/icon_refresh.svg" class="w-24px" />
              </div>
              <div class="br">
                <img src="@/assets/images/icon_forward.svg" class="w-24px" />
              </div>
              <el-popover
                placement="bottom"
                title=""
                trigger="click"
                popper-class="el-sort"
                :visible-arrow="true"
                width="200"
              >
                <div class="el-sort-item">
                  <div class="w-40px flex items-center justify-center">
                    <img src="@/assets/images/share1.png" />
                  </div>

                  copy Link
                </div>
                <div class="el-sort-item">
                  <div class="w-40px flex items-center justify-center">
                    <img src="@/assets/images/share2.png" />
                  </div>
                  share on Facebook
                </div>
                <div class="el-sort-item">
                  <div class="w-40px flex items-center justify-center">
                    <img src="@/assets/images/share3.png" />
                  </div>
                  share on Twitter
                </div>
                <div class="el-sort-item">
                  <div class="w-40px flex items-center justify-center">
                    <img src="@/assets/images/share4.png" />
                  </div>
                  Embed ltem
                </div>
                <div class="br" slot="reference">
                  <img src="@/assets/images/icon_share.svg" class="w-24px" />
                </div>
              </el-popover>
              <div class="br" style="border-right: none">
                <img src="@/assets/images/icon_more.svg" class="w-24px" />
              </div>
            </div>
          </div>
          <div class="bg flex-1 p-30px">
            <div class="mb-15px opacity-60 font-500 text-20px">Reference Price</div>
            <div class="flex items-center mb-55px">
              <img src="@/assets/images/icon_eth.svg" class="w-24px mr-10px" />
              <div class="font-700 text-32px">6.4838</div>
            </div>

            <div class="flex">
              <div class="btn_border mr-18px">
                <el-button type="primary" class="w-310px !h-60px" plain>
                  <div class="!flex items-center justify-center">
                    <img src="@/assets/images/add.svg" class="mr-15px" />
                    <div class="text-20px font-800">Add to pool</div>
                  </div>
                </el-button>
              </div>
              <div class="btn_border">
                <el-button type="primary" class="w-310px !h-60px">
                  <div class="text-20px font-800">Lock in pool</div>
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-53px">
        <div class="flex items-center pl-44px h-76px title">
          <img src="@/assets/images/icon_item.svg" class="mr-10px" />
          <div class="font-800 text-18px">Item Activity</div>
        </div>
        <el-table :data="list" style="width: 100%">
          <el-table-column prop="Event" label="Event">
            <template slot-scope="scope">
              <div class="flex items-center pl-30px py-12px">
                <img src="@/assets/images/icon_hand.svg" class="mr-10px" />
                <div class="text-16px font-600">{{ scope.row.Event }}</div>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="Price" label="Price">
            <template slot-scope="scope">
              <div class="flex items-center">
                <img src="@/assets/images/icon_eth.svg" class="mr-5px" />
                <div class="text-16px font-600">{{ scope.row.Price }}</div>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="From" label="From">
            <template slot-scope="scope">
              <div class="text-16px font-600 text-[#40BAFF] underline cursor-pointer">
                {{ scope.row.From }}
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="To" label="To"> </el-table-column>
          <el-table-column prop="Dates" label="Date"> </el-table-column>
        </el-table>
      </div>

      <div class="comments">
        <div class="head">
          <img src="@/assets/images/message.svg" class="mr-12px" />
          <div class="font-800 text-18px">Comments</div>
        </div>
        <div class="body">
          <client-only>
            <quill-editor v-model="html" :options="editorOption" class="!mb-24px" />
          </client-only>
          <div class="flex justify-between mb-50px">
            <div></div>
            <div class="btn_border">
              <el-button type="primary" class="!w-284px !h-56px" plain>
                <div class="!flex items-center justify-center">
                  <div class="text-19px font-700">Post a comment</div>
                </div>
              </el-button>
            </div>
          </div>

          <div v-for="(item, index) in comments" :key="index" class="mb-40px">
            <div class="flex justify-between items-start">
              <div class="flex items-center">
                <img
                  src="@/assets/images/avatar.png"
                  width="54"
                  class="mr-20px rounded-full"
                />
                <div class="font-700 text-24px">Azuki</div>
              </div>
              <div class="text-[#7D8599] text-16px font-700">2022/07/27</div>
            </div>

            <div class="pl-73px">
              <div class="text-[#7D8599] font-600 text-20px mb-15px">
                This is really a great
              </div>

              <div class="flex items-center mb-5px">
                <div
                  class="font-700 text-14px text-[#6F788D] mr-35px cursor-pointer"
                  @click="item.show = true"
                >
                  REPLY
                </div>
                <div class="flex items-center cursor-pointer">
                  <img src="@/assets/images/more3.svg" alt="" />
                  <div class="text-[#FA6BE1] ml-5px text-16px font-600">
                    View 33 replies
                  </div>
                </div>
              </div>

              <div class="relative" v-if="item.show">
                <img
                  src="@/assets/images/avatar.png"
                  width="30"
                  class="absolute -left-40px top-0 rounded-full"
                />

                <input
                  type="text"
                  class="block w-full reply mb-5px"
                  placeholder="Add Reply..."
                />
                <div class="flex justify-between items-center">
                  <img src="@/assets/images/emoji.svg" class="cursor-pointer" />
                  <div class="flex items-center">
                    <div
                      class="text-[#6F778D] font-700 text-12px cursor-pointer mr-30px"
                      @click="item.show = false"
                    >
                      Cancellation
                    </div>
                    <div class="btn_border">
                      <el-button plain class="!w-100px !h-40px !p-0 post">Post</el-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ store, $axios, app, query }) {},
  props: {},
  components: {},
  computed: {},
  data() {
    return {
      html: "",
      editorOption: {
        placeholder:
          "Share how you feel about the creation or even ask the creator a question.",
        modules: {
          toolbar: [
            [
              "bold",
              "italic",
              "underline",
              "code-block",
              "link",
              { header: 1 },
              { header: 2 },
              { list: "ordered" },
              { list: "bullet" },
            ],
          ],
          syntax: {
            highlight: (text) => hljs.highlightAuto(text).value,
          },
        },
      },
      list: [
        {
          Event: "Bid",
          Price: "6.4838",
          From: "CICCBF",
          To: "",
          Dates: "an hour ago",
        },
        {
          Event: "Bid",
          Price: "6.4838",
          From: "CB11E2",
          To: "",
          Dates: "2 hours ago",
        },
      ],
      comments: [{}, {}, {}],
    };
  },
  mounted() {
    this.comments = this.comments.map((item) => {
      return {
        show: false,
      };
    });
  },
  methods: {},
};
</script>
