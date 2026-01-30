export type SearchMixedResult = {
  song: Song2
  voice: KsongInfos
  new_mlog: Newmlog
  code: number
  playList: PlayList2
  artist: Artist4
  album: Album3
  rec_query: null[]
  voicelist: KsongInfos
  user: User2
  order: string[]
}

type User2 = {
  moreText: string
  more: boolean
  users: User[]
  resourceIds: number[]
}

type User = {
  birthday: number
  detailDescription: string
  backgroundUrl: string
  gender: number
  city: number
  signature: string
  description: string
  accountStatus: number
  avatarImgId: Pic
  defaultAvatar: boolean
  avatarImgIdStr: string
  backgroundImgIdStr: string
  province: number
  nickname: string
  alg: string
  djStatus: number
  avatarUrl: string
  authStatus: number
  vipType: number
  followed: boolean
  userId: number
  authenticationTypes: number
  mutual: boolean
  avatarImgId_str?: string
  authority: number
  anchor: boolean
  userType: number
  backgroundImgId: Pic
  avatarDetail?: AvatarDetail
}

type AvatarDetail = {
  identityLevel: number
  identityIconUrl: string
  userType: number
}

type Album3 = {
  moreText: string
  albums: Album2[]
  more: boolean
  resourceIds: number[]
}

type Album2 = {
  artist: Artist5
  description: string
  pic: Pic
  type: string
  picUrl: string
  briefDesc: string
  artists: Artist6[]
  alias: any[]
  onSale: boolean
  id: number
  alg: string
  picId: Pic
  publishTime: number
  picId_str: string
  blurPicUrl: string
  commentThreadId: string
  tags: string
  companyId: number
  size: number
  copyrightId: number
  name: string
  paid: boolean
  mark: number
  status: number
  company?: string
}

type Artist6 = {
  img1v1Url: string
  musicSize: number
  img1v1Id_str?: string
  img1v1Id: Pic | number
  albumSize: number
  picUrl: string
  topicPerson: number
  briefDesc: string
  name: string
  alias: any[]
  id: number
  picId: number
  trans: string
}

type Artist5 = {
  img1v1Url: string
  picId_str?: string
  musicSize: number
  img1v1Id_str?: string
  img1v1Id: Pic | number
  albumSize: number
  alia: string[]
  picUrl: string
  topicPerson: number
  briefDesc: string
  name: string
  alias: string[]
  id: number
  picId: Pic | number
  trans: string
}

type Artist4 = {
  moreText: string
  artists: Artist3[]
  more: boolean
  resourceIds: number[]
}

type Artist3 = {
  img1v1Url: string
  fansSize: number
  musicSize: number
  identityIconUrl?: string
  mvSize: number
  followed: boolean
  albumSize: number
  alia?: string[]
  picUrl?: string
  accountId?: number
  img1v1: Pic | number
  name: string
  alias: string[]
  id: number
  alg: string
  picId: Pic | number
}

type PlayList2 = {
  moreText: string
  more: boolean
  playLists: PlayList[]
  resourceIds: number[]
}

type PlayList = {
  creator: Creator
  bookCount: number
  highQuality: boolean
  userId: number
  coverImgUrl: string
  subscribed: boolean
  playCount: number
  trackCount: number
  specialType: number
  name: string
  officialTags: string[]
  playlistType: string
  id: number
  track: Track
  alg: string
  description?: string
}

type Track = {
  no: number
  copyright: number
  dayPlays: number
  fee: number
  mMusic: MMusic
  bMusic: MMusic
  duration: number
  score: number
  rtype: number
  starred: boolean
  artists: Artist2[]
  rtUrls: any[]
  popularity: number
  playedNum: number
  hearTime: number
  alias: string[]
  starredNum: number
  id: number
  album: Album
  lMusic: MMusic
  ringtone?: string
  commentThreadId: string
  copyFrom: string
  ftype: number
  copyrightId: number
  hMusic: MMusic
  mvid: number
  name: string
  disc: string
  position: number
  status: number
}

type Album = {
  artist: Artist2
  description: string
  pic: Pic
  type: string
  picUrl: string
  briefDesc: string
  artists: Artist2[]
  alias: any[]
  onSale: boolean
  company: string
  id: number
  picId: Pic
  publishTime: number
  picId_str?: string
  blurPicUrl: string
  commentThreadId: string
  gapless: number
  tags: string
  companyId: number
  size: number
  copyrightId: number
  songs: any[]
  name: string
  mark: number
  status: number
}

type Artist2 = {
  picUrl: string
  img1v1Url: string
  topicPerson: number
  briefDesc: string
  musicSize: number
  name: string
  alias: any[]
  img1v1Id: number
  id: number
  picId: number
  albumSize: number
  trans: string
}

type MMusic = {
  extension: string
  size: number
  volumeDelta: number
  bitrate: number
  playTime: number
  id: number
  dfsId: number
  sr: number
}

type Creator = {
  avatarUrl: string
  authStatus: number
  nickname: string
  userType: number
  userId: number
}

type Newmlog = {
  more: boolean
  resources: any[]
}

type Song2 = {
  moreText: string
  songs: Song[]
  more: boolean
  ksongInfos: KsongInfos
  resourceIds: number[]
}

type KsongInfos = object

type Song = {
  copyright: number
  showRecommend: boolean
  fee: number
  hr?: Hr
  specialTags: any[]
  mst: number
  dt: number
  resourceState: boolean
  id: number
  alg: string
  publishTime: number
  mv: number
  al: Al
  version: number
  alia: string[]
  ar: Ar[]
  name: string
  officialTags: any[]
  no: number
  rt: string
  privilege: Privilege
  pst: number
  pop: number
  rtype: number
  s_id: number
  rtUrls: any[]
  lyrics: string
  sq: Hr
  st: number
  cd: string
  cf: string
  recommendText: string
  originCoverType: number
  h: Hr
  originSongSimpleData?: OriginSongSimpleData
  l: Hr
  m: Hr
  cp: number
  djId: number
  single: number
  ftype: number
  t: number
  v: number
  mark: number
  tns?: string[]
}

type OriginSongSimpleData = {
  artists: Artist[]
  name: string
  songId: number
  albumMeta: Artist
}

type Artist = {
  name: string
  id: number
}

type Privilege = {
  flag: number
  code: number
  dlLevel: string
  subp: number
  fl: number
  fee: number
  dl: number
  plLevel: string
  maxBrLevel: string
  rightSource: number
  maxbr: number
  id: number
  sp: number
  payed: number
  st: number
  chargeInfoList: ChargeInfoList[]
  freeTrialPrivilege: FreeTrialPrivilege
  downloadMaxbr: number
  downloadMaxBrLevel: string
  cp: number
  preSell: boolean
  playMaxBrLevel: string
  cs: boolean
  toast: boolean
  playMaxbr: number
  flLevel: string
  pl: number
}

type FreeTrialPrivilege = {
  userConsumable: boolean
  resConsumable: boolean
}

type ChargeInfoList = {
  rate: number
  chargeType: number
}

type Ar = {
  name: string
  tns: any[]
  alias: string[]
  id: number
  alia?: string[]
}

type Al = {
  picUrl: string
  name: string
  tns: any[]
  pic_str: string
  id: number
  pic: Pic
}

type Pic = {
  s: number
  e: number
  c: number[]
}

type Hr = {
  br: number
  fid: number
  size: number
  vd: number
  sr: number
}
