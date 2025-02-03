import Dropdown from '../Dropdown/Dropdown'
import SelectInput from '../SelectInput/SelectInput'
import PropTypes from 'prop-types'
import useConfig from '../../context/hook/useConfig'
import { useRef, useEffect } from 'react'
import styles from './SelectComponent.module.css'
import useOnClickOutside from '../../hooks/useOnClickOutside'
import useSelect from '../../context/hook/useSelect'

export default function SelectComponent({ props }) {
  const {
    isOpen,
    activeOptionIndex,
    defineActiveOptionIndex,
    toggleIsOpen,
  } = useSelect()
  const { isSet, maxWidth, defineConfig } = useConfig()

  const selectComponentRef = useRef(null)
  function closeDropdown() {
    isOpen && toggleIsOpen()
  }
  useOnClickOutside(selectComponentRef, closeDropdown)

  function handleKeyDown(e) {
    console.log('keydown')
    if (e.key === 'Escape') {
      toggleIsOpen()
    }
    if (e.key === 'ArrowDown') {
      // Fonction pour naviguer vers l’option suivante
      e.preventDefault()
      defineActiveOptionIndex(activeOptionIndex + 1)
    }
    if (e.key === 'ArrowUp') {
      // Fonction pour naviguer vers l’option précédente
      e.preventDefault()
      defineActiveOptionIndex(activeOptionIndex - 1)
    }
  }

  useEffect(() => {
    if (!isSet) {
      defineConfig(props)
    }

  }, [
    props,
    isSet,
    defineConfig,
  ])

  if (isSet) {
    return (
      <div
        ref={selectComponentRef}
        className={styles.selectContainer}
        style={{ maxWidth: maxWidth }}
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
