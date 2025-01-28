import PropTypes from 'prop-types'

import Options from '../Options/Options'
import OptGroups from '../OptGroups/OptGroups'

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
  onChange,
  defaultSelectValue = undefined,
}) {
  return (
    <div className="select-container">
      <input
        className="select-input"
        type="text"
        id={id}
        onChange={onChange}
        name={name}
        value={defaultSelectValue}
        tabIndex="0"
        role="combobox"
        aria-expanded={false}
      />
      <ul className="select-dropdown">
        {optGroup ? (
          <OptGroups options={options} id={id} values={values} />
        ) : (
          <Options options={options} id={id} values={values} />
        )}
      </ul>
    </div>
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
  onChange: PropTypes.func.isRequired,
  defaultSelectValue: PropTypes.string,
}
