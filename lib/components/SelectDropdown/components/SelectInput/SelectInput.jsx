import useConfig from '../../context/hook/useConfig'
import useSelect from '../../context/hook/useSelect'
import arrow from '../../assets/caret-down-icon.png'
import closeIcon from '../../assets/close-line-icon.png'
import styles from './SelectInput.module.css'
import { triggerOnChangeSelectedValueInput } from '../../utils/utils'

export default function SelectInput() {
  const {
    selectedId,
    selectedText,
    selectedValue,
    selectedIndex,
    isOpen,
    toggleIsOpen,
    defineActiveOptionIndex,
    clearSelected,
  } = useSelect()
  const { id, labelId, name, onChangeValue, borderWidth, borderColor } =
    useConfig()

  const handleChange = (e) => {
    onChangeValue(e.target.value)
    console.log('selected has changed')
  }

  const handleInputClick = () => {
    toggleIsOpen()
    defineActiveOptionIndex(selectedIndex !== '' ? selectedIndex : 0)
  }

  const handleClearClick = (e) => {
    e.stopPropagation()
    triggerOnChangeSelectedValueInput('', id)
    clearSelected()
  }

  return (
    <div
      className={
        `${styles.selectInput} ` + (isOpen ? styles.open : styles.close)
      }
      onClick={handleInputClick}
      style={{ border: `${borderWidth} solid ${borderColor}` }}
      tabIndex="0"
      role="combobox"
      aria-expanded={isOpen}
      aria-haspopup="listbox"
      aria-controls={`dropdown_${id}`}
      aria-activedescendant={selectedId}
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
      <div className={styles.selectedText}>{selectedText}</div>
      <img
        className={
          `${styles.clearSelect} ` +
          (selectedText !== '' && styles.hasSelection)
        }
        src={closeIcon}
        alt="clear selection"
        onClick={(e) => {
          handleClearClick(e)
        }}
      />
      <img
        className={`${styles.selectArrow} ` + (isOpen && styles.open)}
        src={arrow}
        alt="select menu control"
      />
    </div>
  )
}
