import useConfig from '../../context/hook/useConfig'
import useSelect from '../../context/hook/useSelect'
import styles from './Option.module.css'
import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

export default function Option({ option, index }) {
  const {
    isOpen,
    selectedOptionId,
    activeOptionIndex,
    defineSelectedOptionId,
    defineSelectedOption,
    defineSelectedValue,
  } = useSelect()

  const { id, values } = useConfig()

  const optionRef = useRef(null)

  useEffect(() => {
    if (activeOptionIndex === index && isOpen) {
      optionRef.current.focus()
    }
  }, [isOpen, activeOptionIndex, index])

  function triggerOnChangeSelectedValueInput(enteredValue) {
    const selectedValueInput = document.getElementById(id)
    selectedValueInput.value = enteredValue

    const selectedValueInputEvent = new Event('change', { bubbles: true })

    const tracker = selectedValueInput._valueTracker
    if (tracker) {
      tracker.setValue('fake value')
    }

    selectedValueInput.dispatchEvent(selectedValueInputEvent)
  }

  function handleClick(e) {
    triggerOnChangeSelectedValueInput(e.target.dataset.value)
    defineSelectedOptionId(e.target.id)
    defineSelectedOption(e.target.innerText)
    defineSelectedValue(e.target.dataset.value)
  }

  return (
    <li
      id={`option_${index}_${id}`}
      className={
        `${styles.selectOption} ` +
        (activeOptionIndex === index ? styles.active : '')
      }
      ref={optionRef}
      data-value={values ? option.value : option}
      onClick={(e) => {
        handleClick(e)
      }}
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
