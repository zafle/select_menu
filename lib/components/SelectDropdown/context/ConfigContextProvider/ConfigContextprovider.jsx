import { useState } from 'react'
import { configContext } from '../configContext'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'

export default function ConfigContextProvider({ children }) {
  const [config, setConfig] = useState({
    isSet: false,
    // input config
    id: nanoid(),
    labelId: '', // for aria-labelledby
    name: '',
    onChange: null,
    // options config
    options: [],
    values: false,
    optGroup: false,
    defaultSelectedOption: undefined, // 'first' for first, 'option_text' to define one, undefined for none
    // css config
    maxWidth: '250px',
    borderWidth: '1px',
    borderColor: '#2b2b2b',
  })

  const defineConfig = (props) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      isSet: true,
      options: props.options,
      id: props.id ?? prevConfig.id,
      labelId: props.labelId ?? prevConfig.labelId,
      name: props.name ?? prevConfig.name,
      onChange: props.onChange ?? prevConfig.onChange,
      values: props.values ?? prevConfig.values,
      defaultSelectedOption:
        props.defaultSelectedOption ?? prevConfig.defaultSelectedOption,
      optGroup: props.optGroup ?? prevConfig.optGroup,
      maxWidth: props.maxWidth ?? prevConfig.maxWidth,
      borderWidth: props.borderWidth ?? prevConfig.borderWidth,
      borderColor: props.borderColor ?? prevConfig.borderColor,
    }))
  }

  return (
    <configContext.Provider value={{ config, defineConfig }}>
      {children}
    </configContext.Provider>
  )
}
ConfigContextProvider.propTypes = {
  children: PropTypes.node,
  options: PropTypes.array,
  id: PropTypes.string,
  labelId: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  values: PropTypes.bool,
  defaultSelectedOption: PropTypes.string,
  optGroup: PropTypes.bool,
  maxWidth: PropTypes.string,
  borderWidth: PropTypes.string,
  borderColor: PropTypes.string,
}
