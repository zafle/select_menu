import { useState } from 'react'
import { activeOptionContext } from '../activeOptionContext'
import PropTypes from 'prop-types'

export default function ActiveOptionContextProvider({ children }) {
  const [activeOptionIndex, setActiveOptionIndex] = useState(0)
  const defineActiveOptionIndex = (index) => {
    setActiveOptionIndex(index)
  }
  return (
    <activeOptionContext.Provider
      value={{ activeOptionIndex, defineActiveOptionIndex }}
    >
      {children}
    </activeOptionContext.Provider>
  )
}
ActiveOptionContextProvider.propTypes = {
  children: PropTypes.node,
}
