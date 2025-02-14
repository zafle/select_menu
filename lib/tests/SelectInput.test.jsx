import { screen } from '@testing-library/react'
import { it, describe, expect } from 'vitest'
import { render } from './mocks/contextMock/baseContextRender'
import SelectInput from '../components/SelectInput/SelectInput'
import { COLORS } from './mocks/data/optionsMock'

describe('Test SelectInput', () => {
  it('Should display an empty selected option', () => {
    const selectProps = {}
    const configProps = {
      options: COLORS,
    }

    render(<SelectInput />, { selectProps, configProps })
    const selectInput = screen.getByTestId('select-input')
    const selectedValueInput = screen.getByTestId('selectedValue-input')
    const selectedTextInput = screen.getByTestId('selectedText-input')
    expect(selectInput).toBeInTheDocument()
    expect(selectedValueInput.value).toBe('')
    expect(selectedTextInput).toHaveTextContent('')
  })

  it('Should display a selected option', () => {
    const selectProps = {
      selected: {
        id: '',
        text: 'France',
        value: 'France',
        index: '',
      },
    }

    const configProps = {
      options: COLORS,
      defaultSelectedOption: 'France',
    }
    render(<SelectInput />, { selectProps, configProps })
    const selectInput = screen.getByTestId('select-input')
    const selectedValueInput = screen.getByTestId('selectedValue-input')
    const selectedTextInput = screen.getByTestId('selectedText-input')
    expect(selectInput).toBeInTheDocument()
    expect(selectedValueInput.value).toBe('France')
    expect(selectedTextInput).toHaveTextContent('France')
  })
})
