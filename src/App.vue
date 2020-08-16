<template>
  <i18n-container :lang="lang">
    <contents-container>
      <main class="max-w-screen-md overflow-hidden mx-auto p-4">
        <language-picker
          v-model:value="lang"
          :options="languages"
        />

        <article class="space-y-6">
          <h1 class="text-2xl md:text-5xl font-mono">vue-create-ripple</h1>

          <div
            class="text-gray-600"
          >Гибкий инструментарий для создания Ripple(TODO - плавает)-эффекта в Vue 3.</div>

          <hr>

          <v-section>
            <contents-header ignore>
              <i18n>
                <template #ru>
                  Содержание
                </template>
                <template #en>
                  Contents
                </template>
              </i18n>
            </contents-header>

            <contents-renderer />
          </v-section>

          <hr>

          <v-section>
            <contents-header id="install">
              <i18n>
                <template #ru>
                  Установка
                </template>
                <template #en>
                  Installation
                </template>
              </i18n>
            </contents-header>

            <installation />
          </v-section>

          <hr>

          <v-section>
            <contents-header id="examples">
              Примеры
            </contents-header>

            <v-section>
              <contents-header id="basic" level2>
                Базовое применение
              </contents-header>

              <p>Можно задать стиль через классы:</p>

              <example-via-classes />

              <p>А можно прямо указывать стиль, к тому же уменьшив максимальный радиус (относительно):</p>

              <example-via-inline-style />
            </v-section>
            <v-section>
              <contents-header id="easings-durations" level2>
                Изменение длительности и функции плавности
              </contents-header>

              <p>Иногда хочется помедленнее... иногда побыстрее. А иногда странно.</p>

              <example-easings-durations />
            </v-section>
            <v-section>
              <contents-header id="center" level2>
                Центрирование
              </contents-header>

              <p>
                Если нужно, чтобы круг всегда исходил из центра элемента, вне зависимости от
                место нажатия, нужно указать флаг
                <code>center</code>:
              </p>

              <example-center />
            </v-section>
            <v-section>
              <contents-header id="mouseenter-mouseleave" level2>
                События <code>mouseenter</code> и <code>mouseleave</code>
              </contents-header>

              <p>
                Эффект будет возникать вновь, если пользователь уведёт и наведёт мышь обратно,
                не отпуская при этом кнопку. Это говорит ему о том, что кнопка по-прежнему активна
                и клик произойдёт, если отпустить кнопку на элементе:
              </p>

              <example-mouse-reenter />
            </v-section>
            <v-section>
              <contents-header id="nested-ripples" level2>
                Вложенные рипплы
              </contents-header>

              <p>
                Иногда возникает ситуация, что внутри элемента, к которому привязана ripple-директива,
                находятся другие элементы, к которым также привязана директива. Происходит так, что при
                нажатии на вложенном, эффект срабатывает и на его родителе, что может дезориентировать:
              </p>

              <example-nested-off />

              <p>
                Для того, чтобы так не происходило, в опциях доступен флаг
                <code>noNested</code>
                (по умолчанию
                <code>true</code>), который предотвращает срабатывание эффекта на родительских
                элементах:
              </p>

              <example-nested-on />

              <p>
                Также доступен флаг
                <code>self</code>, который говорит директиве срабатывать только при
                клике точно на тот элемент, к которому она привязана:
              </p>

              <example-nested-self />

              <p>
                Стоит также упомянуть о небольшом лайфхаке, с которым не нужно использовать ни
                <code>noNested</code>, ни
                <code>self</code> &mdash; это остановка всплытия события
                <code>mousedown</code> на дочерних элементах изящными средствами Vue:
              </p>

              <example-nested-mousedown />
            </v-section>
            <v-section>
              <contents-header id="multi-ripples" level2>
                Двойные, тройные, etc рипплы
              </contents-header>

              <p>
                К одному элементу можно привязать одновременно несколько директив с разными параметрами:
              </p>

              <example-rainbow-ripple />
            </v-section>
          </v-section>

          <hr>

          <v-section>
            <contents-header id="api">
              API
            </contents-header>

            <p class="text-gray-600">
              <i18n>
                <template #ru>
                  Скоро будет
                </template>
                <template #en>
                  Soon
                </template>
              </i18n>
            </p>
          </v-section>

          <hr>

          <v-section>
            <contents-header id="playground">
              Поиграться
            </contents-header>

            <p class="text-gray-600">
              <i18n>
                <template #ru>
                  Скоро будет
                </template>
                <template #en>
                  Soon
                </template>
              </i18n>
            </p>
          </v-section>
        </article>
      </main>
    </contents-container>
  </i18n-container>
</template>

<script lang="ts">
import { defineComponent, FunctionalComponent, h, provide, ref } from "vue";
import VSection from "./components/VSection.vue";
import ExampleViaClasses from "./components/ExampleViaClasses.vue";
import ExampleViaInlineStyle from "./components/ExampleViaInlineStyle.vue";
import ExampleEasingsDurations from "./components/ExampleEasingsDurations.vue";
import ExampleCenter from "./components/ExampleCenter.vue";
import ExampleMouseReenter from "./components/ExampleMouseReenter.vue";
import ExampleRainbowRipple from "./components/ExampleRainbowRipple.vue";
import ExampleNestedOff from './components/ExampleNestedOff.vue';
import ExampleNestedOn from './components/ExampleNestedOn.vue';
import ExampleNestedSelf from './components/ExampleNestedSelf.vue';
import ExampleNestedMousedown from './components/ExampleNestedMousedown.vue';
import { ContentsContainer, ContentsRenderer, ContentsHeader } from './components/Contents';
import { I18n, I18nContainer } from './components/I18n';
import LanguagePicker from './components/TheLanguagePicker.vue';
import Installation from './components/Installation.vue';

export default defineComponent({
  components: {
    ExampleViaClasses,
    ExampleViaInlineStyle,
    ExampleEasingsDurations,
    ExampleCenter,
    ExampleMouseReenter,
    ExampleRainbowRipple,
    VSection,
    ExampleNestedOff,
    ExampleNestedOn,
    ExampleNestedSelf,
    ExampleNestedMousedown,
    ContentsContainer,
    ContentsRenderer,
    ContentsHeader,
    I18n,
    I18nContainer,
    LanguagePicker,
    Installation
  },
  setup() {
    const languages = ['ru', 'en'];
    const lang = ref('ru');

    // TODO: Брать язык из локализации браузера и сохранять выбор в localStorage

    return { languages, lang }
  }
});
</script>
