import Options from '../Options/Options'
import OptGroups from '../OptGroups/OptGroups'
import useConfig from '../../context/hook/useConfig'
import useSelect from '../../context/hook/useSelect'
import styles from './Dropdown.module.css'

export default function Dropdown() {
  console.log('dropdown renders')

  const { isOpen, selectedId } = useSelect()

  const {
    id,
    labelId,
    options,
    optGroup,
    maxWidth,
    border,
    dropdownBorderTop,
    dropdownBorderBottom,
    dropdownBackground,
    dropdownBorderRadius,
    dropdownMaxHeight,
    dropdownVerticalPadding,
    dropdownBottom,
    boxShadow,
    boxShadowOnOpen,
    colorOnFocus,
    classOnFocus,
  } = useConfig()

  const dropdownStyle = {
    maxHeight: dropdownMaxHeight,
    maxWidth: maxWidth,
    background: dropdownBackground,
    border: border,
    borderTop: dropdownBorderTop,
    borderBottom: dropdownBorderBottom,
    borderRadius: dropdownBorderRadius,
    padding: `${dropdownVerticalPadding} 0`,
    boxShadow: boxShadowOnOpen ? (isOpen ? boxShadow : 'unset') : boxShadow,
    bottom: dropdownBottom,
    zIndex: 1,
  }

  return (
    <ul
      id={`dropdown_${id}`}
      className={
        `select-dropdown ${styles.selectDropdown} ` +
        (colorOnFocus !== 'default' ? `${styles[classOnFocus]} ` : '') +
        (isOpen ? '' : styles.close)
      }
      style={dropdownStyle}
      role="listbox"
      aria-hidden={!isOpen}
      aria-activedescendant={selectedId}
      aria-labelledby={labelId}
      tabIndex="-1"
    >
      {optGroup ? <OptGroups /> : <Options options={options} />}
    </ul>
  )
}
