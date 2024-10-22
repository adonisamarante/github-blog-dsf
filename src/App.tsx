import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Link } from './components'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <div>
        <Link title="Label" url="http://google.com" />
      </div>
    </ThemeProvider>
  )
}

export default App
