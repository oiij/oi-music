<script setup lang='ts'>
import SvgIcon from '~virtual/svg-component'

const { active, playing, serialText, loading } = defineProps<{
  active: boolean
  playing: boolean
  serialText: string
  loading?: boolean
}>()
const emit = defineEmits<{
  (e: 'click'): void
  (e: 'play'): void
  (e: 'pause'): void
}>()
const { themeColors } = storeToRefs(useAppStore())
function handlePlay() {
  emit('play')
  emit('click')
}
function handlePause() {
  emit('pause')
  emit('click')
}
</script>

<template>
  <div v-if="loading" class="aspect-ratio-1 flex-center p-1">
    <NSpin :size="14" />
  </div>
  <div v-else-if="active" class="cursor-pointer">
    <template v-if="playing">
      <div class="aspect-ratio-1 flex-center p-1 group-hover:hidden">
        <SvgIcon name="icon-playing" class="text-base" :style="[{ color: `${themeColors.primary}` }]" />
      </div>
      <div class="aspect-ratio-1 p-1 hidden group-hover:flex-center" @click="() => handlePause()">
        <i class="i-mage-pause-fill text-base" />
      </div>
    </template>
    <div v-else class="aspect-ratio-1 flex-center p-1" @click="() => handlePlay()">
      <i class="i-mage-play-fill text-base" />
    </div>
  </div>
  <div v-else class="cursor-pointer">
    <div class="aspect-ratio-1 flex-center p-1 group-hover:hidden">
      <span class="text-xs">{{ serialText }}</span>
    </div>
    <div class="aspect-ratio-1 p-1 hidden group-hover:flex-center" @click="() => handlePlay()">
      <i class="i-mage-play-fill text-base" />
    </div>
  </div>
</template>

<style scoped>

</style>
