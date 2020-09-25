<template>
  <div class="space-y-4">
    <div
      ref="elem"
      class="elevation-2 rounded flex items-center justify-center p-8 select-none cursor-pointer"
    >
      {{ lang.wannaRainbow }}
    </div>

    <v-code
      lang="js"
      class="min-w-0"
    >
      {{ code.js }}
    </v-code>

    <v-code
      lang="html"
      class="min-w-0"
    >
      {{ code.html }}
    </v-code>
  </div>
</template>

<script lang="ts">
import { useRipple } from 'vue-create-ripple';
import { defineComponent, computed, ref } from 'vue';
import { useI18n } from './I18n';

const jsCode = () => `
import { useRipple } from 'vue-create-ripple';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const elem = ref<HTMLElement | null>(null);

    [
      'purple',
      'indigo',
      'blue',
      'green',
      'yellow',
      'orange',
      'red'
    ].forEach((color, i) => {
      useRipple(elem, {
        appearDuration: \`\${0.8 + i * 0.3}s\`,
        disappearDuration: \`\${0.3 + i * 0.1}s\`,
        class: \`bg-\${color}-500\`
      });
    });

    return { elem };
  }
})
`;

const htmlCode = (wanna: unknown) => `
<div ref="elem">
  ${wanna}
</div>
`

export default defineComponent({
  setup() {
    const elem = ref<HTMLElement | null>(null);

    [
      'purple',
      'indigo',
      'blue',
      'green',
      'yellow',
      'orange',
      'red'
    ].forEach((color, i) => {
      useRipple(elem, {
        appearDuration: `${0.8 + i * 0.3}s`,
        disappearDuration: `${0.3 + i * 0.1}s`,
        class: `bg-${color}-500`
      })
    });

    const { current: lang } = useI18n({
      ru: {
        wannaRainbow: 'Хочу радугу!'
      },
      en: {
        wannaRainbow: 'I wanna rainbow!'
      }
    });

    return {
      lang,
      elem,
      code: computed(() => ({
        js: jsCode(),
        html: htmlCode(lang.value.wannaRainbow)
      }))
    }
  }
});
</script>