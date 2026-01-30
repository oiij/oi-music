<script setup lang='ts'>
const { showMiniPlayer } = storeToRefs(usePlayerStore())
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-all duration-300"
      leave-active-class="transition-all duration-300"
      enter-from-class="translate-y-full"
      leave-to-class="translate-y-full"
    >
      <div
        v-if="showMiniPlayer"
        class="fixed bottom-0 left-0 right-0 z-997 h-20 w-full border-t bg-white px-5 dark:bg-black/20"
      >
        <div class="absolute left-0 right-0 top--3 px-2">
          <PlayerProgress />
        </div>
        <div class="wh-full flex-y-center">
          <PlayerInfo />
          <PlayerController />
          <PlayerActions />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>

</style>
