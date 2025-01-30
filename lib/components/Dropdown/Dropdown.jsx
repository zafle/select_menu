import Options from '../Options/Options'
import OptGroups from '../OptGroups/OptGroups'
import useConfig from '../../context/hook/useConfig'
import useSelect from '../../context/hook/useSelect'

export default function Dropdown() {
  const { isOpen } = useSelect
  const { options, optGroup } = useConfig()

  return (
    <ul className={'select-dropdown ' + (isOpen ? 'open' : 'close')}>
      {optGroup ? <OptGroups /> : <Options options={options} />}
    </ul>
  )
}
