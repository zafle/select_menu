import { useState } from 'react'
import { configContext } from '../configContext'
import defaultConfig from '../default/defaultConfig'
import {
  setValues,
  setOptGroup,
  setShadowStyle,
  setBorder,
  setDropdownBorderTop,
  setDropdownBorderBottom,
  setInputBorderRadiusOpened,
  setInputBorderRadiusClosed,
  setDropdownBorderRadius,
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
      // set box-shadow
      config.boxShadow = setShadowStyle(config.boxShadow)

      // set border
      config.border = setBorder(config.border)

      // set color on focus
      // config.colorOnFocus = set

      // set input border radius when closed
      config.inputBorderRadiusClosed = setInputBorderRadiusClosed(
        config.borderRadius
      )
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
      config.dropdownBottom = setDropdownBorderBottom(config.dropdownPosition)

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
  // options: PropTypes.array,
  // id: PropTypes.string,
  // labelId: PropTypes.string,
  // name: PropTypes.string,
  // onChangeValue: PropTypes.func,
  // values: PropTypes.bool,
  // defaultSelectedOption: PropTypes.string,
  // textField: PropTypes.string,
  // valueField: PropTypes.string,
  // optGroupLabelField: PropTypes.string,
  // optGroupOptionsField: PropTypes.string,
  // optGroup: PropTypes.bool,
  // maxWidth: PropTypes.string,
  // borderWidth: PropTypes.string,
  // borderColor: PropTypes.string,
  // inputHeight: PropTypes.string,
  // inputBackground: PropTypes.string,
  // inputTextColor: PropTypes.string,
  // inputBorderRadius: PropTypes.string,
  // dropdownBackground: PropTypes.string,
  // dropdownBorderRadius: PropTypes.string,
  // dropdownMaxHeight: PropTypes.string,
  // optionTextColor: PropTypes.string,
  // hoveredOptionBackground: PropTypes.string,
  // hoveredOptionTextColor: PropTypes.string,
}
