<script setup lang='ts'>
const mediaStore = useMediaStore()
const playerStore = usePlayerStore()
const lrcJson = computed(() => {
  return mediaStore.lrc?.split('\n').map((m) => {
    const regex = /^\[(\d{2}):(\d{2})\.(\d+)\](.*)$/
    const match = regex.exec(m)
    if (!match) {
      return null
    }
    const minutes = Number.parseInt(match[1], 10)
    const seconds = Number.parseInt(match[2], 10)
    const milliseconds = Number.parseInt(match[3], 10)
    const text = match[4].trim()
    const timeInSeconds = minutes * 60 + seconds + milliseconds / 100

    return {
      time: Number.parseFloat(timeInSeconds.toFixed(2)),
      text,
    }
  }).filter(item => item !== null).sort((a, b) => a.time - b.time)
})
const currentIndex = computed(() => {
  const currentTime = playerStore.currentTime ?? 0
  return lrcJson.value?.findIndex(item => item.time >= currentTime)
})
</script>

<template>
  <div class="h-100 w-full">
    <NScrollbar>
      <div class="flex-col gap-1">
        <div
          v-for="(item, index) in lrcJson"
          :key="item.time"
          class="text-xl text-white/60 transition-base"
          :class="index === currentIndex ? 'text-3xl! text-white!' : ''"
        >
          {{ item.text }}
        </div>
      </div>
    </NScrollbar>
  </div>
</template>

<style scoped>

</style>
