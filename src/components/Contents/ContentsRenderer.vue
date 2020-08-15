<script lang="ts">
import { defineComponent, inject, h } from "vue";
import useContents from "src/tools/use-contents";
import Link from './ContentsRendererLink.vue';
import { ProvideSymbol } from './shared';

export default defineComponent({
  setup() {
    const contents = inject<ReturnType<typeof useContents>>(ProvideSymbol)!;

    return () => {
      return h('ul', {
        class: 'list-disc list-inside space-y-2'
      }, contents.registered.map(
        (x) => {
          const label = h(Link, { id: x.id }, {
            default: x.render
          });
          if (!x.children) return label;

          return [
            label,
            h('ul', {
              class: 'list-circle list-inside ml-6 space-y-2'
            }, x.children.map((y) => h(Link, { id: y.id }, {
              default: y.render
            })))
          ]
        }
      ))
    }
  }
})
</script>
