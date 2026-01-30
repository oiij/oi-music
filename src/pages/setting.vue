<!-- eslint-disable no-console -->
<script setup lang='ts'>
import type { SelectOption } from 'naive-ui'
import { NDivider } from 'naive-ui'

defineOptions({

})
definePage({
  meta: {
    layout: 'default',
    title: 'SETTING',
    requireAuth: true,
    keepAlive: true,
    icon: 'i-mage-settings',
    hide: true,
  },
})
const { language, colorMode } = storeToRefs(useAppStore())
const CardItem = defineComponent((props: { title?: string }, { slots }) => {
  return () => h('div', {
    class: 'flex-col gap-2 rounded-xl bg-white p-4 dark:bg-black/20',
  }, [
    h('h1', { class: 'text-xl' }, props.title ?? 'Card Name'),
    h(NDivider, { class: 'my-2!' }),
    h('div', { class: 'flex-col gap-2' }, [
      slots.default && slots.default(),
    ]),
  ])
}, {
  props: ['title'],
})
const localesOptions: SelectOption[] = [
  {
    label: '跟随系统',
    value: 'auto',
  },
  {
    label: '简体中文',
    value: 'zh-CN',
  },
  {
    label: '英文',
    value: 'en-US',
  },
]
const colorModeOptions: SelectOption[] = [
  {
    label: '跟随系统',
    value: 'auto',

  },
  {
    label: '浅色',
    value: 'light',
  },
  {
    label: '深色',
    value: 'dark',
  },
]
</script>

<template>
  <div class="flex-col gap-2 p-4">
    <CardItem title="通用">
      <NFormItem label="语言">
        <NSelect v-model:value="language" class="w-60!" :options="localesOptions" />
      </NFormItem>
      <NFormItem label="颜色模式">
        <NSelect v-model:value="colorMode" class="w-60!" :options="colorModeOptions" />
      </NFormItem>
    </CardItem>
    <CardItem title="关于">
      <div class="w-full flex">
        <GitHub />
      </div>
    </CardItem>
  </div>
</template>

<style scoped lang='less'></style>
