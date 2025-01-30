import Options from '../Options/Options'
import useConfig from '../../context/hook/useConfig'

export default function OptGroups() {
  const { id, options } = useConfig()
  return (
    <>
      {options.map((option, index) => (
        <li className="select-optgroup" key={`${index}-${id}-optgroup`}>
          <ul>
            <li className="select-optgroup-label">{option.label}</li>
            <Options options={option.options} />
          </ul>
        </li>
      ))}
    </>
  )
}
