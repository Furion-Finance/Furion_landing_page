
export default {
  namespaced: true,
  state() {
    return {
      token: '',
      userinfo: {},
      cart: [],
      tasks: {
        store: {
          completed: false,
          claimed:   false
        },
        redeem: {
          completed: false,
          claimed:   false
        },
        swap: {
          completed: false,
          claimed:   false
        },
        shared: {
          completed: false,
        }
      },
      boxes: 0,
    };
  },
  mutations: {
    increment(state, key) {
      state.key++;
    },
    decrement(state, key) {
      state.key--;
    },
    update(state, [key, value]) {
      _.set(state, key, value);
    },
    save(state, [key, value, context = this, opt = {}]) {
      _.set(state, key, value);
      context.$cookies.set(key, value, opt);
    },
    complete(state, task) {
      this.update(state, [task.completed, true])
    },
    claim(state, task) {
      this.update(state, [task.claimed, true])
    }
  },
  actions: {
    complete_task({commit}, task){
      commit('complete',task);
    },
    claim_box({commit}, task){
      commit('claim',task);
    },
    increase_box({commit}) {
      commit('increment', boxes)
    },
    decrease_box({commit}) {
      commit('decrement', boxes)
    }
  }
};