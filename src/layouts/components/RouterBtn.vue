<script setup lang='ts'>
const router = useRouter()
</script>

<template>
  <NButton quaternary circle @click="() => router.back()">
    <template #icon>
      <i class="i-mage-chevron-left" />
    </template>
  </NButton>
</template>

<style scoped>

</style>
