<script setup lang='ts'>
import { useMenu } from '~/composables/useMenu'

const router = useRouter()
const route = useRoute()

const { themeColors } = storeToRefs(useAppStore())
const { menuOptions } = useMenu()
</script>

<template>
  <div class="h-full w-50 flex-col bg-black/5 dark:bg-white/5">
    <div class="flex-col gap-2 p-4">
      <div
        v-for="item in menuOptions"
        :key="item.key"
        class="flex-y-center cursor-pointer gap-2 rounded-lg p-x-2 p-y-1 text-sm hover:bg-black/10"
        :style="route.path === item.key ? { backgroundColor: themeColors.primary, color: '#fff' } : {}"
        @click="() => router.push(item.key as string)"
      >
        <component :is="item.icon" class="text-base" />
        <span>{{ item.label }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
