import { useContext } from 'react'
import { selectContext } from '../selectContext'

export default function useSelect() {
  const {
    selected,
    defaultSelected,
    isOpen,
    defineSelected,
    defineDefaultSelected,
    clearSelected,
    toggleIsOpen,
  } = useContext(selectContext)

  return {
    selectedId: selected.id,
    selectedText: selected.text,
    selectedValue: selected.value,
    selectedIndex: selected.index,
    isOpen,
    defaultSelected,
    defineSelected,
    defineDefaultSelected,
    clearSelected,
    toggleIsOpen,
  }
}
