<template lang="pug">
  .root
    .container
      floating
        .buttons
          bu(:enabled="false") {{e.dashboard.read}}
          bu(@click="gotoWrite") {{e.dashboard.write}}
        div {{e.dashboard.recent}}
        csv(:obj="last")
</template>
<style lang="stylus" scoped>
  .buttons
    display: flex;
    width: 10em;
    justify-content: space-between;
</style>
<script lang="ts">
  import Vue from "vue";
  import button from "@/components/input/button.vue";
  import {e} from "@/utils/i18n";
  import floating from "@/components/floating.vue";
  import {routerName} from "@/router";
  import csv from "@/components/csv.vue";
  import {readLast30} from "@/utils/rec";

  export default Vue.extend({
    name: "dashboard-index",
    components: {
      bu: button,
      floating,
      csv
    },
    data: () => {
      return {
        e,
        last: readLast30("consumable")
      };
    },
    methods: {
      gotoWrite() {
        this.$router.push({name: routerName.write});
      }
    }
  });
</script>
