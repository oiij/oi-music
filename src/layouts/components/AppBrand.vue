<script setup lang='ts'>
import SvgIcon from '~virtual/svg-component'

const { themeColors } = storeToRefs(useAppStore())
</script>

<template>
  <div class="h-full w-50 flex-center gap-1 bg-black/5 dark:bg-white/5" :style="{ color: themeColors.primary }">
    <SvgIcon name="icon-oi-logo" style="width: 32px;height: 32px;" />
    <span class="text-3xl font-bold">Music</span>
  </div>
</template>

<style scoped>

</style>
