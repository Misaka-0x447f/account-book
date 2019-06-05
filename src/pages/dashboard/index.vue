<template lang="pug">
  .root
    .container
      floating
        .buttons
          bu(@click="goto('c')") {{e.dashboard.c}}
          bu(@click="goto('r')") {{e.dashboard.r}}
          bu(:enabled="false") {{e.dashboard.u}}
          bu(@click="goto('d')") {{e.dashboard.d}}
        div {{e.dashboard.recent}}
        csv(:obj="last")
</template>
<style lang="stylus" scoped>
  .buttons
    display: flex;
    width: 13em;
    justify-content: space-between;
    margin-bottom: 2em;
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
        this.$router.push({name: routerName.c});
      },
      gotoRead() {
        this.$router.push({name: routerName.r});
      },
      goto(a: string) {
        // @ts-ignore
        this.$router.push({name: routerName[a]});
      }
    }
  });
</script>
