const secureRegExp = /^[a-zA-Z0-9#(),.\s%-]*$/

export function checkIsSecure(value) {
  return secureRegExp.test(value)
}

export function checkIsValidCSS(property, value, target) {
  if (value !== '') {
    CSS.supports(property, value)
      ? target.parentNode.classList.remove('unvalid')
      : target.parentNode.classList.add('unvalid')
  } else {
    target.parentNode.classList.remove('unvalid')
  }
}
