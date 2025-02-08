import { createContext } from 'react'

export const selectContext = createContext({
  selected: {
    id: '',
    text: '',
    value: '',
    index: '',
  },
  // activeOptionIndex: '',
  isOpen: false,
  clearSelected: () => {},
  defineSelected: () => {},
  // defineActiveOptionIndex: () => {},
  toggleIsOpen: () => {},
})
