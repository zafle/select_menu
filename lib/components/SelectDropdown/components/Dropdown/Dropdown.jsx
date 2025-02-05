import Options from '../Options/Options'
import OptGroups from '../OptGroups/OptGroups'
import useConfig from '../../context/hook/useConfig'
import useSelect from '../../context/hook/useSelect'
import styles from './Dropdown.module.css'
import { useMemo } from 'react'

export default function Dropdown() {
  const { isOpen, selectedId, activeOptionIndex, defineActiveOptionIndex } =
    useSelect()

  const { id, labelId, options, optGroup } = useConfig()

  const lastFocusableOptionIndex = useMemo(() => {
    let index = 0
    if (optGroup) {
      for (let element of options) {
        index += element.options.length
      }
      return index - 1
    } else {
      return options.length - 1
    }
  }, [options, optGroup])

  function handleKeyDown(e) {
    if (e.key === 'ArrowDown') {
      // focus on next option
      e.preventDefault()
      defineActiveOptionIndex(
        activeOptionIndex === lastFocusableOptionIndex
          ? 0
          : activeOptionIndex + 1
      )
    }
    if (e.key === 'ArrowUp') {
      // focus on previous option
      e.preventDefault()
      defineActiveOptionIndex(
        activeOptionIndex === 0
          ? lastFocusableOptionIndex
          : activeOptionIndex - 1
      )
    }
  }

  return (
    <ul
      id={`dropdown_${id}`}
      className={
        `${styles.selectDropdown} ` + (isOpen ? styles.open : styles.close)
      }
      role="listbox"
      aria-hidden={!isOpen}
      aria-activedescendant={selectedId}
      aria-labelledby={labelId}
      tabIndex="-1"
      onKeyDown={(e) => {
        handleKeyDown(e)
      }}
    >
      {optGroup ? <OptGroups /> : <Options options={options} />}
    </ul>
  )
}
