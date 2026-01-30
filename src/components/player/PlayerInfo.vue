<script setup lang='ts'>
const mediaStore = useMediaStore()
const playerStore = usePlayerStore()
</script>

<template>
  <div class="min-w-0 flex-y-center flex-1 gap-2">
    <div class="relative h-14 w-14 cursor-pointer overflow-hidden rounded-full" @click="() => playerStore.showPlayer = true">
      <CoverImage :src="mediaStore.currentSongInfo.cover" :rotate="playerStore.playing" />
    </div>

    <div class="min-w-0 flex-col flex-1">
      <div class="flex-y-center gap-2">
        <p class="truncate text-xl">
          {{ mediaStore.currentSongInfo.name }}
        </p>
        <div class="flex-y-center gap-1">
          <NButton text>
            <i class="i-mage-heart text-base" />
          </NButton>
          <NButton text>
            <i class="i-mage-message-dots-round text-base" />
          </NButton>
        </div>
      </div>
      <div class="flex-y-center gap-1">
        <NButton v-for="item in mediaStore.currentSong?.ar" :key="item.id" size="tiny" dashed>
          {{ item.name }}
        </NButton>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
