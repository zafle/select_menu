import { createContext } from 'react'

export const selectContext = createContext({
  selectedOptionId: '',
  selectedOption: undefined,
  selectedValue: '',
  isOpen: false,
  defineSelectedOptionId: () => {},
  defineSelectedOption: () => {},
  defineSelectedValue: () => {},
  toggleIsOpen: () => {},
})
