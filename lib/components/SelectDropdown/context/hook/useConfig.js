import { useContext } from 'react'
import { configContext } from '../configContext'

export default function useConfig() {
  const { config, defineConfig } = useContext(configContext)
  return {
    isSet: config.isSet,
    id: config.id,
    labelId: config.labelId,
    name: config.name,
    onChangeValue: config.onChangeValue,
    options: config.options,
    values: config.values,
    defaultSelectedOption: config.defaultSelectedOption,
    textField: config.textField,
    valueField: config.valueField,
    optGroupLabelField: config.optGroupLabelField,
    optGroupOptionsField: config.optGroupOptionsField,
    optGroup: config.optGroup,
    maxWidth: config.maxWidth,
    borderWidth: config.borderWidth,
    borderColor: config.borderColor,
    defineConfig,
  }
}
