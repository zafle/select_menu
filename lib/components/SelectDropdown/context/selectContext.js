import { createContext } from 'react'

export const selectContext = createContext({
  selected: {
    id: '',
    text: '',
    value: '',
    index: '',
  },
  // selectedOptionId: '',
  // selectedOption: undefined,
  // selectedValue: '',
  // selectedIndex: '',
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
