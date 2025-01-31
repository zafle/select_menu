import { useContext } from 'react'
import { configContext } from '../configContext'

export default function useConfig() {
  const { config, defineConfig } = useContext(configContext)
  return {
    isSet: config.isSet,
    id: config.id,
    labelId: config.labelId,
    name: config.name,
    onChange: config.onChange,
    options: config.options,
    values: config.values,
    optGroup: config.optGroup,
    maxWidth: config.maxWidth,
    borderWidth: config.borderWidth,
    borderColor: config.borderColor,
    defineConfig,
  }
}
