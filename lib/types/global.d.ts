declare global {
  namespace NodeJS {
    interface ProcessEnv {
      HOST?: string
      PERSONAL_TOKEN?: string
      LOG_LEVEL: string
    }
  }
}

declare module 'fastify' {

  interface FastifyReply {
    success: <T = any>(
      data?: T,
      msg?: string,
      code?: number,
    ) => this
  }
}

export {}
