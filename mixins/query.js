export default {
  watchQuery: true,
  key(route) {
    return route.fullPath;
  },
  data() {
    return {
      mounted: false,
    };
  },
  mounted() {
    this.mounted = true;
  },
  methods: {
    q(data = {}, clean = false) {
      let query = this.$route.query;
      if (clean) {
        query = {};
      }
      this.$router
        .replace({
          path: this.$route.path,
          query: {
            ...query,
            ...data,
            t: new Date().getTime(),
          },
        })
        .catch(err => {});
    },
    dateFormatter(row, col) {
      return this.$dayjs(row[col.property]).format('YYYY-MM-DD HH:mm:ss');
    },
    currentChange(v) {
      this.q({
        pageNum: v,
      });
    },
    sizeChange(v) {
      this.q({
        pageNum: 1,
        pageSize: v,
      });
    },
  },
};
