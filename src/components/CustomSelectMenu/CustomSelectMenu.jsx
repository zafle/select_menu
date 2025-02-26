import { useEffect, useState } from 'react'
import { SelectMenu } from '../../../'
import { useConfig, useConfigDispatch } from '../../contexts/ConfigContext'
import './CustomSelectMenu.css'

export default function CustomSelectMenu() {
  const { selectedOption, configProps } = useConfig()
  const dispatch = useConfigDispatch()

  const [renderKey, setRenderKey] = useState(0)

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
        <SelectMenu key={`selectMenu-${renderKey}`} {...configProps} />
        {configProps.name === 'optionName' && (
          <button type="submit">Valider</button>
        )}
      </form>
      <p>
        This option has been selected:{' '}
        {configProps.onChangeValue !== null || configProps.name !== '' ? (
          selectedOption
        ) : (
          <span className="info-component">
            Set controlled or uncontrolled form to enable
          </span>
        )}
      </p>
    </div>
  )
}
