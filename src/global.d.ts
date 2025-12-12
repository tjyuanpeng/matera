declare global {
  namespace NodeJS {
    interface ProcessEnv {
      HOST?: string
      PERSONAL_TOKEN?: string
    }
  }
}

export {}
