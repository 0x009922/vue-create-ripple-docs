<script lang="ts">
import Card from './ExampleNestedOnOffCard.vue';
import { defineComponent, FunctionalComponent, h } from 'vue';

const Component: FunctionalComponent = () => h(Card, {
  noNested: true
}, {
  default: () => 'Здесь проблем с вложенностью нет'
});

export default Component;
</script>
