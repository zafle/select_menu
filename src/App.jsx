import './App.css'
import CustomSelectMenu from './components/CustomSelectMenu/CustomSelectMenu'
import ConfigSelectForm from './components/ConfigSelectForm/ConfigSelectForm'
import GeneratedCode from './components/GeneratedCode/GeneratedCode'
import ConfigProvider from './contexts/ConfigProvider/ConfigProvider'

function App() {
  return (
    <div className="main-container">
      <h1>Examples for select-menu React component usage</h1>
      <p>
        This page is an examples page. To see full component&apos;s
        instructions, please visit :
      </p>
      <h2>Description</h2>
      <p>The select-menu component displays a customisable select dropdown.</p>
      <h2>Required props</h2>
      <p>
        The select-menu React component has only one required prop{' '}
        <code className="code-item">option</code>.
      </p>
      <ConfigProvider>
        <CustomSelectMenu />
        <ConfigSelectForm />
        <GeneratedCode />
      </ConfigProvider>
    </div>
  )
}

export default App
