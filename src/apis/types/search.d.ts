import type { SearchAlbumResult } from './search.album'
import type { SearchArtistResult } from './search.artist'
import type { SearchDefaultType } from './search.default'
import type { SearchHotDetailType } from './search.hot.detail'
import type { SearchMixedResult } from './search.mixed'
import type { SearchPlayListResult } from './search.playlist'
import type { SearchSongResult } from './search.song'
import type { searchSuggestType } from './search.suggest'
import type { SearchTypeEnum } from '~/utils/enum'

export type SearchType<T extends keyof typeof SearchTypeEnum> = {
  code: number
  trp: {
    rules: string[]
  }
  result: T extends '1018' ? SearchMixedResult
    : T extends '1' ? SearchSongResult
      : T extends '10' ? SearchAlbumResult
        : T extends '100' ? SearchArtistResult
          : T extends '1000' ? SearchPlayListResult
            : never
}
export type {
  SearchAlbumResult,
  SearchArtistResult,
  SearchDefaultType,
  SearchHotDetailType,
  SearchHotDetailType,
  SearchMixedResult,
  SearchPlayListResult,
  SearchSongResult,
  searchSuggestType,
}
