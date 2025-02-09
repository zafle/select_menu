import PropTypes from 'prop-types'
import useConfig from '../../context/hook/useConfig'
import Option from '../Option/Option'

/**
 * Displays Options
 *
 * @param {Array<string|Object} options
 * @param {number} startIndex Index from which options should start in optgroup
 *
 * @returns {React.ReactElement} Options
 */
export default function Options({ options, startIndex }) {
  const { id } = useConfig()

  return (
    <>
      {options.map((option, index) => {
        const optionIndex = startIndex ? startIndex + index : index
        return (
          <Option
            key={`${optionIndex}-${id}`}
            option={option}
            index={optionIndex}
          />
        )
      })}
    </>
  )
}

Options.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      // options without values
      PropTypes.string,
      // options with values
      PropTypes.shape({
        [PropTypes.string]: PropTypes.string,
        [PropTypes.string]: PropTypes.string,
      }),
    ])
  ).isRequired,
  startIndex: PropTypes.number,
}
