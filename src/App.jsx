import './App.css'
import { SelectMenu } from '../lib/main'
import {
  EU_COUNTRIES,
  EU_COUNTRIES_CODES,
  EU_COUNTRIES_GEO,
  EU_COUNTRIES_GEO_CODES,
} from './data/mock/optionsMenus'

function App() {
  return (
    <>
      <h1>Examples with different types of data</h1>
      <h2>Options without values</h2>
      <label htmlFor="euCountries-options">Select a country :</label>
      <SelectMenu
        id="euCountries-options"
        name="euCountries-options"
        options={EU_COUNTRIES}
      />

      <h2>Options with values</h2>
      <label htmlFor="euCountries-options_values">Select a country :</label>
      <SelectMenu
        id="euCountries-options_values"
        name="euCountries-options_values"
        options={EU_COUNTRIES_CODES}
        values={true}
      />

      <h2>Optgroups without values</h2>
      <label htmlFor="euCountries-optgroup">Select a country :</label>
      <SelectMenu
        id="euCountries-optgroup"
        name="euCountries-optgroup"
        options={EU_COUNTRIES_GEO}
        optGroup={true}
      />

      <h2>Optgroups with values</h2>
      <label htmlFor="euCountries-optgroup_values">Select a country :</label>
      <SelectMenu
        id="euCountries-optgroup_values"
        name="euCountries-optgroup_values"
        options={EU_COUNTRIES_GEO_CODES}
        values={true}
        optGroup={true}
      />
    </>
  )
}

export default App
