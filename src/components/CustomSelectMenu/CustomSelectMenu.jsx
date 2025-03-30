import { useEffect, useRef, useState } from 'react'
import { SelectMenu } from '../../../lib/SelectMenu'
// import { SelectMenu } from '../../../'
import { useConfig, useConfigDispatch } from '../../contexts/ConfigContext'
import './CustomSelectMenu.css'

/**
 * Displays the SelectMenu component demo
 *
 * @returns {React.ReactElement}
 */
export default function CustomSelectMenu() {
  const { selectedOption, configProps } = useConfig()
  const dispatch = useConfigDispatch()

  const [selectedOptionProp, setSelectedOptionProp] = useState('')
  const selectedOptionPropRef = useRef('')
  selectedOptionPropRef.current = selectedOptionProp

  const handleChangeValue = (option) => {
    setSelectedOptionProp(option)
  }
  const [renderKey, setRenderKey] = useState(0)

  /**
   * Updates SelectMenu component key to force re-render when configProps updates
   */
  useEffect(() => {
    setRenderKey((prevKey) => prevKey + 1)
  }, [configProps])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({
      type: 'set_selected_option',
      selectedOption: e.target.optionName.value,
    })
  }

  const handleClickReset = () => {
    setSelectedOptionProp(null)
  }

  return (
    <div className="component-demo">
      <form onSubmit={configProps.name === 'optionName' ? handleSubmit : null}>
        <label
          className="demo-label"
          htmlFor={configProps.id === 'selectMenuId' ? configProps.id : ''}
          id={
            configProps.labelId === 'selectMenuLabel' ? configProps.labelId : ''
          }
        >
          Select an option:
        </label>
        <SelectMenu
          key={`selectMenu-${renderKey}`}
          {...configProps}
          selectedOption={
            configProps.selectedOption !== undefined
              ? selectedOptionProp
              : undefined
          }
          onChangeValue={
            configProps.onChangeValue !== null ? handleChangeValue : null
          }
        />
        {configProps.name === 'optionName' && (
          <button type="submit">Valider</button>
        )}
      </form>
      <p>
        This option has been selected:{' '}
        {configProps.onChangeValue === null && configProps.name === '' && (
          <span className="info-component">
            <br />
            Set controlled or uncontrolled
            <br />
            form to enable
          </span>
        )}
        {configProps.onChangeValue !== null && selectedOptionPropRef.current}
        {configProps.name !== '' && selectedOption}
      </p>
      {configProps.selectedOption !== undefined && (
        <button onClick={handleClickReset}>Reset</button>
      )}
    </div>
  )
}
