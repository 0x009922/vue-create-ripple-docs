<script lang="ts">
import { FunctionalComponent, h, resolveComponent } from "vue";

interface LinkProps {
  id: string;
}

const Link: FunctionalComponent<LinkProps> = (props, { slots }) => {
  return h('li', {}, [
    h(resolveComponent('v-a'), {
      href: `#${props.id}`,
      class: 'hover:pl-1 transition-all duration-100 ease-md-standard'
    }, slots)
  ])
}

Link.props = {
  id: {
    type: String,
    required: true
  }
}

export default Link;
</script>