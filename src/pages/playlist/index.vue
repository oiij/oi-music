<script setup lang='ts'>
import { useRouteQuery } from '@vueuse/router'
import { NInput } from 'naive-ui'
import useRequest from 'vue-hooks-plus/es/useRequest'

import { playlistApi } from '~/apis/playlist'
import { millionFormat } from '~/utils/format'
import PlayListInfo from './components/PlayListInfo.vue'
import PlayListTasks from './components/PlayListTasks.vue'

definePage({
  meta: {
    layout: 'default',
    title: '歌单详情',
    requireAuth: true,
    keepAlive: false,
    hide: true,
    icon: 'i-mage-dashboard-2-fill',
    group: {
      hide: true,
    },
  },
})
const mediaStore = useMediaStore()
const id = useRouteQuery<string>('id')

const { data: infoData, loading } = useRequest(() => playlistApi.detail({ id: id.value }))
const { data: tasksData } = useRequest(() => playlistApi.tasks({ id: id.value }))

const searchFocus = ref(false)
const searchValue = ref('')

const scrollTop = ref(0)
const showTop = computed(() => scrollTop.value > 200)

const showIntoView = computed(() => tasksData.value?.songs.some(s => s.id === mediaStore.currentSongId))
const onDebounceSearch = useDebounceFn((val: string) => {
  searchValue.value = val
})
</script>

<template>
  <div class="wh-full">
    <ScrollbarPro v-model:scroll-top="scrollTop" :show-into-view="showIntoView">
      <div class="flex-col gap-2 p-5">
        <Transition name="fade">
          <div v-if="showTop" class="absolute-lt z-1 w-full flex-y-center gap-2 rounded-b-xl bg-white/50 px-5 py-2 shadow-black/5 shadow-xl backdrop-blur-xl dark:bg-white/10">
            <NImage :src="infoData?.playlist.coverImgUrl" preview-disabled class="h-10 w-10 rounded-md" />
            <span class="truncate text-xl font-bold">{{ infoData?.playlist.name }}</span>
            <NButton type="primary" class="ml-auto">
              <template #icon>
                <i class="i-mage-play-fill" />
              </template>
              播放全部
            </NButton>
          </div>
        </Transition>
        <PlayListInfo :playlist="infoData?.playlist" :loading="loading" />
        <NTabs type="bar" :bar-width="18">
          <template #suffix>
            <NInput
              v-model:value="searchValue"
              placeholder="搜索"
              :clearable="searchFocus"
              round
              :class="searchFocus ? 'w-40!' : 'w-20!'"
              @update:value="(val) => onDebounceSearch(val)"
              @focus="() => searchFocus = true"
              @blur="() => searchFocus = false"
            >
              <template #prefix>
                <i class="i-mage-search" />
              </template>
            </NInput>
          </template>
          <NTab name="song">
            歌曲{{ infoData?.playlist.trackCount ?? 0 }}
          </NTab>
          <NTab name="comment">
            评论{{ infoData?.playlist.commentCount ?? 0 }}
          </NTab>
          <NTab name="forker">
            收藏者{{ millionFormat(infoData?.playlist.subscribedCount ?? 0) }}
          </NTab>
        </NTabs>
        <PlayListTasks :songs="tasksData?.songs" :search-value="searchValue" />
      </div>
    </ScrollbarPro>
  </div>
</template>

<style scoped>

</style>
