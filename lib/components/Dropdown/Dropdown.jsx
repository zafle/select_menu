import { useContext } from 'react'
import { selectContext } from '../../context/selectContext'
import Options from '../Options/Options'
import OptGroups from '../OptGroups/OptGroups'
import PropTypes from 'prop-types'

export default function Dropdown({ id, options, values, optGroup }) {
  const { selectedOption, isOpen, defineSelectedOption, toggleIsOpen } =
    useContext(selectContext)

  return (
    <ul className={'select-dropdown ' + (isOpen ? 'open' : 'close')}>
      {optGroup ? (
        <OptGroups options={options} id={id} values={values} />
      ) : (
        <Options options={options} id={id} values={values} />
      )}
    </ul>
  )
}

Dropdown.propTypes = {
  id: PropTypes.string.isRequired,
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
}
