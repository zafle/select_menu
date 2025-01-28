import PropTypes from 'prop-types'

export default function Options({ options, id, values }) {
  return (
    <>
      {options.map((option, index) => (
        <option key={`${index}-${id}`} value={values ? option.value : option}>
          {values ? option.text : option}
        </option>
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
