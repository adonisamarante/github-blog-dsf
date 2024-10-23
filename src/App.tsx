import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Card } from './components'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <div style={{ padding: '20px' }}>
        <Card />
      </div>
    </ThemeProvider>
  )
}

export default App
