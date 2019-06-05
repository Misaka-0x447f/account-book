<template lang="pug">
  .root
    .container
      floating
        sw(@click="changeType")
          template(#consumable)
            span {{e.c.consumable}}
          template(#asset)
            span {{e.c.asset}}
        in(:label="e.r.keyword" @input="goSearch")
        csv(:obj="things")
        back
</template>
<style lang="stylus" scoped>
</style>
<script lang="ts">
  import Vue from "vue";
  import floating from "@/components/floating.vue";
  import csv from "@/components/csv.vue";
  import input from "@/components/input/input.vue";
  import {e} from "@/utils/i18n";
  import {search} from "@/utils/rec";
  import {noUndefined} from "@/utils/assert";
  import {Database} from "@/interfaces/db";
  import switcher from "@/components/input/switcher.vue";
  import {routerName} from "@/router";
  import button from "@/components/input/button.vue";
  import back from "@/components/back.vue";

  export default Vue.extend({
    name: "r",
    components: {
      back,
      csv,
      sw: switcher,
      floating,
      in: input,
      bu: button
    },
    data: () => {
      return {
        e,
        type: 0,
        things: {}
      };
    },
    computed: {
      tp() {
        return noUndefined(["consumable", "asset"][this.type] as keyof Database);
      }
    },
    methods: {
      goSearch(c: string) {
        // @ts-ignore
        this.things = search(this.tp, c);
      },
      changeType(v: number) {
        this.type = v;
      },
      back() {
        this.$router.push({name: routerName.dashboard});
      },
    }
  });
</script>
