import { createContext } from 'react'

/**
 * Context for selected option and dropdown opened/closed
 */
export const selectContext = createContext({
  selected: {
    id: '',
    text: '',
    value: '',
    index: '',
  }, // selected option
  defaultSelected: {
    id: '',
    text: '',
    value: '',
    index: '',
  }, // default selected option
  isOpen: false, // dropdown is open
  clearSelected: () => {},
  defineSelected: () => {},
  defineDefaultSelected: () => {},
  toggleIsOpen: () => {},
})
