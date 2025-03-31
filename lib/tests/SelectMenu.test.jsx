import { render, screen, waitFor } from '@testing-library/react'
import { it, describe, expect } from 'vitest'
import { SelectMenu } from '../SelectMenu'
import { COLORS } from './mocks/data/optionsMock'
import userEvent from '@testing-library/user-event'

describe('Integration test for SelectMenu component', () => {
  it('Should render the SelectInput and the hidden Dropdown', () => {
    render(<SelectMenu options={COLORS} />)

    const selectInput = screen.getByTestId('select-input')
    const dropdown = screen.getByTestId('dropdown')

    expect(selectInput).toBeInTheDocument()
    expect(dropdown).toBeInTheDocument()
    expect(dropdown).toHaveAttribute('aria-hidden', 'true')
  })

  describe('When user click on SelectInput', () => {
    it('Should open Dropdown', async () => {
      const user = userEvent.setup()

      render(<SelectMenu options={COLORS} />)

      const selectInput = screen.getByTestId('select-input')
      const dropdown = screen.getByTestId('dropdown')

      await user.click(selectInput)

      expect(dropdown).toHaveAttribute('aria-hidden', 'false')
    })
  })

  describe('Test default selected option', () => {
    describe('When default selected option is not set', () => {
      it('Should not display a default selected option', () => {
        render(<SelectMenu options={COLORS} />)

        const selectInput = screen.getByTestId('select-input')
        const selectedValueInput = screen.getByTestId('selectedValue-input')
        const selectedTextInput = screen.getByTestId('selectedText-input')

        expect(selectInput).toHaveAttribute('aria-activedescendant', '')
        expect(selectedValueInput.value).toEqual('')
        expect(selectedTextInput).toHaveTextContent('')
      })
    })

    describe('When a custom default selected option is set', () => {
      it('Should display a custom default selected option', () => {
        render(
          <SelectMenu
            options={COLORS}
            defaultSelectedOption="Purple"
            id="test"
          />
        )

        const selectInput = screen.getByTestId('select-input')
        const selectedValueInput = screen.getByTestId('selectedValue-input')
        const selectedTextInput = screen.getByTestId('selectedText-input')

        expect(selectInput).toHaveAttribute(
          'aria-activedescendant',
          'option_4_test'
        )
        expect(selectedValueInput.value).toEqual('Purple')
        expect(selectedTextInput).toHaveTextContent('Purple')
      })
    })
    describe('When the default selected option is set to first', () => {
      it('Should display first option as default selected option', () => {
        render(
          <SelectMenu
            options={COLORS}
            defaultSelectedOption="first"
            id="test"
          />
        )

        const selectInput = screen.getByTestId('select-input')
        const selectedValueInput = screen.getByTestId('selectedValue-input')
        const selectedTextInput = screen.getByTestId('selectedText-input')

        expect(selectInput).toHaveAttribute(
          'aria-activedescendant',
          'option_0_test'
        )
        expect(selectedValueInput.value).toEqual('Red')
        expect(selectedTextInput).toHaveTextContent('Red')
      })
    })
  })

  describe('When user click on the Blue option', () => {
    it('Should select the Blue option', async () => {
      const user = userEvent.setup()

      render(<SelectMenu options={COLORS} id="test" />)

      const selectInput = screen.getByTestId('select-input')
      const selectedValueInput = screen.getByTestId('selectedValue-input')

      await user.click(selectInput)

      const optionBlue = await screen.findByText('Blue')

      await user.click(optionBlue)

      await waitFor(() => {
        expect(selectInput).toHaveAttribute(
          'aria-activedescendant',
          'option_1_test'
        )
        expect(selectedValueInput.value).toEqual('Blue')
        expect(optionBlue).toHaveAttribute('aria-selected', 'true')
      })
    })
  })

  describe('When user hovers on an option', () => {
    it('Should put the focus on hovered option', async () => {
      const user = userEvent.setup()

      render(<SelectMenu options={COLORS} id="test" />)

      const selectInput = screen.getByTestId('select-input')

      await user.click(selectInput)

      const options = await screen.findAllByRole('option')

      for (let i = 0; i < options.length; i++) {
        await user.hover(options[i])
        expect(options[i]).toHaveFocus()
      }
    })
  })

  describe('When user clicks on clear selected option', () => {
    it('Should clear the selected option', async () => {
      const user = userEvent.setup()

      render(<SelectMenu options={COLORS} id="test" />)

      const selectInput = screen.getByTestId('select-input')
      const selectedValueInput = screen.getByTestId('selectedValue-input')
      const clearSelected = screen.getByTestId('clearSelected-button')

      await user.click(selectInput)

      const optionBlue = await screen.findByText('Blue')

      await user.click(optionBlue)
      await user.click(clearSelected)

      await waitFor(() => {
        expect(selectInput).toHaveAttribute('aria-activedescendant', '')
        expect(selectedValueInput.value).toEqual('')
        expect(optionBlue).toHaveAttribute('aria-selected', 'false')
      })
    })
  })
})
