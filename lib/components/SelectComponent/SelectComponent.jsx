import Dropdown from '../Dropdown/Dropdown'
import SelectInput from '../SelectInput/SelectInput'
import PropTypes from 'prop-types'
import useConfig from '../../context/hook/useConfig'
import { useEffect } from 'react'

export default function SelectComponent({ props }) {
  const { isSet, defineConfig } = useConfig()

  useEffect(() => {
    if (!isSet) {
      defineConfig(props)
    }
  }, [props, isSet, defineConfig])

  return (
    <div className="select-container">
      <SelectInput />
      <Dropdown />
    </div>
  )
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
