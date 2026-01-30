<script setup lang='ts'>
import type { PlaylistTasksType } from '~/apis/types/playlist'
import { dtFormat } from '~/utils/format'
import { highlightStyle } from '~/utils/style'

const { serial, song, patterns } = defineProps<{
  serial: number
  song: PlaylistTasksType['songs'][0]
  patterns: string[]
}>()

const mediaStore = useMediaStore()
const playerStore = usePlayerStore()

const serialText = computed(() => `${serial}`.padStart(2, '0'))
const isActive = computed(() => mediaStore.currentSongId === song.id)

const loading = ref(false)
async function handlePlaySong() {
  loading.value = true
  await mediaStore.addToPlayList(song.id)
  loading.value = false
}
</script>

<template>
  <div
    class="group w-full flex-y-center cursor-default scroll-my-20 rounded-xl p-2 text-black/50 shadow-black/5 hover:bg-white dark:text-white/50 hover:shadow-xl dark:hover:bg-white/10"
    :class="[isActive ? 'bg-white shadow-xl dark:bg-white/10 is-active' : '']"
    @dblclick="() => handlePlaySong()"
  >
    <div class="w-12 px-2 text-sm hover:text-black/80 dark:hover:text-white/80">
      <SongPlayButton
        :active="isActive"
        :playing="playerStore.playing"
        :serial-text="serialText"
        :loading="loading"
        @click="() => handlePlaySong()"
      />
    </div>
    <div class="min-w-0 flex-y-center flex-1 gap-2 px-2">
      <CoverImage class="h-10 w-10 rounded-md" :src="song.al.picUrl" />
      <div class="min-w-0 flex-col flex-1">
        <NHighlight class="truncate" :text="song.name" :patterns="patterns" :highlight-style="highlightStyle" />
        <span class="truncate text-xs">
          <NHighlight v-for="ar in song.ar" :key="ar.id" :text="ar.name" :patterns="patterns" :highlight-style="highlightStyle" />
        </span>
      </div>
      <div class="m-l-auto hidden group-hover:flex">
        <NButton size="small" text @click="() => mediaStore.addToPlayList(song.id)">
          <i class="i-mage-bookmark-plus-fill" />
        </NButton>
      </div>
    </div>
    <div class="w-60 truncate px-2 text-xs">
      <NHighlight :text="song.al.name" :patterns="patterns" :highlight-style="highlightStyle" />
    </div>
    <div class="w-20 px-2">
      {{ dtFormat(song.dt) }}
    </div>
  </div>
</template>

<style scoped>

</style>
