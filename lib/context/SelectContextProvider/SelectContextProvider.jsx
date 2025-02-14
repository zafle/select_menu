import { useState } from 'react'
import { selectContext } from '../selectContext'
import PropTypes from 'prop-types'

export default function SelectContextProvider({ children }) {
  const initialSelectedState = {
    id: '',
    text: '',
    value: '',
    index: '',
  }
  const [selected, setSelected] = useState(initialSelectedState)
  // const [activeOptionIndex, setActiveOptionIndex] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const defineSelected = (id, text, value, index) => {
    setSelected({
      id,
      text,
      value,
      index,
    })
  }
  const clearSelected = () => {
    setSelected(initialSelectedState)
  }
  // const defineActiveOptionIndex = (value) => {
  //   setActiveOptionIndex(value)
  // }
  const toggleIsOpen = () => {
    setIsOpen(isOpen ? false : true)
  }

  return (
    <selectContext.Provider
      value={{
        selected,
        // activeOptionIndex,
        isOpen,
        defineSelected,
        clearSelected,
        // defineActiveOptionIndex,
        toggleIsOpen,
      }}
    >
      {children}
    </selectContext.Provider>
  )
}
SelectContextProvider.propTypes = {
  children: PropTypes.node,
}
