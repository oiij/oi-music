import { useNaiveTheme } from '@oiij/naive-ui'
import { useBoolean } from '@oiij/use'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { useLanguage } from '~/modules'

export const useAppStore = defineStore(
  'appStore',
  () => {
    const { locale, language } = useLanguage()
    const { isDark, preferredDark, colorMode } = useTheme()
    const { colors, themeColors, theme, themeOverrides, locale: naiveLocal } = useNaiveTheme({
      darkMode: isDark,
      language: locale,
      colors: {
        primary: '#FF2D51FF',
      },
      darkColors: (colors) => {
        return colors
      },
      globalThemeOverrides: {
        common: {
          borderRadius: '8px',
        },
        Button: {
          color: 'rgb(252, 252, 252,0.1)',
          colorHover: 'rgb(252, 252, 252,0.2)',
        },
      },
    })
    const playlistColor = ref([0, 0, 0])

    const { value: collapsed, toggle: toggleCollapsed } = useBoolean(false)
    const transitionName = ref('fade')
    const reloadFlag = ref(false)
    async function reload(delay = 300) {
      reloadFlag.value = true
      await nextTick()
      if (delay) {
        setTimeout(() => {
          reloadFlag.value = false
        }, delay)
      }
      else {
        reloadFlag.value = false
      }
    }
    return {
      locale,
      language,
      isDark,
      preferredDark,
      colorMode,
      colors,
      themeColors,
      theme,
      themeOverrides,
      naiveLocal,
      collapsed,
      toggleCollapsed,
      transitionName,
      reloadFlag,
      reload,
      playlistColor,
    }
  },
  {
    persist: {
      key: '__APP_STORE_PERSIST__',
      pick: [''],
    },
    undo: {
      disable: true,
    },
  },
)

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}
