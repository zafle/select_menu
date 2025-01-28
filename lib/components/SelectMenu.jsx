import PropTypes from 'prop-types'

import Options from './Options'
import OptGroups from './OptGroups'

/**
 *
 * @param {string} props.selectName attribute used for htmlFor label tag, name and id select tag
 * @returns
 */
export function SelectMenu({
  id,
  name,
  options,
  values = false,
  optGroup = false,
  onChange = null,
  defaultSelectValue = undefined,
}) {
  return (
    <select id={id} name={name} onChange={onChange} value={defaultSelectValue}>
      {optGroup ? (
        <OptGroups options={options} id={id} values={values} />
      ) : (
        <Options options={options} id={id} values={values} />
      )}
    </select>
  )
}

SelectMenu.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      // options without values
      PropTypes.string,
      // options with values
      PropTypes.shape({
        text: PropTypes.string,
        value: PropTypes.string,
      }),
      // optgroups without values
      PropTypes.shape({
        label: PropTypes.string,
        options: PropTypes.arrayOf(PropTypes.string),
      }),
      //optgroup with values
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
  ).isRequired,
  values: PropTypes.bool,
  optGroup: PropTypes.bool,
  onChange: PropTypes.func,
  defaultSelectValue: PropTypes.string,
}
