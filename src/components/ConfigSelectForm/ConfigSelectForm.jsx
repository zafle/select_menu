import { useState } from 'react'
import { useConfigDispatch } from '../../contexts/ConfigContext'
import InputForCSSProp from '../InputForCSSProp/InputForCSSProp'
import './ConfigSelectForm.css'

/**
 * Displays the form to configure SelectMenu component
 *
 * @returns {React.ReactElement}
 */
export default function ConfigSelectForm() {
  const dispatch = useConfigDispatch()

  const [optionsType, setOptionsType] = useState('options_without_values')
  const [formType, setFormType] = useState('')
  const [isSelectedOptionChecked, setISelectedOptionChecked] = useState(false)
  const [isLinkLabelChecked, setIsLinkLabelChecked] = useState(false)
  const [isEnableAriaChecked, setIsEnableAriaChecked] = useState(false)
  const [isResetChecked, setIsResetChecked] = useState(false)
  const [defaultSelected, setdefaultSelected] = useState(undefined)
  const [hasBoxShadowOnOpen, setHasBoxShadowOnOpen] = useState(false)
  const [dropdownPosition, setDropdownPosition] = useState('')

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
    })

    if (e.target.value === 'uncontrolled') {
      setISelectedOptionChecked(false)
      dispatch({
        type: 'set_selectedOption',
        selectedOption: undefined,
      })
    }
  }

  function handleChangeSelectedOption() {
    setISelectedOptionChecked((prev) => {
      const newCheckedState = !prev
      dispatch({
        type: 'set_selectedOption',
        selectedOption: newCheckedState ? '{selectedOption}' : undefined,
      })

      setFormType(newCheckedState ? 'controlled' : 'uncontrolled')
      dispatch({
        type: newCheckedState ? 'controlled' : 'uncontrolled',
      })

      return newCheckedState
    })
  }

  function handleChangeReset() {
    setIsResetChecked((prev) => {
      const newCheckedState = !prev
      dispatch({
        type: 'set_ResetToDefault',
        reset: newCheckedState,
      })
      return newCheckedState
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
      <ul className="form-list">
        <li>
          <div className="form-prop">
            <code className="prop-code">options</code>
          </div>
          <div className="form-content">
            <div className="form-text">
              <div className="form-title">
                Select the type of the options array
              </div>
            </div>
            <div className="form-radio-buttons">
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
            </div>
          </div>
        </li>

        <li>
          <div className="form-prop">
            <code className="prop-code">onChangeValue</code>
            <code className="prop-code">name</code>
          </div>
          <div className="form-content">
            <div className="form-text">
              <div className="form-title">Controlled or uncontrolled form</div>
              <div className="form-desc">
                {formType === 'controlled' && (
                  <p>
                    For a controlled form, the{' '}
                    <code className="prop-code">onChangeValue</code> prop is
                    required.
                  </p>
                )}
                {formType === 'uncontrolled' && (
                  <p>
                    For an uncontrolled form, the{' '}
                    <code className="prop-code">name</code> prop is required. It
                    will set the select input{' '}
                    <code className="prop-code">name</code> attribute.
                  </p>
                )}
              </div>
            </div>
            <div className="form-radio-buttons">
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
            </div>
          </div>
        </li>

        <li>
          <div className="form-prop">
            <code className="prop-code">selectedOption</code>
          </div>
          <div className="form-content">
            <div className="form-text">
              <label className="form-title" htmlFor="selectedOptionInput">
                Enable reset selection programmatically
              </label>
              <div className="form-desc">
                <p className="prop-new-feature">New feature in V2 !</p>
                {isSelectedOptionChecked && (
                  <p>
                    The <code className="prop-code">selectedOption</code> prop
                    must be used in association with{' '}
                    <code className="prop-code">onChangeValue</code> prop. Pass
                    here the selected option state associated with the{' '}
                    <code className="prop-code">onChangeValue</code>&apos;s
                    setter. Allows to reset selected option by setting this
                    state&apos;s value to &apos;null&apos; or &apos;&apos;.
                  </p>
                )}
              </div>
            </div>
            <input
              type="checkbox"
              id="selectedOptionInput"
              checked={isSelectedOptionChecked}
              onChange={handleChangeSelectedOption}
            />
          </div>
        </li>

        {isSelectedOptionChecked && (
          <li className="blue-background">
            <div className="form-prop">
              <code className="prop-code">resetToDefault</code>
            </div>
            <div className="form-content">
              <div className="form-text">
                <label className="form-title" htmlFor="resetInput">
                  Reset to default value ?
                </label>
                <div className="form-desc">
                  The default selected value can be set with{' '}
                  <code className="prop-code">defaultSelectedOption</code>
                </div>
              </div>
              <input
                type="checkbox"
                id="resetInput"
                checked={isResetChecked}
                onChange={handleChangeReset}
              />
            </div>
          </li>
        )}

        <li>
          <div className="form-prop">
            <code className="prop-code">id</code>
          </div>
          <div className="form-content">
            <div className="form-text">
              <label className="form-title" htmlFor="linkLabelInput">
                Link your label with SelectMenu component
              </label>
              <div className="form-desc">
                {isLinkLabelChecked && (
                  <p>
                    To link your label with SelectMenu, the{' '}
                    <code className="prop-code">id</code> prop is required. This
                    value must be as well given to the{' '}
                    <code className="prop-code">htmlFor</code> attribute label.
                  </p>
                )}
              </div>
            </div>
            <input
              id="linkLabelInput"
              type="checkbox"
              checked={isLinkLabelChecked}
              onChange={handleChangeLinkLabel}
            />
          </div>
        </li>

        <li>
          <div className="form-prop">
            <code className="prop-code">labelId</code>
          </div>
          <div className="form-content">
            <div className="form-text">
              <label className="form-title">
                Enable aria-labelledBy attribute for full accessibility
              </label>
              <div className="form-desc">
                {isEnableAriaChecked && (
                  <p>
                    To enable aria-labelledBy attribute, the{' '}
                    <code className="prop-code">labelId</code> prop is required
                    and its value must be the label&apos;s{' '}
                    <code className="prop-code">id</code> attribute value.
                  </p>
                )}
              </div>
            </div>
            <input
              type="checkbox"
              checked={isEnableAriaChecked}
              onChange={handleChangeEnableAria}
            />
          </div>
        </li>

        <li>
          <div className="form-prop">
            <code className="prop-code">defaultSelectedOption</code>
          </div>
          <div className="form-content">
            <div className="form-text">
              <div className="form-title">Default selected option</div>
              <div className="form-desc">
                {defaultSelected === 'custom' && (
                  <p>
                    To display a custom default selected option, indicate the
                    default option&apos;s text in the{' '}
                    <code className="prop-code">defaultSelectedOption</code>{' '}
                    prop.
                  </p>
                )}
              </div>
            </div>
            <div className="form-radio-buttons">
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
            </div>
          </div>
        </li>

        <li>
          <div className="form-prop">
            <code className="prop-code">dropdownPosition</code>
          </div>
          <div className="form-content">
            <div className="form-text">
              <div className="form-title">Dropdown position</div>
            </div>
            <div className="form-radio-buttons">
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
            </div>
          </div>
        </li>

        <li>
          <div className="form-prop">
            <code className="prop-code">boxShadowOnOpen</code>
          </div>
          <div className="form-content">
            <div className="form-text">
              <label className="form-title">
                Show shadow only when dropdown is open
              </label>
              <div className="form-desc">
                {hasBoxShadowOnOpen && (
                  <p>
                    For shadow to display only when dropdown is opened, the{' '}
                    <code className="prop-code">boxShadowOnOpen</code> prop is
                    required and must be set to true.
                  </p>
                )}
              </div>
            </div>
            <input
              type="checkbox"
              checked={hasBoxShadowOnOpen}
              onChange={handleChangeBoxShadowOnOpen}
            />
          </div>
        </li>

        <InputForCSSProp
          prop="maxWidth"
          label="Component max-width"
          cssProperty="max-width"
        />

        <InputForCSSProp
          prop="border"
          label="Component border"
          desc="unset for none"
          cssProperty="border"
        />

        <InputForCSSProp
          prop="borderRadius"
          label="Component border-radius"
          desc="only single value accepted, unset for none"
          cssProperty="width"
        />

        <InputForCSSProp
          prop="containerMargin"
          label="Component margin"
          cssProperty="margin"
        />

        <InputForCSSProp
          prop="boxShadow"
          label="Component box-shadow"
          desc="unset for none"
          cssProperty="box-shadow"
        />

        <InputForCSSProp
          prop="colorOnFocus"
          label="Component color on focus"
          desc="none, default, or custom color"
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
