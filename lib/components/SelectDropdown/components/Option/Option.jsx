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
      className={styles.selectOption}
      ref={optionRef}
      data-value={values ? option.value : option}
      onClick={(e) => {
        handleClick(e)
      }}
      onMouseEnter={handleHover}
      role="option"
      aria-selected={selectedId === `option_${index}_${id}`}
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
