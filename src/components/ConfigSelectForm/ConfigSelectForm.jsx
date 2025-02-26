import { useState } from 'react'
import { useConfigDispatch } from '../../contexts/ConfigContext'
import InputForCSSProp from '../InputForCSSProp/InputForCSSProp'

export default function ConfigSelectForm() {
  const dispatch = useConfigDispatch()

  const [optionsType, setOptionsType] = useState('options_without_values')
  const [formType, setFormType] = useState('')
  const [isLinkLabelChecked, setIsLinkLabelChecked] = useState(false)
  const [isEnableAriaChecked, setIsEnableAriaChecked] = useState(false)
  const [defaultSelected, setdefaultSelected] = useState(undefined)
  const [hasBoxShadowOnOpen, setHasBoxShadowOnOpen] = useState(false)
  const [dropdownPosition, setDropdownPosition] = useState('')

  // Function for onChangeValue dispatch
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
    console.log('rom handle defeult :', e.target.value)
    setdefaultSelected(e.target.value)
    dispatch({
      type: 'set_defaultSelectedOption',
      defaultSelectedOption: e.target.value,
    })
  }

  function handleChangeDropdownPosition(e) {
    setDropdownPosition(e.target.value)
    dispatch({
      type: 'set_dropdownPosition',
      dropdownPosition: e.target.value,
    })
  }

  function handleChangeBoxShadowOnOpen() {
    setHasBoxShadowOnOpen((prev) => {
      const newCheckedState = !prev
      dispatch({
        type: 'set_boxShadowOnOpen',
        boxShadowOnOpen: newCheckedState,
      })
      return newCheckedState
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
              // value={undefined}
              // checked={defaultSelected === undefined}
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

        <li>
          <span>Dropdown position</span>
          <label>
            <input
              type="radio"
              value="bottom"
              checked={dropdownPosition === 'bottom'}
              onChange={handleChangeDropdownPosition}
            />
            Bottom
          </label>
          <label>
            <input
              type="radio"
              value="top"
              checked={dropdownPosition === 'top'}
              onChange={handleChangeDropdownPosition}
            />
            Top
          </label>
        </li>

        <li>
          <label>
            Show shadow only when dropdown is open
            <input
              type="checkbox"
              checked={hasBoxShadowOnOpen}
              onChange={handleChangeBoxShadowOnOpen}
            />
          </label>
          {hasBoxShadowOnOpen && (
            <p>
              For shadow to display only when dropdown is opened, the{' '}
              <code>boxShadowOnOpen</code> prop is required and must be set to
              true.
            </p>
          )}
        </li>

        <InputForCSSProp
          prop="maxWidth"
          label="Component max-width"
          cssProperty="max-width"
        />

        <InputForCSSProp
          prop="border"
          label="Component borders (unset for none)"
          cssProperty="border"
        />

        <InputForCSSProp
          prop="borderRadius"
          label="Component border-radius (only single value accepted, unset for none)"
          cssProperty="width"
        />

        <InputForCSSProp
          prop="containerMargin"
          label="Component margin"
          cssProperty="margin"
        />

        <InputForCSSProp
          prop="boxShadow"
          label="Component box-shadow (unset for none)"
          cssProperty="box-shadow"
        />

        <InputForCSSProp
          prop="colorOnFocus"
          label="Component color on focus (none, default, or custom color)"
          cssProperty="color"
        />

        <InputForCSSProp
          prop="inputHeight"
          label="Select-input height"
          cssProperty="height"
        />

        <InputForCSSProp
          prop="inputBackground"
          label="Select-input background color"
          cssProperty="background-color"
        />

        <InputForCSSProp
          prop="inputTextColor"
          label="Select-input text color"
          cssProperty="color"
        />

        <InputForCSSProp
          prop="inputVerticalPadding"
          label="Select-input vertical padding"
          cssProperty="padding-top"
        />

        <InputForCSSProp
          prop="inputHorizontalPadding"
          label="Select-input horizontal padding"
          cssProperty="padding-top"
        />

        <InputForCSSProp
          prop="inputFontSize"
          label="Select-input font-size"
          cssProperty="font-size"
        />

        <InputForCSSProp
          prop="dropdownBackground"
          label="Dropdown background-color"
          cssProperty="background-color"
        />

        <InputForCSSProp
          prop="dropdownMaxHeight"
          label="Dropdown max-height"
          cssProperty="max-height"
        />

        <InputForCSSProp
          prop="dropdownVerticalPadding"
          label="Dropdown vertical padding"
          cssProperty="padding-top"
        />

        <InputForCSSProp
          prop="optionTextColor"
          label="Option text color"
          cssProperty="color"
        />

        <InputForCSSProp
          prop="hoveredOptionBackground"
          label="Hovered option background-color"
          cssProperty="background-color"
        />

        <InputForCSSProp
          prop="hoveredOptionTextColor"
          label="Hovered option text color"
          cssProperty="color"
        />

        <InputForCSSProp
          prop="optionVerticalPadding"
          label="Option vertical padding"
          cssProperty="padding-top"
        />

        <InputForCSSProp
          prop="optionHorizontalPadding"
          label="Option horizontal padding"
          cssProperty="padding-top"
        />

        <InputForCSSProp
          prop="optionFontSize"
          label="Option font-size"
          cssProperty="font-size"
        />

        <InputForCSSProp
          prop="optGroupLabelTextColor"
          label="OptGroup label text color"
          cssProperty="color"
        />

        <InputForCSSProp
          prop="optGroupLabelFontSize"
          label="OptGroup label font-size"
          cssProperty="font-size"
        />

        <InputForCSSProp
          prop="optGroupVerticalPadding"
          label="OptGroup vertical padding"
          cssProperty="padding-top"
        />

        <InputForCSSProp
          prop="optGroupHorizontalPadding"
          label="OptGroup horizontal padding"
          cssProperty="padding-top"
        />

        <InputForCSSProp
          prop="optGroupMarginTop"
          label="OptGroup margin-top"
          cssProperty="margin-top"
        />
      </ul>
    </form>
  )
}
