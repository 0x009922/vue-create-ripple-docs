<script lang="ts">
import { defineComponent, h, FunctionalComponent } from 'vue';
import Prism from 'prismjs';
import '../assets/prism-github.scss';

function warn(...args: unknown[]) {
  console.warn('[VCode]', ...args);
}

interface CodeProps {
  lang?: string;
}

const component: FunctionalComponent<CodeProps> = (props, { slots }) => {
  if (!slots.default) {
    warn('Default slot undefined');
    return null;
  }

  const [vnode] = slots.default();

  if (typeof vnode.children !== 'string') {
    warn('Content is not a string');
    return null;
  }

  const contentText = vnode.children.trim();
  const content = props.lang
    ? h('div', {
      innerHTML: Prism.highlight(contentText, Prism.languages[props.lang], props.lang)
    })
    : contentText;

  const langBanner = props.lang
    ? h('span', {
      class: 'absolute top-0 right-0 p-2 font-sans'
    }, [props.lang])
    : null

  // if (props.lang) {
  //   return h('pre', {
  //     innerHTML: Prism.highlight(content, Prism.languages[props.lang], props.lang)
  //   })
  //   // console.log(Prism.highlight(content, Prism.languages.javascript, props.lang));
  // }

  return h('div', {
    class: 'v-code'
  }, [
    h('pre', {
      class: 'h-full p-2 shadow-inner relative bg-gray-100 text-sm rounded'
    }, [content, langBanner])
  ])
}

component.props = {
  lang: {
    type: String,
    default: null
  }
}

export default component;
</script>
