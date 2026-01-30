export type PlaylistTasksType = {
  songs: Song[]
  privileges: Privilege[]
  code: number
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
  st: number
  pl: number
  dl: number
  sp: number
  cp: number
  subp: number
  cs: boolean
  maxbr: number
  fl: number
  toast: boolean
  flag: number
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

type Song = {
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
  mark: Pic | number
  originCoverType: number
  originSongSimpleData?: OriginSongSimpleDatum
  tagPicList?: any
  resourceState: boolean
  version: number
  songJumpInfo?: any
  entertainmentTags?: any
  awardTags?: any
  displayTags?: any
  markTags: any[]
  single: number
  noCopyrightRcmd?: NoCopyrightRcmd
  mv: number
  rtype: number
  rurl?: any
  mst: number
  cp: number
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
  sr: number
}

type Al = {
  id: number
  name: string
  picUrl: string
  tns: string[]
  pic_str?: string
  pic: Pic | number
}

type Pic = {
  s: number
  e: number
  c: number[]
}

type Ar = {
  id: number
  name: string
  tns: any[]
  alias: any[]
}
