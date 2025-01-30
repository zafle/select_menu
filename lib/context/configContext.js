import { createContext } from 'react'
import { nanoid } from 'nanoid'

export const configContext = createContext({
  isSet: false,
  config: {
    id: nanoid(),
    name: '',
    options: [],
    values: false,
    optGroup: false,
    onChange: null,
  },
  defineConfig: () => {},
  defineIsSet: () => {},
})
