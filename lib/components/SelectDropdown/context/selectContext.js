import { createContext } from 'react'

export const selectContext = createContext({
  selectedOption: undefined,
  selectedValue: '',
  isOpen: false,
  defineSelectedOption: () => {},
  defineSelectedValue: () => {},
  toggleIsOpen: () => {},
})
