import { useState } from 'react'
import { configContext } from '../configContext'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'

export default function ConfigContextProvider({ children }) {
  const [config, setConfig] = useState({
    isSet: false,
    options: [],
    id: nanoid(),
    name: '',
    onChange: null,
    values: false,
    optGroup: false,
  })

  const defineConfig = (props) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      isSet: true,
      options: props.options,
      id: props.id ?? prevConfig.id,
      name: props.name ?? prevConfig.name,
      onChange: props.onChange ?? prevConfig.onChange,
      values: props.values ?? prevConfig.values,
      optGroup: props.optGroup ?? prevConfig.optGroup,
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
  name: PropTypes.string,
  onChange: PropTypes.func,
  values: PropTypes.bool,
  optGroup: PropTypes.bool,
}
