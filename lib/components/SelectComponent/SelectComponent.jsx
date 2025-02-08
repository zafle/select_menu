import Dropdown from '../Dropdown/Dropdown'
import SelectInput from '../SelectInput/SelectInput'
import PropTypes from 'prop-types'
import useConfig from '../../context/hook/useConfig'
import { useRef, useEffect } from 'react'
import styles from './SelectComponent.module.css'
import useOnClickOutside from '../../hooks/useOnClickOutside'
import useSelect from '../../context/hook/useSelect'

export default function SelectComponent({ props }) {
  const { isOpen, toggleIsOpen } = useSelect()

  const { isSet, maxWidth, colorOnFocus, classOnFocus, defineConfig } =
    useConfig()

  const selectComponentRef = useRef(null)

  useEffect(() => {
    if (!isSet) {
      defineConfig(props)
    }
  }, [props, isSet, defineConfig])

  const closeDropdown = () => {
    isOpen && toggleIsOpen()
  }

  useOnClickOutside(selectComponentRef, closeDropdown)

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault()
      closeDropdown()
    }
  }

  const containerStyle = {
    maxWidth: maxWidth,
    '--outline-focus-visible-color':
      classOnFocus === 'hasCustomFocusVisibleColor' ? colorOnFocus : undefined,
  }

  if (isSet) {
    return (
      <div
        ref={selectComponentRef}
        className={`select-container ${styles.selectContainer}`}
        style={containerStyle}
        onKeyDown={(e) => {
          handleKeyDown(e)
        }}
      >
        <SelectInput />
        <Dropdown />
      </div>
    )
  }
}
SelectComponent.propTypes = {
  props: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    labelId: PropTypes.string,
    options: PropTypes.arrayOf(
      PropTypes.oneOfType([
        // without values
        PropTypes.string,
        // with values
        PropTypes.shape({
          // textField
          [PropTypes.string]: PropTypes.string,
          // valueField
          [PropTypes.string]: PropTypes.string,
        }),
        // optgroups without values
        PropTypes.shape({
          [PropTypes.string]: PropTypes.string,
          [PropTypes.string]: PropTypes.arrayOf(PropTypes.string),
        }),
        //optgroup with values
        PropTypes.shape({
          [PropTypes.string]: PropTypes.string,
          [PropTypes.string]: PropTypes.arrayOf(
            PropTypes.shape({
              [PropTypes.string]: PropTypes.string,
              [PropTypes.string]: PropTypes.string,
            })
          ),
        }),
      ])
    ).isRequired,
    onChangeValue: PropTypes.func,
    defaultSelectedOption: PropTypes.string,
    textField: PropTypes.string,
    valueField: PropTypes.string,
    optGroupLabelField: PropTypes.string,
    optGroupOptionsField: PropTypes.string,
    maxWidth: PropTypes.string,
    border: PropTypes.string,
    borderRadius: PropTypes.string,
    containerMargin: PropTypes.string,
    boxShadow: PropTypes.string,
    boxShadowOnOpen: PropTypes.bool,
    colorOnFocus: PropTypes.string,
    inputHeight: PropTypes.string,
    inputBackground: PropTypes.string,
    inputTextColor: PropTypes.string,
    inputVerticalPadding: PropTypes.string,
    inputHorizontalPadding: PropTypes.string,
    inputFontSize: PropTypes.string,
    dropdownBackground: PropTypes.string,
    dropdownMaxHeight: PropTypes.string,
    dropdownVerticalPadding: PropTypes.string,
    dropdownPosition: PropTypes.string,
    optionTextColor: PropTypes.string,
    hoveredOptionBackground: PropTypes.string,
    hoveredOptionTextColor: PropTypes.string,
    optionVerticalPadding: PropTypes.string,
    optionHorizontalPadding: PropTypes.string,
    optionFontSize: PropTypes.string,
    optGroupLabelTextColor: PropTypes.string,
    optGroupLabelFontSize: PropTypes.string,
    optGroupVerticalPadding: PropTypes.string,
    optGroupHorizontalPadding: PropTypes.string,
    optGroupMarginTop: PropTypes.string,
  }),
}
