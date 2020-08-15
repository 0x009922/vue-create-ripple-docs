<template>
  <div
    v-if="menuOpened"
    ref="menuContainerRef"
    @mouseenter="menuHover = true"
    @mouseleave="menuHover = false"
    class="absolute"
    :style="{ ...positionStyle }"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, Ref, computed, h, watchEffect, ref, watch } from "vue";

function toPx(val: string | number): string {
  return `${val}px`
}

/**
 * TODO: delayed menu flags by useDelayed
 * Не используется
 */
export default defineComponent({
  props: {
    anchor: {
      type: HTMLElement as PropType<HTMLElement | null>,
      default: null
    },
    activator: {
      type: HTMLElement as PropType<HTMLElement | null>,
      default: null
    },
    // open: {
    //   type: Boolean,
    //   default: false
    // },
    bottom: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { slots }) {
    const activatorHover = ref(false);
    const menuContainerRef = ref<HTMLElement | null>(null);
    const menuHover = ref(false);

    function activatorMouseenter() {
      activatorHover.value = true;
    }

    function activatorMouseleave() {
      activatorHover.value = false;
    }

    watch(() => props.activator, (val, oldVal) => {
      if (val) {
        val.addEventListener('mouseenter', activatorMouseenter);
        val.addEventListener('mouseleave', activatorMouseleave);
      }
    }, { immediate: true });

    const anchorRect = computed<DOMRect | null>(() => {
      if (props.anchor) {
        return props.anchor.getBoundingClientRect();
      }

      return null;
    })    

    const position = computed<{ x: number; y: number } | null>(() => {
      if (anchorRect.value) {
        const { left, top, width, height } = anchorRect.value;

        return {
          x: left,
          y: props.bottom ? top + height : top
        }
      }

      return null;
    });

    const positionStyle = computed(() => {
      return position.value
        ? {
          left: toPx(position.value.x),
          top: toPx(position.value.y)
        }
        : null
    });

    const menuOpened = computed(() => {
      return activatorHover.value || menuHover.value;
    })

    return {
      menuContainerRef,
      menuHover,
      menuOpened,
      positionStyle
    }
  },
  renderTracked(...args) {
    console.log('TRACK', args);
  }
})
</script>