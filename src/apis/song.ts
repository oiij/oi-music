import type { SongDetailType, SongUrlType } from './types/song'
import type { SongQualityEnum, SongQualityLevelEnum } from '~/utils/enum'
import { post } from '~/utils/http'
import { NCM_PREFIX } from '.'

export const songApi = {
  url({ ids, ...params}: { ids: number | number[], br?: keyof typeof SongQualityEnum }) {
    return post<SongUrlType>(`${NCM_PREFIX}/song_url`, { id: Array.isArray(ids) ? ids.join(',') : `${ids}`, ...params })
  },
  urlV1(params: { id: number, level?: keyof typeof SongQualityLevelEnum, unblock?: boolean }) {
    return post(`${NCM_PREFIX}/song_url_v1`, params)
  },
  urlMatch(params: { id: number }) {
    return post(`${NCM_PREFIX}/song_url_match`, params)
  },
  detail({ ids }: { ids: number | number[] }) {
    return post<SongDetailType>(`${NCM_PREFIX}/song_detail`, { ids: Array.isArray(ids) ? ids.join(',') : `${ids}` })
  },
  downloadUrl(params: { id: number, br?: keyof typeof SongQualityEnum }) {
    return post(`${NCM_PREFIX}/song_download_url`, params)
  },
}
