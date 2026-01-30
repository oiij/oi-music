<script setup lang='ts'>
import { useSpectrum } from '@oiij/use'

const { getFrequencyData } = usePlayerStore()
function getFrequencyDataMirror() {
  return [...getFrequencyData().reverse(), ...getFrequencyData()].slice(512, -512) as unknown as Uint8Array<ArrayBuffer>
}
useSpectrum(useTemplateRef('canvas-ref'), getFrequencyDataMirror, {
  type: 'bar',
  color: '#fff',
  shadow: false,
  barOptions: {
    width: 6,
    spacing: 2,
  },
})
</script>

<template>
  <canvas ref="canvas-ref" style="width: 100%;height: 100px;opacity: .5;" />
</template>

<style scoped>

</style>
