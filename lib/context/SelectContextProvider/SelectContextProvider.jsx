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
  const toggleIsOpen = () => {
    setIsOpen(isOpen ? false : true)
  }

  return (
    <selectContext.Provider
      value={{
        selected,
        isOpen,
        defineSelected,
        clearSelected,
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
