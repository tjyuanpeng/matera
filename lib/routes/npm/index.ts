import type { FastifyInstance } from 'fastify'
import proxy from '@fastify/http-proxy'

export default async (fastify: FastifyInstance) => {
  fastify.register(proxy, {
    upstream: 'http://10.168.2.110:31001/',
  })

  fastify.get('/latest/:group/:name', async (request: any, reply) => {
    const response = await fetch(`http://10.168.2.110:31001/repository/ym-group/${request.params.group}/${request.params.name}`)
    const data = await response.json() as any
    reply.success(data['dist-tags'].latest)
  })
}

// http://127.0.0.1:5000/api/npm/service/rest/v1/search?sort=version&repository=ym-hosted&group=falconix&name=fep
// http://127.0.0.1:5000/api/npm/repository/ym-group/@falconix/configs
