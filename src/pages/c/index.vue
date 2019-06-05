<template lang="pug">
  .root
    .container
      floating
        sw(@click="changeType")
          template(#consumable)
            span {{e.c.consumable}}
          template(#asset)
            span {{e.c.asset}}
        .inputs(@input="someInput")
          in(v-model="label" :label="e.c.label")
          in(v-model="value" :label="e.c.val")
          in(v-model="cat" :label="e.c.cat")
          in(v-model="note" :label="e.c.note")
        .buttons
          back
          bu(@click="ok")
            span {{e.global.ok}}
        .error(v-if="errorMsg !== ''") {{`${e.c.writeError}:${errorMsg}`}}
        .cat
          cat(:tp="tp")
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
  import csv from "@/components/csv.vue";
  import {noUndefined} from "@/utils/assert";
  import cat from "@/components/cat.vue";
  import {Database} from "@/interfaces/db";
  import {write} from "@/utils/rec";
  import back from "@/components/back.vue";

  export default Vue.extend({
    name: "create",
    components: {
      back,
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
        return noUndefined(["consumable", "asset"][this.type] as keyof Database);
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
      async ok() {
        try {
          // @ts-ignore
          await write(this.tp, this.label, this.value, this.cat, this.note);
          // @ts-ignore
          this.$router.go(-1);
        } catch (e) {
          this.errorMsg = noUndefined(e.message);
          throw e;
        }
      }
    }
  });
</script>
