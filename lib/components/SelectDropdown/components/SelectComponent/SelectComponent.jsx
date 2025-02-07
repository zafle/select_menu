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

  function closeDropdown() {
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
        className={styles.selectContainer}
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
    options: PropTypes.array.isRequired,
    values: PropTypes.bool,
    optGroup: PropTypes.bool,
    onChange: PropTypes.func,
  }),
}
