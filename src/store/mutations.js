// stateに値を入れてあげる

export const mutations = {
  login(state, payload) {
    state.isLogin = payload;
  },
  regist(state, payload) {
    state.user.id = payload.id;
    state.user.password = payload.password;
  },
};
