<script setup lang='ts'>
import Personalized from './components/Personalized.vue'

definePage({
  meta: {
    layout: 'default',
    title: '推荐',
    requireAuth: true,
    keepAlive: true,
    icon: 'i-mage-music-square-fill',
    group: {
      sort: 0,
      rootOnOne: true,
    },
  },
})
</script>

<template>
  <div>
    <Personalized />
    <GlassButton>
      播放全部
    </GlassButton>
    <OrbSpectrum />
  </div>
</template>

<style scoped>

</style>
