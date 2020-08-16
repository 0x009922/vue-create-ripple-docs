<template>
  <p>
    Булевые опции <code>center</code>, <code>self</code>
    и <code>noNested</code> можно указывать через модификаторы:
  </p>

  <v-code lang="html">
    {{ code }}
  </v-code>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      code: `
<div v-ripple.self />
<div v-ripple.center />
<div v-ripple.self.center />

<!-- Эти варианты идентичны -->
<div v-ripple="{ self: true }" />
<div v-ripple.self />

<!-- noNested преобразуется в kebab-case -->
<div v-ripple="{ noNested: true }" />
<div v-ripple.no-nested />
      `
    }
  }
})
</script>
