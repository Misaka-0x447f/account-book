<template lang="pug">
  .root
    .container
      floating
        .buttons
          bu(:enabled="false") {{e.dashboard.read}}
          bu(@click="gotoWrite") {{e.dashboard.write}}
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

  export default Vue.extend({
    name: "dashboard-index",
    components: {
      bu: button,
      floating
    },
    data: () => {
      return {e};
    },
    methods: {
      gotoWrite() {
        this.$router.push({name: routerName.write});
      }
    }
  });
</script>
