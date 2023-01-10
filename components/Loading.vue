<style lang="scss" scoped>
  .loading_dashboard {
    background: linear-gradient(
      180deg,
      rgba(51, 53, 114, 0.16) 0%,
      rgba(51, 53, 114, 0.4) 107.69%
    );
    border-radius: 20px;
    overflow: hidden;
    padding: 15px;
    @apply flex flex-col;
    .item {
      border-radius: 15px;
      flex: 1;
      margin-bottom: 15px;
      background-size: 500% 100%;
      background-position: 100% 50%;
      animation: loading 2s linear infinite;
      background-image: linear-gradient(
        90deg,
        transparent,
        transparent,
        transparent,
        rgba(51, 53, 114, 0.4),
        rgba(51, 53, 114, 0.4),
        transparent,
        transparent,
        transparent,
        rgba(51, 53, 114, 0.4),
        rgba(51, 53, 114, 0.4),
        transparent,
        transparent,
        transparent
      );
      &.first {
        height: 60px;
        flex: unset;
      }
    }
  }
  @keyframes loading {
    0% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
  .slot > div {
    height: 100%;
  }
  </style>
  
  <template>
    <div>
      <div class="loading_dashboard h-1/1" v-show="loading">
        <div
          class="item"
          v-for="n in Number(rows)"
          :class="{ first: n == 1, '!mb-0': n == Number(rows) }"
        ></div>
      </div>
  
      <div v-show="!loading" class="slot h-1/1">
        <slot />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      rows: {
        type: String,
        default: "2",
      },
      loading: {
        type: Boolean,
        default: true,
      },
    },
    components: {},
    computed: {},
    data() {
      return {};
    },
    mounted() {},
    methods: {},
  };
  </script>