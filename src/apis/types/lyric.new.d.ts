export type LyricNewType = {
  sgc: boolean
  sfy: boolean
  qfy: boolean
  transUser: TransUser
  lyricUser: TransUser
  lrc: Lrc
  klyric: Lrc
  tlyric: Lrc
  romalrc: Lrc
  code: number
}

type Lrc = {
  version: number
  lyric: string
}

type TransUser = {
  id: number
  status: number
  demand: number
  userid: number
  nickname: string
  uptime: number
}
