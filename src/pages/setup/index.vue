<template lang="pug">
  div.root
    div.container
      floating
        div.title {{e.welcome.welcome}}
        inp(
          :placeholder="e.welcome.loginFieldSample"
          :label="e.welcome.loginTip"
          @input="inputHandler"
          wide codeFont
          type="password"
        )
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
  
</style>
<script lang="ts">
  // @/ is an alias to /src/
  import Vue from "vue";
  import {e} from "@/utils/i18n";
  import floating from "@/components/floating.vue";
  import input from "@/components/input.vue";
  
  export default Vue.extend({
    name: "home",
    components: {
      floating,
      inp: input
    },
    data: () => {
      return {
        e,
        loginTip: e.welcome.loginTip
      };
    },
    methods: {
      inputHandler(v: string) {
        
      }
    }
  });
</script>
