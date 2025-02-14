import { render, screen, waitFor } from '@testing-library/react'
import { it, describe, expect } from 'vitest'
import { SelectMenu } from '../SelectMenu'
import { COLORS } from './mocks/data/optionsMock'
import userEvent from '@testing-library/user-event'

describe('Test keyboard navigation', () => {
  describe('When dropdown is closed and user press on Tab', () => {
    it('Should put the focus on SelectInput', async () => {
      const user = userEvent.setup()

      render(<SelectMenu options={COLORS} id="test" />)

      const selectInput = screen.getByTestId('select-input')
      const dropdown = screen.getByTestId('dropdown')

      await user.keyboard(`{Tab}`)
      expect(selectInput).toHaveFocus()
      expect(dropdown).toHaveAttribute('aria-hidden', 'true')
    })
  })

  describe('When SelectInput has Focus and user press on space', () => {
    it('Should open the dropdown', async () => {
      const user = userEvent.setup()

      render(<SelectMenu options={COLORS} id="test" />)

      const dropdown = screen.getByTestId('dropdown')
      const selectInput = screen.getByTestId('select-input')

      await user.keyboard(`{Tab}`)
      expect(selectInput).toHaveFocus()

      await user.keyboard(` `)
      expect(dropdown).toHaveAttribute('aria-hidden', 'false')
    })
  })

  describe('When SelectInput has Focus and user press on enter', () => {
    it('Should open the dropdown', async () => {
      const user = userEvent.setup()

      render(<SelectMenu options={COLORS} id="test" />)

      const dropdown = screen.getByTestId('dropdown')
      const selectInput = screen.getByTestId('select-input')

      await user.keyboard(`{Tab}`)
      expect(selectInput).toHaveFocus()

      await user.keyboard(`{Enter}`)
      expect(dropdown).toHaveAttribute('aria-hidden', 'false')
    })
  })

  describe('When Dropdown is open and first option has Focus and user press on ArrowDown', () => {
    it('Should focus on the next option', async () => {
      const user = userEvent.setup()

      render(<SelectMenu options={COLORS} id="test" />)

      const dropdown = screen.getByTestId('dropdown')
      const selectInput = screen.getByTestId('select-input')

      await user.keyboard(`{Tab}`)
      expect(selectInput).toHaveFocus()

      await user.keyboard(`{Enter}`)
      expect(dropdown).toHaveAttribute('aria-hidden', 'false')

      const options = await screen.findAllByRole('option')
      expect(options[0]).toHaveFocus()

      await user.keyboard(`{ArrowDown}`)
      expect(options[1]).toHaveFocus()
    })
  })

  describe('When Dropdown is open and first option has Focus and user press on ArrowUp', () => {
    it('Should focus on the last option', async () => {
      const user = userEvent.setup()

      render(<SelectMenu options={COLORS} id="test" />)

      const dropdown = screen.getByTestId('dropdown')
      const selectInput = screen.getByTestId('select-input')

      await user.keyboard(`{Tab}`)
      expect(selectInput).toHaveFocus()

      await user.keyboard(`{Enter}`)
      expect(dropdown).toHaveAttribute('aria-hidden', 'false')

      const options = await screen.findAllByRole('option')
      expect(options[0]).toHaveFocus()

      await user.keyboard(`{ArrowUp}`)
      expect(options[4]).toHaveFocus()
    })
  })

  describe('When Dropdown is open and last option has Focus and user press on ArrowDown', () => {
    it('Should focus on the first option', async () => {
      const user = userEvent.setup()

      render(<SelectMenu options={COLORS} id="test" />)

      const dropdown = screen.getByTestId('dropdown')
      const selectInput = screen.getByTestId('select-input')

      await user.keyboard(`{Tab}`)
      expect(selectInput).toHaveFocus()

      await user.keyboard(`{Enter}`)
      expect(dropdown).toHaveAttribute('aria-hidden', 'false')

      const options = await screen.findAllByRole('option')
      expect(options[0]).toHaveFocus()

      await user.keyboard(`{ArrowUp}`)
      expect(options[4]).toHaveFocus()

      await user.keyboard(`{ArrowDown}`)
      expect(options[0]).toHaveFocus()
    })
  })

  describe('When Dropdown is open and first option has Focus and user press on Enter', () => {
    it('Should select first option', async () => {
      const user = userEvent.setup()

      render(
        <SelectMenu options={COLORS} id="test" defaultSelectedOption="first" />
      )

      const selectInput = screen.getByTestId('select-input')
      const dropdown = screen.getByTestId('dropdown')
      const selectedValueInput = screen.getByTestId('selectedValue-input')
      const selectedTextInput = screen.getByTestId('selectedText-input')

      await user.keyboard(`{Tab}`)

      await user.keyboard(`{Enter}`)

      await user.keyboard(`{Enter}`)

      waitFor(() => {
        expect(dropdown).toHaveAttribute('aria-hidden', 'true')
        expect(selectInput).toHaveAttribute(
          'aria-activedescendant',
          'option_0_test'
        )
        expect(selectedValueInput.value).toEqual('Red')
        expect(selectedTextInput).toHaveTextContent('Red')
      })
    })
  })

  describe('When an option is selected and focus is on SelectInput and user press on Tab then Enter', () => {
    it('Should trigger the clear selection event', async () => {
      const user = userEvent.setup()

      render(
        <SelectMenu options={COLORS} id="test" defaultSelectedOption="first" />
      )

      const selectInput = screen.getByTestId('select-input')
      const selectedValueInput = screen.getByTestId('selectedValue-input')
      const selectedTextInput = screen.getByTestId('selectedText-input')
      const clearSelected = screen.getByTestId('clearSelected-button')

      await user.keyboard(`{Tab}`)
      expect(selectInput).toHaveFocus()
      await user.keyboard(`{Tab}`)
      expect(clearSelected).toHaveFocus()
      await user.keyboard(`{Enter}`)

      expect(selectInput).toHaveAttribute('aria-activedescendant', '')
      expect(selectedValueInput.value).toEqual('')
      expect(selectedTextInput).toHaveTextContent('')
    })
  })
})
