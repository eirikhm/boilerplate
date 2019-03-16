import { namespaced } from 'overmind/config'


import * as core from './core'
import * as appConfig from './appConfig'


export const config = namespaced({
  core,
  appConfig,
})