import type { LyricNewType } from './lyric.new'

export type LyricType = {
  sgc: boolean
  sfy: boolean
  qfy: boolean
  transUser: TransUser
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

export { LyricNewType }
