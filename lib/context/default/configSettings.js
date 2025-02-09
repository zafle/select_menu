export const setValues = (textField, valueField) => {
  return textField !== '' && valueField !== ''
}

export const setOptGroup = (optGroupLabelField, optGroupOptionsField) => {
  return optGroupLabelField !== '' && optGroupOptionsField !== ''
}

export const setInputBorderRadiusOpened = (borderRadius, dropdownPosition) => {
  return borderRadius === 'unset'
    ? 'unset'
    : dropdownPosition === 'bottom'
    ? `${borderRadius} ${borderRadius} 0 0`
    : `0 0 ${borderRadius} ${borderRadius}`
}

export const setDropdownBorderTop = (dropdownPosition, border) => {
  return dropdownPosition === 'bottom' ? 0 : border
}

export const setDropdownBorderBottom = (dropdownPosition, border) => {
  return dropdownPosition === 'bottom' ? border : 0
}

export const setDropdownBorderRadius = (dropdownPosition, borderRadius) => {
  return borderRadius === 'unset'
    ? 'unset'
    : dropdownPosition === 'bottom'
    ? `0 0 ${borderRadius} ${borderRadius}`
    : `${borderRadius} ${borderRadius} 0 0`
}

export const setDropdownBottom = (dropdownPosition) => {
  return dropdownPosition === 'bottom' ? 'unset' : '100%'
}

export const setClassOnFocus = (colorOnFocus) => {
  switch (colorOnFocus) {
    case 'none':
      return 'hasNoFocusVisibleColor'
    case 'default':
      break
    default:
      return 'hasCustomFocusVisibleColor'
  }
}

export const setLastFocusableOptionIndex = (options, optgroup) => {
  let index = 0
  if (optgroup) {
    for (let element of options) {
      index += element.options.length
    }
    return index - 1
  } else {
    return options.length - 1
  }
}
