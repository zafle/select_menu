import SelectContextProvider from './context/SelectContextProvider/SelectContextProvider'
import ConfigContextProvider from './context/ConfigContextProvider/ConfigContextprovider'
import SelectComponent from './components/SelectComponent/SelectComponent'

export function SelectMenu(props) {
  return (
    <SelectContextProvider>
      <ConfigContextProvider>
        <SelectComponent props={props} />
      </ConfigContextProvider>
    </SelectContextProvider>
  )
}
