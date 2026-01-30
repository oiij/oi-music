import type { LyricType } from '~/apis/types/lyric'
import type { SongDetailType } from '~/apis/types/song.detail'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { lyricApi } from '~/apis/lyric'
import { songApi } from '~/apis/song'

export const useMediaStore = defineStore('mediaStore', () => {
  const playerStore = usePlayerStore()

  const loading = ref(false)
  const playList = ref<SongDetailType['songs']>([])
  const currentSongId = ref<number>()
  const currentSong = computed(() => playList.value.find(item => item.id === currentSongId.value))
  const currentSongInfo = computed(() => {
    return {
      name: currentSong.value?.name,
      cover: currentSong.value?.al.picUrl,
      artist: currentSong.value?.ar.map(item => item.name),
      album: currentSong.value?.al.name,
    }
  })
  // 缓存播放id
  const songIdCache = ref<number[]>([])
  function getLastSongCacheId() {
    songIdCache.value.pop()
    return songIdCache.value.at(-1)
  }
  const lyric = ref<LyricType>()

  const lrc = computed(() => lyric.value?.lrc?.lyric)
  async function playSong(id?: number) {
    if (!id) {
      id = playList.value[0].id
    }
    loading.value = true
    const [err, res] = await to(songApi.url({ ids: id }))
    const url = res?.data?.[0].url
    if (err || !url) {
      window.$message.error('获取歌曲url失败')
      return
    }

    await playerStore.play(url)
    loading.value = false
    const [lyricErr, lyricRes] = await to(lyricApi.getLyric({ id }))
    if (!lyricErr) {
      lyric.value = lyricRes
    }
    currentSongId.value = id
    songIdCache.value.push(id)
  }
  async function addToPlayList(ids: number | number[]) {
    const [err, res] = await to(songApi.detail({ ids }))
    const songs = res?.songs ?? []
    if (err || songs.length === 0) {
      window.$message.error('获取歌曲详情失败')
      return
    }
    if (Array.isArray(ids)) {
      playList.value = songs
      await playSong(songs[0].id)
    }
    else {
      const find = playList.value.find(f => f.id === ids)
      if (find) {
        await playSong(find.id)
      }
      else {
        playList.value.push(songs[0])
        await playSong(songs[0].id)
      }
    }
  }
  function clearMedia() {
    playList.value = []
    currentSongId.value = undefined
  }
  function getNextSongId() {
    if (!currentSongId.value) {
      return playList.value[0].id
    }
    const currentIndex = playList.value.findIndex(item => item.id === currentSongId.value)
    if (currentIndex === playList.value.length - 1) {
      return playList.value[0].id
    }
    else {
      return playList.value[currentIndex + 1].id
    }
  }

  function getRandomSongId() {
    const randomIndex = Math.floor(Math.random() * playList.value.length)
    return playList.value[randomIndex].id
  }
  return {
    loading,
    playList,
    currentSongId,
    currentSong,
    currentSongInfo,
    songIdCache,
    getLastSongCacheId,
    lyric,
    lrc,
    playSong,
    addToPlayList,
    clearMedia,
    getNextSongId,
    getRandomSongId,
  }
}, {
  persist: {
    key: '__MEDIA_STORE_PERSIST__',
    pick: [],
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMediaStore, import.meta.hot))
}
