import useConfig from '../../context/hook/useConfig'
import useSelect from '../../context/hook/useSelect'
import styles from './Option.module.css'
import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { triggerOnChangeSelectedValueInput } from '../../utils/utils'
import useActiveOption from '../../context/hook/useActiveOption'

/**
 * Displays Option
 *
 * @param {string|Object} option
 * @param {number} index option's index
 *
 * @returns {React.ReactElement} Option
 */
export default function Option({ option, index }) {
  const { isOpen, selectedId, selectedIndex, defineSelected, toggleIsOpen } =
    useSelect()

  const {
    id,
    values,
    onChangeValue,
    defaultSelectedOption,
    lastFocusableOptionIndex,
    textField,
    valueField,
    optionTextColor,
    hoveredOptionBackground,
    hoveredOptionTextColor,
    optionVerticalPadding,
    optionHorizontalPadding,
    optionFontSize,
    colorOnFocus,
    classOnFocus,
  } = useConfig()

  const { activeOptionIndex, defineActiveOptionIndex } = useActiveOption()

  const optionRef = useRef(null)

  /**
   * If the option is the defualt selected option
   * then define selected option in select context
   * then define active option in select context
   * NOTE: this useEffect only runs once on component mount
   */
  useEffect(() => {
    const optionText = values ? option[textField] : option
    const optionValue = values ? option[valueField] : option
    if (
      defaultSelectedOption === optionText ||
      (defaultSelectedOption === 'first' && index === 0)
    ) {
      if (onChangeValue !== null) {
        onChangeValue(values ? optionValue : optionText)
      }
      defineSelected(`option_${index}_${id}`, optionText, optionValue, index)
      defineActiveOptionIndex(index)
    }
    // NOTE: Run effect once on component mount, please
    // recheck dependencies if effect is updated.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /**
   * When dropdown opens, redefine active option === selected option
   */
  useEffect(() => {
    if (selectedIndex === index && isOpen) {
      defineActiveOptionIndex(index)
    }
    // NOTE: Run effect only when isOpen state changes (dropdown opens),
    // please recheck dependencies if effect is updated.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  const handleClick = (e) => {
    /**
     *  Trigger on change event on option's value hidden input
     *
     * @param {string} e.target.dataset.value option's value
     * @param {string} id  option's value hidden input ID
     */
    triggerOnChangeSelectedValueInput(e.target.dataset.value, id)

    defineSelected(
      e.target.id,
      e.target.innerText,
      e.target.dataset.value,
      index
    )
    toggleIsOpen()
  }

  const handleMouseEnter = () => {
    defineActiveOptionIndex(index)
    optionRef.current.focus()
  }

  const handleKeyDown = (e) => {
    if (e.key === ' ' || e.key === 'Spacebar' || e.key === 'Enter') {
      e.stopPropagation()
      e.preventDefault()
      handleClick(e)
    }
    if (e.key === 'ArrowDown') {
      // focus on next option
      e.preventDefault()
      defineActiveOptionIndex(
        activeOptionIndex === lastFocusableOptionIndex
          ? 0
          : activeOptionIndex + 1
      )
    }
    if (e.key === 'ArrowUp') {
      // focus on previous option
      e.preventDefault()
      defineActiveOptionIndex(
        activeOptionIndex === 0
          ? lastFocusableOptionIndex
          : activeOptionIndex - 1
      )
    }
  }

  const optionStyle = {
    color:
      activeOptionIndex === index ? hoveredOptionTextColor : optionTextColor,
    fontSize: optionFontSize,
    padding: `${optionVerticalPadding} ${optionHorizontalPadding}`,
    background: activeOptionIndex === index ? hoveredOptionBackground : 'unset',
  }

  return (
    <li
      id={`option_${index}_${id}`}
      className={
        `select-option ${styles.selectOption} ` +
        (colorOnFocus !== 'default' ? `${styles[classOnFocus]} ` : '')
      }
      ref={optionRef}
      data-value={values ? option[valueField] : option}
      data-index={index}
      style={optionStyle}
      onClick={(e) => {
        handleClick(e)
      }}
      onMouseEnter={handleMouseEnter}
      onKeyDown={handleKeyDown}
      role="option"
      aria-selected={selectedId === `option_${index}_${id}`}
      tabIndex="-1"
    >
      {values ? option[textField] : option}
    </li>
  )
}

Option.propTypes = {
  option: PropTypes.oneOfType([
    // without values
    PropTypes.string,
    // with values
    PropTypes.shape({
      // textField
      [PropTypes.string]: PropTypes.string,
      // valueField
      [PropTypes.string]: PropTypes.string,
    }),
  ]).isRequired,
  index: PropTypes.number.isRequired,
}
