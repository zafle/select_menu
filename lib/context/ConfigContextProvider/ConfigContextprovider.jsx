import { useState } from 'react'
import { configContext } from '../configContext'
import defaultConfig from '../default/defaultConfig'
import {
  setValues,
  setOptGroup,
  setDropdownBorderTop,
  setDropdownBorderBottom,
  setInputBorderRadiusOpened,
  setDropdownBorderRadius,
  setClassOnFocus,
  setLastFocusableOptionIndex,
  setDropdownBottom,
} from '../default/configSettings'
import PropTypes from 'prop-types'

export default function ConfigContextProvider({ children }) {
  const [config, setConfig] = useState(defaultConfig)

  // Merge new props values
  const defineConfig = (props) => {
    setConfig((prevConfig) => {
      const config = {
        ...prevConfig,
        isSet: true,
        ...props,
      }
      // set boolean for `values` and `optGroup` if fields names are provided
      config.values = setValues(config.textField, config.valueField)
      config.optGroup = setOptGroup(
        config.optGroupLabelField,
        config.optGroupOptionsField
      )

      // set class on focus
      config.classOnFocus = setClassOnFocus(config.colorOnFocus)

      // set input border radius when opened
      config.inputBorderRadiusOpened = setInputBorderRadiusOpened(
        config.borderRadius,
        config.dropdownPosition
      )

      // set dropdown border top
      config.dropdownBorderTop = setDropdownBorderTop(
        config.dropdownPosition,
        config.border
      )
      // set dropdown border bottom
      config.dropdownBorderBottom = setDropdownBorderBottom(
        config.dropdownPosition,
        config.border
      )
      // set dropdown border radius
      config.dropdownBorderRadius = setDropdownBorderRadius(
        config.dropdownPosition,
        config.borderRadius
      )
      //  set dropdown bottom
      config.dropdownBottom = setDropdownBottom(config.dropdownPosition)

      //  set last focusable option index
      config.lastFocusableOptionIndex = setLastFocusableOptionIndex(
        config.options,
        config.optGroup
      )
      return config
    })
  }

  return (
    <configContext.Provider value={{ config, defineConfig }}>
      {children}
    </configContext.Provider>
  )
}
ConfigContextProvider.propTypes = {
  children: PropTypes.node,
}
