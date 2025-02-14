import { screen } from '@testing-library/react'
import { it, describe, expect } from 'vitest'
import { render } from './mocks/contextMock/baseContextRender'
import OptGroups from '../components/OptGroups/OptGroups'
import { FOOD_CATEGORIES } from './mocks/data/optionsMock'

describe('Test OptGroups startIndex', () => {
  it('Should display correct startIndex', () => {
    const selectProps = {
      isOpen: true,
    }
    const configProps = {
      options: FOOD_CATEGORIES,
      optGroupOptionsField: 'options',
      id: 'test',
    }
    render(<OptGroups />, { selectProps, configProps })
    // screen.debug()
    const options = screen.queryAllByRole('option')
    for (let i = 0; i < options.length; i++) {
      expect(options[i].id).toEqual(`option_${i}_test`)
    }
  })
})
