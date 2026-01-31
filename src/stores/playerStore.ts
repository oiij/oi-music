import type { PlayModeEnum } from '~/utils/enum'
import { useAudioContext } from '@oiij/use'
import { acceptHMRUpdate, defineStore } from 'pinia'

export const usePlayerStore = defineStore('playerStore', () => {
  const mediaStore = useMediaStore()

  const { playing, progress, currentTime, currentTimeText, durationText, muted, volume, play, toggle, resume, setVolume, setProgress, toggleMute, getEQFrequencies, setEQFrequency, getFrequencyData, onEnded, onTimeUpdateRaf } = useAudioContext({
    timeUpdateFormat: (time: number) => Number(time.toFixed(0)),
  })
  const showPlayer = ref(false)
  const showMiniPlayer = computed(() => !showPlayer.value && mediaStore.playList.length > 0)
  const playMode = ref<keyof typeof PlayModeEnum>('loop')

  async function autoNext() {
    switch (playMode.value) {
      case 'sequence':{
        const lastId = mediaStore.playList.at(-1)?.id
        if (lastId === mediaStore.currentSongId) {
          return void 0
        }
        return await handleNext()
      }
      case 'loop':{
        return await handleNext()
      }
      case 'random':{
        return await handleNext()
      }
      case 'single':{
        return resume()
      }
      default:
        break
    }
  }
  onEnded(() => {
    autoNext()
  })
  async function handleNext() {
    switch (playMode.value) {
      case 'random':{
        const id = mediaStore.getRandomSongId()
        await mediaStore.playSong(id)
      }
        break

      default:{
        const id = mediaStore.getNextSongId()
        await mediaStore.playSong(id)
      }
        break
    }
  }
  async function handlePrev() {
    const id = mediaStore.getLastSongCacheId()
    await mediaStore.playSong(id)
  }
  function handleTogglePlay() {
    if (!mediaStore.currentSongId) {
      mediaStore.playSong()
    }
    else {
      toggle()
    }
  }
  return {
    playing,
    progress,
    volume,
    muted,
    currentTime,
    currentTimeText,
    durationText,
    play,
    toggle,
    setVolume,
    setProgress,
    toggleMute,
    getEQFrequencies,
    setEQFrequency,
    getFrequencyData,
    playMode,
    showPlayer,
    showMiniPlayer,
    handlePrev,
    handleNext,
    handleTogglePlay,
    onTimeUpdateRaf,
  }
}, {
  persist: {
    key: '__PLAYER_STORE_PERSIST__',
    pick: [],
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePlayerStore, import.meta.hot))
}
