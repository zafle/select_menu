import useConfig from '../../context/hook/useConfig'
import OptGroup from '../OptGroup/OptGroup'

export default function OptGroups() {
  const { id, options } = useConfig()

  const optGroupStartIndex = options.reduce((acc, option, i) => {
    acc.push(i === 0 ? 0 : acc[i - 1] + options[i - 1].options.length)
    return acc
  }, [])

  return options.map((option, index) => (
    <OptGroup
      key={`${index}-${id}-optgroup`}
      options={option}
      startIndex={optGroupStartIndex[index]}
    />
  ))
}
