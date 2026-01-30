<script setup lang='ts' generic="T extends SearchMixedResult = SearchMixedResult">
import type { SearchMixedResult } from '~/apis/types/search'

const { data } = defineProps<{
  data?: T
  loading?: boolean
}>()
</script>

<template>
  <div class="flex-col gap-2">
    <h2 class="text-base font-500">
      单曲
    </h2>
    <NGrid :cols="2" :x-gap="10" :y-gap="10">
      <NGi v-for="item in data?.song?.songs" :key="item.id">
        <div class="group/mask flex-y-center gap-2 rounded-md p-2 transition-base hover:bg-white">
          <div class="min-w-0 flex-col flex-1">
            <span class="truncate text-sm">
              {{ item.name }}
            </span>
            <div>
              <span v-for="ar in item.ar" :key="ar.id">{{ ar.name }}</span>
            </div>
          </div>
        </div>
      </NGi>
    </NGrid>
    <h2 class="text-base font-500">
      歌单
    </h2>
    <NGrid :cols="5" :x-gap="10" :y-gap="10">
      <NGi v-for="item in data?.playList?.playLists" :key="item.id">
        <div class="flex-col cursor-pointer gap-2 rounded-md">
          <div class="group/cover relative aspect-ratio-1 w-full">
            <NImage :src="item.coverImgUrl" class="wh-full rounded-md" preview-disabled />
            <div class="absolute inset-0 rounded-md group-hover/cover:bg-black/10">
              <i class="i-mage-play-fill absolute bottom-2 right-2 cursor-pointer text-2xl text-white/50 hover:scale-110 group-hover/cover:text-white" />
            </div>
          </div>
          <span class="truncate">{{ item.name }}</span>
        </div>
      </NGi>
    </NGrid>
  </div>
</template>

<style scoped>

</style>
