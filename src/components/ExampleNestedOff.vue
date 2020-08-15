<script lang="ts">
import Card from './ExampleNestedOnOffCard.vue';
import { defineComponent, FunctionalComponent, h } from 'vue';

const Component: FunctionalComponent = () => h(Card, {}, {
  default: () => 'Попробуйте кликнуть на кнопки ниже и на саму карточку'
});

export default Component;
</script>
