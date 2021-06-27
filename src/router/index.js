import Vue from "vue";
import VueRouter from "vue-router";
import Top from "../views/Top.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Articles from "../views/Articles.vue";
import Article from "../views/Article.vue";
import Error404 from "../views/Error404.vue";
// import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Top",
    component: Top,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { requiresAuth: false },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/articles",
    name: "Articles",
    component: Articles,
    meta: { requiresAuth: true },
  },
  {
    path: "/articles/:articleId",
    name: "Article",
    component: Article,
    meta: { requiresAuth: true },
  },
  {
    path: "/404",
    name: "Error404",
    component: Error404,
  },
  {
    // 定義されていないパスへの対応。トップページへリダイレクトする。
    // TODO: 404にする
    path: "*",
    redirect: "/404",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

/**
 * ASK:
 * 開発中は邪魔なので消す
 */
// router.beforeEach((to, from, next) => {
//   if (
//     to.matched.some((record) => record.meta.requiresAuth) &&
//     !store.getters.isLogin
//   ) {
//     next({ path: "/login" });
//   } else {
//     next();
//   }
// });

export default router;
