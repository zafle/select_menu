import Options from '../Options/Options'
import OptGroups from '../OptGroups/OptGroups'
import useConfig from '../../context/hook/useConfig'
import useSelect from '../../context/hook/useSelect'
import styles from './Dropdown.module.css'


export default function Dropdown() {
  const {
    isOpen,
    selectedOptionId,
  } = useSelect()
  const { id, labelId, options, optGroup } = useConfig()


  return (
    <ul
      id={`dropdown_${id}`}
      className={
        `${styles.selectDropdown} ` + (isOpen ? styles.open : styles.close)
      }

      role="listbox"
      aria-hidden={!isOpen}
      aria-activedescendant={selectedOptionId}
      aria-labelledby={labelId}
    >
      {optGroup ? <OptGroups /> : <Options options={options} />}
    </ul>
  )
}
