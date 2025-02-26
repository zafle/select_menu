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
    <div>
      <form onSubmit={configProps.name === 'optionName' ? handleSubmit : null}>
        <label
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
      <p>Your selection: {selectedOption}</p>
    </div>
  )
}
