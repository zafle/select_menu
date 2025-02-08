import { useContext } from 'react'
import { activeOptionContext } from '../activeOptionContext'

export default function useActiveOption() {
  return useContext(activeOptionContext)
}
