<template lang="pug">
  .root
    .container
      .node(:class="{inline}" :key="i" v-for="(v, i) in obj") {{toCSV(i, v)}}
</template>
<style lang="stylus" scoped>
  .inline {
    display: inline;
  }
</style>
<script lang="ts">
  import Vue from "vue";
  import {map} from "lodash";

  export default Vue.extend({
    name: "csv",
    props: {
      obj: {
        default: () => {
          return {
            message: "Empty",
          };
        }
      },
      inline: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        t: -1
      };
    },
    mounted() {
      this.t = setInterval(this.update, 333);
    },
    beforeDestroy() {
      clearInterval(this.t);
    },
    methods: {
      toCSV(key: string | number, obj: any) {
        let c = `${key}:`;
        if (typeof obj === "object") {
          map(obj, (v, i) => {
            c = `${c}${i}=${JSON.stringify(v)},`;
          });
        } else {
          c = `${c}${obj},`;
        }
        return c;
      },
      update() {
        this.$forceUpdate();
      }
    }
  });
</script>
