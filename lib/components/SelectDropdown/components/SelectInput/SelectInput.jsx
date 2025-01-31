import useConfig from '../../context/hook/useConfig'
import useSelect from '../../context/hook/useSelect'
import arrow from '../../assets/arrow.png'
import styles from './SelectInput.module.css'

export default function SelectInput() {
  const { selectedOption, selectedValue, isOpen, toggleIsOpen } = useSelect()
  const { isSet, id, name, onChange, borderWidth, borderColor } = useConfig()

  const handleChange = (e) => {
    onChange(e.target.value)
  }

  if (isSet) {
    return (
      <div
        className={styles.selectInput}
        onClick={toggleIsOpen}
        style={{ border: `${borderWidth} solid ${borderColor}` }}
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
          tabIndex="0"
          role="combobox"
          aria-expanded={isOpen}
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
}
