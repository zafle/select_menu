import PropTypes from 'prop-types'

export default function Options({ options, id, values }) {
  return (
    <>
      {options.map((option, index) => (
        <li
          className="select-option"
          key={`${index}-${id}`}
          value={values ? option.value : option}
          role="option"
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
