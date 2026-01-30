<script setup lang='ts'>
import type { SearchTypeEnum } from '~/utils/enum'
import { useRouteQuery } from '@vueuse/router'
import useRequest from 'vue-hooks-plus/es/useRequest'
import { searchApi } from '~/apis/search'
import { SearchTypeMaps } from '~/utils/enum'
import SearchMixedList from './components/SearchMixedList.vue'
import SearchSongList from './components/SearchSongList.vue'

definePage({
  meta: {
    layout: 'default',
    title: '搜索',
    requireAuth: true,
    keepAlive: true,
    hide: true,
    icon: 'i-mage-dashboard-2-fill',
    group: {
      hide: true,
    },
  },
})
const value = useRouteQuery<string>('value')
const type = ref<keyof typeof SearchTypeEnum>('1018')
const params = ref<{
  limit?: number
  offset?: number
}>({
  limit: 20,
  offset: 0,
})
const { data, refresh, loading } = useRequest(() => searchApi.search({
  keywords: value.value,
  ...params.value,
}, type.value), {
  manual: true,
})
watch([value, type, params], () => {
  refresh()
  searchApi.searchSuggest({ keywords: value.value })
}, {
  immediate: true,
})

const components = {
  1018: SearchMixedList,
  1: SearchSongList,
} as any
</script>

<template>
  <div>
    <NScrollbar content-class="px-4">
      <div class="sticky top-0 z-1 w-full flex-col bg-#f6f6f6 p-2">
        <h1 class="text-xl font-bold">
          搜索 '{{ value }}' 的结果
        </h1>
        <NTabs v-model:value="type" type="line" class="min-h-0 w-full flex-1 p-2" pane-class="flex-1 min-h-0">
          <NTab v-for="item in SearchTypeMaps" :key="item.value" :name="item.value">
            {{ item.label }}
          </NTab>
        </NTabs>
      </div>
      <component :is="components[type] as any" :data="data?.result" :loading="loading" />
    </NScrollbar>
  </div>
</template>

<style scoped>

</style>
