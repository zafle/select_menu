import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs'
import Prism from 'prismjs'
import { useEffect } from 'react'
import { useConfig } from '../../contexts/ConfigContext'
import { defaultConfigOptions } from '../../contexts/defaultConfigOptions'

export default function GeneratedCode() {
  const { optionsArray, configProps } = useConfig()

  /**
   * Highlight code after each state update
   */
  useEffect(() => {
    Prism.highlightAll()
  }, [optionsArray, configProps])

  /**
   * Function to generate a prop code for SelectMenu in the highlighten example code
   *
   * Determines if the prop has to be given in the component (if not, returns empty string)
   * Determines which value has to be given to the prop
   *
   * @param {string} prop configProp to display in the generated code
   * @param {string} defaultPropValue default prop value to check configProp against
   * @param {string} valueToDisplay value to display in the generated code
   *
   * @returns Snippet of code | empty string
   */
  function generatePropCode(prop, defaultPropValue, valueToDisplay) {
    // if valueToDisplay === 'default', display configProp value, else display given custom value
    const propValue =
      valueToDisplay === 'default' ? `"${configProps[prop]}"` : valueToDisplay
    // if configProp value !== default prop value, display prop, else display empty string
    return configProps[prop] !== defaultPropValue
      ? `\n          ${prop}=${propValue}`
      : ''
  }

  /**
   * Function to genarate all props code for SelectMenu in the highlighten example code
   *
   * @returns Snippet of code
   */
  function generateEncodedProps() {
    // generate code for id prop (id is not in "defaultConfigOptions")
    let code = generatePropCode('id', undefined, `"selectMenuId"`)

    // for each default prop, generate code
    for (const [key, value] of Object.entries(defaultConfigOptions)) {
      // code for options prop is always the same and must not be generated
      if (key !== 'options') {
        let valueToDisplay
        switch (key) {
          case 'onChangeValue':
            valueToDisplay = `{handleChangeSelect}`
            break
          case 'name':
            valueToDisplay = `"optionName"`
            break
          case 'labelId':
            valueToDisplay = `"selectMenuLabel"`
            break
          default:
            valueToDisplay = 'default'
        }

        code = code + generatePropCode(key, value, valueToDisplay)
      }
    }
    return code
  }

  // Define HTML code
  const controlledFormCode =
    configProps.onChangeValue !== null
      ? `
        // Add this code for a controlled form
        const [selectedOption, setSelectedOption] = useState('')

        const handleChangeSelect = (option) => {
          setSelectedOption(option)
        }
    `
      : ''

  const uncontrolledFormCode =
    configProps.name !== ''
      ? `
      // Add this code for an uncontrolled form
      const [formData, setFormData] = useState('')

      const handleSubmit = (e) => {
        e.preventDefault()
        setFormData(e.target.optionName.value)
      }
    `
      : ''

  const onSubmitFunction =
    configProps.name !== '' ? ` onSubmit={handleSubmit}` : ''

  const htmlForAttribute = configProps.id ? ` htmlFor="selectMenuId"` : ''

  const labelIdAttribute =
    configProps.labelId !== '' ? ` id="selectMenuLabel"` : ''

  // Define bloc of code
  const highlightedJSCode = `// App.jsx

  import { SelectMenu } from 'react-select-menu'
  import { useState } from 'react'

  export default function App() {
    ${controlledFormCode}${uncontrolledFormCode}
    ${optionsArray}
    return (
      <form${onSubmitFunction}>
        <label${htmlForAttribute}${labelIdAttribute}>Select an option:</label>
        <SelectMenu
          options={OPTIONS}${generateEncodedProps()}
        )
      </form>
  }
  `

  return (
    <div>
      <pre>
        <code className="language-js line-numbers">{highlightedJSCode}</code>
      </pre>
    </div>
  )
}
