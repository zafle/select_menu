import Options from '../Options/Options'
import PropTypes from 'prop-types'

export default function OptGroup({ options, startIndex }) {
  return (
    <li className="select-optgroup">
      <ul>
        <li className="select-optgroup-label">{options.label}</li>
        <Options options={options.options} startIndex={startIndex} />
      </ul>
    </li>
  )
}

OptGroup.propTypes = {
  options: PropTypes.shape({
    label: PropTypes.string,
    options: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          text: PropTypes.string,
          value: PropTypes.string,
        }),
      ])
    ),
  }).isRequired,
  startIndex: PropTypes.number.isRequired,
}
