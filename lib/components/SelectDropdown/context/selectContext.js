import { createContext } from 'react'

export const selectContext = createContext({
  selectedOptionId: '',
  selectedOption: undefined,
  selectedValue: '',
  selectedIndex: '',
  activeOptionIndex: '',
  isOpen: false,
  // defineSelectedOptionId: () => {},
  // defineSelectedOption: () => {},
  // defineSelectedValue: () => {},
  clearSelected: () => {},
  defineSelected: () => {},
  defineActiveOptionIndex: () => {},
  toggleIsOpen: () => {},
})
