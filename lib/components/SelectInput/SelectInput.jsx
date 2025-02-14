import useConfig from '../../context/hook/useConfig'
import useSelect from '../../context/hook/useSelect'
import arrow from '../../assets/caret-down-icon.png'
import closeIcon from '../../assets/close-line-icon.png'
import { triggerOnChangeSelectedValueInput } from '../../utils/utils'
import styles from './SelectInput.module.css'

/**
 * Displays Select input
 *
 * @returns {React.ReactElement} SelectInput
 */
export default function SelectInput() {
  //  get context
  const {
    selectedId,
    selectedText,
    selectedValue,
    isOpen,
    toggleIsOpen,
    clearSelected,
  } = useSelect()

  const {
    id,
    labelId,
    name,
    onChangeValue,
    colorOnFocus,
    classOnFocus,
    border,
    inputHeight,
    inputBackground,
    inputTextColor,
    inputBorderRadiusOpened,
    borderRadius,
    inputVerticalPadding,
    inputHorizontalPadding,
    inputFontSize,
    boxShadow,
    boxShadowOnOpen,
    dropdownPosition,
  } = useConfig()

  const toggleDropdown = (e) => {
    // if event is not from clear selection element
    if (e.target.dataset.name !== 'clear') {
      toggleIsOpen()
    }
  }
  const clearSelection = () => {
    /**
     *  Trigger on change event on option's value hidden input
     *
     * @param {string} param1 option's value (empty)
     * @param {string} id  option's value hidden input ID
     */
    triggerOnChangeSelectedValueInput('', id)
    clearSelected()
  }

  // Handle hidden input on change event
  const handleChange = (e) => {
    // custom onChangeValue function from config
    onChangeValue !== null ? onChangeValue(e.target.value) : e.preventDefault()
  }

  // Handle visible input controls
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

  const selectInputStyle = {
    border: border,
    height: inputHeight,
    background: inputBackground,
    color: inputTextColor,
    borderRadius: isOpen ? inputBorderRadiusOpened : borderRadius,
    padding: `${inputVerticalPadding} ${inputHorizontalPadding}`,
    fontSize: inputFontSize,
    boxShadow: boxShadowOnOpen ? (isOpen ? boxShadow : 'unset') : boxShadow,
    zIndex: dropdownPosition === 'top' && isOpen ? '2' : 'auto',
  }

  return (
    <div
      className={
        `select-input ${styles.selectInput} ` +
        (colorOnFocus !== 'default' ? `${styles[classOnFocus]} ` : '')
      }
      style={selectInputStyle}
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
      data-testid="select-input"
    >
      {/* Hidden in css input */}
      <input
        id={id}
        className={styles.selectedValue}
        type="text"
        onChange={(e) => {
          handleChange(e)
        }}
        name={name}
        value={selectedValue}
        aria-hidden="true"
        tabIndex="-1"
        readOnly
        data-testid="selectedValue-input"
      />
      <div className={styles.selectedText} data-testid="selectedText-input">
        {selectedText}
      </div>
      <img
        className={
          `${styles.clearSelect} ${styles.selectControl} ` +
          (selectedText !== '' ? `${styles.hasSelection} ` : '') +
          (colorOnFocus !== 'default' ? `${styles[classOnFocus]} ` : '')
        }
        src={closeIcon}
        alt="clear selection"
        data-name="clear"
        tabIndex="0"
        aria-label="clear selection"
        role="button"
        onClick={() => {
          handleClearClick()
        }}
        onKeyDown={(e) => {
          handleClearKeyDown(e)
        }}
        data-testid="clearSelected-button"
      />
      <img
        className={
          `${styles.selectArrow} ${styles.selectControl} ` +
          (isOpen && styles.open)
        }
        src={arrow}
        alt="select menu control"
      />
    </div>
  )
}
