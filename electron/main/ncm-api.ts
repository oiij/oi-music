import type { Response } from '@neteasecloudmusicapienhanced/api'
import NeteaseCloudMusicApi from '@neteasecloudmusicapienhanced/api'
import { to } from 'await-to-js'
import { getQuery, H3, readBody } from 'h3'
import { logger } from '../utils/logger'

export function createNCMApi() {
  const app = new H3()
  const apis = Object.entries(NeteaseCloudMusicApi) as [string, (params: Record<string, unknown>) => Promise<Response>][]

  for (const [name, api] of apis) {
    app.all(`/${name}`, async (event) => {
      logger.info(`Request NcmAPI:${name}`)

      const query = getQuery(event)
      const body = await readBody<Record<string, unknown>>(event)
      const cookie = event.req.headers.getSetCookie()

      const [err, res] = await to(api({ ...query, ...body, cookie }))
      if (err) {
        return err
      }
      return res.body
    })
  }
  return app
}
