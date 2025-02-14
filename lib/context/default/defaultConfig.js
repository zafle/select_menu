import { nanoid } from 'nanoid'

const defaultConfig = {
  isSet: false,
  // INPUT CONFIG
  id: nanoid(), // ID used for hidden input that will receive the selected option value (must be === htmlFor label attribute)
  labelId: '', // for SelectInput aria-labelledby
  name: '', // name for hidden input that will receive the selected option value
  onChangeValue: null, // Callback function triggered when an option is selected
  // OPTIONS DATA CONFIG
  options: [], // Options'data array
  values: false, // ######## INTERNAL SETTING ONLY ########
  optGroup: false, // ######## INTERNAL SETTING ONLY ########
  defaultSelectedOption: undefined, // 'first' for first || 'option_text' to define one || undefined for none
  lastFocusableOptionIndex: '', // ######## INTERNAL SETTING ONLY ########
  textField: '', // property for option's text in the options data's array
  valueField: '', //  property for option's value in the options data's array
  optGroupLabelField: '', // property for optgroup label in the options data's array
  optGroupOptionsField: '', // property for optgroup's options array in the options data's array
  // INLINE CSS CONFIG
  // general component
  maxWidth: '250px',
  border: '1px solid #2b2b2b', // 'unset' = no border | custom value : e.g. '2px solid blue'
  borderRadius: '4px', // 'unset' = no border-radius | custom value : e.g. '10px'
  containerMargin: '0',
  boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.4)', // 'unset' = no shadow | custom : e.g. = '4px 4px 10px black'
  boxShadowOnOpen: false, // true = box shadow will display only when dropdown is opened, false = box shadow will always display
  colorOnFocus: 'default', // 'none' = no color on focus, 'default' = default browser setting, custom color to change default color
  classOnFocus: '', // ######## INTERNAL SETTING ONLY ########
  // select input
  inputHeight: 'unset',
  inputBackground: '#d5d5d5',
  inputTextColor: 'inherit',
  inputBorderRadiusOpened: '', // ######## INTERNAL SETTING ONLY ########
  inputVerticalPadding: '8px',
  inputHorizontalPadding: '10px',
  inputFontSize: '16px',
  // dropdown
  dropdownBackground: 'white',
  dropdownBorderTop: '0', // ######## INTERNAL SETTING ONLY ########
  dropdownBorderBottom: '1px solid #2b2b2b', // ######## INTERNAL SETTING ONLY ########
  dropdownBorderRadius: '0 0 4px 4px', // ######## INTERNAL SETTING ONLY ########
  dropdownMaxHeight: 'unset',
  dropdownVerticalPadding: '8px',
  dropdownPosition: 'bottom',
  dropdownBottom: 'unset', // ######## INTERNAL SETTING ONLY ########
  // options
  optionTextColor: 'inherit',
  hoveredOptionBackground: '#484848',
  hoveredOptionTextColor: 'white',
  optionVerticalPadding: '4px',
  optionHorizontalPadding: '14px',
  optionFontSize: '14px',
  // optgroup labels
  optGroupLabelTextColor: 'inherit',
  optGroupLabelFontSize: '16px',
  optGroupVerticalPadding: '4px',
  optGroupHorizontalPadding: '10px',
  optGroupMarginTop: '2px',
}

export default defaultConfig
