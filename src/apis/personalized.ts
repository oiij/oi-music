import type { PersonalizedType } from './types/personalized'
import { post } from '~/utils/http'
import { NCM_PREFIX } from '.'

export const personalizedApi = {
  getPersonalized(params?: { limit?: number }) {
    return post<PersonalizedType>(`${NCM_PREFIX}/personalized`, params)
  },
}
