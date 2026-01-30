<script setup lang='ts'>
import type { PlaylistTasksType } from '~/apis/types/playlist'
import Fuse from 'fuse.js'

const { songs, searchValue } = defineProps<{
  songs?: PlaylistTasksType['songs']
  searchValue?: string
}>()
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
  <PlayList :songs="filteredSongs" :search-value="searchValue" />
</template>

<style scoped>

</style>
