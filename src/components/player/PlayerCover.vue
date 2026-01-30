<script setup lang='ts'>
const mediaStore = useMediaStore()
const playerStore = usePlayerStore()
</script>

<template>
  <div class="h-90 w-90 flex-center border border-white/30 rounded-full bg-white/20 p-4 shadow-xl hover:shadow-2xl">
    <div class="wh-full overflow-hidden rounded-full from-black/80 via-white/5 to-black/80 bg-gradient-to-r p-10 shadow">
      <div class="wh-full overflow-hidden rounded-full">
        <CoverImage :src="mediaStore.currentSongInfo.cover" :rotate="playerStore.playing" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
