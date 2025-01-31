import { useContext } from 'react'
import { configContext } from '../configContext'

export default function useConfig() {
  const { config, defineConfig } = useContext(configContext)
  return {
    isSet: config.isSet,
    options: config.options,
    id: config.id,
    name: config.name,
    onChange: config.onChange,
    values: config.values,
    optGroup: config.optGroup,
    maxWidth: config.maxWidth,
    defineConfig,
  }
}
