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
  getArticle({ commit, getters }, payload) {
    const article = getters.articles.find((v) => v.id === payload.articleId);
    commit("setArticle", article);
  },
  favorate({ commit }, payload) {
    commit("favorate", payload);
  },
  postArticle({ commit, getters }, payload) {
    commit("postArticle", {
      ...payload,
      id: getters.articles[getters.articles.length - 1].id + 1,
      comment_count: 0,
      user_id: getters.user.id,
      favorite_count: 0,
      is_favorate: false,
      user: {
        name: getters.user.name,
      },
      comments: [],
    });
  },
  addComment({ commit, getters }, payload) {
    commit("addComment", {
      ...payload,
      id:
        getters.article.comments.length !== 0
          ? getters.article.comments[getters.article.comments.length - 1].id + 1
          : 1,
      user_id: getters.user.id,
      user: {
        name: getters.user.name,
      },
    });
  },
  editArticle({ commit }, payload) {
    commit("editArticle", {
      ...payload,
    });
  },
  editComment({ commit }, payload) {
    commit("editComment", {
      ...payload,
    });
  },
};
