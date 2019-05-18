import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// noinspection JSUnusedGlobalSymbols
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/setup"
    },
    {
      path: "/setup",
      name: "setup",
      component: () => import("@/pages/setup/index.vue")
    }
  ],
});
