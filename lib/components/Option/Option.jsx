import useConfig from '../../context/hook/useConfig'
import useSelect from '../../context/hook/useSelect'
import styles from './Option.module.css'
import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { triggerOnChangeSelectedValueInput } from '../../utils/utils'

export default function Option({ option, index }) {
  const {
    isOpen,
    selectedId,
    activeOptionIndex,
    defineSelected,
    defineActiveOptionIndex,
    toggleIsOpen,
  } = useSelect()

  const {
    id,
    values,
    defaultSelectedOption,
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

  const optionRef = useRef(null)

  useEffect(() => {
    const optionText = values ? option[textField] : option
    const optionValue = values ? option[valueField] : option
    if (
      defaultSelectedOption === optionText ||
      (defaultSelectedOption === 'first' && index === 0)
    ) {
      defineSelected(`option_${index}_${id}`, optionText, optionValue, index)
    }
    // NOTE: Run effect once on component mount, please
    // recheck dependencies if effect is updated.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (activeOptionIndex === index && isOpen) {
      optionRef.current.focus()
    }
  }, [isOpen, activeOptionIndex, index])

  const handleClick = (e) => {
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
