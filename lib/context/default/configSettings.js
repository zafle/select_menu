export const setValues = (textField, valueField) => {
  return textField !== '' && valueField !== ''
}

export const setOptGroup = (optGroupLabelField, optGroupOptionsField) => {
  return optGroupLabelField !== '' && optGroupOptionsField !== ''
}

export const setShadowStyle = (boxShadow) => {
  switch (boxShadow) {
    case 'none':
      return 'unset'
    case 'default':
      return '4px 4px 10px rgba(0, 0, 0, 0.4)'
    default:
      return boxShadow
  }
}

export const setBorder = (border) => {
  switch (border) {
    case 'none':
      return 'unset'
    case 'default':
      return '1px solid #2b2b2b'
    default:
      return border
  }
}

export const setInputBorderRadiusClosed = (borderRadius) => {
  switch (borderRadius) {
    case 'none':
      return 'unset'
    case 'default':
      return '4px'
    default:
      return borderRadius
  }
}

export const setInputBorderRadiusOpened = (borderRadius, dropdownPosition) => {
  switch (borderRadius) {
    case 'none':
      return 'unset'
    case 'default':
      return dropdownPosition === 'bottom' ? '4px 4px 0 0' : '0 0 4px 4px'
    default:
      return dropdownPosition === 'bottom'
        ? `${borderRadius} ${borderRadius} 0 0`
        : `0 0 ${borderRadius} ${borderRadius}`
  }
}

export const setDropdownBorderTop = (dropdownPosition, border) => {
  return dropdownPosition === 'bottom' ? 0 : border
}

export const setDropdownBorderBottom = (dropdownPosition, border) => {
  return dropdownPosition === 'bottom' ? border : 0
}

export const setDropdownBorderRadius = (dropdownPosition, borderRadius) => {
  switch (borderRadius) {
    case 'none':
      return 'unset'
    case 'default':
      return dropdownPosition === 'bottom' ? '0 0 4px 4px' : '4px 4px 0 0'
    default:
      return dropdownPosition === 'bottom'
        ? `0 0 ${borderRadius} ${borderRadius}`
        : `${borderRadius} ${borderRadius} 0 0`
  }
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
