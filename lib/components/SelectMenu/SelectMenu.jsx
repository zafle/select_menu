import PropTypes from 'prop-types'
import { SelectInput } from '../SelectInput/SelectInput'
import Dropdown from '../Dropdown/Dropdown'
import SelectContextProvider from '../../context/SelectContextProvider/SelectContextProvider'

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
}) {
  return (
    <SelectContextProvider>
      <div className="select-container">
        <SelectInput id={id} name={name} onChange={onChange} />
        <Dropdown options={options} values={values} optGroup={optGroup} />
      </div>
    </SelectContextProvider>
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
