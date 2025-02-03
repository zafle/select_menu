import { createContext } from 'react'

export const selectContext = createContext({
  selectedOptionId: '',
  selectedOption: undefined,
  selectedValue: '',
  activeOptionIndex: '',
  // activeOption: '',
  isOpen: false,
  defineSelectedOptionId: () => {},
  defineSelectedOption: () => {},
  defineSelectedValue: () => {},
  defineActiveOptionIndex: () => {},
  // defineActiveOption: () => {},
  toggleIsOpen: () => {},
})
