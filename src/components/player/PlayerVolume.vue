<script setup lang='ts'>
const { toggleMute, setVolume } = usePlayerStore()
const { volume } = storeToRefs(usePlayerStore())
function handleMute() {
  toggleMute()
}
</script>

<template>
  <NPopover placement="top" class="p-2!">
    <template #trigger>
      <NButton quaternary circle @click.stop="() => handleMute()">
        <template #icon>
          <i v-if="volume === 0" class="i-mage-volume-mute" />
          <i v-else-if="volume <= 0.5" class="i-mage-volume-down" />
          <i v-else class="i-mage-volume-up" />
        </template>
      </NButton>
    </template>
    <div class="w-8 flex-col-center gap-1">
      <div class="h-30">
        <NSlider :value="volume" :step="0.01" :max="1" vertical :tooltip="false" @update:value="(val) => setVolume(val)" />
      </div>
      <span class="text-xs">
        {{ (volume * 100).toFixed(0) }}%
      </span>
    </div>
  </NPopover>
</template>

<style scoped>

</style>
