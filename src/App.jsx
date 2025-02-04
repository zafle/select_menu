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
        values={true}
        onChangeValue={handleChange}
        labelId="euCountries-options_values-label"
        defaultSelectedOption="Croatia"
      />

      <h2>Optgroups without values</h2>
      <label id="euCountries-optgroup-label" htmlFor="euCountries-optgroup">
        Select a country :
      </label>
      <SelectDropdown
        id="euCountries-optgroup"
        name="euCountries-optgroup"
        options={EU_COUNTRIES_GEO}
        optGroup={true}
        onChangeValue={handleChange}
        labelId="euCountries-optgroup-label"
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
        values={true}
        optGroup={true}
        onChangeValue={handleChange}
        labelId="euCountries-optgroup_values-label"
      />
    </>
  )
}

export default App
