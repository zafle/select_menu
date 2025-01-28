import { useContext } from 'react'
import { selectContext } from '../../context/selectContext'
import PropTypes from 'prop-types'

export function SelectInput({ id, name, onChange }) {
  const {
    selectedOption,
    selectedValue,
    isOpen,
    defineSelectedOption,
    toggleIsOpen,
  } = useContext(selectContext)

  return (
    <div>
      <div>{selectedOption}</div>
      <input
        className="select-input"
        type="text"
        id={id}
        onChange={onChange}
        name={name}
        value={selectedValue}
        tabIndex="0"
        role="combobox"
        aria-expanded={isOpen}
        onClick={toggleIsOpen}
      />
    </div>
  )
}

SelectInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
