<script setup lang='ts'>
import type { NModal } from 'naive-ui'

const { getEQFrequencies, setEQFrequency } = usePlayerStore()
const showModal = ref(false)

const eqFrequenciesRef = ref(getEQFrequencies())

function onEQFrequencyUpdate(index: number, val: number) {
  setEQFrequency(index, val)
  eqFrequenciesRef.value = getEQFrequencies()
}
function formatFrequency(frequency: number) {
  if (frequency >= 1000) {
    return `${(frequency / 1000).toFixed(0)}kHz`
  }
  return `${frequency.toFixed(0)}Hz`
}
const templates = [
  {
    name: '原声',
    gains: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    name: '流行',
    gains: [-10, -10, -5, -5, 0, 0, 5, 5, 10, 10],
  },
  {
    name: '舞曲',
    gains: [-10, -5, -5, 0, 0, 0, 5, 5, 10, 10],
  },
  {
    name: '摇滚',
    gains: [-10, -5, -5, 0, 0, 0, 5, 5, 10, 10],
  },
]
function handleSetEQ(gains: number[]) {
  gains.forEach((gain, index) => {
    setEQFrequency(index, gain)
  })
  eqFrequenciesRef.value = getEQFrequencies()
}
function handleReset() {
  handleSetEQ(templates[0].gains)
}
</script>

<template>
  <NButton quaternary circle @click.stop="() => showModal = !showModal">
    <template #icon>
      <i class="i-mage-filter-square" />
    </template>
  </NButton>
  <NModal
    v-model:show="showModal"
    style="width:auto;"
    size="small"
    preset="card"
    title="均衡器"
    :segmented="true"
    :auto-focus="false"
  >
    <div class="w-140 flex-col gap-5">
      <div class="flex-y-center gap-2">
        <NButton
          v-for="item in templates"
          :key="item.name"
          size="small"
          :quaternary="true"
          @click="handleSetEQ(item.gains)"
        >
          {{ item.name }}
        </NButton>
        <NButton
          class="m-l-auto"
          size="small"
          :tertiary="true"
          @click="() => handleReset()"
        >
          重置
        </NButton>
      </div>
      <NGrid :cols="10" :x-gap="10">
        <NGi v-for="(item, index) in eqFrequenciesRef" :key="item.frequency">
          <div class="flex-col-center gap-1">
            <span class="text-sm">{{ formatFrequency(item.frequency) }}</span>
            <NSlider style="height: 120px;" vertical :step="1" :min="-40" :max="40" :value="item.gain" @update-value="(val) => onEQFrequencyUpdate(index, val)" />
            <span class="text-sm">{{ item.gain }}dB</span>
          </div>
        </NGi>
      </NGrid>
    </div>
  </NModal>
</template>

<style scoped>

</style>
