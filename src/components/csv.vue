<template lang="pug">
  .root
    .container
      .val(v-for="(v, i) in obj")
        .node(:key="i") {{toCSV(v)}}
</template>
<style lang="stylus" scoped>
</style>
<script lang="ts">
  import Vue from "vue";
  import {map} from "lodash";

  export default Vue.extend({
    name: "csv",
    props: {
      obj: {
        type: Object,
        default: () => {
          return {
            message: "Empty"
          };
        }
      }
    },
    methods: {
      toCSV(obj: object) {
        let c = "";
        map(obj, (v) => {
          c = `${c}${v},`;
        });
        return c;
      }
    }
  });
</script>
