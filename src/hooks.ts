import type { FastifyRequest } from 'fastify'
import process from 'node:process'
import Fastify from 'fastify'
import logger from './logger'

const fastify = Fastify({
  loggerInstance: logger,
})
fastify.addHook('preHandler', (req, _reply, done) => {
  if (req.body) {
    req.log.info({ body: req.body }, 'parsed body')
  }
  done()
})

fastify.get('/', async () => {
  return 'ok'
})

fastify.post('/hook', async (req: FastifyRequest<{ Body: PushBody }>) => {
  req.log.info({ type: req.body.object_kind }, 'object_kind')
  return {
    code: 200,
  }
})

async function start() {
  try {
    await fastify.listen({ host: '0.0.0.0', port: 5000 })
  }
  catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

export {
  start,
}
