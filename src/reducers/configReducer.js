import { defaultConfigOptions } from '../contexts/defaultConfigOptions'
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

/**
 *
 * @param {Object} config current context value
 * @param {Object} action dispatched action to update state
 * @returns updated context value
 */
export function configReducer(config, action) {
  // Config to use when update options type
  const optionsConfigMap = {
    options_without_values: {
      optionsArray: optionsSnippet,
      configProps: {
        options: COLORS,
        textField: '',
        valueField: '',
        optGroupLabelField: '',
        optGroupOptionsField: '',
      },
      defaultSelectedOption: 'Green',
    },
    options_with_values: {
      optionsArray: optionsValuesSnippet,
      configProps: {
        options: COLORS_CODES,
        textField: 'name',
        valueField: 'code',
        optGroupLabelField: '',
        optGroupOptionsField: '',
      },
      defaultSelectedOption: 'Green',
    },
    options_with_optgroups: {
      optionsArray: optionsOptGroupSnippet,
      configProps: {
        options: FOOD_CATEGORIES,
        textField: '',
        valueField: '',
        optGroupLabelField: 'label',
        optGroupOptionsField: 'options',
      },
      defaultSelectedOption: 'Broccoli',
    },
    options_with_optgroups_with_values: {
      optionsArray: optionsOptGroupValuesSnippet,
      configProps: {
        options: FOOD_CATEGORIES_CODES,
        textField: 'text',
        valueField: 'value',
        optGroupLabelField: 'label',
        optGroupOptionsField: 'options',
      },
      defaultSelectedOption: 'Broccoli',
    },
  }

  switch (action.type) {
    case 'set_optionsType': {
      const optionsConfig = optionsConfigMap[action.optionsType]
      const defaultSelectedOption =
        config.configProps.defaultSelectedOption !== 'first' &&
        config.configProps.defaultSelectedOption !== undefined
          ? optionsConfig.defaultSelectedOption
          : config.configProps.defaultSelectedOption

      return {
        ...config,
        optionsType: action.optionsType,
        optionsArray: optionsConfig.optionsArray,
        configProps: {
          ...config.configProps,
          ...optionsConfig.configProps,
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
        return {
          ...config,
          configProps: {
            ...config.configProps,
          },
        }
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

    case 'set_dropdownPosition': {
      return {
        ...config,
        configProps: {
          ...config.configProps,
          dropdownPosition: action.dropdownPosition,
        },
      }
    }

    case 'set_boxShadowOnOpen': {
      return {
        ...config,
        configProps: {
          ...config.configProps,
          boxShadowOnOpen: action.boxShadowOnOpen,
        },
      }
    }

    case 'set_css': {
      const propName = action.propName
      return {
        ...config,
        configProps: {
          ...config.configProps,
          [propName]:
            action.value !== '' ? action.value : defaultConfigOptions[propName],
        },
      }
    }

    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}
