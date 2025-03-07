declare module '@zafle/select_menu' {
  import { CSSProperties } from 'react'
  import { FC } from 'react'

  type OptionWithoutValue = string

  type OptionWithValue = {
    [key: string]: string
  }

  type OptGroupWithoutValue = {
    [key: string]: string
    optionsArray: OptionWithoutValue[]
  }

  type OptGroupWithValue = {
    [key: string]: string
    optionsArray: OptionWithValue[]
  }

  interface SelectMenuProps {
    options:
      | OptionWithoutValue[]
      | OptionWithValue[]
      | OptGroupWithoutValue[]
      | OptGroupWithValue[]
    id?: string
    labelId?: string
    name?: string
    onChangeValue?: (value: string) => void
    selectedOption?: string
    resetToDefault?: boolean
    defaultSelectedOption?: 'first' | string
    textField?: string
    valueField?: string
    optGroupLabelField?: string
    optGroupOptionsField?: string
    dropdownPosition?: 'top'
    boxShadowOnOpen?: boolean
    maxWidth?: CSSProperties['maxWidth']
    border?: CSSProperties['border'] | 'unset'
    borderRadius?: CSSProperties['width'] | 'unset' // single value for border-radius
    containerMargin?: CSSProperties['margin']
    boxShadow?: CSSProperties['boxShadow'] | 'unset'
    colorOnFocus?: 'none' | CSSProperties['color']
    inputHeight?: CSSProperties['height'] | 'unset'
    inputBackground?: CSSProperties['background']
    inputTextColor?: CSSProperties['color']
    inputVerticalPadding?: CSSProperties['paddingTop']
    inputHorizontalPadding?: CSSProperties['paddingTop']
    inputFontSize?: CSSProperties['fontSize']
    dropdownBackground?: CSSProperties['background']
    dropdownMaxHeight?: CSSProperties['maxHeight']
    dropdownVerticalPadding?: CSSProperties['paddingTop']
    optionTextColor?: CSSProperties['color']
    hoveredOptionBackground?: CSSProperties['background']
    hoveredOptionTextColor?: CSSProperties['color']
    optionVerticalPadding?: CSSProperties['paddingTop']
    optionHorizontalPadding?: CSSProperties['paddingTop']
    optionFontSize?: CSSProperties['fontSize']
    optGroupLabelTextColor?: CSSProperties['color']
    optGroupLabelFontSize?: CSSProperties['fontSize']
    optGroupVerticalPadding?: CSSProperties['paddingTop']
    optGroupHorizontalPadding?: CSSProperties['paddingTop']
    optGroupMarginTop?: CSSProperties['marginTop']
  }

  export const SelectMenu: FC<SelectMenuProps>
}
