[![Coverage Status](https://coveralls.io/repos/github/zafle/select_menu/badge.svg)](https://coveralls.io/github/zafle/select_menu)

# Select_Menu React component

A very easy to use and customisable React select dropdown

## Features

- [Different types of options data](###-different-types-of-options-datas) :

  - array of options with or without values
  - array of optgroup with labels

- [Controlled form and uncontrolled form](###-controlled-and-uncontrolled-forms)

  - handles a custom onChange function to get the selected option's value
  - handles the select native HTML behaviour

- [Label and SelectMenu component link](###-label-and-selectmenu-component-link)

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

To use an array of options with values, use **textField** and **valueField** props.

```jsx
const options = [{option: "Blue", code: 01}, {option: "Red", code: 02}]

<SelectMenu options={options} textField="option" valueField="code" />
```

- #### Options with optGroups

To use an array of options with optGroups, use **optGroupLabelField** and **optGroupOptionsField** props.

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

To use an array of options with optGroups and values, use **optGroupLabelField**, **optGroupOptionsField**, **textField** and **valueField** props.

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

To use the SelectMenu component in a controlled form, use **onChangeValue** prop.

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

To use SelectMenu in an uncontrolled form, use **name** prop.

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

**For a full accessible experience** set the **labelId** prop accordingly to the _id_ attribute of the <label> tag to enable the aria-labelledBy attribute to be efficient.

```jsx
const options = ['Blue', 'Yellow', 'Green', 'Red', 'Purple']

<label id="color-select-label">Choose a color</label>
<SelectMenu options={options} labelId="color-select-label" />

```

## Props component

| Prop                      | Type     | Value example(s)                                                                   | Default value                         | Description                                                                                                                                                                                                     |
| :------------------------ | :------- | :--------------------------------------------------------------------------------- | :------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| options                   | Array    | [See the different types of options data](###-different-types-of-options-datas)    | none                                  | Reduired</br>Array of options to display in the dropdown menu.                                                                                                                                                  |
| onChangeValue             | Function | [See Controlled Form](####-controlled-form)                                        | null                                  | Callback function triggered when an option is selected.</br>The returned value is the selected option's value.                                                                                                  |
| name                      | string   | [See Uncontrolled Form](####-uncontrolled-form)                                    | _none_                                | Gives a name attribute to the input that will</br>stock the value of the selected option.                                                                                                                       |
| textField                 | string   | [See Options with values](####-options-with-values)                                | _none_                                | The property name in the options array for the option's</br>text to display. Use if the value option is different from</br>the the text option.</br>**NOTE: textField prop must be used with valueField prop.** |
| valueField                | string   | [See Options with values](####-options-with-values)                                | _none_                                | The property name in the options array for the option's</br>value. Use if the value option is different from the the text option.</br>**NOTE: textField prop must be used with valueField prop.**               |
| optGroupLabelField        | string   | [See Options with optGroups](####-options-with-optGroups)                          | _none_                                | The property name in the options array for the optGroup label.</br>**NOTE: optGroupLabelField prop</br>must be used with optGroupOptionsField prop.**                                                           |
| optGroupOptionsField      | string   | [See Options with optGroups](####-options-with-optGroups)                          | _none_                                | The property name in the options array for the optGroup options.</br>**NOTE: optGroupLabelField prop</br>must be used with optGroupOptionsField prop.**                                                         |
| id                        | string   | [See Label and SelectMenu component link](###-label-and-selectmenu-component-link) | nanoid()                              | Gives a custom id attribute to the input that stocks</br>the selected option value.                                                                                                                             |
| labelId                   | string   | [See Accessibility](###-accessibility)                                             | none                                  | Enables the input's aria-labelledBy attribute that stocks</br>the selected option value to be efficient.                                                                                                        |
| defaultSelectedOption     | string   | "text_of_the_option_to_select_by_default"</br>or "first" for first option          | undefined                             | Sets a default selected option.                                                                                                                                                                                 |
| maxWidth                  | string   | "200px"</br>"50%"...                                                               | "250px"                               | Gives the max-width css property for the whole component.                                                                                                                                                       |
| border                    | string   | "unset" for no border</br>"2px solid blue" any custom css                          | "1px solid #2b2b2b"                   | Sets the border css property for the whole component.                                                                                                                                                           |
| borderRadius              | string   | "unset" for no border-radius</br>"10px" any custom css                             | "4px"                                 | Sets the border-radius for the component.                                                                                                                                                                       |
| containerMargin           | string   | Any valid CSS margin value</br>(e.g., "10px", "1em", "0 auto")                     | "0"                                   | Defines the margin around the component.                                                                                                                                                                        |
| boxShadow                 | string   | "unset" for no shadow</br>"4px 4px 10px black" any custom css                      | "4px 4px 10px</br>rgba(0, 0, 0, 0.4)" | Sets the box-shadow of the component.                                                                                                                                                                           |
| boxShadowOnOpen           | boolean  | `true` = only when dropdown is open</br>`false` = always visible                   | `false`                               | Defines if the shadow appears only when the dropdown is open.                                                                                                                                                   |
| colorOnFocus              | string   | "none" for no color on focus</br>"default" for browser default</br>Custom color    | "default"                             | Defines the focus color behavior.                                                                                                                                                                               |
| inputHeight               | string   | Any valid CSS height value</br>(e.g., "40px", "auto", "unset")                     | "unset"                               | Sets the height of the select input.                                                                                                                                                                            |
| inputBackground           | string   | Any valid CSS background value                                                     | "#d5d5d5"                             | Defines the background of the input.                                                                                                                                                                            |
| inputTextColor            | string   | Any valid CSS color                                                                | "inherit"                             | Sets the text color inside the input.                                                                                                                                                                           |
| inputVerticalPadding      | string   | Any valid CSS padding value                                                        | "8px"                                 | Sets the vertical padding inside the input.                                                                                                                                                                     |
| inputHorizontalPadding    | string   | Any valid CSS padding value                                                        | "10px"                                | Sets the horizontal padding inside the input.                                                                                                                                                                   |
| inputFontSize             | string   | Any valid CSS font-size value</br>(e.g., "14px", "1rem")                           | "16px"                                | Defines the font size of the text inside the input.                                                                                                                                                             |
| dropdownBackground        | string   | Any valid CSS background value                                                     | "white"                               | Sets the background of the dropdown menu.                                                                                                                                                                       |
| dropdownMaxHeight         | string   | Any valid CSS max-height value</br>(e.g., "300px", "unset")                        | "unset"                               | Defines the maximum height of the dropdown menu.                                                                                                                                                                |
| dropdownVerticalPadding   | string   | Any valid CSS padding value                                                        | "8px"                                 | Sets the vertical padding inside the dropdown.                                                                                                                                                                  |
| dropdownPosition          | string   | "bottom" or "top"                                                                  | "bottom"                              | Defines whether the dropdown opens above or below the input.                                                                                                                                                    |
| optionTextColor           | string   | Any valid CSS color                                                                | "inherit"                             | Sets the text color of options in the dropdown.                                                                                                                                                                 |
| hoveredOptionBackground   | string   | Any valid CSS background value                                                     | "#484848"                             | Defines the background of a hovered option.                                                                                                                                                                     |
| hoveredOptionTextColor    | string   | Any valid CSS color                                                                | "white"                               | Defines the text color of a hovered option.                                                                                                                                                                     |
| optionVerticalPadding     | string   | Any valid CSS padding value                                                        | "4px"                                 | Sets the vertical padding of options.                                                                                                                                                                           |
| optionHorizontalPadding   | string   | Any valid CSS padding value                                                        | "14px"                                | Sets the horizontal padding of options.                                                                                                                                                                         |
| optionFontSize            | string   | Any valid CSS font-size value                                                      | "14px"                                | Defines the font size of options.                                                                                                                                                                               |
| optGroupLabelTextColor    | string   | Any valid CSS color                                                                | "inherit"                             | Sets the text color of optgroup labels.                                                                                                                                                                         |
| optGroupLabelFontSize     | string   | Any valid CSS font-size value                                                      | "16px"                                | Defines the font size of optgroup labels.                                                                                                                                                                       |
| optGroupVerticalPadding   | string   | Any valid CSS padding value                                                        | "4px"                                 | Sets the vertical padding of optgroup labels.                                                                                                                                                                   |
| optGroupHorizontalPadding | string   | Any valid CSS padding value                                                        | "10px"                                | Sets the horizontal padding of optgroup labels.                                                                                                                                                                 |
| optGroupMarginTop         | string   | Any valid CSS margin value                                                         | "2px"                                 | Defines the top margin of optgroup labels.                                                                                                                                                                      |

## License

MIT

## Author

Zafle
