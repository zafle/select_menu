import { useState } from 'react'
import { selectContext } from '../selectContext'
import PropTypes from 'prop-types'

export default function SelectContextProvider({ children }) {
  const [selectedOptionId, setSelectedOptionId] = useState('')
  const [selectedOption, setSelectedOption] = useState(undefined)
  const [selectedValue, setSelectedValue] = useState('')
  const [activeOptionIndex, setActiveOptionIndex] = useState('')
  // const [activeOption, setActiveOption] = useState('')
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
  const defineActiveOptionIndex = (value) => {
    setActiveOptionIndex(value)
  }
  // const defineActiveOption = (index, id) => {
  //   setActiveOptionIndex(index)
  //   setActiveOption(`option_${index}_${id}`)
  //   // document.getElementById(activeOption).focus()
  // }
  const toggleIsOpen = () => {
    setIsOpen(isOpen ? false : true)
  }

  return (
    <selectContext.Provider
      value={{
        selectedOptionId,
        selectedOption,
        selectedValue,
        activeOptionIndex,
        // activeOption,
        isOpen,
        defineSelectedOptionId,
        defineSelectedOption,
        defineSelectedValue,
        defineActiveOptionIndex,
        // defineActiveOption,
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
