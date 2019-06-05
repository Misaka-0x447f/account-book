<template lang="pug">
  .root
    .container
      csv(:obj="cats" inline)
      in(:label="e.key" v-model="key")
      in(:label="e.label" v-model="label")
      .buttons
        bu(@click="write") {{e.write}}
      .error(v-if="errorMsg !== ''") {{errorMsg}}
</template>
<style lang="stylus" scoped>
</style>
<script lang="ts">
  import Vue from "vue";
  import {e} from "@/utils/i18n";
  import input from "@/components/input/input.vue";
  import {readAll, write} from "@/utils/cat";
  import csv from "@/components/csv.vue";
  import button from "@/components/input/button.vue";
  import {Database} from "@/interfaces/db";

  export default Vue.extend({
    name: "cat",
    props: {
      tp: {
        type: String
      }
    },
    components: {
      in: input,
      csv,
      bu: button
    },
    data: () => {
      return {
        e: e.cat,
        key: "",
        label: "",
        errorMsg: "",
        cats: {},
        t: -1
      };
    },
    mounted() {
      this.t = setInterval(this.response, 333);
    },
    beforeDestroy() {
      clearInterval(this.t);
    },
    methods: {
      async write() {
        try {
          // @ts-ignore
          await write(this.tp, this.key, this.label === "" ? undefined : this.label);
        } catch (e) {
          this.errorMsg = e.message;
          throw e;
        }
      },
      response() {
        this.cats = readAll(this.tp as keyof Database);
        this.$forceUpdate();
      }
    }
  });
</script>
