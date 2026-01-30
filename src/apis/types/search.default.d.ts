export type SearchDefaultType = {
  code: number
  message?: any
  data: Data
}

type Data = {
  showKeyword: string
  styleKeyword: StyleKeyword
  realkeyword: string
  searchType: number
  action: number
  alg: string
  gap: number
  source?: any
  bizQueryInfo: string
  logInfo?: any
  imageUrl?: any
  trp_type?: any
  trp_id?: any
}

type StyleKeyword = {
  keyWord: string
  descWord?: any
}
