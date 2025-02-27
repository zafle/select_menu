[![Coverage Status](https://coveralls.io/repos/github/zafle/select_menu/badge.svg)](https://coveralls.io/github/zafle/select_menu)

# Select_Menu React component

A very easy to use and customisable React select dropdown

## Features

- [Different types of options data](#different-types-of-options-datas) :

  - array of options with or without values
  - array of optgroup with labels

- [Controlled form and uncontrolled form](#controlled-and-uncontrolled-forms)

  - handles a custom onChange function to get the selected option's value
  - handles the select native HTML behaviour

- [Label and SelectMenu component link](#label-and-selectmenu-component-link)

  - link your select label with the SelectMenu component

- Accessibility

  - aria attributes
  - 100% control with keyboard

- Default selected option

  - a default selected option can be set

- Clear selection

  - displays a button to clear the selected option

- Dropdown position

  - dropdown can display eather on bottom or top of the select input

- Stylable component
  - via props
  - via external CSS

## Installation

> `npm i @zafle/select_menu`

## Basic usage

### Import SelectMenu component

`import { SelectMenu } from "@zafle/select_menu"`

### Use

The only required prop is **options** for a basic usage.

```jsx
const options = ["Blue", "Yellow", "Green", "Red", "Purple"]

<SelectMenu options={options} />
```

## Advanced usage

### Different types of options datas

- #### Options with values

To use an array of options with values, use `textField` and `valueField` props.

```jsx
const options = [{option: "Blue", code: 01}, {option: "Red", code: 02}]

<SelectMenu options={options} textField="option" valueField="code" />
```

- #### Options with optGroups

To use an array of options with optGroups, use `optGroupLabelField` and `optGroupOptionsField` props.

```jsx
const options = [
{
  label: "Fruits",
  options: ["Apple","Banana","Orange"]
},
{
  label: "Vegetables",
  options: ["Bean","Pea","Leek"]
}
]

<SelectMenu options={options} optGroupLabelField="label" optGroupOptionsField="options" />
```

- #### Options with optGroups and values

To use an array of options with optGroups and values, use `optGroupLabelField`, `optGroupOptionsField`, `textField` and `valueField` props.

```jsx
const options = [
{
  label: "Fruits",
  options: [
    {option: "Apple", id: "F1"},
    {option: "Banana", id: "F2"},
    {option: "Orange", id: "F3"},
  ]
},
{
  label: "Vegetables",
  options: [
    {option: "Bean", id: "V1"},
    {option: "Pea", id: "V2"},
    {option: "Leek", id: "V3"},
  ]
}
]

<SelectMenu
  options={options}
  optGroupLabelField="label"
  optGroupOptionsField="options"
  textField="option"
  valueField="id"
/>
```

### Controlled and uncontrolled Forms

- #### Controlled Form

To use the SelectMenu component in a controlled form, use `onChangeValue` prop.

```jsx
const [selectedValue, setSelectedValue] = useState('')

const options = ['Blue', 'Yellow', 'Green', 'Red', 'Purple']

const handleChange = (option) => {
  setSelectedValue(option)
}

return (
  <>
    <p>The selected option is {selectedValue} </p>
    <SelectMenu options={options} onChangeValue={handleChange} />
  </>
)
```

- #### Uncontrolled Form

To use SelectMenu in an uncontrolled form, use `name` prop.

```jsx
const [formData, setFormData] = useState('')

const options = ['Blue', 'Yellow', 'Green', 'Red', 'Purple']

const getFormData = (e) => {
  e.preventDefault()
  setFormData(e.target.color.value)
}

return (
  <>
    <p>The selected option is {formData} </p>
    <form
      onSubmit={(e) => {
        getFormData(e)
      }}
    >
      <SelectMenu options={options} name="color" />
      <button type="submit">Validate</button>
    </form>
  </>
)
```

### Label and SelectMenu component link

To link your `<label>` tag to the SelectMenu component, use `id` prop, and set `htmlFor` attribute in your `<label>` tag accordingly.
This will allow a click event on the label to trigger the opening of the SelectMenu dropdown.

```jsx
const options = ['Blue', 'Yellow', 'Green', 'Red', 'Purple']

<label htmlFor="color-select">Choose a color</label>
<SelectMenu options={options} id="color-select" />

```

### Accessibility

**SelectMenu is set to display all necessary aria attributes.**
The whole component and its functionalities can be controlled with keyboard (tab and arrows).

**For a full accessible experience** set the `labelId` prop accordingly to the `id` attribute of the `<label>` tag to enable the aria-labelledBy attribute to be efficient.

```jsx
const options = ['Blue', 'Yellow', 'Green', 'Red', 'Purple']

<label id="color-select-label">Choose a color</label>
<SelectMenu options={options} labelId="color-select-label" />

```

## Props component

| Prop                                                                              | Description                                                                                                                                                                     | Value example(s)                                                            |
| :-------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------- |
| **options**</br>_type: Array_</br>_default: none_                                 | **Required**</br>Array of options to display in the dropdown menu.                                                                                                              | [Different types of options data](#different-types-of-options-datas)        |
| **onChangeValue**</br>_type: Function_</br>_default: null_                        | Callback function triggered when an option is selected. The returned value is the selected option's value.                                                                      | [Controlled Form](#controlled-form)                                         |
| **name**</br>_type: string_</br>_default: none_                                   | Gives a name attribute to the input that will stock the value of the selected option.                                                                                           | [Uncontrolled Form](#uncontrolled-form)                                     |
| **textField**</br>_type: string_</br>_default: none_                              | The property name in the options array for the option's text to display. Use if the value option is different from the text option.</br>**NOTE: Must be used with valueField.** | [Options with values](#options-with-values)                                 |
| **valueField**</br>_type: string_</br>_default: none_                             | The property name in the options array for the option's value. Use if the value option is different from the text option.</br>**NOTE: Must be used with textField.**            | [Options with values](#options-with-values)                                 |
| **optGroupLabelField**</br>_type: string_</br>_default: none_                     | The property name in the options array for the optGroup label.</br>**NOTE: Must be used with optGroupOptionsField.**                                                            | [Options with optGroups](#options-with-optGroups)                           |
| **optGroupOptionsField**</br>_type: string_</br>_default: none_                   | The property name in the options array for the optGroup options.</br>**NOTE: Must be used with optGroupLabelField.**                                                            | [Options with optGroups](#options-with-optGroups)                           |
| **id**</br>_type: string_</br>_default: nanoid()_                                 | Gives a custom id attribute to the input that stocks the selected option value.                                                                                                 | [Label and SelectMenu component link](#label-and-selectmenu-component-link) |
| **labelId**</br>_type: string_</br>_default: none_                                | Enables the input's aria-labelledBy attribute that stocks the selected option value to be efficient.                                                                            | [Accessibility](#accessibility)                                             |
| **defaultSelectedOption**</br>_type: string_</br>_default: undefined_             | Sets a default selected option.                                                                                                                                                 | "option_text" or "first" for first option                                   |
| **maxWidth**</br>_type: string_</br>_default: "250px"_                            | Gives the max-width CSS property for the whole component.                                                                                                                       | "200px", "50%"                                                              |
| **border**</br>_type: string_</br>_default: "1px solid #2b2b2b"_                  | Sets the border CSS property for the whole component.                                                                                                                           | "unset" for no border, "2px solid blue"                                     |
| **borderRadius**</br>_type: string_</br>_default: "4px"_                          | Sets the border-radius for the component.                                                                                                                                       | "unset" for no border-radius, "10px" (single value required)                |
| **containerMargin**</br>_type: string_</br>_default: "0"_                         | Defines the margin around the component.                                                                                                                                        | Any valid CSS margin value ("10px", "1em", "0 auto")                        |
| **boxShadow**</br>_type: string_</br>_default: "4px 4px 10px rgba(0, 0, 0, 0.4)"_ | Sets the box-shadow of the component.                                                                                                                                           | "unset" for no shadow, "4px 4px 10px black"                                 |
| **boxShadowOnOpen**</br>_type: boolean_</br>_default: false_                      | Defines if the shadow appears only when the dropdown is open.                                                                                                                   | `true` = only when dropdown is open, `false` = always visible               |
| **colorOnFocus**</br>_type: string_</br>_default: "default"_                      | Defines the focus color behavior.                                                                                                                                               | "none" for no color on focus, "default" for browser default, Custom color   |
| **inputHeight**</br>_type: string_</br>_default: "unset"_                         | Sets the height of the select input.                                                                                                                                            | Any valid CSS height value ("40px", "auto", "unset")                        |
| **inputBackground**</br>_type: string_</br>_default: "#d5d5d5"_                   | Defines the background of the input.                                                                                                                                            | Any valid CSS background value                                              |
| **inputTextColor**</br>_type: string_</br>_default: "inherit"_                    | Sets the text color inside the input.                                                                                                                                           | Any valid CSS color                                                         |
| **inputVerticalPadding**</br>_type: string_</br>_default: "8px"_                  | Sets the vertical padding inside the input.                                                                                                                                     | Any valid CSS padding value                                                 |
| **inputHorizontalPadding**</br>_type: string_</br>_default: "10px"_               | Sets the horizontal padding inside the input.                                                                                                                                   | Any valid CSS padding value                                                 |
| **inputFontSize**</br>_type: string_</br>_default: "16px"_                        | Defines the font size of the text inside the input.                                                                                                                             | Any valid CSS font-size value ("14px", "1rem")                              |
| **dropdownBackground**</br>_type: string_</br>_default: "white"_                  | Sets the background of the dropdown menu.                                                                                                                                       | Any valid CSS background value                                              |
| **dropdownMaxHeight**</br>_type: string_</br>_default: "unset"_                   | Defines the maximum height of the dropdown menu.                                                                                                                                | Any valid CSS max-height value ("300px", "unset")                           |
| **dropdownVerticalPadding**</br>_type: string_</br>_default: "8px"_               | Sets the vertical padding inside the dropdown.                                                                                                                                  | Any valid CSS padding value                                                 |
| **dropdownPosition**</br>_type: string_</br>_default: "bottom"_                   | Defines whether the dropdown opens above or below the input.                                                                                                                    | "bottom" or "top"                                                           |
| **optionTextColor**</br>_type: string_</br>_default: "inherit"_                   | Sets the text color of options in the dropdown.                                                                                                                                 | Any valid CSS color                                                         |
| **hoveredOptionBackground**</br>_type: string_</br>_default: "#484848"_           | Defines the background of a hovered option.                                                                                                                                     | Any valid CSS background value                                              |
| **hoveredOptionTextColor**</br>_type: string_</br>_default: "white"_              | Defines the text color of a hovered option.                                                                                                                                     | Any valid CSS color                                                         |
| **optionVerticalPadding**</br>_type: string_</br>_default: "4px"_                 | Sets the vertical padding of options.                                                                                                                                           | Any valid CSS padding value                                                 |
| **optionHorizontalPadding**</br>_type: string_</br>_default: "14px"_              | Sets the horizontal padding of options.                                                                                                                                         | Any valid CSS padding value                                                 |
| **optionFontSize**</br>_type: string_</br>_default: "14px"_                       | Defines the font size of options.                                                                                                                                               | Any valid CSS font-size value                                               |
| **optGroupLabelTextColor**</br>_type: string_</br>_default: "inherit"_            | Sets the text color of optgroup labels.                                                                                                                                         | Any valid CSS color                                                         |
| **optGroupLabelFontSize**</br>_type: string_</br>_default: "16px"_                | Defines the font size of optgroup labels.                                                                                                                                       | Any valid CSS font-size value                                               |
| **optGroupVerticalPadding**</br>_type: string_</br>_default: "4px"_               | Sets the vertical padding of optgroup labels.                                                                                                                                   | Any valid CSS padding value                                                 |
| **optGroupHorizontalPadding**</br>_type: string_</br>_default: "10px"_            | Sets the horizontal padding of optgroup labels.                                                                                                                                 | Any valid CSS padding value                                                 |
| **optGroupMarginTop**</br>_type: string_</br>_default: "2px"_                     | Defines the top margin of optgroup labels.                                                                                                                                      | Any valid CSS margin value                                                  |

## License

MIT

## Author

Zafle
