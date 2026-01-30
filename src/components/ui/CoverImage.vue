<script setup lang='ts'>
const { src, rotate } = defineProps<{
  src?: string
  rotate?: boolean
}>()

const loaded = ref(false)
const showImage = computed(() => src && loaded.value)
watch(() => src, () => {
  loaded.value = false
})

function onLoaded() {
  loaded.value = true
}
</script>

<template>
  <div class="cover-rotate relative wh-full overflow-hidden" :style="{ animationPlayState: rotate ? 'running' : 'paused' }">
    <div class="absolute inset-0 flex-center bg-black/10 transition-base" :class="[showImage ? 'invisible' : 'visible']">
      <i class="i-mage-music-fill text-2xl text-black/60" />
    </div>
    <img :src="src" loading="lazy" class="scale-100 object-cover transition-base" :class="[showImage ? 'visible' : 'invisible']" @load="onLoaded">
  </div>
</template>

<style scoped>
.cover-rotate {
  animation: cover-rotate 18s linear infinite;
}
@keyframes cover-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
