import './App.css'
// import { SelectMenu } from '../lib/main'
import { SelectMenu } from '../'
import {
  EU_COUNTRIES,
  EU_COUNTRIES_CODES,
  EU_COUNTRIES_GEO,
  EU_COUNTRIES_GEO_CODES,
} from './data/mock/optionsMenus'
import { useState } from 'react'

function App() {
  const [selectedValue, setSelectedValue] = useState('')
  const [formData, setFormData] = useState('')

  function handleControlledFormChange(selectedValue) {
    setSelectedValue(selectedValue)
  }

  // function onSubmitUncontrolledForm(e) {
  //   e.preventDefault()
  //   console.log('submit', e.target.country.value)
  // }

  function handleChange(selectedValue) {
    console.log('selectedValue :', selectedValue)
  }
  return (
    <>
      <h1>Examples</h1>
      <h2>Examples with different types of data</h2>
      <h3>Options without values</h3>
      <label id="euCountries-options-label" htmlFor="euCountries-options">
        Select a country :
      </label>
      <SelectMenu
        id="euCountries-options"
        name="euCountries-options"
        options={EU_COUNTRIES}
        onChangeValue={handleChange}
        labelId="euCountries-options-label"
        defaultSelectedOption="first"
        dropdownMaxHeight="250px"
        border="unset"
        boxShadowOnOpen={true}
        colorOnFocus="purple"
        containerMargin="2em 1em"
        inputHeight="30px"
      />

      <h3>Options with values</h3>
      <label
        id="euCountries-options_values-label"
        htmlFor="euCountries-options_values"
      >
        Select a country :
      </label>
      <SelectMenu
        id="euCountries-options_values"
        name="euCountries-options_values"
        options={EU_COUNTRIES_CODES}
        textField="name"
        valueField="abreviation"
        onChangeValue={handleChange}
        labelId="euCountries-options_values-label"
        defaultSelectedOption="Croatia"
        colorOnFocus="green"
        border="4px solid red"
        hoveredOptionBackground="red"
      />

      <h3>Optgroups without values</h3>
      <label id="euCountries-optgroup-label" htmlFor="euCountries-optgroup">
        Select a country :
      </label>
      <SelectMenu
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
        borderRadius="unset"
      />

      <h3>Optgroups with values</h3>
      <label
        id="euCountries-optgroup_values-label"
        htmlFor="euCountries-optgroup_values"
      >
        Select a country :
      </label>
      <SelectMenu
        id="euCountries-optgroup_values"
        name="euCountries-optgroup_values"
        options={EU_COUNTRIES_GEO_CODES}
        textField="text"
        valueField="value"
        optGroupLabelField="label"
        optGroupOptionsField="options"
        onChangeValue={handleChange}
        labelId="euCountries-optgroup_values-label"
        colorOnFocus="none"
        borderRadius="10%"
        boxShadow="unset"
      />

      <h2>Controlled and uncontrolled forms</h2>

      <h3>Controlled form</h3>

      <p>The selected option is {selectedValue} </p>

      <form>
        <SelectMenu
          options={EU_COUNTRIES}
          onChangeValue={handleControlledFormChange}
        />
      </form>

      <h3>Uncontrolled form</h3>
      <p>The submited option value is : {formData}</p>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          setFormData(e.target.country.value)
        }}
      >
        <label htmlFor="uncontrolled-form">Select a country</label>
        <SelectMenu
          options={EU_COUNTRIES_GEO_CODES}
          id="uncontrolled-form"
          // labelId="uncontrolled-form-label"
          name="country"
          textField="text"
          valueField="value"
          optGroupLabelField="label"
          optGroupOptionsField="options"
          defaultSelectedOption="first"
        />
        <button type="submit">Validate</button>
      </form>
    </>
  )
}

export default App
