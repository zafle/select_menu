import CustomSelectMenu from './components/CustomSelectMenu/CustomSelectMenu'
import ConfigSelectForm from './components/ConfigSelectForm/ConfigSelectForm'
import GeneratedCode from './components/GeneratedCode/GeneratedCode'
import ConfigProvider from './contexts/ConfigProvider/ConfigProvider'
import './App.css'

/**
 *
 * @returns Example page for SelectMenu component usage with interactive component design
 */
function App() {
  return (
    <div className="main-container">
      <h1>Interactive example for Select-Menu React component usage</h1>
      <p>This page is an example page.</p>
      <p>
        To see full component&apos;s usage instructions and documentation, or
        install NPM package, visit:{' '}
        <a
          href="http://www.npmjs.com/package/@zafle/select_menu/v/1.0.8"
          target="_blank"
        >
          @zafle/select_menu
        </a>
      </p>

      <h2>Component description</h2>
      <p>The select-menu component displays a customisable select dropdown.</p>
      <h2>Component required props</h2>
      <p>
        The select-menu React component has only one required prop{' '}
        <code className="code-item">option</code>.
      </p>
      <h2>Set & Design your component</h2>
      <p>Set the component&apos;s options and use the generated code below.</p>
      <ConfigProvider>
        <CustomSelectMenu />
        <ConfigSelectForm />
        <GeneratedCode />
      </ConfigProvider>
      <h2>Author</h2>
      <p>Zafle</p>
      <h2>License</h2>
      <p>MIT</p>
    </div>
  )
}

export default App
