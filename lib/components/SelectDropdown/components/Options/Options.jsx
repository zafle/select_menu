import PropTypes from 'prop-types'
import useConfig from '../../context/hook/useConfig'
import useSelect from '../../context/hook/useSelect'
import styles from './Options.module.css'

export default function Options({ options }) {
  const {
    selectedOptionId,
    defineSelectedOptionId,
    defineSelectedOption,
    defineSelectedValue,
  } = useSelect()
  const { id, values } = useConfig()

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
    <>
      {options.map((option, index) => (
        <li
          id={`option_${index}_${id}`}
          className={styles.selectOption}
          key={`${index}-${id}`}
          data-value={values ? option.value : option}
          onClick={(e) => {
            handleClick(e)
          }}
          role="option"
          aria-selected={selectedOptionId === `option_${index}_${id}`}
        >
          {values ? option.text : option}
        </li>
      ))}
    </>
  )
}

Options.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        text: PropTypes.string,
        value: PropTypes.string,
      }),
    ])
  ).isRequired,
}
