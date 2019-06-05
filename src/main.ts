import Vue from "vue";
import Host from "./Host.vue";
import router, {routerName} from "./router";
import {isNull} from "lodash";
import {az} from "@/utils/db";

Vue.config.productionTip = false;

// noinspection JSUnusedGlobalSymbols
new Vue({
  router,
  mounted() {
    this.$router.push({name: routerName.setup});
  },
  watch: {
    $route() {
      if (isNull(az)) {
        this.$router.push({name: routerName.setup});
      }
    }
  },
  render: (h) => h(Host),
}).$mount("#host");
