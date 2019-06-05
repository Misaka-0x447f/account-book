<template lang="pug">
  .root
    .container
      bu(@click="back") {{e.global.back}}
</template>
<style lang="stylus" scoped>
</style>
<script lang="ts">
  import Vue from "vue";
  import button from "@/components/input/button.vue";
  import {e} from "@/utils/i18n";

  export default Vue.extend({
    name: "back",
    components: {
      bu: button
    },
    data: () => {
      return {e};
    },
    methods: {
      back() {
        this.$router.go(-1);
      }
    }
  });
</script>
