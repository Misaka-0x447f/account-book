<template lang="pug">
  .root
    .container
      .node(
        v-for="(v, i) in slotList"
        :key="i"
        :class="{enabled, active: selected === i}"
        :tabindex="enabled ? 0 : -1"
        @click="clicked(i)"
        @keypress.enter="clicked(i)"
      )
        slot(:name="v")
</template>
<style lang="stylus" scoped>
  .node {
    border: button-0-border;
    color: button-0-disabled;
    padding: 0.5em 1em;
    display: inline-block;
    cursor: not-allowed;
    user-select: none;
  }

  .node.enabled {
    border: button-0-border;
    color: button-0;
    cursor: pointer;
  }

  .node.enabled:not(.active):hover {
    background: button-background-0;
  }

  .node.enabled:not(.active):hover {
    background: button-background-red;
  }

  .node:focus {
    border: button-0-focused;
    outline: none;
  }
  
  .node.active {
    color: switch-active;
    background: switch-active-background;
  }
</style>
<script lang="ts">
  import Vue from "vue";
  import {keys} from "lodash";

  export default Vue.extend({
    name: "Button",
    props: {
      enabled: {
        type: Boolean,
        default: true
      }
    },
    data: () => {
      return {
        selected: -1
      };
    },
    computed: {
      slotList(): string[] {
        return keys(this.$slots);
      }
    },
    methods: {
      clicked(i: number) {
        if (this.enabled) {
          this.selected = i;
          this.$emit("click", this.selected);
        }
      }
    }
  });
</script>
