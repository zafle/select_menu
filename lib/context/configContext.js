import { createContext } from 'react'
import defaultConfig from './default/defaultConfig'

/**
 * Context for all config options
 */
export const configContext = createContext({
  config: defaultConfig,
  defineConfig: () => {},
})
