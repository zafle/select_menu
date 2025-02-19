import { useContext } from 'react'
import { selectContext } from '../selectContext'

export default function useSelect() {
  const { selected, isOpen, defineSelected, clearSelected, toggleIsOpen } =
    useContext(selectContext)

  return {
    selectedId: selected.id,
    selectedText: selected.text,
    selectedValue: selected.value,
    selectedIndex: selected.index,
    isOpen,
    defineSelected,
    clearSelected,
    toggleIsOpen,
  }
}
