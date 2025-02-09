import SelectContextProvider from './context/SelectContextProvider/SelectContextProvider'
import ConfigContextProvider from './context/ConfigContextProvider/ConfigContextprovider'
import SelectComponent from './components/SelectComponent/SelectComponent'

/**
 * Displays Select Menu component
 * Displays config context and select context
 *
 * @param {Object} props options'array data for select component, and all custom options
 *
 * @returns {React.ReactElement}
 */
export function SelectMenu(props) {
  return (
    <SelectContextProvider>
      <ConfigContextProvider>
        <SelectComponent props={props} />
      </ConfigContextProvider>
    </SelectContextProvider>
  )
}
