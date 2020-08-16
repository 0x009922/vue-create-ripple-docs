<template>
  <div class="grid md:grid-cols-2 gap-4">
    <div
      class="bg-blue-200 p-16 text-blue-600 flex items-center justify-center cursor-pointer select-none rounded"
      v-ripple="{
        circleStyle: {
          border: '10px dotted blue'
        },
        radius: 50
      }"
    >
      Жмякни
    </div>

    <v-code lang="html">
      {{ code }}
    </v-code>
  </div>
</template>

<script lang="ts">

const colors = ['red', 'orange', 'green', 'blue', 'purple'];

const code = `
<div
  v-ripple="{
    circleStyle: {
      border: '10px dotted blue'
    },
    radius: 50
  }"
>
  Жмякни
</div>
`

export default {
  setup() {
    return {
      code
    }
  }
}
</script>
