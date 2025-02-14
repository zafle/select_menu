import { screen } from '@testing-library/react'
import { it, describe, expect } from 'vitest'
import { render } from './mocks/contextMock/baseContextRender'
import Dropdown from '../components/Dropdown/Dropdown'
import {
  COLORS,
  COLORS_CODES,
  FOOD_CATEGORIES,
  FOOD_CATEGORIES_CODES,
} from './mocks/data/optionsMock'

describe('Test Dropdown with different types of data', () => {
  it('Should display options without values', () => {
    const selectProps = {
      isOpen: true,
    }
    const configProps = {
      options: COLORS,
    }

    render(<Dropdown />, { selectProps, configProps })
    // screen.debug()
    const options = screen.queryAllByRole('option')
    for (let option of options) {
      expect(option.dataset.value).toEqual(option.innerHTML)
    }
  })
  it('Should display options with values', () => {
    const selectProps = {
      isOpen: true,
    }
    const configProps = {
      options: COLORS_CODES,
      textField: 'name',
      valueField: 'code',
      values: true,
    }

    render(<Dropdown />, { selectProps, configProps })
    // screen.debug()
    const optionRed = screen.getByText('Red')
    expect(optionRed.dataset.value).toEqual('#FF0000')
  })
  it('Should display optgroups of options without values', () => {
    const selectProps = {
      isOpen: true,
    }
    const configProps = {
      options: FOOD_CATEGORIES,
      optGroupLabelField: 'label',
      optGroupOptionsField: 'options',
      optGroup: true,
    }

    render(<Dropdown />, { selectProps, configProps })
    // screen.debug()
    const fruitsLabel = screen.getByText('Fruits')
    const vegetablesLabel = screen.getByText('Vegetables')
    const options = screen.queryAllByRole('option')

    for (let option of options) {
      expect(option.dataset.value).toEqual(option.innerHTML)
    }
    expect(fruitsLabel).toBeInTheDocument()
    expect(vegetablesLabel).toBeInTheDocument()
  })

  it('Should display optgroups of options with values', () => {
    const selectProps = {
      isOpen: true,
    }
    const configProps = {
      options: FOOD_CATEGORIES_CODES,
      optGroupLabelField: 'label',
      optGroupOptionsField: 'options',
      optGroup: true,
      textField: 'text',
      valueField: 'value',
      values: true,
    }

    render(<Dropdown />, { selectProps, configProps })
    // screen.debug()
    const fruitsLabel = screen.getByText('Fruits')
    const vegetablesLabel = screen.getByText('Vegetables')
    const optionApple = screen.getByText('Apple')

    expect(optionApple.dataset.value).toEqual('APL')
    expect(fruitsLabel).toBeInTheDocument()
    expect(vegetablesLabel).toBeInTheDocument()
  })
})
