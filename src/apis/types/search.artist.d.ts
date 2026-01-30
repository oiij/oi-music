// 100
export type SearchArtistResult = {
  hasMore: boolean
  artistCount: number
  hlWords: string[]
  artists: Artist[]
  searchQcReminder?: any
}

type Artist = {
  id: number
  name: string
  picUrl?: string
  alias: string[]
  albumSize: number
  musicSize: number
  picId: PicId | number
  fansGroup?: any
  recommendText: string
  appendRecText: string
  fansSize: number
  img1v1Url: string
  accountId: number
  img1v1: PicId | number
  identityIconUrl: string
  mvSize: number
  followed: boolean
  alg: string
  trans?: any
  alia?: string[]
}

type PicId = {
  s: number
  e: number
  c: number[]
}
