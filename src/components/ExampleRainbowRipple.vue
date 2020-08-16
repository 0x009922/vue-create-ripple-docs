<template>
  <div class="space-y-4">
    <div
      class="border rounded flex items-center justify-center p-8 select-none cursor-pointer"
      v-ripple-purple
      v-ripple-indigo
      v-ripple-blue
      v-ripple-green
      v-ripple-yellow
      v-ripple-orange
      v-ripple-red
    >
      Хочу радугу!
    </div>

    <div class="grid md:grid-cols-5 gap-4">
      <v-code lang="js" class="md:col-span-3 min-w-0">
        {{ code.js }}
      </v-code>

      <v-code lang="html" class="md:col-span-2 min-w-0">
        {{ code.html }}
      </v-code>
    </div>
  </div>
</template>

<script lang="ts">
import { createRippleDirective } from 'vue-create-ripple';
import { defineComponent, Directive } from 'vue';

// createDirective()

// red orange yellow green blue indigo purple
const rainbow = `red
orange
yellow
green
blue
indigo
purple`.split(/\s+/m).reverse();

const directives: Record<string, Directive> = Object.fromEntries(
  rainbow.map((color, i) => {
    const name = `ripple-${color}`;
    const ripple = createRippleDirective({
      appearDuration: `${0.8 + i * 0.3}s`,
      disappearDuration: `${0.3 + i * 0.1}s`,
      class: `bg-${color}-500`
    });
    return [name, ripple];
  })
);

export default defineComponent({
  directives,
  setup: () => ({
    code: {
      js: `
const rainbow = \`red
orange
yellow
green
blue
indigo
purple\`.split(/\s+/m).reverse();

const directives = Object.fromEntries(
  rainbow.map((color, i) => {
    const name = \`ripple-\${color}\`;
    const ripple = createRippleDirective({
      appearDuration: \`\${0.8 + i * 0.3}s\`,
      disappearDuration: \`\${0.3 + i * 0.1}s\`,
      class: \`bg-\${color}-500\`
    });
    return [name, ripple];
  })
);

export default defineComponent({
  directives
});
      `,
      html: `
<div
  v-ripple-purple
  v-ripple-indigo
  v-ripple-blue
  v-ripple-green
  v-ripple-yellow
  v-ripple-orange
  v-ripple-red
>
  Хочу радугу!
</div>
      `
    }
  })
})

</script>