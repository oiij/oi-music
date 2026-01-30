<script setup lang='ts'>
import AppBrand from './AppBrand.vue'
import RouterBtn from './RouterBtn.vue'
import Search from './Search.vue'
import ThemeBtn from './ThemeBtn.vue'
import WindowBtn from './WindowBtn.vue'

const router = useRouter()
</script>

<template>
  <div class="h-16 w-full flex draggable">
    <AppBrand />
    <div class="min-w-0 flex-y-center flex-1 gap-2 px-2">
      <RouterBtn class="no-draggable" />
      <Search class="no-draggable" />
      <div class="m-l-auto flex-y-center gap-2 no-draggable">
        <ThemeBtn />
        <NButton quaternary circle @click="() => router.push('/setting')">
          <template #icon>
            <i class="i-mage-settings" />
          </template>
        </NButton>
        <WindowBtn />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">

</style>
