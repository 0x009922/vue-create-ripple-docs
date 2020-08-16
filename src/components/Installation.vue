<template>
  <p>
    Сперва надо установить сам пакет:
  </p>

  <div class="grid gap-4 md:grid-cols-2">
    <div class="space-y-2">
      <span>npm</span>
      <v-code>
        npm install vue-create-ripple
      </v-code>
    </div>
    <div class="space-y-2">
      <span>yarn</span>
      <v-code>
        yarn add vue-create-ripple
      </v-code>
    </div>
  </div>

  <p>
    Затем использовать утилиту <code>createRippleDirective</code>:
  </p>

  <v-code lang="js">
    {{ codeApp }}
  </v-code>

  <p>
    Или использовать готовую директиву с параметрами по умолчанию:
  </p>

  <v-code lang="js">
    {{  codeComponent }}
  </v-code>

  <p>
    Чтобы затем использовать в шаблоне:
  </p>

  <v-code lang="html">
    {{ codeTemplate }}
  </v-code>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      codeApp: `
// main
import { createApp } from 'vue';
import { createRippleDirective } from 'vue-create-ripple';

const app = createApp();

// Можно указать все необходимые опции по умолчанию, см. API
const opts = { class: 'my-ripple-class' };
app.directive('AppRipple', createRippleDirective(opts));
      `,
      codeComponent: `
// component
import { defineComponent } from 'vue';
import { Ripple } from 'vue-create-ripple';

export default defineComponent({
  directives: {
    LocalDefaultRipple: Ripple
  }
});
      `,
      codeTemplate: `
<div>
  <button v-local-default-ripple>
    Local
  </button>
  <button v-app-ripple>
    App
  </button>
</div>
      `
    }
  }
})
</script>
