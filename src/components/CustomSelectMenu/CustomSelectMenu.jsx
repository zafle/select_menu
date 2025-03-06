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
  const { selectedOption, needConfigControlled, hasReset, configProps } =
    useConfig()
  const dispatch = useConfigDispatch()

  const [selectedOptionTest, setSelectedOptionTest] = useState('')
  const selectedOptionTestRef = useRef('')

  const handleChangeValue = (option) => {
    selectedOptionTestRef.current = option
    setSelectedOptionTest(option)
  }
  const [renderKey, setRenderKey] = useState(0)

  /**
   * Updates SelectMenu component key to force re-render when configProps updates
   */
  useEffect(() => {
    setRenderKey((prevKey) => prevKey + 1)
  }, [configProps])

  /**
   * Updates configProps according to selectedOption value
   */
  useEffect(() => {
    if (needConfigControlled === true) {
      if (configProps.selectedOption !== undefined) {
        setSelectedOptionTest('')
        selectedOptionTestRef.current = ''
        dispatch({
          type: 'set_selectedOption',
          selectedOption: selectedOptionTest.current,
        })
        dispatch({
          type: 'controlled',
          onChangeValue: handleChangeValue,
        })
        dispatch({
          type: 'set_reset',
          reset: true,
        })
      } else if (
        configProps.onChangeValue !== null &&
        configProps.selectedOption === undefined
      ) {
        dispatch({
          type: 'controlled',
          onChangeValue: handleChangeValue,
        })
        dispatch({
          type: 'set_reset',
          reset: false,
        })
      }
      dispatch({
        type: 'set_needConfigControlled',
        needConfig: false,
      })
    }
    // NOTE: Run effect only when needConfigControlled,
    // please recheck dependencies if effect is updated.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [needConfigControlled])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({
      type: 'set_selected_option',
      selectedOption: e.target.optionName.value,
    })
  }

  const handleClickReset = () => {
    selectedOptionTestRef.current = ''
    setSelectedOptionTest('')
    dispatch({
      type: 'set_selectedOption',
      selectedOption: 'selectedOption',
    })
    dispatch({
      type: 'set_needConfigControlled',
      needConfig: true,
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
        {configProps.onChangeValue === null && configProps.name === '' && (
          <span className="info-component">
            <br />
            Set controlled or uncontrolled
            <br />
            form to enable
          </span>
        )}
        {configProps.onChangeValue !== null && selectedOptionTestRef.current}
        {configProps.name !== '' && selectedOption}
      </p>
      {hasReset === true && <button onClick={handleClickReset}>Reset</button>}
    </div>
  )
}
