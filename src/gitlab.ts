import process from 'node:process'
import { Gitlab } from '@gitbeaker/rest'
import dotenv from 'dotenv'

dotenv.config()
async function test() {
  const api = new Gitlab({
    host: process.env.HOST,
    token: process.env.PERSONAL_TOKEN,
  })
  const projects = await api.Projects.show(339)

  console.log(projects)
}

export {
  test,
}
