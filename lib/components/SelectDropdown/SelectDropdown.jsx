import SelectContextProvider from './context/SelectContextProvider/SelectContextProvider'
import ConfigContextProvider from './context/ConfigContextProvider/ConfigContextprovider'
import SelectComponent from './components/SelectComponent/SelectComponent'

export function SelectDropdown(props) {
  return (
    <SelectContextProvider>
      <ConfigContextProvider>
        <SelectComponent props={props} />
      </ConfigContextProvider>
    </SelectContextProvider>
  )
}
// SelectMenu.propTypes = {
//   props: PropTypes.shape({
//     id: PropTypes.string,
//     name: PropTypes.string,
//     options: PropTypes.array.isRequired,
//     values: PropTypes.bool,
//     optGroup: PropTypes.bool,
//     onChange: PropTypes.func,
//   }),
// }
// SelectMenu.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   options: PropTypes.arrayOf(
//     PropTypes.oneOfType([
//       // options without values
//       PropTypes.string,
//       // options with values
//       PropTypes.shape({
//         text: PropTypes.string,
//         value: PropTypes.string,
//       }),
//       // optgroups without values
//       PropTypes.shape({
//         label: PropTypes.string,
//         options: PropTypes.arrayOf(PropTypes.string),
//       }),
//       //optgroup with values
//       PropTypes.shape({
//         label: PropTypes.string,
//         options: PropTypes.arrayOf(
//           PropTypes.shape({
//             text: PropTypes.string,
//             value: PropTypes.string,
//           })
//         ),
//       }),
//     ])
//   ).isRequired,
//   values: PropTypes.bool,
//   optGroup: PropTypes.bool,
//   onChange: PropTypes.func.isRequired,
//   defaultSelectValue: PropTypes.string,
// }
