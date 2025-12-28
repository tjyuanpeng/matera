import { $ } from 'execa'

const main = async () => {
  const dir = `../fcl`
  const pattern = `tsdown`
  const { stdout } = await $`pnpm list ${pattern} --dir ${dir} --recursive --depth=0 --json`
  const obj = JSON.parse(stdout)
  console.log(obj)
}

main()
