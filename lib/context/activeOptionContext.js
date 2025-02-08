import { createContext } from 'react'

export const activeOptionContext = createContext({
  activeOptionIndex: 0,
  defineActiveOptionIndex: () => {},
})
