import path from 'path'
import { compilerOptions } from './tsconfig.json'

export function getAliasesViteConfig () {
  return Object.keys(compilerOptions.paths).map((k) => {
    return {
      find: k.replace('/*', ''),
      replacement: path.resolve(__dirname, compilerOptions.paths[k][0].replace('/*', ''))
    }
  })
}
