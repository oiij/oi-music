<script setup lang='ts'>
import useRequest from 'vue-hooks-plus/es/useRequest'
import { searchApi } from '~/apis/search'
import { useSearchStore } from '~/stores/searchStore'
import { highlightStyle } from '~/utils/style'

const { isDark } = storeToRefs(useAppStore())
const router = useRouter()
const popoverRef = useTemplateRef('popover-ref')
const searchValue = ref()
const patterns = computed(() => {
  if (!searchValue.value) {
    return []
  }
  return [searchValue.value]
})
const { data } = useRequest(searchApi.searchHotDetail)
const { run, data: suggestData, mutate } = useRequest(searchApi.searchSuggest, {
  manual: true,
})
useRequest(searchApi.searchDefault, {
  onSuccess: (res) => {
    searchValue.value = res.data.realkeyword
  },
})

const searchStore = useSearchStore()
function handleSearch(val: string) {
  searchValue.value = val
  popoverRef.value?.setShow(false)
  searchStore.add(val)
  router.push({
    path: '/search',
    query: {
      value: val,
    },
  })
}

const searchSuggest = useDebounceFn((val?: string) => {
  if (val) {
    run({ keywords: val })
  }
  else {
    mutate(undefined)
  }
})

function onUpdateValue(val?: string) {
  searchValue.value = val
  searchSuggest(val)
}
</script>

<template>
  <div>
    <NPopover
      ref="popover-ref"
      placement="bottom-start"
      trigger="click"
      class="max-h-140"
      content-class="p-0!"
      scrollable
    >
      <template #trigger>
        <NInput
          :value="searchValue"
          class="w-[80]!"
          round
          clearable
          placeholder="搜索"
          :theme-overrides="{ color: isDark ? undefined : 'rgba(255, 255, 255, 0.6)' }"
          @update:value="onUpdateValue"
          @keydown.enter="handleSearch(searchValue)"
        >
          <template #prefix>
            <i class="i-mage-search" />
          </template>
        </NInput>
      </template>

      <div v-if="suggestData" class="w-120 flex-col gap-1 p-2">
        <template v-if="suggestData.result.songs">
          <p class="text-lg">
            歌曲
          </p>
          <div class="flex-col gap-1">
            <div v-for="song in suggestData.result.songs" :key="song.id" class="flex-col cursor-pointer gap-1 rounded-md p-2 hover:bg-black/10" @click="() => handleSearch(song.name)">
              <NHighlight :text="song.name" :patterns="patterns" :highlight-style="highlightStyle" />
              <div class="flex gap-1">
                <NHighlight :text="song.album.name" :patterns="patterns" :highlight-style="highlightStyle" class="text-xs" />
                <NHighlight :text="song.artists.map((ar) => ar.name).join('/')" :patterns="patterns" :highlight-style="highlightStyle" class="text-xs" />
              </div>
            </div>
          </div>
        </template>
        <template v-if="suggestData.result.artists">
          <p class="text-lg">
            歌手
          </p>
          <div class="flex gap-1">
            <div v-for="ar in suggestData.result.artists" :key="ar.id" class="flex-col-center cursor-pointer gap-1 rounded-md p-2 hover:bg-black/10" @click="() => handleSearch(ar.name)">
              <NImage :src="ar.picUrl" preview-disabled class="h-12 w-12 rounded-full" />
              <NHighlight :text="ar.name" :patterns="patterns" :highlight-style="highlightStyle" />
            </div>
          </div>
        </template>
        <template v-if="suggestData.result.albums">
          <p class="text-lg">
            专辑
          </p>
          <div class="flex-col gap-1">
            <div v-for="al in suggestData.result.albums" :key="al.id" class="flex-y-center cursor-pointer gap-1 rounded-md p-2 hover:bg-black/10" @click="() => handleSearch(al.name)">
              <NImage :src="al.artist.picUrl" preview-disabled class="h-12 w-12 rounded-md" />
              <div class="flex-col">
                <NHighlight :text="al.name" :patterns="patterns" :highlight-style="highlightStyle" />
                <NHighlight :text="al.artist.name" :patterns="patterns" :highlight-style="highlightStyle" class="text-xs" />
              </div>
            </div>
          </div>
        </template>
        <template v-if="suggestData.result.playlists">
          <p class="text-lg">
            歌单
          </p>
          <div class="flex-col gap-1">
            <div v-for="pl in suggestData.result.playlists" :key="pl.id" class="flex-y-center cursor-pointer gap-1 rounded-md p-2 hover:bg-black/10" @click="() => handleSearch(pl.name)">
              <NImage :src="pl.coverImgUrl" preview-disabled class="h-12 w-12 rounded-md" />
              <NHighlight :text="pl.name" :patterns="patterns" :highlight-style="highlightStyle" />
            </div>
          </div>
        </template>
      </div>
      <div v-else class="w-80 flex-col gap-1 p-2">
        <div class="flex gap-1">
          <NTag
            v-for="item in searchStore.hot"
            :key="item.text"
            closable
            round
            size="small"
            class="cursor-pointer"
            @click="() => handleSearch(item.text)"
            @close="() => searchStore.remove(item.text)"
          >
            {{ item.text }}
          </NTag>
        </div>
        <div
          v-for="(item, index) in data?.data"
          :key="index"
          class="flex cursor-pointer items-center gap-2 rounded-md p-2 transition-base hover:bg-black/5"
          @click="() => handleSearch(item.searchWord)"
        >
          <span>{{ item.searchWord }}</span>
          <span class="inline-flex items-center text-xs text-red-5">
            <i class="i-mage-fire-a" />
            <span>{{ item.score }}</span>
          </span>
          <NImage v-if="item.iconUrl" :src="item.iconUrl" class="h-3" />
        </div>
      </div>
    </NPopover>
  </div>
</template>

<style scoped>

</style>
