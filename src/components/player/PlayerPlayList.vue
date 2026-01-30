<script setup lang='ts'>
import { onClickOutside } from '@vueuse/core'
import { dtFormat } from '~/utils/format'

const mediaStore = useMediaStore()
const playerStore = usePlayerStore()

const { playList } = storeToRefs(useMediaStore())
const { clearMedia } = useMediaStore()
const show = ref(false)
const count = computed(() => mediaStore.playList?.length ?? 0)
onClickOutside(useTemplateRef('dom-ref'), () => {
  show.value = false
})
const scrollBarContainerRef = useTemplateRef('scroll-container-ref')
function handleScrollInto() {
  const activeElement = scrollBarContainerRef.value?.querySelector('.is-active')
  if (activeElement) {
    activeElement.scrollIntoView({
      block: 'nearest',
      behavior: 'smooth',
    })
  }
}
</script>

<template>
  <NBadge :value="count" :max="99">
    <NButton quaternary circle size="small" @click.stop="() => show = true">
      <template #icon>
        <i class="i-mage-playlist" />
      </template>
    </NButton>
  </NBadge>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-all duration-300"
      leave-active-class="transition-all duration-300"
      enter-from-class="translate-x-full"
      leave-to-class="translate-x-full"
    >
      <div v-if="show" ref="dom-ref" class="fixed bottom-30 right-0 top-20 z-999 w-100 flex-col gap-2 rounded-l-4 bg-white/60 py-4 shadow-black/10 shadow-xl backdrop-blur-md dark:bg-white/10">
        <div class="flex px-4">
          <div class="flex-y-center gap-1">
            <span class="text-lg font-bold">播放列表</span>
            <span class="text-xs">{{ count }}</span>
          </div>
          <div class="m-l-auto flex gap-1">
            <NButton size="small" secondary @click="() => handleScrollInto()">
              <template #icon>
                <i class="i-mage-location-fill text-lg" />
              </template>
              当前播放
            </NButton>
            <NButton size="small" secondary @click="() => clearMedia()">
              <template #icon>
                <i class="i-mage-trash-fill text-lg" />
              </template>
              清空列表
            </NButton>
          </div>
        </div>
        <NScrollbar class="min-h-0 flex-1 px-4">
          <div ref="scroll-container-ref" class="flex-col gap-1">
            <div
              v-for="(song, index) in playList"
              :key="index"
              class="flex-y-center gap-2 rounded-md p-2 hover:bg-black/10"
              :class="mediaStore.currentSongId === song.id ? 'bg-black/10 is-active' : ''"
            >
              <SongPlayButton
                :active="mediaStore.currentSongId === song.id"
                :playing="playerStore.playing"
                :serial-text="`${index + 1}`.padStart(2, '0')"
                @click="() => mediaStore.playSong(song.id)"
              />
              <div class="h-10 w-10 overflow-hidden rounded-md">
                <CoverImage :src="song.al.picUrl" />
              </div>
              <div class="min-w-0 flex-col flex-1">
                <span class="truncate text-base">{{ song.name }}</span>
                <div class="flex text-xs">
                  <span v-for="ar in song.ar" :key="ar.id">{{ ar.name }}</span>
                </div>
              </div>
              <div class="m-l-auto text-sm">
                {{ dtFormat(song.dt) }}
              </div>
            </div>
          </div>
        </NScrollbar>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>

</style>
