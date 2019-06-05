<template lang="pug">
  .root
    .container
      floating
        sw(@click="changeType")
          template(#asset)
            span {{e.write.asset}}
          template(#consumable)
            span {{e.write.consumable}}
        in(v-model="val" :label="e.write.val")
        in(v-model="note" :label="e.write.note")
        .buttons
          bu(@click="back")
            span {{e.global.back}}
          bu
            span {{e.global.ok}}
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

  export default Vue.extend({
    name: "write",
    components: {
      sw: switcher,
      floating,
      in: input,
      bu: button
    },
    data: () => {
      return {
        e,
        type: -1,
        val: "",
        note: ""
      };
    },
    methods: {
      changeType(v: number) {
        this.type = v;
      },
      back() {
        this.$router.push({name: routerName.dashboard});
      }
    }
  });
</script>
