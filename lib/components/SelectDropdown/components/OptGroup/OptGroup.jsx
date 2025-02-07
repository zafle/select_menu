import useConfig from '../../context/hook/useConfig'
import Options from '../Options/Options'
import PropTypes from 'prop-types'
import styles from './OptGroup.module.css'

export default function OptGroup({ options, startIndex }) {
  const {
    optGroupLabelField,
    optGroupOptionsField,
    optGroupLabelTextColor,
    optGroupLabelFontSize,
    optGroupVerticalPadding,
    optGroupHorizontalPadding,
    optGroupMarginTop,
  } = useConfig()

  const optGroupStyle = {
    color: optGroupLabelTextColor,
    fontSize: optGroupLabelFontSize,
    padding: `${optGroupVerticalPadding} ${optGroupHorizontalPadding}`,
    marginTop: optGroupMarginTop,
  }
  return (
    <li className="select-optgroup">
      <ul>
        <li
          className={`select-optgroup-label ${styles.optgroupLabel}`}
          style={optGroupStyle}
        >
          {options[optGroupLabelField]}
        </li>
        <Options
          options={options[optGroupOptionsField]}
          startIndex={startIndex}
        />
      </ul>
    </li>
  )
}

OptGroup.propTypes = {
  options: PropTypes.shape({
    //optGroupLabelField
    [PropTypes.string]: PropTypes.string,
    //optGroupOptionsField
    [PropTypes.string]: PropTypes.arrayOf(
      PropTypes.oneOfType([
        // without values
        PropTypes.string,
        // with values
        PropTypes.shape({
          [PropTypes.string]: PropTypes.string,
          [PropTypes.string]: PropTypes.string,
        }),
      ])
    ),
  }).isRequired,
  startIndex: PropTypes.number.isRequired,
}
