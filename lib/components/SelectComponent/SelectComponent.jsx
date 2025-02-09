import { useRef, useEffect } from 'react'
// components
import Dropdown from '../Dropdown/Dropdown'
import SelectInput from '../SelectInput/SelectInput'
// contexts
import useConfig from '../../context/hook/useConfig'
import useSelect from '../../context/hook/useSelect'
// hook
import useOnClickOutside from '../../hooks/useOnClickOutside'
// proptypes and css
import PropTypes from 'prop-types'
import styles from './SelectComponent.module.css'

/**
 * SelectComponent - A custom select dropdown component.
 *
 * @param {Object} props SelectComponent props
 *
 * An object containing all custom config options :
 * @param {Object} props.props
 *
 * ID for hidden input in SelectInput that will receive the selected option value
 * (must be === htmlFor label attribute) :
 * @param {string} props.props.id
 *
 * Name for hidden input in SelectInput that will receive the selected option value :
 * @param {string} props.props.name
 *
 * Select's label ID - used in .select-input aria-labelledBy :
 * @param {string} props.props.labelId
 *
 * ######### REQUIRED #########
 * Options'data array :
 * @param {Array<string|Object>} props.props.options
 *
 * Callback function triggered when an option is selected
 * (parameter = option selected value)
 * - DEFAULT = null
 * @param {Function} props.props.onChangeValue
 *
 * Defines default selected option :
 * - POSSIBLE VALUES = 'text of the default selected option' | 'first'  | undefined
 * - DEFAULT = undefined
 * @param {string} props.props.defaultSelectedOption
 *
 * ######### REQUIRED IF OPTIONS WITH VALUES #########
 * Name of the property for option's text in the options data's array :
 * @param {string} props.props.textField
 *
 * ######### REQUIRED IF OPTIONS WITH VALUES #########
 * Name of the property for option's value in the options data's array :
 * @param {string} props.props.valueField
 *
 * ######### REQUIRED IF OPTIONS WITH OPTGROUPS #########
 * Name of the property for optgroup label in the options data's array :
 * @param {string} props.props.optGroupLabelField
 *
 * ######### REQUIRED IF OPTIONS WITH OPTGROUPS #########
 * Name of the property for optgroup's options array in the options data's array :
 * @param {string} props.props.optGroupOptionsField
 *
 * SelectComponent max-width (e.g. "300px")
 * - DEFAULT = "250px" :
 * @param {string} props.props.maxWidth
 *
 * SelectInput and Dropdown borders
 * - POSSIBLE VALUES = 'unset' | e.g. '2px solid blue'
 * - DEFAULT = '1px solid #2b2b2b'
 * @param {string} props.props.border
 *
 * SelectInput and Dropdown border-radius
 * - POSSIBLE VALUES = 'unset' | e.g. '10px'
 * - DEFAULT = '4px'
 * @param {string} props.props.borderRadius
 *
 * SelectComponent margin
 * - DEFAULT = '0'
 * @param {string} props.props.containerMargin
 *
 * SelectInput and Dropdown shadow
 * - POSSIBLE VALUES = 'unset' | e.g. '4px 4px 10px black'
 * - DEFAULT = '4px 4px 10px rgba(0, 0, 0, 0.4)'
 * @param {string} props.props.boxShadow
 *
 * SelectInput and Dropdown shadow if open
 * true = box shadow will display only when dropdown is opened
 * false = box shadow will always display
 * - DEFAULT = false
 * @param {boolean} props.props.boxShadowOnOpen
 *
 * Set color on :focus-visible for focusable elements (SelectInput, clear selection button, options)
 * - POSSIBLE VALUES = 'none' = no color | 'default' = default browser color | custom color e.g. 'red'
 * - DEFAULT = 'default'
 * @param {string} props.props.colorOnFocus
 *
 * SelectInput height css property
 * - DEFAULT = 'unset'
 * @param {string} props.props.inputHeight
 *
 * SelectInput background css property
 * - DEFAULT = '#d5d5d5'
 * @param {string} props.props.inputBackground
 *
 * SelectInput color css property
 * - DEFAULT = 'inherit'
 * @param {string} props.props.inputTextColor
 *
 * SelectInput vertical padding css property
 * - DEFAULT = '8px'
 * @param {string} props.props.inputVerticalPadding
 *
 * SelectInput horizontal padding css property
 * - DEFAULT = '10px'
 * @param {string} props.props.inputHorizontalPadding
 *
 * SelectInput font-size css property
 * - DEFAULT = '16px'
 * @param {string} props.props.inputFontSize
 *
 * Dropdown background css property
 * - DEFAULT = 'white'
 * @param {string} props.props.dropdownBackground
 *
 * Dropdown max-height css property
 * - DEFAULT = 'unset'
 * @param {string} props.props.dropdownMaxHeight
 *
 * Dropdown vertical padding css property
 * - DEFAULT = '8px'
 * @param {string} props.props.dropdownVerticalPadding
 *
 * Dropdown position
 * - POSSIBLE VALUES = 'bottom' | 'top'
 * - DEFAULT = 'bottom'
 * @param {string} props.props.dropdownPosition
 *
 * Option color css property
 * - DEFAULT = 'inherit'
 * @param {string} props.props.optionTextColor
 *
 * Option background css property on hover
 * - DEFAULT = '#484848'
 * @param {string} props.props.hoveredOptionBackground
 *
 * Option color css property on hover
 * - DEFAULT = 'white'
 * @param {string} props.props.hoveredOptionTextColor
 *
 * Option vertical padding css property
 * - DEFAULT = '4px'
 * @param {string} props.props.optionVerticalPadding
 *
 * Option horizontal padding css property
 * - DEFAULT = '14px'
 * @param {string} props.props.optionHorizontalPadding
 *
 * Option font-size css property
 * - DEFAULT = '14px'
 * @param {string} props.props.optionFontSize
 *
 * OptGroup label color css property on hover
 * - DEFAULT = 'inherit'
 * @param {string} props.props.optGroupLabelTextColor
 *
 * OptGroup font-size css property
 * - DEFAULT = '16px'
 * @param {string} props.props.optGroupLabelFontSize
 *
 * OptGroup vertical padding css property
 * - DEFAULT = '4px'
 * @param {string} props.props.optGroupVerticalPadding
 *
 * OptGroup horizontal padding css property
 * - DEFAULT = '10px'
 * @param {string} props.props.optGroupHorizontalPadding
 *
 * OptGroup margin-top css property
 * - DEFAULT = '2px'
 * @param {string} props.props.optGroupMarginTop
 *
 * @returns {React.ReactElement} SelectComponent
 */
export default function SelectComponent({ props }) {
  // get select and config context
  const { isOpen, toggleIsOpen } = useSelect()
  const {
    isSet,
    id,
    maxWidth,
    containerMargin,
    colorOnFocus,
    classOnFocus,
    defineConfig,
  } = useConfig()

  // set SelectComponent ref
  const selectComponentRef = useRef(null)

  // set custom config
  useEffect(() => {
    if (!isSet) {
      defineConfig(props)
    }
  }, [props, isSet, defineConfig])

  // function to close Dropdown
  const closeDropdown = () => {
    isOpen && toggleIsOpen()
  }

  // hook to close dropdown on click outside
  useOnClickOutside(selectComponentRef, closeDropdown)

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault()
      closeDropdown()
    }
  }

  const containerStyle = isSet && {
    maxWidth: maxWidth,
    margin: containerMargin,
    '--outline-focus-visible-color':
      classOnFocus === 'hasCustomFocusVisibleColor' ? colorOnFocus : undefined,
  }

  if (isSet) {
    return (
      <div
        id={`${id}_select-container`}
        ref={selectComponentRef}
        className={`select-container ${styles.selectContainer}`}
        style={containerStyle}
        onKeyDown={(e) => {
          handleKeyDown(e)
        }}
      >
        <SelectInput />
        <Dropdown />
      </div>
    )
  }
}
SelectComponent.propTypes = {
  props: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    labelId: PropTypes.string,
    options: PropTypes.arrayOf(
      PropTypes.oneOfType([
        // without values
        PropTypes.string,
        // with values
        PropTypes.shape({
          // textField
          [PropTypes.string]: PropTypes.string,
          // valueField
          [PropTypes.string]: PropTypes.string,
        }),
        // optgroups without values
        PropTypes.shape({
          // labelField
          [PropTypes.string]: PropTypes.string,
          // options array
          [PropTypes.string]: PropTypes.arrayOf(PropTypes.string),
        }),
        //optgroup with values
        PropTypes.shape({
          // labelField
          [PropTypes.string]: PropTypes.string,
          // options array
          [PropTypes.string]: PropTypes.arrayOf(
            PropTypes.shape({
              // textField
              [PropTypes.string]: PropTypes.string,
              // valueField
              [PropTypes.string]: PropTypes.string,
            })
          ),
        }),
      ])
    ).isRequired,
    onChangeValue: PropTypes.func,
    defaultSelectedOption: PropTypes.string,
    textField: PropTypes.string,
    valueField: PropTypes.string,
    optGroupLabelField: PropTypes.string,
    optGroupOptionsField: PropTypes.string,
    maxWidth: PropTypes.string,
    border: PropTypes.string,
    borderRadius: PropTypes.string,
    containerMargin: PropTypes.string,
    boxShadow: PropTypes.string,
    boxShadowOnOpen: PropTypes.bool,
    colorOnFocus: PropTypes.string,
    inputHeight: PropTypes.string,
    inputBackground: PropTypes.string,
    inputTextColor: PropTypes.string,
    inputVerticalPadding: PropTypes.string,
    inputHorizontalPadding: PropTypes.string,
    inputFontSize: PropTypes.string,
    dropdownBackground: PropTypes.string,
    dropdownMaxHeight: PropTypes.string,
    dropdownVerticalPadding: PropTypes.string,
    dropdownPosition: PropTypes.string,
    optionTextColor: PropTypes.string,
    hoveredOptionBackground: PropTypes.string,
    hoveredOptionTextColor: PropTypes.string,
    optionVerticalPadding: PropTypes.string,
    optionHorizontalPadding: PropTypes.string,
    optionFontSize: PropTypes.string,
    optGroupLabelTextColor: PropTypes.string,
    optGroupLabelFontSize: PropTypes.string,
    optGroupVerticalPadding: PropTypes.string,
    optGroupHorizontalPadding: PropTypes.string,
    optGroupMarginTop: PropTypes.string,
  }),
}
