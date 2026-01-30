<script setup lang='ts'>
import { darkTheme } from 'naive-ui'

const playerStore = usePlayerStore()
const mediaStore = useMediaStore()
const frequencyData = ref<number[]>([])
playerStore.onTimeUpdateRaf(() => {
  frequencyData.value = Array.from(playerStore.getFrequencyData())
})
</script>

<template>
  <Teleport to="body">
    <NConfigProvider abstract :theme="darkTheme">
      <Transition
        enter-active-class="transition-all duration-300"
        leave-active-class="transition-all duration-300"
        enter-from-class="translate-y-full"
        leave-to-class="translate-y-full"
      >
        <div
          v-if="playerStore.showPlayer"
          class="fixed inset-0 z-996 h-100vh w-100vw flex-col-center"
        >
          <div class="fixed left-0 right-0 top-0 h-16 w-full flex p-5 draggable">
            <div class="no-draggable">
              <NButton quaternary circle @click="() => playerStore.showPlayer = false">
                <i class="i-mage-arrow-down" />
              </NButton>
            </div>
          </div>
          <div class="fixed left-0 right-0 top-16 w-full flex-col-center gap-2">
            <h1 class="fong-bold text-3xl text-white/80">
              {{ mediaStore.currentSongInfo.name }}
            </h1>
            <p class="text-base text-white/60">
              {{ mediaStore.currentSongInfo.artist?.map(ar => ar).join(' / ') }}
            </p>
          </div>
          <div class="wh-full flex">
            <div class="flex-center flex-1">
              <PlayerCover />
            </div>
            <div class="flex-center flex-1">
              <PlayerLyric />
            </div>
          </div>
          <div class="fixed bottom-26 left-0 right-0 flex-y-center gap-2 px-20 text-white/60">
            <span>{{ playerStore.currentTimeText }}</span>
            <PlayerProgress secondary />
            <span>{{ playerStore.durationText }}</span>
          </div>
          <div class="dark fixed bottom-6 left-0 right-0 z-998 h-20 w-full flex-center">
            <div class="flex-y-center gap-5 border border-white/10 rounded-full bg-white/10 px-5 py-2 backdrop-blur-md">
              <PlayerButton size="medium" @click.stop="() => playerStore.handlePrev()">
                <i class="i-mage-previous-fill" />
              </PlayerButton>
              <PlayerButton size="large" @click.stop="() => playerStore.handleTogglePlay()">
                <i v-if="playerStore.playing" class="i-mage-pause-fill" />
                <i v-else class="i-mage-play-fill m-l-0.5" />
              </PlayerButton>
              <PlayerButton size="medium" @click.stop="() => playerStore.handleNext()">
                <i class="i-mage-next-fill" />
              </PlayerButton>
            </div>
          </div>
          <div class="fixed bottom--1 left-0 right-0">
            <PlayerSpectrum />
          </div>
          <PlayerBackground />
        </div>
      </Transition>
    </NConfigProvider>
  </Teleport>
</template>

<style scoped>

</style>
