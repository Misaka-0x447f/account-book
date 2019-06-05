<template lang="pug">
  .root
    .container
      floating
        sw(@click="changeType")
          template(#consumable)
            span {{e.write.consumable}}
          template(#asset)
            span {{e.write.asset}}
        in(:label="e.read.keyword" @input="goSearch")
        csv(:obj="things")
        bu(@click="back")
          span {{e.global.back}}
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

  export default Vue.extend({
    name: "read",
    components: {
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
