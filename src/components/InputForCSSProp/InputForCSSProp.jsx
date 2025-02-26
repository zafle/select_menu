import { useState } from 'react'
import { useConfigDispatch } from '../../contexts/ConfigContext'
import { defaultConfigOptions } from '../../contexts/defaultConfigOptions'
import { checkIsSecure, checkIsValidCSS } from '../../utils/security'
import PropTypes from 'prop-types'

export default function InputForCSSProp({ prop, label, cssProperty }) {
  const dispatch = useConfigDispatch()
  const [inputValue, setInputValue] = useState('')

  /**
   *
   * @param {Event} e Change input value event
   * @param {string} cssProperty css property awaited to check its validation
   * @param {string} prop prop name
   */
  function handleChangeCSSValue(e, cssProperty, prop) {
    if (checkIsSecure(e.target.value)) {
      setInputValue(e.target.value)
      dispatch({ type: `set_css`, propName: prop, value: e.target.value })
      checkIsValidCSS(cssProperty, e.target.value, e.target)
    }
  }

  return (
    <li>
      <span>
        <code>{prop}</code>
      </span>
      <label>
        {label}
        <input
          type="text"
          placeholder={defaultConfigOptions[prop]}
          value={inputValue}
          onChange={(e) => handleChangeCSSValue(e, cssProperty, prop)}
        />
      </label>
    </li>
  )
}

InputForCSSProp.propTypes = {
  prop: PropTypes.string,
  label: PropTypes.string,
  cssProperty: PropTypes.string,
}
