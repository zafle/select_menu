import PropTypes from 'prop-types'
import Options from './Options'

export default function OptGroups({ options, id, values }) {
  return (
    <>
      {options.map((option, index) => (
        <optgroup key={`${index}-${id}-optgroup`} label={option.label}>
          <Options options={option.options} id={id} values={values} />
        </optgroup>
      ))}
    </>
  )
}

OptGroups.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        label: PropTypes.string,
        options: PropTypes.arrayOf(PropTypes.string),
      }),
      PropTypes.shape({
        label: PropTypes.string,
        options: PropTypes.arrayOf(
          PropTypes.shape({
            text: PropTypes.string,
            value: PropTypes.string,
          })
        ),
      }),
    ])
  ),
  id: PropTypes.string.isRequired,
  values: PropTypes.bool.isRequired,
}
