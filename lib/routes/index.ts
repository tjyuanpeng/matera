import type { FastifyPluginCallback } from 'fastify'

export default (async (app) => {
  app.get('/ok', async () => {
    return { status: 'ok', time: new Date() }
  })
}) as FastifyPluginCallback
