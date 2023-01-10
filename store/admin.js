export default {
  namespaced: true,
  state() {
    return {
      activeMenu: null,
      // disconnected,pending,connected
      connectStatus: 'disconnected',
      // false,detault,simple
      connectDialog: false,
      accountDialog: false,
    };
  },
};
