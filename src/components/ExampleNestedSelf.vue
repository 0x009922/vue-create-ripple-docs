<template>
  <div class="grid md:grid-cols-2 gap-4">
    <div
      class="border rounded cursor-pointer select-none border-green-300 p-8 grid sm:grid-cols-3 gap-8"
      v-ripple.self="{
        class: 'bg-green-500 opacity-25',
        appearDuration: '2s',
      }"
    >
      <div
        v-for="i in 3"
        class="bg-green-200 text-green-700 p-4 rounded text-center"
        v-ripple="{
          class: 'bg-green-500 opacity-50'
        }"
      >
        child
      </div>
    </div>

    <v-code lang="html" class="min-w-0">
      {{ code }}
    </v-code>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup: () => ({
    code: `
<div v-ripple.self>
  <div v-for="i in 3" v-ripple>
    child
  </div>
</div>
    `
  })
})
</script>