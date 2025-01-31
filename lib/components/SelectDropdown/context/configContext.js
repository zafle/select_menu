import { createContext } from 'react'
import { nanoid } from 'nanoid'

export const configContext = createContext({
  config: {
    isSet: false,
    // input config
    id: nanoid(),
    labelId: '', // for aria-labelledby
    name: '',
    onChange: null,
    // options config
    options: [],
    values: false,
    optGroup: false,
    // css config
    maxWidth: '250px',
    borderWidth: '1px',
    borderColor: '#2b2b2b',
  },
  defineConfig: () => {},
  defineIsSet: () => {},
})
