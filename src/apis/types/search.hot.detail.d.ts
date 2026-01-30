export type SearchHotDetailType = {
  code: number
  data: Datum[]
  message: string
}

type Datum = {
  searchWord: string
  score: number
  content: string
  source: number
  iconType: number
  iconUrl?: string
  url: string
  alg?: string
}
