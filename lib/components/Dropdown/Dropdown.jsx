import { useContext } from 'react'
import { selectContext } from '../../context/selectContext'
import Options from '../Options/Options'
import OptGroups from '../OptGroups/OptGroups'
import useConfig from '../../context/hook/useConfig'

export default function Dropdown() {
  const { isOpen } = useContext(selectContext)
  const { options, optGroup } = useConfig()

  return (
    <ul className={'select-dropdown ' + (isOpen ? 'open' : 'close')}>
      {optGroup ? <OptGroups /> : <Options options={options} />}
    </ul>
  )
}
