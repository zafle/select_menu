import PropTypes from 'prop-types'
import useConfig from '../../context/hook/useConfig'
import Option from '../Option/Option'
import ActiveOptionContextProvider from '../../context/ActiveOptionContextProvider/ActiveOptionContextProvider'

export default function Options({ options, startIndex }) {
  const { id } = useConfig()

  return (
    <ActiveOptionContextProvider>
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
    </ActiveOptionContextProvider>
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
