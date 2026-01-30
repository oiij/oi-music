<script setup lang="ts">
import AppAside from './components/AppAside.vue'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

const { playlistColor } = storeToRefs(useAppStore())

const { showMiniPlayer } = storeToRefs(usePlayerStore())
</script>

<template>
  <div
    class="linear-gradient h-100vh w-100vw flex-col transition-base"
    :class="showMiniPlayer ? 'pb-20' : ''"
    :style="{
      '--color1': `rgba(${playlistColor.join(', ')}, 0.3)`,
      '--color2': `rgba(255, 255, 255, 0)`,
    }"
  >
    <AppHeader />
    <div class="min-h-0 w-full flex flex-1">
      <AppAside />
      <AppMain>
        <slot />
      </AppMain>
    </div>
  </div>
</template>

<style scoped lang="less">
@property --color1 {
  syntax: '<color>';
  inherits: false;
  initial-value: rgba(0, 0, 0, 0.3);
}

@property --color2 {
  syntax: '<color>';
  inherits: false;
  initial-value: rgba(255, 255, 255, 0);
}
.linear-gradient {
  background: linear-gradient(180deg, var(--color1) 20%, var(--color2) 60%);
  transition:
    --color1 0.5s ease,
    --color2 0.5s ease;
}
</style>
