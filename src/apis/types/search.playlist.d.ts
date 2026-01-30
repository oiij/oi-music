// 1000

export type SearchPlayListResult = {
  playlists: Playlist[]
  hasMore: boolean
  hlWords: string[]
  playlistCount: number
  searchQcReminder?: any
}

type Playlist = {
  id: number
  name: string
  coverImgUrl: string
  creator: Creator
  subscribed: boolean
  trackCount: number
  userId: number
  playCount: number
  bookCount: number
  specialType: number
  officialTags?: any
  action: string
  actionType: string
  recommendText?: any
  score?: any
  officialPlaylistTitle?: any
  playlistType: string
  description?: string
  highQuality: boolean
  alg: string
}

type Creator = {
  nickname: string
  userId: number
  userType: number
  avatarUrl: string
  authStatus: number
  expertTags?: any
  experts?: any
}
