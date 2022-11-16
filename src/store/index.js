import { createStore, createLogger } from 'vuex';

export default createStore({
  modules: {},
  plugins: [createLogger()],
  state: {
    count: 0
  },
  getters: {
    count(state) {
      return state.count;
    },
    doubleCount(state) {
      return state.count * 2;
    }
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {
    increment({ commit }) {
      commit('increment');
    }
  }
});
