import { useState } from 'react'
import { useConfigDispatch } from '../../contexts/ConfigContext'

export default function ConfigSelectForm() {
  const dispatch = useConfigDispatch()

  const [optionsType, setOptionsType] = useState('options_without_values')
  const [formType, setFormType] = useState('')
  const [isLinkLabelChecked, setIsLinkLabelChecked] = useState(false)
  const [isEnableAriaChecked, setIsEnableAriaChecked] = useState(false)
  const [defaultSelected, setdefaultSelected] = useState(undefined)

  // function for onChangeValu configProps
  const onChangeValueFunction = (option) => {
    dispatch({
      type: 'set_selected_option',
      selectedOption: option,
    })
  }

  function handleChangeOptionsType(e) {
    setOptionsType(e.target.value)
    dispatch({
      type: 'set_optionsType',
      optionsType: e.target.value,
    })
  }

  function handleChangeFormType(e) {
    setFormType(e.target.value)
    dispatch({
      type: e.target.value,
      onChangeValue: onChangeValueFunction,
      name: 'optionName',
    })
  }

  function handleChangeLinkLabel() {
    setIsLinkLabelChecked((prev) => {
      const newCheckedState = !prev
      dispatch({
        type: 'set_id',
        id: newCheckedState ? 'selectMenuId' : '',
      })
      return newCheckedState
    })
  }

  function handleChangeEnableAria() {
    setIsEnableAriaChecked((prev) => {
      const newCheckedState = !prev
      dispatch({
        type: 'set_labelId',
        labelId: newCheckedState ? 'selectMenuLabel' : '',
      })
      return newCheckedState
    })
  }
  function handleChangeDefaultSelected(e) {
    setdefaultSelected(e.target.value)
    dispatch({
      type: 'set_defaultSelectedOption',
      defaultSelectedOption: e.target.value,
    })
  }

  return (
    <form>
      <ul>
        <li>
          <span>Options</span>
          <label>
            <input
              type="radio"
              value="options_without_values"
              checked={optionsType === 'options_without_values'}
              onChange={handleChangeOptionsType}
            />
            Options without values
          </label>

          <label>
            <input
              type="radio"
              value="options_with_values"
              checked={optionsType === 'options_with_values'}
              onChange={handleChangeOptionsType}
            />
            Options with values
          </label>

          <label>
            <input
              type="radio"
              value="options_with_optgroups"
              checked={optionsType === 'options_with_optgroups'}
              onChange={handleChangeOptionsType}
            />
            Options with optgroups
          </label>

          <label>
            <input
              type="radio"
              value="options_with_optgroups_with_values"
              checked={optionsType === 'options_with_optgroups_with_values'}
              onChange={handleChangeOptionsType}
            />
            Options with optgroups and values
          </label>
        </li>

        <li>
          <span>Controlled or uncontrolled form</span>
          <label>
            <input
              type="radio"
              value="controlled"
              checked={formType === 'controlled'}
              onChange={handleChangeFormType}
            />
            Controlled
          </label>
          <label>
            <input
              type="radio"
              value="uncontrolled"
              checked={formType === 'uncontrolled'}
              onChange={handleChangeFormType}
            />
            Uncontrolled
          </label>
          <div>
            {formType === 'controlled' && (
              <p>
                For a controlled form, the <code>onChangeValue</code> prop is
                required.
              </p>
            )}
            {formType === 'uncontrolled' && (
              <p>
                For an uncontrolled form, the <code>name</code> prop is
                required. It will set the select input <code>name</code>{' '}
                attribute.
              </p>
            )}
          </div>
        </li>

        <li>
          <label>
            Link your label with SelectMenu component
            <input
              type="checkbox"
              checked={isLinkLabelChecked}
              onChange={handleChangeLinkLabel}
            />
          </label>
          {isLinkLabelChecked && (
            <p>
              To link your label with SelectMenu, the <code>id</code> prop is
              required. This value must be as well given to the{' '}
              <code>htmlFor</code> attribute label.
            </p>
          )}
        </li>

        <li>
          <label>
            Enable aria-labelledBy attribute for full accessibility
            <input
              type="checkbox"
              checked={isEnableAriaChecked}
              onChange={handleChangeEnableAria}
            />
          </label>
          {isEnableAriaChecked && (
            <p>
              To enable aria-labelledBy attribute, the <code>labelId</code> prop
              is required and its value must be the label&apos;s <code>id</code>{' '}
              attribute value.
            </p>
          )}
        </li>

        <li>
          <span>Default selected option</span>
          <label>
            <input
              type="radio"
              value="first"
              checked={defaultSelected === 'first'}
              onChange={handleChangeDefaultSelected}
            />
            First option
          </label>
          <label>
            <input
              type="radio"
              value="custom"
              checked={defaultSelected === 'custom'}
              onChange={handleChangeDefaultSelected}
            />
            Custom option
          </label>
          <label>
            <input
              type="radio"
              value="none"
              checked={defaultSelected === 'none'}
              onChange={handleChangeDefaultSelected}
            />
            No default selected option
          </label>
          {defaultSelected === 'custom' && (
            <p>
              To display a custom default selected option, indicate the default
              option&apos;s text in the <code>defaultSelectedOption</code> prop.
            </p>
          )}
        </li>
      </ul>
    </form>
  )
}
