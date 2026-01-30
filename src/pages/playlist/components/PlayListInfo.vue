<script setup lang='ts'>
import type { ImageRenderToolbarProps } from 'naive-ui'
import type { PlaylistDetailType } from '~/apis/types/playlist.detail'
import ColorThief from 'colorthief'
import { NAvatar } from 'naive-ui'
import { millionFormat } from '~/utils/format'

const { playlist, loading } = defineProps<{
  playlist?: PlaylistDetailType['playlist']
  loading?: boolean
}>()

const appStore = useAppStore()
const mediaStore = useMediaStore()

const colorThief = new ColorThief()
function onImageLoad(ev: Event) {
  const color = colorThief.getColor(ev.target as HTMLImageElement)
  appStore.playlistColor = color
}
function renderToolbar(props: ImageRenderToolbarProps) {
  const nodes = Object.entries(props.nodes).filter(([key]) => key !== 'download').map(([_key, node]) => node)
  return h('div', { class: 'flex-y-center gap-2' }, {
    default: () => nodes,
  })
}
onUnmounted(() => {
  appStore.playlistColor = [255, 255, 255]
})

function handlePlayAll() {
  const ids = playlist?.trackIds.map(item => item.id)
  if (ids) {
    mediaStore.addToPlayList(ids)
  }
}
</script>

<template>
  <NSpin :show="loading">
    <div class="flex gap-2">
      <div class="relative h-45 w-45 flex-center overflow-hidden rounded-md">
        <div class="absolute right-2 top-2 cursor-default border border-white/50 rounded-full bg-white/50 px-1 py-0.5 text-xs text-white backdrop-blur-md dark:border-white/10 dark:bg-white/10">
          {{ millionFormat(playlist?.playCount || 0) }}
        </div>
        <NImage :img-props="{ crossorigin: 'anonymous' }" object-fit="cover" :src="playlist?.coverImgUrl" :render-toolbar="renderToolbar" @load="onImageLoad" />
      </div>
      <div class="min-w-0 flex-col flex-1 gap-2">
        <span class="truncate text-xl font-bold">{{ playlist?.name }}</span>
        <NEllipsis :tooltip="{ contentClass: 'max-w-80' }">
          <span>{{ playlist?.description }}</span>
        </NEllipsis>
        <div class="flex gap-2">
          <div v-for="item in playlist?.tags" :key="item" class="cursor-default border border-white/60 rounded-md bg-white/60 px-1 backdrop-blur-md dark:border-white/10 dark:bg-white/10">
            {{ item }}
          </div>
        </div>
        <div class="flex">
          <NButton text>
            <div class="flex-y-center gap-1">
              <NAvatar :src="playlist?.creator.avatarUrl" round size="small" />
              <span class="text-sm font-bold">{{ playlist?.creator.nickname }}</span>
            </div>
          </NButton>
        </div>

        <div class="mt-auto flex gap-2">
          <NButton type="primary" @click="() => handlePlayAll()">
            <template #icon>
              <i class="i-mage-play-fill" />
            </template>
            播放全部
          </NButton>
          <NButton>
            <template #icon>
              <i class="i-mage-bookmark-plus-fill" />
            </template>
            {{ millionFormat(playlist?.subscribedCount || 0) }}
          </NButton>
        </div>
      </div>
    </div>
  </NSpin>
</template>

<style scoped>

</style>
