<script setup lang='ts'>
import useRequest from 'vue-hooks-plus/es/useRequest'
import { personalizedApi } from '~/apis/personalized'

const router = useRouter()
const { data } = useRequest(() => personalizedApi.getPersonalized({ limit: 12 }))
function handleClick(id: number) {
  router.push({
    path: '/playlist',
    query: {
      id,
    },
  })
}
</script>

<template>
  <NGrid :cols="6" :x-gap="10" :y-gap="10">
    <template v-if="data">
      <NGridItem v-for="(item, index) in data?.result" :key="index">
        <NFlex vertical @click="() => handleClick(item.id)">
          <NImage :src="item.picUrl" preview-disabled lazy />
          <span>{{ item.name }}</span>
        </NFlex>
      </NGridItem>
    </template>
    <template v-else>
      <NGridItem v-for="index in 12" :key="index">
        <NSkeleton width="100%" height="auto" style="aspect-ratio: 1;" :sharp="false" />
        <NSkeleton text :repeat="2" :sharp="false" />
      </NGridItem>
    </template>
  </NGrid>
</template>

<style scoped>

</style>
