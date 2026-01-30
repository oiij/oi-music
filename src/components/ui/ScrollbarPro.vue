<script setup lang='ts'>
const { scrollTop, showIntoView } = defineProps<{
  scrollTop?: number
  showIntoView?: boolean
}>()
const emit = defineEmits<{
  (e: 'update:scrollTop', scrollTop: number): void
}>()
const scrollBarRef = useTemplateRef('scroll-bar')
const scrollBarContainerRef = useTemplateRef('scroll-bar-container')
const debounceScroll = useDebounceFn((ev: Event) => {
  const scrollTop = (ev.target as HTMLElement).scrollTop
  emit('update:scrollTop', scrollTop)
}, 300)
watchEffect(() => {
  scrollBarRef.value?.scrollTo({ left: 0, top: scrollTop, behavior: 'smooth' })
})
function handleScrollInto() {
  const activeElement = scrollBarContainerRef.value?.querySelector('.is-active')
  if (activeElement) {
    activeElement.scrollIntoView({
      block: 'nearest',
      behavior: 'smooth',
    })
  }
}
</script>

<template>
  <div class="wh-full">
    <NScrollbar ref="scroll-bar" @scroll="debounceScroll">
      <Teleport to="body">
        <Transition name="fade">
          <NFloatButton v-if="showIntoView" :right="40" :bottom="160" :width="44" @click="() => handleScrollInto()">
            <i class="i-mage-location-fill text-lg" />
          </NFloatButton>
        </Transition>
      </Teleport>
      <NBackTop :bottom="100">
        <NButton text>
          <i class="i-mage-arrow-up text-lg" />
        </NButton>
      </NBackTop>
      <div ref="scroll-bar-container">
        <slot />
      </div>
    </NScrollbar>
  </div>
</template>

<style scoped>

</style>
