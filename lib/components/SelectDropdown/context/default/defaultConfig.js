import { nanoid } from 'nanoid'

const defaultConfig = {
  isSet: false,
  // input config
  id: nanoid(),
  labelId: '', // for aria-labelledby
  name: '',
  onChangeValue: null,
  // options config
  options: [],
  values: false,
  optGroup: false,
  defaultSelectedOption: undefined, // 'first' for first || 'option_text' to define one || undefined for none
  textField: '',
  valueField: '',
  optGroupLabelField: '',
  optGroupOptionsField: '',
  // INLINE CSS CONFIG
  // general component
  maxWidth: '250px',
  border: 'default', // none = no border || 'default' = default border || custom value from user, e.g. = '2px solid blue'
  borderRadius: 'default', // none = no radius || 'default' = default radius || custom value from user, e.g. = '10px'
  containerMargin: 'auto',
  boxShadow: 'none', // 'none' = no shadow || 'default' = default shadow || custom value from user, e.g. = '4px 4px 10px black'
  boxShadowOnOpen: false, // true = box shadow will display only when dropdown is opened, false = box shadow will always display
  colorOnFocus: 'default', // 'none' = no color on focus, 'default' = no setting, custom color to change default color
  styleOnFocus: '',
  // select input
  inputHeight: 'unset',
  inputBackground: '#d5d5d5',
  inputTextColor: 'inherit',
  inputBorderTop: '',
  inputBorderBottom: '',
  inputBorderRadiusOpened: '',
  inputBorderRadiusClosed: '',
  inputVerticalPadding: '8px',
  inputHorizontalPadding: '10px',
  inputFontSize: '16px',
  // dropdown
  dropdownBackground: 'white',
  dropdownBorderTop: '',
  dropdownBorderBottom: '',
  dropdownBorderRadius: '',
  dropdownMaxHeight: 'unset',
  dropdownVerticalPadding: '8px',
  dropdownPosition: 'bottom',
  dropdownBottom: 'unset',
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
