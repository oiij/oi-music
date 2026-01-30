<script setup lang='ts'>
import type { CSSProperties } from 'vue'

const { secondary } = defineProps<{
  secondary?: boolean
}>()
const playerStore = usePlayerStore()
const appStore = useAppStore()
const bgClass = computed(() => {
  return secondary ? 'bg-white/60' : ''
})
const progressStyle = computed(() => ({
  width: `${playerStore.progress}%`,
  background: secondary ? undefined : `${appStore.themeColors.primary}`,
} as CSSProperties))
const progressRef = useTemplateRef('progress-ref')
const isHovered = useElementHover(progressRef)
const { width: progressWidth } = useElementSize(progressRef)
const { left: lineLeft, right: x, y } = useElementBounding(useTemplateRef('line-ref'))

function handleClick(ev: MouseEvent) {
  const percent = (ev.clientX - lineLeft.value) / progressWidth.value
  playerStore.setProgress(percent * 100)
}
</script>

<template>
  <div ref="progress-ref" class="group relative h-6 w-full flex-y-center cursor-pointer" @click="(ev:MouseEvent) => handleClick(ev)">
    <NPopover raw trigger="manual" :show="isHovered" :x="x" :y="y - 5">
      <div
        class="rounded-md bg-white/60 p-1 backdrop-blur-md"
        :class="[secondary ? 'bg-white/20!' : '']"
      >
        {{ `${playerStore.currentTimeText} / ${playerStore.durationText}` }}
      </div>
    </NPopover>
    <div class="h-2 w-full scale-y-1/2 rounded-full bg-black/10 transition-base group-hover:scale-y-100">
      <div ref="line-ref" class="h-full rounded-full" :class="bgClass" :style="progressStyle" />
    </div>
    <div class="absolute top-1/2 h-4 w-4 translate-x--1/2 translate-y--1/2 scale-1/2 rounded-full bg-white shadow transition-transform group-hover:scale-100" :style="{ left: progressStyle.width }" />
  </div>
</template>

<style scoped>

</style>
