import { useContext } from 'react'
import { selectContext } from '../selectContext'

export default function useSelect() {
  return useContext(selectContext)
}
