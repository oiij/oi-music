import NeteaseCloudMusicApi from '@neteasecloudmusicapienhanced/api'
import { H3, serve } from 'h3'
import { SERVER_PORT } from '../../config'
import { createNCMApi } from './ncm-api'

export async function createServer() {
  const app = new H3({
    debug: true,
  })
  app.all('/api', () => {
    return {
      version: '4.29.20',
      apis: Object.keys(NeteaseCloudMusicApi),
    }
  })
  app.mount('/api/ncm', createNCMApi())

  await serve(app, {
    port: SERVER_PORT,
  }).ready()

  return app
}
