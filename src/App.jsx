import './App.css'
import { SelectDropdown } from '../lib/main'
import {
  EU_COUNTRIES,
  EU_COUNTRIES_CODES,
  EU_COUNTRIES_GEO,
  EU_COUNTRIES_GEO_CODES,
} from './data/mock/optionsMenus'

function App() {
  function handleChange(selectedValue) {
    console.log('selectedValue retrieved :', selectedValue)
  }
  return (
    <>
      <h1>Examples with different types of data</h1>
      <h2>Options without values</h2>
      <label id="euCountries-options-label" htmlFor="euCountries-options">
        Select a country :
      </label>
      <SelectDropdown
        id="euCountries-options"
        name="euCountries-options"
        options={EU_COUNTRIES}
        onChangeValue={handleChange}
        labelId="euCountries-options-label"
        defaultSelectedOption="first"
        dropdownMaxHeight="250px"
        border="none"
        boxShadow="default"
        boxShadowOnOpen={true}
      />

      <h2>Options with values</h2>
      <label
        id="euCountries-options_values-label"
        htmlFor="euCountries-options_values"
      >
        Select a country :
      </label>
      <SelectDropdown
        id="euCountries-options_values"
        name="euCountries-options_values"
        options={EU_COUNTRIES_CODES}
        textField="name"
        valueField="abreviation"
        onChangeValue={handleChange}
        labelId="euCountries-options_values-label"
        defaultSelectedOption="Croatia"
        boxShadow="default"
        colorOnFocus="green"
      />

      <h2>Optgroups without values</h2>
      <label id="euCountries-optgroup-label" htmlFor="euCountries-optgroup">
        Select a country :
      </label>
      <SelectDropdown
        id="euCountries-optgroup"
        name="euCountries-optgroup"
        options={EU_COUNTRIES_GEO}
        optGroupLabelField="label"
        optGroupOptionsField="options"
        onChangeValue={handleChange}
        labelId="euCountries-optgroup-label"
        boxShadow="4px 4px 10px rgba(209, 30, 30, 0.4)"
        dropdownPosition="top"
        dropdownMaxHeight="150px"
        colorOnFocus="none"
      />

      <h2>Optgroups with values</h2>
      <label
        id="euCountries-optgroup_values-label"
        htmlFor="euCountries-optgroup_values"
      >
        Select a country :
      </label>
      <SelectDropdown
        id="euCountries-optgroup_values"
        name="euCountries-optgroup_values"
        options={EU_COUNTRIES_GEO_CODES}
        textField="text"
        valueField="value"
        optGroupLabelField="label"
        optGroupOptionsField="options"
        onChangeValue={handleChange}
        labelId="euCountries-optgroup_values-label"
      />
    </>
  )
}

export default App
