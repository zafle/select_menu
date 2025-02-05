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

  const toggleDropdown = (e) => {
    // if event is not from clear selection element
    if (e.target.dataset.name !== 'clear') {
      // if dropdown is closed when event occurs, define active option before opening
      !isOpen &&
        defineActiveOptionIndex(selectedIndex !== '' ? selectedIndex : 0)
      toggleIsOpen()
    }
  }

  const clearSelection = () => {
    triggerOnChangeSelectedValueInput('', id)
    clearSelected()
    isOpen && defineActiveOptionIndex(0)
  }

  const handleChange = (e) => {
    onChangeValue(e.target.value)
  }

  // Handle input controls

  const handleInputClick = (e) => {
    toggleDropdown(e)
  }

  const handleInputKeyDown = (e) => {
    if (e.key === ' ' || e.key === 'Spacebar' || e.key === 'Enter') {
      e.preventDefault()
      toggleDropdown(e)
    }
  }

  // Handle clear input controls

  const handleClearClick = () => {
    clearSelection()
  }
  const handleClearKeyDown = (e) => {
    if (e.key === ' ' || e.key === 'Spacebar' || e.key === 'Enter') {
      e.preventDefault()
      clearSelection()
    }
  }

  return (
    <div
      className={
        `${styles.selectInput} ` + (isOpen ? styles.open : styles.close)
      }
      style={{ border: `${borderWidth} solid ${borderColor}` }}
      tabIndex="0"
      role="combobox"
      aria-expanded={isOpen}
      aria-haspopup="listbox"
      aria-controls={`dropdown_${id}`}
      aria-activedescendant={selectedId}
      aria-labelledby={labelId}
      onClick={(e) => {
        handleInputClick(e)
      }}
      onKeyDown={(e) => {
        handleInputKeyDown(e)
      }}
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
        tabIndex="-1"
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
        data-name="clear"
        tabIndex="0"
        aria-label="clear selection"
        onClick={() => {
          handleClearClick()
        }}
        onKeyDown={(e) => {
          handleClearKeyDown(e)
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
