// stateに値を入れてあげる

export const mutations = {
  login(state, payload) {
    state.isLogin = payload;
  },
  regist(state, payload) {
    state.user.email = payload.email;
    state.user.password = payload.password;
  },
  setArticle(state, payload) {
    state.article = payload;
  },
  favorate(state, payload) {
    const articleIndex = state.articles.findIndex(
      (v) => v.id === payload.articleId
    );
    const article = state.articles[articleIndex];
    state.articles[articleIndex].favorite_count = article.is_favorate
      ? (article.favorite_count -= 1)
      : (article.favorite_count += 1);
    state.articles[articleIndex].is_favorate = !article.is_favorate;
  },
  postArticle(state, payload) {
    state.articles.push({
      ...payload,
    });
  },
  addComment(state, payload) {
    state.article.comments.unshift({
      ...payload,
    });
    const articleIndex = state.articles.findIndex(
      (v) => v.id === payload.articleId
    );
    state.articles[articleIndex] = state.article;
    state.articles[articleIndex].comment_count =
      state.articles[articleIndex].comments.length;
  },
  editArticle(state, payload) {
    state.article = { ...state.article, ...payload };
    const articleIndex = state.articles.findIndex(
      (v) => v.id === payload.articleId
    );
    state.articles[articleIndex] = { ...state.article, ...payload };
  },
  editComment(state, payload) {
    const commentIndex = state.article.comments.findIndex(
      (v) => v.id === payload.commentId
    );
    state.article.comments[commentIndex] = {
      ...state.article.comments[commentIndex],
      contents: payload.contents,
    };
  },
};
