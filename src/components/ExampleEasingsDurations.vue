<template>
  <div class="example-easings-durations">
    <block
      v-ripple="{
        appearDuration: '10s',
        disappearDuration: '5s',
      }"
    >Ме-е-ед-ле-н-но</block>

    <v-code lang="html">{{ slow }}</v-code>

    <block
      v-ripple="{
        appearDuration: '.4s',
        disappearDuration: '.2s',
      }"
    >Быстр-р-ро!</block>

    <v-code lang="html">{{ fast }}</v-code>

    <block
      class="bumba"
      v-ripple="{
        appearEasing: 'steps(7)',
        disappearDuration: '1.5s',
      }"
    >Будто бы глючно</block>

    <v-code lang="html">{{ epileptic}}</v-code>

    <div class="col-span-2 grid grid-cols-4 gap-4">
      <block
        v-ripple="{
          appearEasing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
          appearDuration: '.3s',
          disappearEasing: 'cubic-bezier(0, 0.55, 0.45, 1)',
          disappearDuration: '.8s',
          radius: 56,
        }"
      >Эластично</block>

      <v-code lang="html" class="col-span-3">{{ elastic }}</v-code>
    </div>
  </div>
</template>

<script lang="ts">
import { h, mergeProps, defineComponent } from "vue";
import { createRippleDirective } from "vue-create-ripple";

export default defineComponent({
  directives: {
    Ripple: createRippleDirective({ class: "bg-indigo-600 opacity-25" })
  },
  components: {
    // ESlow,
    Block: (props, { slots, attrs }) =>
      h(
        "div",
        mergeProps(attrs, {
          class:
            "example-easings-durations__block",
        }),
        slots
      ),
  },
  setup() {
    return {
      slow: `
<div
  v-ripple="{
    appearDuration: '10s',
    disappearDuration: '5s',
  }"
>
  Ме-е-ед-ле-н-но
</div>
`,

      fast: `
<div
  v-ripple="{
    appearDuration: '.3s',
    disappearDuration: '.2s',
  }"
>
  Быстр-р-ро!
</div>
`,

      epileptic: `
<div
  v-ripple="{
    appearEasing: 'steps(7)',
    disappearDuration: '1.5s',
  }"
>
  Будто бы глючно
</div>
`,

      elastic: `
<div
  v-ripple="{
    appearEasing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    appearDuration: '.3s',
    disappearEasing: 'cubic-bezier(0, 0.55, 0.45, 1)',
    disappearDuration: '.8s',
    radius: 56,
  }"
>
  Эластично
</div>
`,
    };
  },
});
</script>

<style lang="sass">
.example-easings-durations
  @apply grid grid-cols-2 gap-4
  &__block
    @apply p-4 flex items-center justify-center cursor-pointer select-none rounded bg-indigo-200 text-indigo-600
</style>
