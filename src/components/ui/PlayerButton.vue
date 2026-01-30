<script setup lang='ts'>
import type { CSSProperties } from 'vue'

const { type = 'default', size, secondary } = defineProps<{
  type?: 'default' | 'primary'
  size?: 'small' | 'medium' | 'large'
  secondary?: boolean
}>()
const emit = defineEmits<{
  (e: 'click', ev: MouseEvent): void
}>()
const appStore = useAppStore()
const primaryStyle = computed(() => {
  return type === 'primary'
    ? {
        backgroundColor: `${appStore.themeColors.primary}`,
        color: 'white',
        border: 'none',
      }
    : {

      } as CSSProperties
})
const sizeClass = computed(() => {
  switch (size) {
    case 'small':
      return 'h-3 w-3 text-sm'
    case 'medium':
      return 'h-8 w-8 text-base'
    case 'large':
      return 'h-12 w-12 text-xl'
    default:
      return 'h-8 w-8 text-base'
  }
})
const bgClass = computed(() => {
  return secondary ? 'bg-transparent' : 'dark:bg-white/10 dark:border-white/20 border-0.1 backdrop-blur-md'
})
</script>

<template>
  <button
    class="flex-center cursor-pointer rounded-full text-black/60 transition-base transition-duration-150 active:scale-100 hover:scale-105 dark:text-white/60"
    :class="[sizeClass, bgClass]"
    :style="[primaryStyle]"
    @click="(ev: MouseEvent) => emit('click', ev)"
  >
    <slot />
  </button>
</template>

<style scoped>

</style>
