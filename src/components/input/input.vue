<template lang="pug">
  div.root
    div.container(:class="{withLabel: label !== '', wide}")
      label.contents
        input(
          :type="type"
          :value="value"
          @input="gotInputs"
          :placeholder="placeholder"
          :disabled="disabled"
          :class="{codeFont}"
        )
      span.label(v-if="label")
        span {{label}}
    slot
</template>
<style lang="stylus" scoped>
  .container {
    display: flex;
    align-items center;
    justify-content space-between;
    background: input-background-0;
    padding: 0.25em 0.5em;
  }

  .withLabel {
    border-bottom: underline-0;
  }

  .label {
    color: plain-text-0;
    margin-left: 2em;
  }

  .contents {
    flex: 1
  }

  .wide {
    width: calc(100vw - 1em);
    max-width: 50em;
  }

  .codeFont {
    font-family: code-font-family;
  }

  input {
    background: none;
    border: none;
    outline: none;
    color: inherit;
    margin: 0.2em 0;
    width: 100%;
    font-size: inherit;
  }
</style>
<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
    name: "SimpleInput",
    props: {
      label: {
        type: String,
        default: ""
      },
      value: {
        type: String
      },
      placeholder: {
        type: String,
        default: "/"
      },
      listenTo: {
        type: String,   // A string, not a method name.
        default: "input"
      },
      disabled: {
        type: Boolean,
        default: false
      },
      wide: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: "text"
      },
      codeFont: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      gotInputs(e: any) {
        this.$emit(this.listenTo, e.target.value);
      }
    }
  });
</script>
