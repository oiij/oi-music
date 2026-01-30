/* eslint-disable ts/no-empty-object-type */
export type PlaylistDetailType = {
  code: number
  relatedVideos?: any
  playlist: Playlist
  urls?: any
  privileges: Privilege[]
  sharedPrivilege?: any
  resEntrance?: any
  fromUsers?: any
  fromUserCount: number
  songFromUsers?: any
  status: number
  body: Body
  cookie: string[]
}

type Body = {
  code: number
  message: string
  debugInfo?: any
  data?: any
  failData?: any
  msg: string
}
type Privilege = {
  id: number
  fee: number
  payed: number
  realPayed: number
  st: number
  pl: number
  dl: number
  sp: number
  cp: number
  subp: number
  cs: boolean
  maxbr: number
  fl: number
  pc?: any
  toast: boolean
  flag: number
  paidBigBang: boolean
  preSell: boolean
  playMaxbr: number
  downloadMaxbr: number
  maxBrLevel: string
  playMaxBrLevel: string
  downloadMaxBrLevel: string
  plLevel: string
  dlLevel: string
  flLevel: string
  rscl?: any
  freeTrialPrivilege: FreeTrialPrivilege
  rightSource: number
  chargeInfoList: ChargeInfoList[]
  code: number
  message?: any
  plLevels?: any
  dlLevels?: any
  ignoreCache?: any
  bd?: any
}

type ChargeInfoList = {
  rate: number
  chargeUrl?: any
  chargeMessage?: any
  chargeType: number
}

type FreeTrialPrivilege = {
  resConsumable: boolean
  userConsumable: boolean
  listenType?: any
  cannotListenReason?: number
  playReason?: any
  freeLimitTagType?: any
}

type Playlist = {
  id: number
  name: string
  coverImgId: CoverImgId
  coverImgUrl: string
  coverImgId_str: string
  adType: number
  userId: number
  createTime: number
  status: number
  opRecommend: boolean
  highQuality: boolean
  newImported: boolean
  updateTime: number
  trackCount: number
  specialType: number
  privacy: number
  trackUpdateTime: number
  commentThreadId: string
  playCount: number
  trackNumberUpdateTime: number
  subscribedCount: number
  cloudTrackCount: number
  ordered: boolean
  description: string
  tags: string[]
  updateFrequency?: any
  backgroundCoverId: number
  backgroundCoverUrl?: any
  titleImage: number
  titleImageUrl?: any
  detailPageTitle?: any
  englishTitle?: any
  officialPlaylistType?: any
  copied: boolean
  relateResType?: any
  coverStatus: number
  subscribers: Subscriber[]
  subscribed?: any
  creator: Subscriber
  tracks: Track[]
  videoIds?: any
  videos?: any
  trackIds: TrackId[]
  bannedTrackIds?: any
  mvResourceInfos?: any
  shareCount: number
  commentCount: number
  remixVideo?: any
  newDetailPageRemixVideo?: any
  sharedUsers?: any
  historySharedUsers?: any
  gradeStatus: string
  score?: any
  algTags?: any
  distributeTags: any[]
  trialMode: number
  displayTags?: any
  displayUserInfoAsTagOnly: boolean
  playlistType: string
  bizExtInfo: BizExtInfo
  mixPodcastPlaylist: boolean
  podcastTrackCount: number
}

type BizExtInfo = {
}

type TrackId = {
  id: number
  v: number
  t: number
  at: number
  alg?: any
  uid: number
  rcmdReason: string
  rcmdReasonTitle: string
  sc?: any
  f?: any
  sr?: any
  dpr?: any
  tr: number
}

type Track = {
  name: string
  mainTitle?: string
  additionalTitle?: string
  id: number
  pst: number
  t: number
  ar: Ar[]
  alia: string[]
  pop: number
  st: number
  rt?: string
  fee: number
  v: number
  crbt?: any
  cf: string
  al: Al
  dt: number
  h?: H
  m?: H
  l?: H
  sq?: H
  hr?: H
  a?: any
  cd: string
  no: number
  rtUrl?: any
  ftype: number
  rtUrls: any[]
  djId: number
  copyright: number
  s_id: number
  mark: CoverImgId | number
  originCoverType: number
  originSongSimpleData?: OriginSongSimpleDatum
  tagPicList?: any
  resourceState: boolean
  version: number
  songJumpInfo?: any
  entertainmentTags?: any
  awardTags?: any
  displayTags?: any
  single: number
  noCopyrightRcmd?: NoCopyrightRcmd
  alg?: any
  displayReason?: any
  pubDJProgramData?: any
  rtype: number
  rurl?: any
  mst: number
  cp: number
  mv: number
  publishTime: number
  tns?: string[]
}

type NoCopyrightRcmd = {
  type: number
  typeDesc: string
  songId?: string
  thirdPartySong?: any
  expInfo?: any
}

type OriginSongSimpleDatum = {
  songId: number
  name: string
  artists: Artist[]
  albumMeta: Artist
}

type Artist = {
  id: number
  name: string
}

type H = {
  br: number
  fid: number
  size: number
  vd: number
}

type Al = {
  id: number
  name: string
  picUrl: string
  tns: string[]
  pic_str?: string
  pic: CoverImgId | number
}

type Ar = {
  id: number
  name: string
  tns: any[]
  alias: any[]
}

type Subscriber = {
  defaultAvatar: boolean
  province: number
  authStatus: number
  followed: boolean
  avatarUrl: string
  accountStatus: number
  gender: number
  city: number
  birthday: number
  userId: number
  userType: number
  nickname: string
  signature: string
  description: string
  detailDescription: string
  avatarImgId: CoverImgId
  backgroundImgId: CoverImgId
  backgroundUrl: string
  authority: number
  mutual: boolean
  expertTags?: any
  experts?: any
  djStatus: number
  vipType: number
  remarkName?: any
  authenticationTypes: number
  avatarDetail?: any
  avatarImgIdStr: string
  backgroundImgIdStr: string
  anchor: boolean
  avatarImgId_str: string
}

type CoverImgId = {
  s: number
  e: number
  c: number[]
}
