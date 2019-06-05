<template lang="pug">
  .root
    .container
      floating
        sw(@click="changeType")
          template(#asset)
            span {{e.write.asset}}
          template(#consumable)
            span {{e.write.consumable}}
        .inputs(@input="someInput")
          in(v-model="label" :label="e.write.label")
          in(v-model="value" :label="e.write.val")
          in(v-model="cat" :label="e.write.cat")
          in(v-model="note" :label="e.write.note")
        .cat
          div {{e.cat.index}}
          cat(:tp="tp")
        .buttons
          bu(@click="back")
            span {{e.global.back}}
          bu(@click="ok")
            span {{e.global.ok}}
        .error(v-if="errorMsg !== ''") {{`${e.write.writeError}:${errorMsg}`}}
</template>
<style lang="stylus" scoped>
  .buttons
    display: flex;
</style>
<script lang="ts">
  import Vue from "vue";
  import switcher from "@/components/input/switcher.vue";
  import {e} from "@/utils/i18n";
  import floating from "@/components/floating.vue";
  import input from "@/components/input/input.vue";
  import button from "@/components/input/button.vue";
  import {routerName} from "@/router";
  import csv from "@/components/csv.vue";
  import {noUndefined} from "@/utils/assert";
  import cat from "@/components/cat.vue";
  import {Database} from "@/interfaces/db";
  import {write} from "@/utils/rec";

  export default Vue.extend({
    name: "write-record",
    components: {
      csv,
      cat,
      sw: switcher,
      floating,
      in: input,
      bu: button
    },
    data: () => {
      return {
        e,
        type: 0,
        label: "",
        value: "",
        cat: "",
        note: "",
        errorMsg: ""
      };
    },
    computed: {
      tp() {
        return noUndefined(["asset", "consumable"][this.type] as keyof Database);
      }
    },
    methods: {
      someInput() {
        this.errorMsg = "";
      },
      changeType(v: number) {
        this.type = v;
        this.errorMsg = "";
      },
      back() {
        this.$router.push({name: routerName.dashboard});
      },
      async ok() {
        try {
          // @ts-ignore
          await write(this.tp, this.label, this.value, this.cat, this.note);
          // @ts-ignore
          this.back();
        } catch (e) {
          this.errorMsg = noUndefined(e.write);
          throw e;
        }
      }
    }
  });
</script>
