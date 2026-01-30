import type { SearchDefaultType, SearchHotDetailType, searchSuggestType, SearchType } from './types/search'
import type { SearchTypeEnum } from '~/utils/enum'
import { post } from '~/utils/http'
import { NCM_PREFIX } from '.'

export const searchApi = {
  search<T extends keyof typeof SearchTypeEnum>(params: { keywords: string, limit?: number, offset?: number }, type?: T) {
    return post<SearchType<T>>(`${NCM_PREFIX}/search`, { ...params, type: type ?? '1018' })
  },
  cloudSearch(params: { keywords: string, limit?: number, offset?: number, type?: keyof typeof SearchTypeEnum }) {
    return post<object>(`${NCM_PREFIX}/cloudsearch`, params)
  },
  searchDefault() {
    return post<SearchDefaultType>(`${NCM_PREFIX}/search_default`)
  },
  searchHot() {
    return post<SearchHotDetailType>(`${NCM_PREFIX}/search_hot`)
  },
  searchHotDetail() {
    return post<SearchHotDetailType>(`${NCM_PREFIX}/search_hot_detail`)
  },
  searchSuggest(params: { keywords: string, type?: 'mobile' }) {
    return post<searchSuggestType>(`${NCM_PREFIX}/search_suggest`, params)
  },
  searchMultimatch(params: { keywords: string }) {
    return post<object>(`${NCM_PREFIX}/search_multimatch`, params)
  },

}
