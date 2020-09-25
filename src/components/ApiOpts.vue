<template>
  <p>
    Все доступные опции:
  </p>

  <v-code lang="ts">
    {{ rippleOptions }}
  </v-code>

  <p>
    Значения по умолчанию:
  </p>

  <v-code lang="ts">
    {{ rippleDefaults }}
  </v-code>
</template>

<script lang="ts">
import { mdiOpenInNew } from '@mdi/js';
import { defineComponent } from "vue";

const rippleOptions = () => `
export interface RippleOptions {
  disappearEasing?: string;
  disappearDuration?: string;
  appearEasing?: string;
  appearDuration?: string;
  class?: string | null;
  disabled?: boolean;
  center?: boolean;
  self?: boolean;
  noNested?: boolean;
  containerStyle?: Partial<CSSStyleDeclaration>;
  circleStyle?: Partial<CSSStyleDeclaration>;
  radius?: number | null;
}
`

const rippleDefaults = () => `
const defaults: RippleOptions = {
  disappearEasing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  disappearDuration: '.7s',
  appearEasing: 'cubic-bezier(0.16, 1, 0.3, 1)',
  appearDuration: '.8s',
  class: null,
  disabled: false,
  center: false,
  self: false,
  noNested: true,
  radius: null
};
`

export default defineComponent({
  setup() {
    return {
      rippleOptions: rippleOptions(),
      rippleDefaults: rippleDefaults(),
      mdiOpenInNew
    }
  }
})
</script>
