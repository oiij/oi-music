<script setup lang='ts'>
const isMaximized = ref(false)
function handleMinimize() {
  window.api?.window.minimizeCurrentWindow()
}
async function handleToggleMaximize() {
  if (isMaximized.value) {
    await window.api?.window.unMaximizeCurrentWindow()
    isMaximized.value = false
  }
  else {
    await window.api?.window.maximizeCurrentWindow()
    isMaximized.value = true
  }
}
function handleClose() {
  window.api?.window.closeCurrentWindow()
}
</script>

<template>
  <div class="flex-y-center gap-2">
    <NButton quaternary circle @click="() => handleMinimize()">
      <template #icon>
        <i class="i-mage-minus" />
      </template>
    </NButton>
    <NButton quaternary circle @click="() => handleToggleMaximize()">
      <template #icon>
        <i :class="isMaximized ? 'i-mage-scale-down' : 'i-mage-scale-up'" />
      </template>
    </NButton>
    <NButton quaternary circle @click="() => handleClose()">
      <template #icon>
        <i class="i-mage-multiply" />
      </template>
    </NButton>
  </div>
</template>

<style scoped>

</style>
