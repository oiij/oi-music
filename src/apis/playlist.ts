import type { PlaylistDetailType, PlaylistTasksType } from './types/playlist'
import { post } from '~/utils/http'
import { NCM_PREFIX } from '.'

export const playlistApi = {
  detail(params: { id: string, s?: number }) {
    return post<PlaylistDetailType>(`${NCM_PREFIX}/playlist_detail`, params)
  },
  tasks(params: { id: string, limit?: number, offset?: number }) {
    return post<PlaylistTasksType>(`${NCM_PREFIX}/playlist_track_all`, params)
  },
}
