<template>
  <div class="py-4 space-y-2">
    <p>
      Для создания ripple-эффекта на любом элементе достаточно привязать
      к нему директиву с указанием
      стилистики через класс:
    </p>

    <v-code>
      {{ code1 }}
    </v-code>

    <div
      v-ripple="{ class: 'bg-gray-900 opacity-50' }"
      class="p-4 bg-gray-600 text-white cursor-pointer select-none"
    >
      Нажми на меня
    </div>

    <p>
      Можно указать стили прямо в коде:
    </p>

    <v-code>
      <template v-pre>
        <div>
          heh
        </div>
      </template>
    </v-code>

    <div
      v-ripple="{ circleStyle: { background: 'white', opacity: 0.3 } }"
      class="p-4 bg-gray-800 text-white cursor-pointer select-none"
    >
      А здесь стиль риппла указан в inline-моде
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      code1: `
<template>
  <div v-ripple="{ class: 'my-ripple-class' }">
    Нажми на меня
  </div>
</template>

<style>
.my-ripple-class {
  background: black;
  opacity: 0.5;
}
</style>
      `,
      code2: `
<div v-ripple="{ circleStyle: { background: 'white', opacity: 0.12 } }">
  А здесь стиль риппла указан в inline-моде
</div>
      `,
    }
  }
}
</script>
