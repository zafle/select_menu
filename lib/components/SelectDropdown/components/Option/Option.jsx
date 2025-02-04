import useConfig from '../../context/hook/useConfig'
import useSelect from '../../context/hook/useSelect'
import styles from './Option.module.css'
import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { triggerOnChangeSelectedValueInput } from '../../utils/utils'

export default function Option({ option, index }) {
  const {
    isOpen,
    selectedOptionId,
    activeOptionIndex,
    defineSelected,
    defineActiveOptionIndex,
  } = useSelect()

  const { id, values, defaultSelectedOption } = useConfig()

  const optionRef = useRef(null)

  useEffect(() => {
    const optionText = values ? option.text : option
    const optionValue = values ? option.value : option
    if (
      defaultSelectedOption === optionText ||
      (defaultSelectedOption === 'first' && index === 0)
    ) {
      // triggerOnChangeSelectedValueInput(optionValue, id)

      defineSelected(`option_${index}_${id}`, optionText, optionValue, index)
    }
  }, [])

  useEffect(() => {
    if (activeOptionIndex === index && isOpen) {
      optionRef.current.focus()
    }
  }, [isOpen, activeOptionIndex, index])

  function handleClick(e) {
    triggerOnChangeSelectedValueInput(e.target.dataset.value, id)
    defineSelected(
      e.target.id,
      e.target.innerText,
      e.target.dataset.value,
      index
    )
  }

  function handleHover() {
    defineActiveOptionIndex(index)
    optionRef.current.focus()
  }

  return (
    <li
      id={`option_${index}_${id}`}
      className={
        `${styles.selectOption} `
        // +
        // (activeOptionIndex === index ? styles.active : '')
      }
      ref={optionRef}
      data-value={values ? option.value : option}
      onClick={(e) => {
        handleClick(e)
      }}
      onMouseEnter={handleHover}
      role="option"
      aria-selected={selectedOptionId === `option_${index}_${id}`}
      tabIndex="-1"
    >
      {values ? option.text : option}
    </li>
  )
}

Option.propTypes = {
  option: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      text: PropTypes.string,
      value: PropTypes.string,
    }),
  ]).isRequired,
  index: PropTypes.number.isRequired,
}
