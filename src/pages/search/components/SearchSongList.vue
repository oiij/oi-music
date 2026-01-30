<script setup lang='ts' generic="T extends SearchSongResult = SearchSongResult">
import type { DataTableColumns } from 'naive-ui'
import type { SearchSongResult } from '~/apis/types/search'
import { NButton } from 'naive-ui'

type Song = T['songs'][0]
const { data, loading } = defineProps<{
  data?: T
  loading?: boolean
}>()

const { addToPlayList } = useMediaStore()

const columns: DataTableColumns<Song> = [
  {
    title: '#',
    key: 'index',
    width: 40,
    render: (_, index) => index + 1,
  },
  {
    title: '歌曲',
    key: 'name',
  },
  {
    title: '歌手',
    key: 'artistext-base font-medium',
    render: (row) => {
      return h('div', { class: 'flex-y-center gap-1' }, {
        default: () => [
          row.artists.map((m) => {
            return h(NButton, {
              type: 'primary',
              dashed: true,
              size: 'tiny',
            }, {
              default: () => m.name,
            })
          }),
        ],
      })
    },
  },
  {
    title: '专辑',
    key: 'album',
    render: (row) => {
      return h(NButton, {
        type: 'primary',
        dashed: true,
        size: 'tiny',
      }, {
        default: () => row.album.name,
      })
    },
  },
  {
    key: 'actions',
    width: 120,
    render: (row) => {
      return h('div', { class: 'flex-y-center gap-2' }, {
        default: () => [
          h(NButton, {
            type: 'primary',
            size: 'small',
            circle: true,
            secondary: true,
            onClick: () => {
              addToPlayList(row.id)
            },
          }, {
            icon: () => h('i', { class: 'i-mage-play ml-0.5!' }),
          }),
          h(NButton, {
            type: 'primary',
            size: 'small',
            circle: true,
            secondary: true,
            onClick: () => {
              addToPlayList(row.id)
            },
          }, {
            icon: () => h('i', { class: 'i-mage-plus' }),
          }),
        ],
      })
    },
  },
]
</script>

<template>
  <NFlex vertical class="wh-full">
    <NFlex>
      <NButton>播放全部</NButton>
    </NFlex>
    <NDataTable
      class="flex-1"
      size="small"
      flex-height
      :loading="loading"
      :columns="columns"
      :data="data?.songs"
    />
  </NFlex>
</template>

<style scoped>

</style>
