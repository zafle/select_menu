import { createContext } from 'react'

/**
 * Context for active option
 */
export const activeOptionContext = createContext({
  activeOptionIndex: 0,
  defineActiveOptionIndex: () => {},
})
