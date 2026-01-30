// 10
export type SearchAlbumResult = {
  hlWords: string[]
  albums: Album[]
  albumCount: number
}

type Album = {
  name: string
  id: number
  type: string
  size: number
  picId: PicId
  blurPicUrl: string
  companyId: number
  pic: PicId
  picUrl: string
  publishTime: number
  description: string
  tags: string
  company?: string
  briefDesc: string
  artist: Artist
  songs?: any
  alias: any[]
  status: number
  copyrightId: number
  commentThreadId: string
  artists: Artist2[]
  paid: boolean
  onSale: boolean
  mark: number
  picId_str: string
  alg: string
  containedSong: string
}

type Artist2 = {
  name: string
  id: number
  picId: number
  img1v1Id: PicId | number
  briefDesc: string
  picUrl: string
  img1v1Url: string
  albumSize: number
  alias: any[]
  trans: string
  musicSize: number
  topicPerson: number
  img1v1Id_str?: string
}

type Artist = {
  name: string
  id: number
  picId: PicId | number
  img1v1Id: PicId | number
  briefDesc: string
  picUrl: string
  img1v1Url: string
  albumSize: number
  alias: any[]
  trans: string
  musicSize: number
  topicPerson: number
  alia: any[]
  picId_str?: string
  img1v1Id_str?: string
}

type PicId = {
  s: number
  e: number
  c: number[]
}
