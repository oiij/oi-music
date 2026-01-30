<script setup lang='ts'>
import type { PlaylistTasksType } from '~/apis/types/playlist'
import Fuse from 'fuse.js'
import Song from './Song.vue'

const { songs, searchValue } = defineProps<{
  songs?: PlaylistTasksType['songs']
  searchValue?: string
}>()
const patterns = computed(() => {
  if (!searchValue) {
    return []
  }
  return [searchValue]
})

const filteredSongs = computed(() => {
  if (!searchValue) {
    return songs
  }
  const fuse = new Fuse(songs ?? [], {
    includeScore: true,
    keys: ['name', 'ar.name', 'al.name'],
  })
  return fuse.search(searchValue).map(item => item.item)
})
</script>

<template>
  <div class="w-full flex-col gap-1">
    <div class="w-full flex cursor-default overflow-hidden rounded-md">
      <div class="w-14 rounded-md py-0.5 pl-4 pr-2 hover:bg-black/5 dark:hover:bg-white/5">
        #
      </div>
      <div class="min-w-0 flex-1 rounded-md px-2 py-0.5 hover:bg-black/5 dark:hover:bg-white/5">
        标题
      </div>
      <div class="w-60 rounded-md px-2 py-0.5 hover:bg-black/5 dark:hover:bg-white/5">
        专辑
      </div>
      <div class="w-22 rounded-md py-0.5 pl-2 pr-4 hover:bg-black/5 dark:hover:bg-white/5">
        时长
      </div>
    </div>
    <Song v-for="(song, index) in filteredSongs" :key="index" :serial="index + 1" :song="song" :patterns="patterns" />
    <div class="w-full flex-center p-2">
      没有更多了~
    </div>
  </div>
</template>

<style scoped>

</style>
