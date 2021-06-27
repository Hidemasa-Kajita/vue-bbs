// stateの入れるための情報を作る

export const actions = {
  login({ commit }, payload) {
    console.log(payload.msg);
    commit("login", payload.isSuccess);
  },
  regist({ commit }, payload) {
    console.log(payload);
    commit("regist", payload);
  },
};
