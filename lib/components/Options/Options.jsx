import PropTypes from 'prop-types'
import { useContext } from 'react'
import { selectContext } from '../../context/selectContext'
export default function Options({ options, id, values }) {
  const { defineSelectedOption, defineSelectedValue } =
    useContext(selectContext)

  function handleClick(e) {
    console.log('e.target.innerText :', e.target.innerText)
    console.log('e.target.dataset.value :', e.target.dataset.value)
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
  id: PropTypes.string.isRequired,
  values: PropTypes.bool.isRequired,
}
