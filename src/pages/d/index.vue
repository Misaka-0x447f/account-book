<template lang="pug">
  .root
    .container
      floating
        sw(@click="changeType")
          template(#consumable)
            span {{e.c.consumable}}
          template(#asset)
            span {{e.c.asset}}
        in(:label="e.d.index" v-model="val")
        .buttons
          bu(@click="doIt") {{e.d.remove}}
          back
        .err(v-if="errMsg !== ''") {{errMsg}}
</template>
<style lang="stylus" scoped>
  .buttons
    display flex;
</style>
<script lang="ts">
  import Vue from "vue";
  import button from "@/components/input/button.vue";
  import input from "@/components/input/input.vue";
  import {e} from "@/utils/i18n";
  import {remove} from "@/utils/rec";
  import switcher from "@/components/input/switcher.vue";
  import floating from "@/components/floating.vue";
  import {Database} from "@/interfaces/db";
  import {noUndefined} from "@/utils/assert";
  import back from "@/components/back.vue";

  export default Vue.extend({
    name: "index",
    components: {
      bu: button,
      in: input,
      floating,
      sw: switcher,
      back
    },
    data: () => {
      return {
        e,
        val: "",
        type: 0,
        errMsg: ""
      };
    },
    watch: {
      val() {
        this.errMsg = "";
      }
    },
    computed: {
      tp() {
        return noUndefined(["consumable", "asset"][this.type] as keyof Database);
      }
    },
    methods: {
      changeType(v: number) {
        this.type = v;
        this.errMsg = "";
      },
      async doIt() {
        try {
          // @ts-ignore
          await remove(this.tp, this.val);
          this.$router.go(-1);
        } catch (e) {
          this.errMsg = JSON.stringify(e.message);
          throw e;
        }
      }
    }
  });
</script>
