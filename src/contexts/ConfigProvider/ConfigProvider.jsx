import { useReducer } from 'react'
import { optionsSnippet } from '../../data/data/codeSnippets'
import { defaultConfigOptions } from '../defaultConfigOptions'
import { ConfigContext, ConfigDispatchContext } from '../ConfigContext'
import { configReducer } from '../../reducers/configReducer'
import PropTypes from 'prop-types'

/**
 * Creates a context Provider and Reducer
 *
 * @param {React.ReactElement} children
 * @returns ConfigContext and ConfigDispatchContext
 */
export default function ConfigProvider({ children }) {
  const initialConfig = {
    optionsType: 'options_without_values',
    optionsArray: optionsSnippet,
    selectedOption: '',
    configProps: defaultConfigOptions,
  }
  const [config, dispatch] = useReducer(configReducer, initialConfig)

  return (
    <ConfigContext.Provider value={config}>
      <ConfigDispatchContext.Provider value={dispatch}>
        {children}
      </ConfigDispatchContext.Provider>
    </ConfigContext.Provider>
  )
}
ConfigProvider.propTypes = {
  children: PropTypes.node,
}
