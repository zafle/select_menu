import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { selectContext } from '../../../context/selectContext'
import { configContext } from '../../../context/configContext'
import defaultConfig from '../../../context/default/defaultConfig'
import { selectMock } from './selectConfigMock'

/**
 * Creates a mocked context for selectContext and configContext
 *
 * @param {node} ui Children element
 * @param {Object}
 *
 * @returns Mocked context
 */
const baseContextRender = (
  ui,
  { selectProps, configProps, ...renderOptions }
) => {
  const mockSelect = {
    ...selectMock,
    ...selectProps,
  }
  const mockConfig = {
    config: {
      ...defaultConfig,
      ...configProps,
    },
    defineConfig: () => {},
  }
  return render(
    <selectContext.Provider value={mockSelect}>
      <configContext.Provider value={mockConfig}>{ui}</configContext.Provider>
    </selectContext.Provider>,
    renderOptions
  )
}
export { baseContextRender as render }
