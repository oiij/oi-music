export type searchSuggestType = {
  result: Result
  code: number
}

type Result = {
  albums: Album[]
  artists: Artist2[]
  songs: Song[]
  playlists: Playlist[]
  order: string[]
}

type Playlist = {
  id: number
  name: string
  coverImgUrl: string
  creator?: any
  subscribed: boolean
  trackCount: number
  userId: number
  playCount: number
  bookCount: number
  specialType: number
  officialTags?: any
  action?: any
  actionType?: any
  recommendText?: any
  score?: any
  officialPlaylistTitle?: any
  playlistType: string
  description: string
  highQuality: boolean
}

type Song = {
  id: number
  name: string
  artists: Artist3[]
  album: Album2
  duration: number
  copyrightId: number
  status: number
  alias: string[]
  rtype: number
  ftype: number
  mvid: number
  fee: number
  rUrl?: any
  mark: number
  transNames?: string[]
}

type Album2 = {
  id: number
  name: string
  artist: Artist3
  publishTime: number
  size: number
  copyrightId: number
  status: number
  picId: PicId
  mark: number
}

type Artist3 = {
  id: number
  name: string
  picUrl?: any
  alias: any[]
  albumSize: number
  musicSize: number
  picId: number
  fansGroup?: any
  recommendText?: any
  appendRecText?: any
  fansSize?: any
  img1v1Url: string
  img1v1: number
  trans?: any
}

type Artist2 = {
  id: number
  name: string
  picUrl: string
  alias: string[]
  albumSize: number
  musicSize: number
  picId: PicId
  fansGroup?: any
  recommendText?: any
  appendRecText?: any
  fansSize?: any
  img1v1Url: string
  img1v1: PicId
  transNames: string[]
  alia: string[]
  trans: string
}

type Album = {
  id: number
  name: string
  artist: Artist
  publishTime: number
  size: number
  copyrightId: number
  status: number
  picId: PicId
  mark: number
}

type Artist = {
  id: number
  name: string
  picUrl: string
  alias: string[]
  albumSize: number
  musicSize: number
  picId: PicId
  fansGroup?: any
  recommendText?: any
  appendRecText?: any
  fansSize?: any
  img1v1Url: string
  img1v1: number
  trans?: any
  alia?: string[]
}

type PicId = {
  s: number
  e: number
  c: number[]
}
