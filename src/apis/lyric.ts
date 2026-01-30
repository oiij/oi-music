import type { LyricNewType, LyricType } from './types/lyric'
import { post } from '~/utils/http'
import { NCM_PREFIX } from '.'

export const lyricApi = {
  getLyric(params: { id: number }) {
    return post<LyricType>(`${NCM_PREFIX}/lyric`, params)
  },
  newLyric(params: { id: number }) {
    return post<LyricNewType>(`${NCM_PREFIX}/lyric_new`, params)
  },
}
