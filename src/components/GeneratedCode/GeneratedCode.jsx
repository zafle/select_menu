import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs'
import Prism from 'prismjs'
import { useEffect } from 'react'
import { useConfig } from '../../contexts/ConfigContext'

export default function GeneratedCode() {
  const { optionsArray, configProps } = useConfig()

  useEffect(() => {
    Prism.highlightAll()
  }, [optionsArray, configProps])

  // Define HTML
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

  // Define SelectMenu props code
  const textField =
    configProps.textField !== ''
      ? `\n          textField="${configProps.textField}"`
      : ''

  const valueField =
    configProps.valueField !== ''
      ? `\n          valueField="${configProps.valueField}"`
      : ''

  const optGroupLabelField =
    configProps.optGroupLabelField !== ''
      ? `\n          optGroupLabelField="${configProps.optGroupLabelField}"`
      : ''

  const optGroupOptionsField =
    configProps.optGroupOptionsField !== ''
      ? `\n          optGroupOptionsField="${configProps.optGroupOptionsField}"`
      : ''

  const onChangeValue =
    configProps.onChangeValue !== null
      ? `\n          onChangeValue={handleChangeSelect}`
      : ''

  const name = configProps.name !== '' ? `\n          name="optionName"` : ''

  const id = configProps.id ? `\n          id="selectMenuId"` : ''

  const labelId =
    configProps.labelId !== '' ? `\n          labelId="selectMenuLabel"` : ''

  const defaultSelectedOption =
    configProps.defaultSelectedOption !== undefined
      ? `\n          defaultSelectedOption="${configProps.defaultSelectedOption}"`
      : ''

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
          options={OPTIONS}${textField}${valueField}${optGroupLabelField}${optGroupOptionsField}${onChangeValue}${name}${id}${labelId}${defaultSelectedOption}
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
