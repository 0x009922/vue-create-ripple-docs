<template>
  <div class="grid grid-cols-2 gap-4">
    <div
      class="bg-blue-200 text-blue-600 flex items-center justify-center cursor-pointer select-none rounded"
      v-ripple="{
        circleStyle: {
          border: '10px dotted blue'
        },
        radius: 50
      }"
    >
      Жмякни
    </div>

    <!-- <div class="flex space-x-2">
      <template v-for="color in colors">
        <div
          v-ripple="{ class: `bg-${color}-500 opacity-50` }"
          :class="`bg-${color}-200 text-${color}-600 text-center p-3 flex-1 cursor-pointer select-none`"
        >
          {{ color }}
        </div>
      </template>
    </div> -->

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
