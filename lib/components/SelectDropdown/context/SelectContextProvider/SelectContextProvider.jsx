import { useState } from 'react'
import { selectContext } from '../selectContext'
import PropTypes from 'prop-types'

export default function SelectContextProvider({ children }) {
  const [selectedOptionId, setSelectedOptionId] = useState('')
  const [selectedOption, setSelectedOption] = useState(undefined)
  const [selectedValue, setSelectedValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const defineSelectedOptionId = (value) => {
    setSelectedOptionId(value)
  }
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
        selectedOptionId,
        selectedOption,
        selectedValue,
        isOpen,
        defineSelectedOptionId,
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
