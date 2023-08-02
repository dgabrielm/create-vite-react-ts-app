#!/usr/bin/env node

import { execSync } from 'child_process'

function run(cmd: string) {
  try {
    execSync(cmd, { stdio: 'ignore' })
  } catch(e) {
    console.error(e)
    return false
  }

  return true
}

const repositoryName = process.argv[2]
const gitCheckoutCommand = `git clone --depth 1 https://https://github.com/dgabrielm/create-vite-react-ts-app ${repositoryName}`
const installDependenciesCommand = `cd ${repositoryName} && npm ci`

console.log(`Cloning template repository with name ${repositoryName}`)
const isCloned = run(gitCheckoutCommand)

if (!isCloned) {
  process.exit(-1)
}

console.log('Installing dependencies')
const dependenciesAreInstalled = run(installDependenciesCommand)

if (!isCloned) {
  process.exit(-1)
}

console.log('Successfully installed vite react template')
console.log('Please refer to README.md for startup instructions and features')
