import useConfig from '../../context/hook/useConfig'
import useSelect from '../../context/hook/useSelect'
import arrow from '../../assets/caret-down-icon.png'
import closeIcon from '../../assets/close-line-icon.png'
import { triggerOnChangeSelectedValueInput } from '../../utils/utils'
import { useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './SelectInput.module.css'

/**
 * Displays Select input
 *
 * @returns {React.ReactElement} SelectInput
 */
export default function SelectInput({ selectedOption }) {
  //  get context
  const {
    selectedId,
    selectedText,
    selectedValue,
    defaultSelected,
    isOpen,
    toggleIsOpen,
    clearSelected,
    defineSelected,
  } = useSelect()

  const {
    id,
    labelId,
    name,
    onChangeValue,
    resetToDefault,
    values,
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

  /**
   * Reset function is added in V2
   *
   * Check equality with selectedOption state (new prop) and selectedText | selectedValue
   * If different, means that user injected new value programmatically (null | '' | any)
   * -> only null value will reset to default when selected option is empty
   * This will reset selection to '' | defaultSelected if resetToDefault is true
   */
  useEffect(() => {
    if (selectedOption !== undefined) {
      const selectedContent = values ? selectedValue : selectedText

      if (selectedOption !== selectedContent) {
        if (!resetToDefault) {
          triggerOnChangeSelectedValueInput('', id)
          clearSelected()
        } else if (resetToDefault) {
          defineSelected(
            defaultSelected.id,
            defaultSelected.text,
            defaultSelected.value,
            defaultSelected.index
          )
          onChangeValue(defaultSelected.value)
        }
      }
    }
    // NOTE: Run effect only when selectedOption changes,
    // please recheck dependencies if effect is updated.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOption])

  const selectInputStyle = {
    border: border,
    height: inputHeight,
    background: inputBackground,
    color: inputTextColor,
    borderRadius: isOpen ? inputBorderRadiusOpened : borderRadius,
    fontSize: inputFontSize,
    boxShadow: boxShadowOnOpen ? (isOpen ? boxShadow : 'unset') : boxShadow,
    zIndex: dropdownPosition === 'top' && isOpen ? '2' : 'auto',
  }

  const inputStyle = {
    padding: `${inputVerticalPadding} 0 ${inputVerticalPadding} ${inputHorizontalPadding}  `,
  }

  const clearIconStyle = {
    padding: `calc(4px + ${inputVerticalPadding}) 12px`,
  }
  const arrowStyle = {
    padding: `calc(4px +  ${inputVerticalPadding}) ${inputHorizontalPadding} calc(4px +  ${inputVerticalPadding}) 12px`,
  }

  return (
    <div
      className={
        `select-input ${styles.selectInput} ` +
        (colorOnFocus !== 'default' ? `${styles[classOnFocus]} ` : '') +
        (selectedText !== '' ? `select-input--has-selection ` : '')
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
        className={`select-input--value ${styles.selectedValue}`}
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
      <div
        className={`select-input--text ${styles.selectedText}`}
        style={inputStyle}
        data-testid="selectedText-input"
      >
        {selectedText}
      </div>
      <img
        className={
          `select-input--clear-icon ${styles.clearSelect} ${styles.selectControl} ` +
          (selectedText !== '' ? `${styles.hasSelection} ` : '') +
          (colorOnFocus !== 'default' ? `${styles[classOnFocus]} ` : '')
        }
        style={clearIconStyle}
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
          `select-input--arrow ${styles.selectArrow} ${styles.selectControl} ` +
          (isOpen && `select-input--arrow-isopen `) +
          (isOpen && styles.open)
        }
        style={arrowStyle}
        src={arrow}
        alt="select menu control"
      />
    </div>
  )
}

SelectInput.propTypes = {
  selectedOption: PropTypes.string,
}
