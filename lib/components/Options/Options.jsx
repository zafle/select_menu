import PropTypes from 'prop-types'
import useConfig from '../../context/hook/useConfig'
import useSelect from '../../context/hook/useSelect'
export default function Options({ options }) {
  const { defineSelectedOption, defineSelectedValue } = useSelect()
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
    defineSelectedOption(e.target.innerText)
    defineSelectedValue(e.target.dataset.value)
  }

  return (
    <>
      {options.map((option, index) => (
        <li
          className="select-option"
          key={`${index}-${id}`}
          data-value={values ? option.value : option}
          role="option"
          onClick={(e) => {
            handleClick(e)
          }}
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
