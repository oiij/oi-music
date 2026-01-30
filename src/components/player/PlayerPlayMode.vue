<script setup lang='ts'>
import type { SelectOption } from 'naive-ui'
import { PlayModeMaps } from '~/utils/enum'

const { playMode } = storeToRefs(usePlayerStore())
const icons: Record<string, string> = {
  sequence: 'i-iconamoon-playlist-light',
  loop: 'i-iconamoon-playlist-repeat-list-light',
  random: 'i-iconamoon-playlist-shuffle-light',
  single: 'i-iconamoon-playlist-repeat-song-light',
}
const options = PlayModeMaps.map(m => ({
  ...m,
  icon: icons[m.value],
}))
const currentIcon = computed(() => options.find(item => item.value === playMode.value)?.icon)
function renderLabel(option: SelectOption) {
  return h('div', { class: 'flex-y-center gap-1' }, {
    default: () => [
      h('i', { class: `${option.icon}` }),
      h('span', {}, { default: () => option.label }),
    ],
  })
}
function handleToggle() {
  const index = options.findIndex(item => item.value === playMode.value)
  if (index === options.length - 1) {
    playMode.value = options[0].value
  }
  else {
    playMode.value = options[index + 1].value
  }
}
</script>

<template>
  <NPopselect v-model:value="playMode" :options="options" :render-label="renderLabel">
    <NButton quaternary circle @click.stop="() => handleToggle()">
      <template #icon>
        <i :class="currentIcon" />
      </template>
    </NButton>
  </NPopselect>
</template>

<style scoped>

</style>
