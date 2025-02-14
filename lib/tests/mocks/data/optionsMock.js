// Datas for Select Menu options

// Options without values (Colors)
export const COLORS = ['Red', 'Blue', 'Green', 'Yellow', 'Purple']

// Options with values (Colors)
export const COLORS_CODES = [
  { name: 'Red', code: '#FF0000' },
  { name: 'Blue', code: '#0000FF' },
  { name: 'Green', code: '#008000' },
  { name: 'Yellow', code: '#FFFF00' },
  { name: 'Purple', code: '#800080' },
]

// OptGroups without values (Fruits & Vegetables)
export const FOOD_CATEGORIES = [
  {
    label: 'Fruits',
    options: ['Apple', 'Banana', 'Cherry'],
  },
  {
    label: 'Vegetables',
    options: ['Carrot', 'Broccoli', 'Spinach'],
  },
]

// OptGroups with values (Fruits & Vegetables)
export const FOOD_CATEGORIES_CODES = [
  {
    label: 'Fruits',
    options: [
      { text: 'Apple', value: 'APL' },
      { text: 'Banana', value: 'BAN' },
      { text: 'Cherry', value: 'CHR' },
    ],
  },
  {
    label: 'Vegetables',
    options: [
      { text: 'Carrot', value: 'CRT' },
      { text: 'Broccoli', value: 'BRC' },
      { text: 'Spinach', value: 'SPN' },
    ],
  },
]
