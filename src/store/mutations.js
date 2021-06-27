// stateに値を入れてあげる

export const mutations = {
  login(state, payload) {
    state.isLogin = payload;
  },
};
