import PropTypes from 'prop-types'
import useConfig from '../../context/hook/useConfig'
import Option from '../Option/Option'

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
      PropTypes.string,
      PropTypes.shape({
        text: PropTypes.string,
        value: PropTypes.string,
      }),
    ])
  ).isRequired,
  startIndex: PropTypes.number,
}
