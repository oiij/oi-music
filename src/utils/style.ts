export const highlightStyle = computed(() => {
  const { themeColors } = storeToRefs(useAppStore())
  return {
    color: `${themeColors.value.primary}`,
    background: 'transparent',
  }
})
