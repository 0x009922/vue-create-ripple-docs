<script lang="ts">
import { FunctionalComponent, h } from "vue";

interface LinkProps {
  id: string;
}

const Link: FunctionalComponent<LinkProps> = (props, { slots }) => {
  return h('li', {}, [
    h('a', {
      href: `#${props.id}`,
      class: 'inline-block text-blue-600 visited:text-purple-600 hover:pl-1 transition-all duration-100 ease-md-standard'
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