import { useState } from 'react'
import { selectContext } from '../selectContext'
import PropTypes from 'prop-types'

export default function SelectContextProvider({ children }) {
  const [selectedOption, setSelectedOption] = useState(undefined)
  const [selectedValue, setSelectedValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const defineSelectedOption = (value) => {
    setSelectedOption(value)
  }
  const defineSelectedValue = (value) => {
    setSelectedValue(value)
  }
  const toggleIsOpen = () => {
    setIsOpen(isOpen ? false : true)
  }

  return (
    <selectContext.Provider
      value={{
        selectedOption,
        selectedValue,
        isOpen,
        defineSelectedOption,
        defineSelectedValue,
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
