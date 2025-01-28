import { createContext } from 'react'

export const selectContext = createContext({
  selectedOption: undefined,
  selectedValue: undefined,
  isOpen: false,
  defineSelectedOption: () => {},
  defineSelectedValue: () => {},
  toggleIsOpen: () => {},
})
