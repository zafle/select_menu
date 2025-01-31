import useConfig from '../../context/hook/useConfig'
import useSelect from '../../context/hook/useSelect'
import arrow from '../../assets/arrow.png'
import styles from './SelectInput.module.css'

export default function SelectInput() {
  const {
    selectedOptionId,
    selectedOption,
    selectedValue,
    isOpen,
    toggleIsOpen,
  } = useSelect()
  const { id, labelId, name, onChange, borderWidth, borderColor } = useConfig()

  const handleChange = (e) => {
    onChange(e.target.value)
  }

  return (
    <div
      className={styles.selectInput}
      onClick={toggleIsOpen}
      style={{ border: `${borderWidth} solid ${borderColor}` }}
      tabIndex="0"
      role="combobox"
      aria-expanded={isOpen}
      aria-haspopup="listbox"
      aria-controls={`dropdown_${id}`}
      aria-activedescendant={selectedOptionId}
      aria-labelledby={labelId}
    >
      <input
        className={styles.selectedValue}
        type="text"
        id={id}
        onChange={(e) => {
          handleChange(e)
        }}
        name={name}
        value={selectedValue}
        aria-hidden="true"
        readOnly
      />
      <div className={styles.selectedText}>{selectedOption}</div>
      <img
        className={styles.selectArrow}
        src={arrow}
        alt="select menu control"
      />
    </div>
  )
}
