import type { FastifyReply } from 'fastify'
import path from 'node:path'
import process from 'node:process'
import autoLoad from '@fastify/autoload'
import cors from '@fastify/cors'
import Fastify from 'fastify'
import Pino from 'pino'

const createLogger = () => {
  const pino = Pino({
    level: process.env.LOG_LEVEL,
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'SYS:standard',
      },
    },
  })
  return pino
}

const start = async () => {
  const fastify = Fastify({
    loggerInstance: createLogger(),
  })
  fastify.register(cors, {
    origin: true,
  })
  fastify.register(autoLoad, {
    dir: path.join(import.meta.dirname, 'routes'),
    options: {
      prefix: '/api',
    },
  })
  fastify.addHook('preHandler', (req, _reply, next) => {
    if (req.body) {
      req.log.info({ body: req.body }, 'parsed body')
    }
    next()
  })

  fastify.decorateReply('success', function (this: FastifyReply, data = null, message, code = 200) {
    this.status(code).send({
      code,
      message,
      data,
    })
    return this
  })
  fastify.setErrorHandler<any>((error, request, reply) => {
    const statusCode = error.statusCode || error.status || 500
    fastify.log.error(error, `reqId:[${request.id}], method:[${request.method}] url:[${request.url}]`)
    reply.status(statusCode).send({
      code: error.code || statusCode,
      message: error.message || '服务器内部错误',
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
    })
  })

  try {
    await fastify.listen({ host: '0.0.0.0', port: 5000 })
  } catch (err) {
    fastify.log.fatal(err)
    process.exit(1)
  }
}

export {
  start,
}
