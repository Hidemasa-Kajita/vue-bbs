// stateの値を取得

export const getters = {
  user(state) {
    return state.user;
  },
  isLogin(state) {
    return state.isLogin;
  },
  articles(state) {
    return state.articles;
  },
  article(state) {
    return state.article;
  },
};
