<script setup lang='ts'>
const playerStore = usePlayerStore()
</script>

<template>
  <div class="min-w-0 flex-center flex-1 gap-5">
    <PlayerButton size="medium" @click.stop="() => playerStore.handlePrev()">
      <i class="i-mage-previous-fill" />
    </PlayerButton>
    <PlayerButton type="primary" size="large" @click.stop="() => playerStore.handleTogglePlay()">
      <i v-if="playerStore.playing" class="i-mage-pause-fill" />
      <i v-else class="i-mage-play-fill m-l-0.5" />
    </PlayerButton>
    <PlayerButton size="medium" @click.stop="() => playerStore.handleNext()">
      <i class="i-mage-next-fill" />
    </PlayerButton>
  </div>
</template>

<style scoped>

</style>
