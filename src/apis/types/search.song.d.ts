// 1
export type SearchSongResult = {
  songs: Song[]
  hasMore: boolean
  songCount: number
}

type Song = {
  album: Album
  fee: number
  duration: number
  rtype: number
  ftype: number
  artists: Artist[]
  copyrightId: number
  mvid: number
  name: string
  alias: any[]
  id: number
  mark: number
  status: number
}

type Album = {
  publishTime: number
  size: number
  artist: Artist
  copyrightId: number
  name: string
  id: number
  picId: PicId
  mark: number
  status: number
}

type PicId = {
  s: number
  e: number
  c: number[]
}

type Artist = {
  img1v1Url: string
  musicSize: number
  albumSize: number
  img1v1: number
  name: string
  alias: any[]
  id: number
  picId: number
}
