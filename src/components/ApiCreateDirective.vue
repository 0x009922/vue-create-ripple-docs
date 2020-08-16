<template>
  <p>
    Основной инструмент пакета, который создаёт Ripple-директиву
    с какими-то параметрами по умолчанию. Эти параметры можно потом будет перезаписать при
    самом использовании созданной директиве.
  </p>

  <v-code lang="js">
    {{ code }}
  </v-code>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      code: `
import { createApp, defineComponent } from 'vue';
import { createRippleDirective } from 'vue-create-ripple';

// Можно установить глобально в приложении
createApp()
  .directive('ripple', createRippleDirective({
    class: 'black-ripple'
  }));

// Можно установить локально в компоненте
const Component = defineComponent({
  directives: {
    CenterRipple: createRippleDirective({
      center: true
    })
  }
})

// Подробнее об объекте опций см. ниже 
      `
    }
  }
})
</script>
