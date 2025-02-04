import useConfig from '../../context/hook/useConfig'
import OptGroup from '../OptGroup/OptGroup'

export default function OptGroups() {
  const { id, options } = useConfig()

  /**
   * Computes the starting index for each optgroup's options.
   * The first optgroup starts at index 0, and each subsequent optgroup
   * starts at the sum of the lengths of all previous optgroups' options.
   *
   * @returns {number[]} Array of starting indexes for each optgroup.
   */
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
