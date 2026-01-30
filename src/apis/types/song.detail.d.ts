export type SongDetailType = {
  songs: Song[]
  privileges: Privilege[]
  code: number
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
  cannotListenReason?: any
  playReason?: any
  freeLimitTagType?: any
}

type Song = {
  name: string
  mainTitle: string
  additionalTitle: string
  id: number
  pst: number
  t: number
  ar: Ar[]
  alia: any[]
  pop: number
  st: number
  rt: string
  fee: 0 | 1 | 4 | 8
  v: number
  crbt: any
  cf: string
  al: Al
  dt: number
  h: H
  m: H
  l: H
  sq: H
  hr?: any
  a?: any
  cd: string
  no: number
  rtUrl?: any
  ftype: number
  rtUrls: any[]
  djId: number
  copyright: number
  s_id: number
  mark: number
  originCoverType: number
  originSongSimpleData?: any
  tagPicList?: any
  resourceState: boolean
  version: number
  songJumpInfo?: any
  entertainmentTags?: any
  awardTags?: any
  displayTags?: any
  markTags: any[]
  single: number
  noCopyrightRcmd?: any
  mv: number
  mst: number
  cp: number
  rtype: number
  rurl?: any
  publishTime: number
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
  tns: any[]
  pic_str: string
  pic: Pic
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
