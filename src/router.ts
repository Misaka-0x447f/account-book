import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export const routerName = {
  setup: "setup",
  dashboard: "dashboard",
  c: "c",
  r: "r",
  d: "d"
};

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
      name: routerName.setup,
      component: () => import("@/pages/setup/index.vue")
    },
    {
      path: "/dashboard",
      name: routerName.dashboard,
      component: () => import("@/pages/dashboard/index.vue")
    },
    {
      path: "/c",
      name: routerName.c,
      component: () => import("@/pages/c/index.vue")
    },
    {
      path: "/r",
      name: routerName.r,
      component: () => import("@/pages/r/index.vue")
    },
    {
      path: "/d",
      name: routerName.d,
      component: () => import("@/pages/d/index.vue")
    }
  ],
});
