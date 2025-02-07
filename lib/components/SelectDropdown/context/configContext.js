import { createContext } from 'react'
import defaultConfig from './default/defaultConfig'

export const configContext = createContext({
  config: defaultConfig,
  defineConfig: () => {},
})
