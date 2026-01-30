<script setup lang='ts'>
const { currentSongInfo } = storeToRefs(useMediaStore())
</script>

<template>
  <div class="absolute inset-0 z--1 flex-center overflow-hidden after:absolute after:inset-0 after:inset-0 after:bg-black/60 after:backdrop-blur-xl after:content-['']">
    <img class="h-auto w-full scale-300 blur-3xl contrast-125" :src="currentSongInfo.cover" alt="">
  </div>
</template>

<style scoped>

</style>
