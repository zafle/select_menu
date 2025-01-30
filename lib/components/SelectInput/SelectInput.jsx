import { useContext } from 'react'
import { selectContext } from '../../context/selectContext'
import useConfig from '../../context/hook/useConfig'

export default function SelectInput() {
  const { selectedOption, selectedValue, isOpen, toggleIsOpen } =
    useContext(selectContext)

  const { isSet, id, name, onChange } = useConfig()

  const handleChange = (e) => {
    onChange(e.target.value)
  }

  if (isSet) {
    return (
      <div onClick={toggleIsOpen}>
        <div className="select-selected-text">{selectedOption}</div>
        <input
          className="select-selected-value"
          type="text"
          id={id}
          onChange={(e) => {
            handleChange(e)
          }}
          name={name}
          value={selectedValue}
          tabIndex="0"
          role="combobox"
          aria-expanded={isOpen}
        />
      </div>
    )
  }
}
