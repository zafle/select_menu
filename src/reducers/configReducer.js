import {
  optionsOptGroupSnippet,
  optionsOptGroupValuesSnippet,
  optionsSnippet,
  optionsValuesSnippet,
} from '../data/data/codeSnippets'
import {
  COLORS,
  COLORS_CODES,
  FOOD_CATEGORIES,
  FOOD_CATEGORIES_CODES,
} from '../data/mock/optionsMenus'

export function configReducer(config, action) {
  switch (action.type) {
    case 'set_optionsType': {
      let optionsArray
      let options
      let textField
      let valueField
      let optGroupLabelField
      let optGroupOptionsField
      let defaultSelectedOption

      if (action.optionsType === 'options_without_values') {
        optionsArray = optionsSnippet
        options = COLORS
        textField = ''
        valueField = ''
        optGroupLabelField = ''
        optGroupOptionsField = ''
      } else if (action.optionsType === 'options_with_values') {
        optionsArray = optionsValuesSnippet
        options = COLORS_CODES
        textField = 'name'
        valueField = 'code'
        optGroupLabelField = ''
        optGroupOptionsField = ''
      } else if (action.optionsType === 'options_with_optgroups') {
        optionsArray = optionsOptGroupSnippet
        options = FOOD_CATEGORIES
        textField = ''
        valueField = ''
        optGroupLabelField = 'label'
        optGroupOptionsField = 'options'
      } else if (action.optionsType === 'options_with_optgroups_with_values') {
        optionsArray = optionsOptGroupValuesSnippet
        options = FOOD_CATEGORIES_CODES
        textField = 'text'
        valueField = 'value'
        optGroupLabelField = 'label'
        optGroupOptionsField = 'options'
      }

      if (
        config.configProps.defaultSelectedOption === 'first' ||
        config.configProps.defaultSelectedOption === undefined
      ) {
        defaultSelectedOption = config.configProps.defaultSelectedOption
      } else {
        defaultSelectedOption =
          action.optionsType === 'options_without_values' ||
          action.optionsType === 'options_with_values'
            ? 'Green'
            : 'Broccoli'
      }

      return {
        ...config,
        optionsType: action.optionsType,
        optionsArray,
        configProps: {
          ...config.configProps,
          options,
          textField,
          valueField,
          optGroupLabelField,
          optGroupOptionsField,
          defaultSelectedOption,
        },
      }
    }
    case 'set_selected_option': {
      return {
        ...config,
        selectedOption: action.selectedOption,
      }
    }
    case 'controlled': {
      return {
        ...config,
        selectedOption: '',
        configProps: {
          ...config.configProps,
          onChangeValue: action.onChangeValue,
          name: '',
        },
      }
    }
    case 'uncontrolled': {
      return {
        ...config,
        selectedOption: '',
        configProps: {
          ...config.configProps,
          onChangeValue: null,
          name: action.name,
        },
      }
    }
    case 'set_id': {
      if (action.id === '') {
        delete config.configProps.id
        return { ...config }
      } else {
        return {
          ...config,
          configProps: {
            ...config.configProps,
            id: action.id,
          },
        }
      }
    }
    case 'set_labelId': {
      return {
        ...config,
        configProps: {
          ...config.configProps,
          labelId: action.labelId,
        },
      }
    }
    case 'set_defaultSelectedOption': {
      console.log('config.optionsType : ', config.optionsType)

      let defaultSelectedOption

      if (action.defaultSelectedOption === 'custom') {
        defaultSelectedOption =
          config.optionsType === 'options_without_values' ||
          config.optionsType === 'options_with_values'
            ? 'Green'
            : 'Broccoli'
      } else if (action.defaultSelectedOption === 'none') {
        defaultSelectedOption = undefined
      } else {
        defaultSelectedOption = action.defaultSelectedOption
      }

      return {
        ...config,
        configProps: {
          ...config.configProps,
          defaultSelectedOption,
        },
      }
    }

    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}
