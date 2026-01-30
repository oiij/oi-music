<script setup lang='ts'>
import ThemeColorSelect from './ThemeColorSelect.vue'

const { colors } = storeToRefs(useAppStore())
</script>

<template>
  <NPopover
    placement="bottom"
    trigger="click"
  >
    <template #trigger>
      <NButton quaternary circle>
        <template #icon>
          <i class="i-mage-ribbon" />
        </template>
      </NButton>
    </template>
    <div>
      <ThemeColorSelect v-model:value="colors.primary" />
    </div>
  </NPopover>
</template>

<style scoped>

</style>
