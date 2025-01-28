import PropTypes from 'prop-types'
import Options from '../Options/Options'

export default function OptGroups({ options, id, values }) {
  return (
    <>
      {options.map((option, index) => (
        <li className="select-optgroup" key={`${index}-${id}-optgroup`}>
          <ul>
            <li className="select-optgroup-label">{option.label}</li>
            <Options options={option.options} id={id} values={values} />
          </ul>
        </li>
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
