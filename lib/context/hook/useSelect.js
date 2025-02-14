import { useContext } from 'react'
import { selectContext } from '../selectContext'

export default function useSelect() {
  const {
    selected,
    // activeOptionIndex,
    isOpen,
    defineSelected,
    clearSelected,
    // defineActiveOptionIndex,
    toggleIsOpen,
  } = useContext(selectContext)

  return {
    selectedId: selected.id,
    selectedText: selected.text,
    selectedValue: selected.value,
    selectedIndex: selected.index,
    // activeOptionIndex,
    isOpen,
    defineSelected,
    clearSelected,
    // defineActiveOptionIndex,
    toggleIsOpen,
  }
}
