import Options from '../Options/Options'
import OptGroups from '../OptGroups/OptGroups'
import useConfig from '../../context/hook/useConfig'
import useSelect from '../../context/hook/useSelect'
import styles from './Dropdown.module.css'
import { useMemo } from 'react'

export default function Dropdown() {
  const { isOpen, selectedId, activeOptionIndex, defineActiveOptionIndex } =
    useSelect()

  const {
    id,
    labelId,
    options,
    optGroup,
    maxWidth,
    border,
    dropdownBorderTop,
    dropdownBorderBottom,
    // borderColor,
    // borderWidth,
    dropdownBackground,
    dropdownBorderRadius,
    dropdownMaxHeight,
    dropdownVerticalPadding,
    // dropdownPosition,
    dropdownBottom,
    boxShadow,
    boxShadowOnOpen,
  } = useConfig()

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

  const dropdownStyle = {
    maxHeight: dropdownMaxHeight,
    maxWidth: maxWidth,
    background: dropdownBackground,
    border: border,
    borderTop: dropdownBorderTop,
    borderBottom: dropdownBorderBottom,
    borderRadius: dropdownBorderRadius,
    // paddingTop: dropdownVerticalPadding,
    // paddingBottom: dropdownVerticalPadding,
    padding: `${dropdownVerticalPadding} 0`,
    boxShadow: boxShadowOnOpen ? (isOpen ? boxShadow : 'unset') : boxShadow,
    bottom: dropdownBottom,
    zIndex: isOpen ? '1' : 'auto',
  }

  return (
    <ul
      id={`dropdown_${id}`}
      className={
        `${styles.selectDropdown} ` + (isOpen ? styles.open : styles.close)
      }
      style={dropdownStyle}
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
