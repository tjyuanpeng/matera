import { $ } from 'execa'

const fetchDependencies = async (rootDir: string, pattern: string) => {
  // const dir = `../fcl`
  // const pattern = `@falconix/*`
  const { stdout } = await $`pnpm list ${pattern} --dir ${rootDir} --recursive --depth=0 --json`
  const obj = JSON.parse(stdout)
  console.log(stdout)
  console.log('# ========= #')
  console.log(obj)

  return obj
}

export {
  fetchDependencies,
}
