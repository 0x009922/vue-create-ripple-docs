<template>
  <div class="space-y-4">
    <div class="grid md:grid-cols-3 gap-4">
      <but v-local-ripple>
        Кнопка без центрирования
      </but>

      <but v-local-ripple="{ center: true }">
        Центрирование через флаг
      </but>

      <but v-local-ripple.center>
        Или через модификатор
      </but>
    </div>

    <v-code lang="html">
      {{ code }}
    </v-code>
  </div>
</template>

<script lang="ts">
import { defineComponent, FunctionalComponent, h, mergeProps } from "vue";
import { createRippleDirective } from "vue-create-ripple";

const But: FunctionalComponent = (props, { slots, attrs }) => {
  return h('div', mergeProps(attrs, {
    class: 'rounded bg-orange-200 text-orange-600 cursor-pointer select-none p-3 text-center'
  }), slots)
}

const LocalRipple = createRippleDirective({
  class: 'bg-orange-600 opacity-50'
})

const code = `
<div v-ripple>
  Кнопка без центрирования
</div>

<div v-ripple="{ center: true }">
  Центрирование через флаг
</div>

<div v-ripple.center>
  Или через модификатор
</div>
`

export default defineComponent({
  directives: {
    LocalRipple,
  },
  components: {
    But
  },
  data: () => ({ code })
})
</script>
