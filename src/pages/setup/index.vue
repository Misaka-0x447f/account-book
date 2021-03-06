<template lang="pug">
  .root
    .container
      floating
        .title {{e.welcome.welcome}}
        inp(
          :placeholder="e.welcome.loginFieldSample"
          :label="e.welcome.loginTip"
          @input="inputHandler"
          wide codeFont
          type="password"
        )
        .tip
          span(v-if="status === 3") {{e.welcome.loginPulling}}
          span(v-if="status === 2") {{e.welcome.loginInitial}}
          span(v-if="status === 1") {{e.welcome.loginRunning}}
          span(v-if="status === -1") {{`${e.welcome.loginFailure}${errMsg}`}}
          span(v-if="status === -2") {{e.welcome.loginInvalid}}
          span(v-else)
          but(inline :enabled="status <= 0" @click="clickHandler")
            span {{e.global.ok}}
</template>
<style lang="stylus" scoped>
  .container
    display flex
    flex-direction column
    align-items center
    justify-content center
    height 100%

  .title
    font-size 6em

  .tip
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1em;
</style>
<script lang="ts">
  // @/ is an alias to /src/
  import Vue from "vue";
  import button from "@/components/input/button.vue";
  import floating from "@/components/floating.vue";
  import input from "@/components/input/input.vue";

  import {e} from "@/utils/i18n";
  import {routerName} from "@/router";
  import {config, initialize, pull, validate} from "@/utils/db";
  import {azConnectStringSchema} from "@/interfaces";
  import {noUndefined} from "@/utils/assert";

  export default Vue.extend({
    name: "setup-index",
    components: {
      floating,
      inp: input,
      but: button
    },
    data: () => {
      return {
        e,
        val: "",
        loginTip: e.welcome.loginTip,
        errMsg: "",
        status: 0 // 3: pulling 2: initializing 1: connecting; 0: clear;
        // -1: failure; -2: incorrect format;
      };
    },
    methods: {
      inputHandler(v: string) {
        if (this.status < 0) {
          this.status = 0;
        }
        this.val = v;
      },
      async clickHandler() {
        if (!azConnectStringSchema.test(this.val)) {
          this.status = -2;
          return;
        }
        config(this.val);
        this.status = 1;
        try {
          await validate(this.val);
          config(this.val);
          this.status = 2;
          await initialize();
          this.status = 3;
          await pull();
          this.$router.push({name: routerName.dashboard});
        } catch (e) {
          this.status = -1;
          this.errMsg = noUndefined(e.message);
          throw e;
        }
      }
    }
  });
</script>
