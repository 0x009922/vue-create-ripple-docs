<template>
  <p>
    Также в пакете доступна уже готовая директива со значениями по умолчанию.
    Это просто short-hand для <code>createRippleDirective()</code>:
  </p>

  <v-code lang="js">{{ code }}</v-code>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      code: `
import { defineComponent } from 'vue';
import { Ripple, createRippleDirective } from 'vue-create-ripple';

const Component = defineComponent({
  directives: {
    // По параметрам по умолчанию это две одинаковые директивы
    Ripple,
    AnotherRipple: createRippleDirective()
  }
});
      `
    }
  }
})
</script>
