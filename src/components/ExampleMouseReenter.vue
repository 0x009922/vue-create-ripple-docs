<template>
  <div class="flex space-x-4 items-center justify-center">
    <div
      :class="[classes]"
      v-ripple="{ class: 'bg-white opacity-25' }"
    >
      Ripple
    </div>

    <div
      :class="[classes, 'active:opacity-75 transition-opacity duration-150 ease-in-out']"
    >
      Default
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";


const classes = 'bg-indigo-600 text-white p-2 w-24 text-center rounded cursor-pointer select-none';

export default defineComponent({
  setup() {
    return {
      classes
    }
  }
})

</script>
