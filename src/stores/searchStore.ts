import { acceptHMRUpdate, defineStore } from 'pinia'

type SearchRecord = {
  text: string
  time: number
  count: number
}
export const useSearchStore = defineStore('searchStore', () => {
  const searchRecord = ref<SearchRecord[]>([])
  function add(text: string) {
    const index = searchRecord.value.findIndex(item => item.text === text)
    if (index === -1) {
      searchRecord.value.push({
        text,
        time: Date.now(),
        count: 1,
      })
    }
    else {
      searchRecord.value[index].count++
    }
  }
  function remove(text: string) {
    searchRecord.value = searchRecord.value.filter(item => item.text !== text)
  }
  function clear() {
    searchRecord.value = []
  }
  const hot = computed(() => {
    return searchRecord.value.sort((a, b) => b.count - a.count)
  })
  return {
    searchRecord,
    add,
    remove,
    clear,
    hot,
  }
}, {
  persist: {
    key: '__SEARCH-STORE_PERSIST__',
    pick: [],
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSearchStore, import.meta.hot))
}
