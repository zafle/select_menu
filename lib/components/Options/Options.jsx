import PropTypes from 'prop-types'
import useConfig from '../../context/hook/useConfig'
import Option from '../Option/Option'
import useActiveOption from '../../context/hook/useActiveOption'
import useSelect from '../../context/hook/useSelect'
import { useEffect } from 'react'

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
  const { activeOptionIndex, defineActiveOptionIndex } = useActiveOption()
  const { isOpen, selectedIndex } = useSelect()

  useEffect(() => {
    if (!isOpen) {
      if (selectedIndex === '' && activeOptionIndex !== 0) {
        defineActiveOptionIndex(0)
      }
    }
  }, [isOpen, activeOptionIndex, selectedIndex, defineActiveOptionIndex])

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
