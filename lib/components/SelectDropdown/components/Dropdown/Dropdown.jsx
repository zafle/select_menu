import Options from '../Options/Options'
import OptGroups from '../OptGroups/OptGroups'
import useConfig from '../../context/hook/useConfig'
import useSelect from '../../context/hook/useSelect'
import styles from './Dropdown.module.css'

export default function Dropdown() {
  const { isOpen } = useSelect()
  const { options, optGroup } = useConfig()

  return (
    <ul
      className={
        `${styles.selectDropdown} ` + (isOpen ? styles.open : styles.close)
      }
    >
      {optGroup ? <OptGroups /> : <Options options={options} />}
    </ul>
  )
}
