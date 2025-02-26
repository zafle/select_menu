import './App.css'
import CustomSelectMenu from './components/CustomSelectMenu/CustomSelectMenu'
import ConfigSelectForm from './components/ConfigSelectForm/ConfigSelectForm'
import GeneratedCode from './components/GeneratedCode/GeneratedCode'
import ConfigProvider from './contexts/ConfigProvider/ConfigProvider'

function App() {
  return (
    <div className="main-container">
      <h1>Interactive example for select-menu React component usage</h1>
      <p>
        This page is an example page. To see full component&apos;s instructions,
        please visit :
      </p>
      <h2>Component description</h2>
      <p>The select-menu component displays a customisable select dropdown.</p>
      <h2>Component required props</h2>
      <p>
        The select-menu React component has only one required prop{' '}
        <code className="code-item">option</code>.
      </p>
      <h2>Design your component</h2>
      <p>Set the component&apos;s options and use the generated code below.</p>
      <ConfigProvider>
        <CustomSelectMenu />
        <ConfigSelectForm />
        <GeneratedCode />
      </ConfigProvider>
    </div>
  )
}

export default App
